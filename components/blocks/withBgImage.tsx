import React from 'react'
import Date from '../Date'
import Author from '../Author'
import Image, { StaticImageData } from 'next/image'
import CategoryPill from '../CategoryPill'
import Link from 'next/link'
import { TblocksProps } from '../../interfaces'

function WithBgImage({
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
      <div className={`w-full p-1   ${classes}  `}>
        <span className="post_block relative block h-full w-full overflow-hidden rounded ">
          <Image
            src={img}
            layout="fill"
            priority
            alt={'punchNg'}
            className="post_block_image rounded-md transition-all  ease-linear "
            objectFit="cover"
          />

          <div className="overlay absolute z-20 h-full w-full rounded bg-black bg-opacity-40"></div>
          <div className="from-dark absolute inset-0  z-30 flex items-end rounded bg-gradient-to-t  p-3 lg:p-4">
            <span className="block">
              <div>
                <CategoryPill name={category} />
              </div>

              <a href={`https://punchng.com/${slug}`}>
                {/* <h3 className="h mt-3 mb-2 cursor-pointer text-xl font-semibold text-white transition-all ease-linear hover:underline md:text-3xl"
                
                >
                  {title}
                </h3> */}
                <h3
                  className="h mt-3 mb-2 cursor-pointer  font-semibold text-white transition-all ease-linear hover:underline "
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                />
              </a>

              <div className="mt-5 mb-3 flex items-center">
                <Date value={date} />
                <Author name={author} />
              </div>
            </span>
          </div>
        </span>
      </div>
    </>
  )
}

export default WithBgImage
