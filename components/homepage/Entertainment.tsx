import React from 'react'
import { TAllPosts } from '../../interfaces'
import Container from '../Container'

import WithBgImage from '../blocks/withBgImage'
import WithImageAside from '../blocks/WithImageAside'

type TheroProps = {
  entertainment: TAllPosts[]
}

function Entertainment({ entertainment }: TheroProps) {
  return (
    <>
      <Container>
        <section className="my-16 flex flex-wrap items-center py-10">
          <div className="mb-10 w-[60%] pl-3 md:w-[50%] lg:w-[30%]">
            {/* <span className="block h-3 w-3 rounded-full bg-red-600"></span> */}
            <p className="flex  h-3 w-full items-center rounded-full ">
              <h2 className="text-2xl font-medium text-black lg:text-4xl">
                Entertainment
              </h2>
              <div className=" ml-3 h-3 w-3 rounded-full bg-red-600"> </div>
            </p>
          </div>

          <div className="mb-10 flex w-[40%] flex-col pr-5 pl-5 md:w-[50%] lg:w-[70%] lg:pr-10">
            <span className="block h-1 w-full  border-t-2"></span>
            <span className="mt-0.5 block h-1  w-full border-t-2"></span>
          </div>
          {/*  */}
          <div className="flex w-full flex-wrap p-2 ">
            {entertainment.map(
              ({
                x_featured_media_original,
                x_categories,
                x_date,
                x_author,
                title,
                slug,
                id,
              }) => (
                <WithBgImage
                  img={x_featured_media_original}
                  category={x_categories}
                  title={title.rendered}
                  date={x_date}
                  author={x_author}
                  slug={slug}
                  classes="h-[300px]  lg:w-1/3  md:w-1/2 text-xl"
                />
              )
            )}
          </div>
        </section>
      </Container>
    </>
  )
}

export default Entertainment
