// import markdownStyles from './markdown-styles.module.css'
import { MDXRemote } from 'next-mdx-remote'

type Props = {
  mdxSource: {
    compiledSource: string;
    scope: Record<string, unknown>;
    frontmatter: Record<string, unknown>;
  };
};

const PostBody = ({ mdxSource }: Props) => {
    /* console.log('PostBody', mdxSource) */
  return (
    <article className='prose'>
      <MDXRemote {...mdxSource} />
    </article>
  )
}

export default PostBody