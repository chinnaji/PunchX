import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { TAllPosts } from '../interfaces'

const Home: NextPage<{ posts: TAllPosts }> = ({ posts }) => {
  console.log(posts)
  return <main>a</main>
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await fetch(
    'https://punchng.com/wp-json/wp/v2/posts?per_page=20'
  )
  const posts = await data.json()

  // res.status(200).json(posts)
  return {
    props: {
      posts,
    },
  }
}
