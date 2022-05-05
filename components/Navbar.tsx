import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import Search from './Search'
import logo from '../images/logo.svg'
import Container from './Container'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
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
  const subNavLinks = [
    {
      title: 'Spice',
      path: '/spice',
    },
    {
      title: 'Sex & Relationship',
      path: '/sex-relationship',
    },
    {
      title: 'Education',
      path: '/education',
    },
    {
      title: 'Editorial',
      path: '/editorial',
    },
    {
      title: 'Metro Plus',
      path: '/metro-plus',
    },
    {
      title: '  a',
      path: '/business',
    },
    {
      title: 's',
      path: '/health',
    },
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
      <header className="  sticky top-0 z-50   w-full overflow-hidden  border-b  bg-white pt-3 pb-1">
        <Container>
          <nav className="  flex items-center justify-between  ">
            <Link passHref href="/">
              <h3 className="cursor-pointer text-3xl font-semibold text-zinc-900">
                PUNCH<span className="text-4xl text-red-600">X</span>
              </h3>
            </Link>

            <div className="flex">
              <div
                className={` ${
                  isSidebar ? 'block ' : 'hidden'
                } fixed inset-0 z-50 h-screen bg-white duration-500  ease-in-out lg:relative
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
                      className={`${
                        router.pathname == navLink.path ? 'text-red-600' : null
                      } my-4 flex flex-col items-center px-4  py-2 text-base font-medium  uppercase hover:text-red-600  lg:my-1 lg:capitalize`}
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

            {/* secondary navbar  */}
          </nav>
        </Container>

        <nav className="  bg-dark sticky top-0     w-full  overflow-hidden border-t pt-4 pb-2">
          <Container>
            <div className="subNav align-items-center flex w-full overflow-x-auto text-zinc-600 md:justify-center">
              {subNavLinks.map((subNavLink, index) => (
                <Link passHref href={subNavLink.path} key={index}>
                  <a
                    className={`${
                      router.pathname == subNavLink.path ? 'text-red-600' : null
                    } ld:mx-7 mx-4 whitespace-nowrap text-sm hover:text-red-600 md:mx-10`}
                  >
                    {subNavLink.title}
                  </a>
                </Link>
              ))}
            </div>
          </Container>
        </nav>
      </header>

      {isSearch ? <Search setIsSearch={setIsSearch} /> : null}
    </>
  )
}

export default Navbar
