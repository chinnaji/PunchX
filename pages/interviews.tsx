import type { NextPage } from 'next'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { TAllPosts } from '../interfaces'
import FullPage from '../components/FullPage'

const Interviews: NextPage<{ data: TAllPosts[] }> = ({ data }) => {
  return (
    <main>
      <FullPage pageData={data} />
    </main>
  )
}

export default Interviews

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch posts in sport category
  const data = await fetch(
    'https://punchng.com/wp-json/wp/v2/posts?categories=59&per_page=100'
  )

  const response = await data.json()

  return {
    props: {
      data: response,
    },
    revalidate: 60,
  }
}