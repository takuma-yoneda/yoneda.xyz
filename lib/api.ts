import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'

// MDX related
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'
import rehypePrism from 'rehype-prism-plus'
import { MDXRemote } from 'next-mdx-remote'

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
  console.log('getPostBySlug --', fileContents)
  const { data, content } = matter(fileContents)
  console.log('getPostBySlug -- data', data)
  console.log('getPostBySlug -- content', content)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      // rehypePlugins: [mdxPrism]
      rehypePlugins: [[rehypePrism, { ignoreMissing: true }]]
    }
  })

  console.log('getPostBySlug -- mdxSource', mdxSource)


  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'mdxSource') {
      items[field] = mdxSource
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const postPromises = slugs.map((slug) => getPostBySlug(slug, fields));
  const posts = await Promise.all(postPromises);
  console.log("posts -- getAllPosts", posts);
  // sort posts by date in descending order
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
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
