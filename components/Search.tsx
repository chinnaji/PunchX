import React, { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { useRouter } from 'next/router'

type Tsearch = {
  setIsSearch: Function
}

function Search({ setIsSearch }: Tsearch) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const handleSearch = () => {
    // router.push(`/search/${searchQuery}`);
    router.push(`/search/${searchQuery}`)

    setTimeout(() => setIsSearch(false), 2000)
  }
  return (
    <section className=" bg-dark background-opacity-70 fixed inset-0 z-[99999999] flex h-screen w-screen items-center justify-center">
      <form onSubmit={() => handleSearch()} className="max-w-md py-10 px-5">
        <input
          className="my-2 w-full rounded-md border border-zinc-600 bg-zinc-700 px-2  py-4 text-zinc-100"
          type="search"
          required
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          //   onClick={() => handleSearch()}
          className="bg-teal hover:bg-darkTeal text-dark  w-full rounded py-5 px-10 font-semibold outline-none hover:text-zinc-100 focus:border-0 focus:outline-none"
        >
          SEARCH
        </button>
        <div
          onClick={() => setIsSearch(false)}
          className="hover:text-teal fixed left-[48%] bottom-[16%] flex cursor-pointer text-zinc-100 underline"
        >
          <IoIosCloseCircle className="mr-1 text-2xl " /> CLOSE
        </div>
      </form>
    </section>
  )
}

export default Search
