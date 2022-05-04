import React from 'react'

import Link from 'next/link'
import { TAllPosts } from '../interfaces'
import Container from './Container'

import WithImageTop from './blocks/WithImageTop'

type TTopStoriesProps = {
  topStories: TAllPosts[]
}

function TopStories({ topStories }: TTopStoriesProps) {
  return (
    <section className="bg-red-400 bg-opacity-5 py-16">
      <Container>
        <h2 className=" -mb-10 text-2xl font-semibold text-black md:text-4xl">
          Top Stories
        </h2>
        <div className="mt-10 flex flex-wrap items-center">
          {topStories.map(
            ({
              x_featured_media_original,
              x_categories,
              x_date,
              x_author,
              title,
              slug,
              id,
            }) => (
              <WithImageTop
                key={id}
                img={x_featured_media_original}
                category={x_categories}
                title={title.rendered}
                date={x_date}
                author={x_author}
                slug={slug}
                classes="w-full  p-2 md:w-1/2 lg:w-1/4"
              />
            )
          )}
        </div>
      </Container>
    </section>
  )
}

export default TopStories
