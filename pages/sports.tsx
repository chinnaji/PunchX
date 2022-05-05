import type { NextPage } from 'next'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { TAllPosts } from '../interfaces'
import FullPage from '../components/FullPage'

const Sports: NextPage<{ data: TAllPosts[] }> = ({ data }) => {
  return (
    <main>
      {/* {/* <Hero posts={posts.slice(0, 5)} /> */}
      <FullPage pageData={data} />
      {/* <CategorySections
        sport={sport}
        news={news}
        business={business}
        politics={politics}
      /> */}
      {/* <Entertainment entertainment={entertainment} /> */}
    </main>
  )
}

export default Sports

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch posts in sport category
  const data = await fetch(
    'https://punchng.com/wp-json/wp/v2/posts?categories=3&per_page=100'
  )

  const response = await data.json()

  return {
    props: {
      data: response,
    },
    revalidate: 60,
  }
}
