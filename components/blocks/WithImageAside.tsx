import React from 'react'
import Date from '../Date'
import Author from '../Author'
import Image, { StaticImageData } from 'next/image'
import CategoryPill from '../CategoryPill'
import Link from 'next/link'
import { TblocksProps } from '../../interfaces'
function WithImageAside({
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
      <div className="my-3 flex flex-wrap  text-zinc-50 ">
        <span className="relative block  w-full   p-2  md:w-1/2 lg:w-[30%] ">
          <div className="relative mb-3 mt-10 block  h-[300px] w-full overflow-hidden  rounded-md p-2 lg:my-0 lg:mb-5 lg:h-[150px] ">
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

        <div className="w-full p-2 md:w-1/2 lg:ml-5 lg:w-[60%]">
          <div>
            <CategoryPill name={category} />
          </div>
          <Link passHref href={`/${slug}`}>
            <a>
              {/* <h3 className="h mt-3 mb-2 cursor-pointer text-xl font-semibold text-black transition-all ease-linear hover:underline">
                {title.length > 64 ? `${title.slice(0, 64)}...` : title}
              </h3> */}

              <h3
                className="h mt-3 mb-2 cursor-pointer text-xl font-semibold text-black transition-all ease-linear hover:underline"
                dangerouslySetInnerHTML={{
                  __html: ` ${
                    title.length > 64 ? `${title.slice(0, 64)}...` : title
                  }`,
                }}
              />
            </a>
          </Link>
          <div className="my-5 flex items-center">
            <Date value={date} isLightBg />
            <Author name={author} isLightBg />
          </div>
        </div>
      </div>
    </>
  )
}

export default WithImageAside
