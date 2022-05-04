import React from 'react'
import Date from '../Date'
import Author from '../Author'
import Image, { StaticImageData } from 'next/image'
import CategoryPill from '../CategoryPill'
import Link from 'next/link'
import { TblocksProps } from '../../interfaces'
function WithImageTop({
  img,
  category,
  title,
  date,
  author,
  slug,
  classes,
}: TblocksProps) {
  return (
    <>
      <div className={`my-3 flex flex-col flex-wrap text-zinc-50 ${classes}`}>
        <span className="relative block  w-full p-2 ">
          <div className="lg:h--[150px] relative mb-3 mt-10 block h-[300px] w-full overflow-hidden rounded-md p-2 lg:my-0 lg:mb-5 ">
            <Image
              src={img}
              layout="fill"
              priority
              alt={'punchNg'}
              className="rounded-md transition-all ease-linear  hover:scale-110 "
              objectFit="cover"
            />
          </div>
        </span>

        <div className="w-full p-2 ">
          <div>
            <CategoryPill name={category} isBg />
          </div>
          <a href={`https://punchng.com/${slug}`}>
            <h3
              className="h mt-3 mb-2 cursor-pointer text-xl font-semibold text-black transition-all ease-linear hover:underline"
              dangerouslySetInnerHTML={{
                __html: ` ${
                  title.length > 64 ? `${title.slice(0, 64)}...` : title
                }`,
              }}
            />
          </a>

          <div className="my-5 flex items-center">
            <Date value={date} isLightBg />
            {/* <Author name={author} isLightBg /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default WithImageTop
