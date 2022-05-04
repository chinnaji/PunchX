import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { TAllPosts } from '../interfaces'
import Hero from '../components/homepage/Hero'

const Home: NextPage<{ posts: TAllPosts[] }> = ({ posts }) => {
  return (
    <main>
      <Hero posts={posts.slice(0, 5)} />
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetch(
    'https://punchng.com/wp-json/wp/v2/posts?per_page=20'
  )
  const posts = await data.json()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
