"use client"

import CTFItem from "@/components/CTFItem";
import Certificates from "@/components/Certificates";
import FeaturedPost from "@/components/FeaturedPost";
import MainContentColumn from "@/components/MainContentColumn";
import NavBar from "@/components/NavBar";
import PostFilters from "@/components/PostFilters";
import PostsMasonaryGrid from "@/components/PostsMasonaryGrid";
import ProfileCard from "@/components/ProfileCard";
import RightSidePanel from "@/components/RightSidePanel";
import Searchbar from "@/components/Searchbar";
import SideNavMenu from "@/components/SideNavMenu";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isRightPanelOpen, setRightPanelOpen] = useState(false)
  return (
    <div className="bg-page-bg-grey max-h-screen overflow-hidden">
      <div className="lg:max-w-screen-4xl mx-auto">
        <Head>
          <title>Dan Archer Online</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <SideNavMenu
          isOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          setRightPanelOpen={setRightPanelOpen}
        >
          <Link
            href='/'
            className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
          >
            <div>Home</div>
          </Link>
          <Link
            href='#'
            className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
          >
            <div>About Me</div>
          </Link>
          <div
            className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
            onClick={() => {
              setMenuOpen(false)
              setRightPanelOpen(true)
            }}
          >
            <div>Certficates</div>
          </div>
          <div
            className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
            onClick={() => {
              setMenuOpen(false)
              setRightPanelOpen(true)
            }}
          >
            <div>CTF & Challenges</div>
          </div>
          <Link
            href='#'
            className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
          >
            <div>Download Resume</div>
          </Link>

        </SideNavMenu>
        <RightSidePanel
          isOpen={isRightPanelOpen}
          setOpen={setRightPanelOpen}
        />

        {/* Page Content */}
        <NavBar
          isOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          setRightPanelOpen={setRightPanelOpen}
        >
          <Link
            href='/'
            className="text-accent-pink"
          >Home
          </Link>
          <Link
            href='/post/about-me'
            className=""
          >About Me
          </Link>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setRightPanelOpen(true)}
          >Certificates
          </div>
          <div
            className="xl:hidden cursor-pointer"
            onClick={() => setRightPanelOpen(true)}
          >CTF & Challenges
          </div>
          <Link
            href='#'
          >Resume
          </Link>
        </NavBar>
        <main className="grid grid-cols-9 max-h-screen">

          {/* left side bar */}
          <div className="hidden p-4 pr-2 lg:flex flex-col lg:col-span-3 xl:col-span-2 pt-[4.5rem] gap-4 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
            <ProfileCard />
            <Certificates />
          </div>

          <MainContentColumn>
            <FeaturedPost />
            <PostFilters />
            <PostsMasonaryGrid />
          </MainContentColumn>

          {/* right side bar */}
          <div className="hidden p-4 pl-2 xl:flex flex-col col-span-2 min-h-screen pt-[4.5rem] gap-4 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
            <div className="flex flex-col bg-card-grey w-auto p-6 space-y-4 rounded drop-shadow-lg">
              <h1 className="font-black text-xl ml-2">CTF & Challenges (3)</h1>
              <Searchbar />

              <div className="divide-y divide-page-bg-grey">
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
                <CTFItem />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
