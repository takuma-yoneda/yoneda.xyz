import Link from 'next/link'
import Date from '@/components/Date'
import Layout from '@/components/Layout'

import { getAllPosts } from '@/lib/api'

export default function Home({ posts }) {
    console.log('allPostsData', posts)
  return (
    <Layout>
        <div className='flex flex-col items-center'>
          <div className="md:w-[768px] sm:max-w-screen-md">
            <header className='text-3xl my-8'>
                <h1>Posts</h1>
            </header>
            <ul className='text-sm md:text-2xl'>
                {posts.map(({ slug, date, title }) => (
                    <li className='py-1 md:py-2' key={slug}>
                        <Date className='inline-block min-w-[8em]' dateString={date} />
                        <Link href={`/posts/${slug}`}>{title}</Link>
                    </li>
                ))}
            </ul>
          </div>
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let posts = await getAllPosts(['slug', 'title', 'date'])
    // NOTE: There's an issue about date formatting.
    // gray-matter seems to convert the date to non-string type
    // when frontmatter's date is not surrounded by `'` nor `"`.
    posts.map(({slug, date, title}) => {
        console.log('slug', slug, 'date', date)
    })
    posts = JSON.parse(JSON.stringify(posts))
  return {
      props: {
          posts
      }
  }
}
