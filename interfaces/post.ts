import { MDXRemoteSerializeResult } from 'next-mdx-remote';
type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  mdxSource: MDXRemoteSerializeResult
}

export default PostType