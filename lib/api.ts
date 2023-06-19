import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'

// MDX related
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'
import rehypePrism from 'rehype-prism-plus'
import { MDXRemote } from 'next-mdx-remote'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  /* Read .mdx files from postsDirectory and returns the slugs*/

  // Only read through .mdx files!
  let files = fs.readdirSync(postsDirectory);
  let slugs = files
    .filter((file) => {
      return path.extname(file) === ".mdx";
    })
    .map((file) => {
      return file.replace(/\.mdx$/, "");
    });

  return slugs;
}

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Only serialize when necessary
  let mdxSource;
  if (fields.includes('mdxSource')) {
    mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [rehypeKatex, [rehypePrism, { ignoreMissing: true }]]
      }
    })
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'mdxSource' && mdxSource) {
      items[field] = mdxSource
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]

      if (field === 'date' && typeof data[field] !== 'string') {
        items[field] = data[field].toISOString()
      }
    }
  })

  return items
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();

  // NOTE: I guess this is not a good idea?
  // /pages/posts/index.tsx uses getAllPosts function, but it shouldn't need
  // to access all the article contents.
  const postPromises = slugs.map((slug) => getPostBySlug(slug, fields));
  const posts = await Promise.all(postPromises);
  // sort posts by date in descending order
  return posts.sort((post1, post2) => {
    if (!post1.date) {
      return 1;
    }
    if (!post2.date) {
      return -1;
    }
    return post1.date > post2.date ? -1 : 1;
  });
}

// export async function getAllPosts(fields: string[] = []) {
//   const slugs = await getPostSlugs();
//   const posts = [];
//   for (const slug of slugs) {
//     const post = await getPostBySlug(slug, fields);
//     posts.push(post);
//   }
//   console.log('posts -- getAllPosts', posts)
//   return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
// }
