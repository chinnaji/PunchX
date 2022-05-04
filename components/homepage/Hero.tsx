import React from 'react'
import { TAllPosts } from '../../interfaces'
import Container from '../Container'

import WithBgImage from '../blocks/withBgImage'
import WithImageAside from '../blocks/WithImageAside'

type TheroProps = {
  posts: TAllPosts[]
}

function Hero({ posts }: TheroProps) {
  const {
    x_featured_media_original,
    x_categories,
    x_date,
    x_author,
    title,
    slug,
    id,
  } = posts[0]
  return (
    <>
      <Container>
        <section className="mt-10 flex flex-wrap items-center">
          <WithBgImage
            img={x_featured_media_original}
            category={x_categories}
            title={title.rendered}
            date={x_date}
            author={x_author}
            slug={slug}
            classes="h-[350px] lg:h-[560px] lg:w-1/2 lg:-mt-5"
          />

          <div className="w-full flex-col p-2 lg:w-1/2 ">
            {posts
              .slice(1, 4)
              .map(
                ({
                  x_featured_media_original,
                  x_categories,
                  x_date,
                  x_author,
                  title,
                  slug,
                  id,
                }) => (
                  <WithImageAside
                    key={id}
                    img={x_featured_media_original}
                    category={x_categories}
                    title={title.rendered}
                    date={x_date}
                    author={x_author}
                    slug={slug}
                    classes=""
                  />
                )
              )}
          </div>
        </section>
      </Container>
    </>
  )
}

export default Hero
