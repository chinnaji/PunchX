import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import Search from './Search'
import logo from '../images/logo.svg'
import Container from './Container'

function Navbar() {
  const [isSearch, setIsSearch] = useState(false)
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Sports',
      path: '/sports',
    },
    {
      title: 'Entertainment',
      path: '/entertainment',
    },
    {
      title: 'Politics',
      path: '/politics',
    },
    {
      title: '  Business',
      path: '/business',
    },
    {
      title: 'Health',
      path: '/health',
    },
    // {
    //   title: "Contact",
    //   path: "/#contact",
    // },
  ]

  const [isSidebar, setIsSidebar] = useState(false)
  // const [matches, setMatches] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // );

  // useEffect(() => {
  //   window
  //     .matchMedia("(min-width: 768px)")
  //     .addEventListener("change", (e) => setMatches(e.matches));
  //   if (isSidebar && !matches) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // });
  return (
    <>
      <header className="  bg-dark sticky top-0 z-50  max-h-28 w-full  overflow-hidden  border-b py-3">
        <Container>
          <nav className="  flex items-center justify-between  ">
            <Link passHref href="/">
              {/* <a className="relative -ml-5 block h-9 w-48 cursor-pointer md:-ml-0 md:h-12">
              <Image
                src={logo}
                layout="fill"
                alt="shodex garden logo"
                priority
                loading="eager"
              />
            </a> */}
              <h3 className="text-3xl font-semibold text-zinc-900">
                PUNCH<span className="text-4xl text-red-600">X</span>
              </h3>
              {/* <a>
              <h1 className="text-orange text-xl cursor-pointer font-bold">
                ANDROIDPILL
              </h1>
            </a> */}
            </Link>

            <div className="flex">
              <div
                className={` ${
                  isSidebar ? 'block ' : 'hidden'
                } fixed inset-0 h-screen bg-white  duration-500  ease-in-out lg:relative
          lg:block lg:h-full`}
              >
                {/* <div className="relativ"> */}
                <MdOutlineClose
                  className="bg-accent2 absolute  right-10 top-10 cursor-pointer rounded text-3xl text-zinc-700 lg:hidden"
                  onClick={() => setIsSidebar(false)}
                />
                {/* </div> */}

                <ul className="ml-auto -mt-10 flex h-full flex-col items-center justify-center  text-zinc-800  md:-mt-0 lg:flex-row">
                  {navLinks.map((navLink) => (
                    <li
                      className={`m my-4 flex flex-col items-center px-4  py-2 text-base font-medium  uppercase hover:text-red-600  lg:my-1 lg:capitalize`}
                      onClick={() => setIsSidebar(false)}
                      key={navLink.title}
                    >
                      <Link passHref href={navLink.path}>
                        <a>{navLink.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <span
                  // onClick={() => setIsSearch(!isSearch)}
                  onClick={() => setIsSearch(true)}
                >
                  <FiSearch className="hover:text-teal mr-2 cursor-pointer text-2xl text-zinc-700" />
                </span>

                <FiMenu
                  onClick={() => setIsSidebar(true)}
                  className=" ml-4 mr-1 cursor-pointer text-2xl text-zinc-600 lg:hidden"
                />
              </div>
            </div>
          </nav>
        </Container>
      </header>

      {isSearch ? <Search setIsSearch={setIsSearch} /> : null}
    </>
  )
}

export default Navbar