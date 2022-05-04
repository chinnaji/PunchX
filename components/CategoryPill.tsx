import React from 'react'
import Link from 'next/link'
import { Tcategories } from '../interfaces'

function CategoryPill({ name, isBg }: Tcategories) {
  return (
    <Link passHref href={`/${name}`}>
      <span
        className={`mr-3 cursor-pointer rounded ${
          !isBg ? 'bg-red-600 text-zinc-50' : 'text-red-600'
        } px-3 py-1 text-sm font-semibold uppercase  hover:bg-red-700`}
      >
        {name}
      </span>
    </Link>
  )
}

export default CategoryPill
