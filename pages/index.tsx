import type { NextPage } from 'next'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { ThomePageData } from '../interfaces'
import Hero from '../components/homepage/Hero'
import TopStories from '../components/TopStories'
import CategorySections from '../components/CategorySections'

const Home: NextPage<{ pageResponse: ThomePageData }> = ({ pageResponse }) => {
  const { posts, news, sport, business, politics } = pageResponse
  return (
    <main>
      <Hero posts={posts.slice(0, 5)} />
      <TopStories topStories={posts.slice(5, 9)} />
      {/* <News news={news} /> */}
      <CategorySections
        sport={sport}
        news={news}
        business={business}
        politics={politics}
      />
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch trending posts
  const data = axios.get('https://punchng.com/wp-json/wp/v2/posts?per_page=20')
  // fetch posts in sport category
  const data1 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=3&per_page=4'
  )
  // fetch posts in politics category
  const data2 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=14&per_page=4'
  )
  // fetch posts in business category
  const data3 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=19&per_page=4'
  )
  // fetch posts in news category
  const data4 = axios.get(
    'https://punchng.com/wp-json/wp/v2/posts?categories=2&per_page=4'
  )

  const [posts, sport, politics, business, news] = await Promise.all([
    data,
    data1,
    data2,
    data3,
    data4,
  ])

  return {
    props: {
      pageResponse: {
        posts: posts.data,
        news: news.data,
        sport: sport.data,
        business: business.data,
        politics: politics.data,
      },
    },
    revalidate: 60,
  }
}
