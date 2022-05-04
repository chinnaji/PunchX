import React from 'react'
import Link from 'next/link'
import { Tcategories } from '../interfaces'

function CategoryPill({ name }: Tcategories) {
  return (
    <Link passHref href={`/${name}`}>
      <span
        className={`mr-3 cursor-pointer rounded bg-red-600 px-3 py-1 text-sm font-semibold uppercase text-zinc-50 hover:bg-opacity-90`}
      >
        {name}
      </span>
    </Link>
  )
}

export default CategoryPill
