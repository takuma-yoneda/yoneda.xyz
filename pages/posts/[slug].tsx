import { getPostBySlug, getAllPosts } from '@/lib/api'
import type PostType from '@/interfaces/post'
// import PostBody from '@/components/post-body'
import Head from 'next/head'
import { MDXRemote } from 'next-mdx-remote'
import Layout from '@/components/Layout'
import PostHeader from '@/components/PostHeader'
import SectionHeading from '@/components/SectionHeading'

type Params = {
  params: {
    slug: string
  }
}

type Props = {
  post: PostType
}

export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'mdxSource',
    'ogImage',
    'coverImage',
  ])

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}


export async function getStaticPaths() {
  const posts = await getAllPosts(['slug'])
  console.log('posts', posts)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default function Post({ post }: Props) {
  console.log('postdata', post)
  const components = {
    h1: ({ children }) => <SectionHeading>{children}</SectionHeading>,
    h2: ({ children }) => <h2 className='not-prose text-3xl'>{children}</h2>,
    strong: ({ children }) => <strong className='not-prose font-normal'>{children}</strong>,
    ul: ({ children }) => <ul className='not-prose list-disc list-inside ml-3 my-2 marker:text-zinc-500 marker:text-sm'>{children}</ul>,
    ol: ({ children }) => <ol className='not-prose list-decimal list-inside ml-3 my-2'>{children}</ol>,
    // code: ({ children }) => <code className='inline-block text-[0.8rem] font-mono rounded py-0 px-1'>{children}</code>,
    // pre: ({ children }) => <pre className='text-[0.8rem] font-mono rounded p-4 my-4 overflow-scroll'>{children}</pre>,
    // code: ({ children }) => <code className='inline-block bg-slate-200 text-[0.8rem] font-mono rounded py-0 px-1'>{children}</code>, 
    // pre: ({ children }) => <pre className='bg-black text-[0.8rem] font-mono rounded p-4 my-4 overflow-scroll'>{children}</pre>,
    // code: ({ children }) => <code className='bg-lime-300'>{ children }</code>,
    blockquote: ({ children }) => (
      <>
        <blockquote className='not-prose border-l-4 border-zinc-400 text-zinc-600 py-1 pl-[0.7em] my-4 ml-2'>
          {children}
        </blockquote>
      </>
    ),
      /* code: ({ children }) => <code className='inline-block bg-slate-200 text-[0.8rem] font-mono rounded py-0 px-1'>{children}</code> */
  }
  return (
    <>
      <Head>
        <title>{post.title}</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Layout>
        <main>
          <div className='flex flex-col items-center'>
            <article className="md:w-[768px] sm:max-w-screen-md">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <MDXRemote {...post.mdxSource} components={components}/>
            </article>
          </div>
        </main>
      </Layout>
    </>
  )
}
