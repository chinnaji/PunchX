import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TAllPosts } from '../interfaces'

import FullPage from '../components/FullPage'

const Education: NextPage<{ data: TAllPosts[] }> = ({ data }) => {
  return (
    <main>
      <FullPage pageData={data} />
    </main>
  )
}

export default Education

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch posts in sport category
  const data = await fetch(
    'https://punchng.com/wp-json/wp/v2/posts?categories=48&per_page=100'
  )

  const response = await data.json()

  return {
    props: {
      data: response,
    },
    revalidate: 60,
  }
}
