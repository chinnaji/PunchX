import React, { useState } from 'react'
import { TAllPosts } from '../interfaces'
import Container from './Container'

import WithBgImage from './blocks/withBgImage'
import WithImageAside from './blocks/WithImageAside'

type TheroProps = {
  sport: TAllPosts[]
  news: TAllPosts[]
  business: TAllPosts[]
  politics: TAllPosts[]
}

function CategorySections({ business, politics, sport, news }: TheroProps) {
  const [current, setCurrent] = useState(sport)

  const {
    x_featured_media_original,
    x_categories,
    x_date,
    x_author,
    title,
    slug,
    id,
  } = current[0]

  const tabToogle = [
    {
      title: 'sport',
      value: sport,
    },
    {
      title: 'business',
      value: business,
    },
    {
      title: 'politics',
      value: politics,
    },
    {
      title: 'news',
      value: news,
    },
  ]
  return (
    <>
      <Container>
        {/* toogle tab */}
        <div className=" mt-10 flex  flex-wrap items-center justify-center">
          <div className="w-[50%] lg:w-[20%]">
            {/* <span className="block h-3 w-3 rounded-full bg-red-600"></span> */}
            <p className="flex  h-3 w-full items-center rounded-full ">
              <h2 className="text-2xl font-medium text-black lg:text-4xl">
                What New?
              </h2>
              <div className=" ml-3 h-3 w-3 rounded-full bg-red-600"> </div>
            </p>
          </div>

          <div className="flex w-[50%] flex-col pr-5 pl-5 lg:w-[50%] lg:pr-10">
            <span className="block h-1 w-full  border-t-2"></span>
            <span className="mt-0.5 block h-1  w-full border-t-2"></span>
          </div>
          <div className="flex w-full justify-center pt-12 lg:w-[30%] lg:pt-0">
            {tabToogle.map(({ title, value }) => (
              <span
                key={title}
                onClick={() => setCurrent(value)}
                className={`cursor-pointer border border-red-600 px-3 py-2 text-sm capitalize transition-all ease-linear md:px-5 md:text-base ${
                  current === value
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/50'
                    : 'bg-white text-black hover:bg-red-700 hover:text-zinc-100'
                }`}
              >
                {title}
              </span>
            ))}
          </div>
        </div>

        {/* tab container */}
        <section className="mt-8 flex flex-wrap items-center">
          <WithBgImage
            img={x_featured_media_original}
            category={x_categories}
            title={title.rendered}
            date={x_date}
            author={x_author}
            slug={slug}
            classes="h-[350px] lg:h-[560px] lg:w-1/2 lg:-mt-5 text-xl md:text-2xl"
          />

          <div className="w-full flex-col p-2 lg:w-1/2 ">
            {current
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

export default CategorySections
