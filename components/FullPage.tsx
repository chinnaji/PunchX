import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { TAllPosts } from '../interfaces'
import Container from './Container'
import noImg from '../images/no-image.jpg'
import WithImageTop from './blocks/WithImageTop'

type TPageData = {
  pageData: TAllPosts[]
}
type Toptions = {
  root: Element | null
  rootMargin: string
  threshold: number
}

function FullPage({ pageData }: TPageData) {
  const watchPoint = useRef<HTMLHeadingElement>(null)
  const [isLoadMore, setIsLoadMore] = useState(false)
  const [end, setEnd] = useState(20)

  const options: Toptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }
  const callBack = (entries: any) => {
    console.log(entries)
    const [entry] = entries
    setIsLoadMore(entry.isIntersecting)
    if (end <= pageData.length && isLoadMore) {
      setTimeout(() => setEnd((prevState) => prevState + 20), 1000)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options)
    if (watchPoint.current) observer.observe(watchPoint.current)
  }, [watchPoint, options])

  return (
    <section className="bg-red-400 bg-opacity-20 py-16">
      <Container>
        <h2 className=" -mb-10 pl-5 text-2xl font-semibold text-black md:text-4xl">
          Hot🔥 Stories
        </h2>
        <div className="flex flex-wrap items-center md:mt-10">
          {pageData
            .slice(0, end)
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
                <WithImageTop
                  key={id}
                  img={x_featured_media_original || noImg.src}
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

        <h1 className="height-24" ref={watchPoint}></h1>
      </Container>
    </section>
  )
}

export default FullPage
