"use client"

import NavBar from "@/components/NavBar"
import RightSidePanel from "@/components/RightSidePanel"
import SideNavMenu from "@/components/SideNavMenu"
import { urlFor } from "@/sanity/sanity-utils"
import { Post } from "@/types/types"
import { PortableText } from "@portabletext/react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { RichTextComponents } from "./RichTextComponents"


interface Props {
    post: Post
}

export default function PostPage({ post }: Props) {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const [isRightPanelOpen, setRightPanelOpen] = useState(false)
    return (
        <div className="bg-page-bg-grey">
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
                </SideNavMenu>
                <RightSidePanel
                    isOpen={isRightPanelOpen}
                    onClose={() => setRightPanelOpen(false)}
                />

                {/* Page Content */}
                <NavBar
                    isOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                    setRightSidePanelOpen={setRightPanelOpen}
                >
                    <Link
                        href='/'
                        className="text-accent-pink"
                    >Home
                    </Link>
                    <Link
                        href='#'
                        className=""
                    >About Me
                    </Link>
                </NavBar>
                <main className={`flex flex-col pt-20 font-inter `}>
                    <div className="flex flex-col p-2 gap-2 md:px-8 max-w-3xl mx-auto">
                        <h1 className="font-black text-4xl md:text-6xl">{post.title}</h1>
                    </div>
                    <div className="relative w-screen h-96 mx-auto my-8 md:h-[30rem] lg:max-w-7xl lg:h-[38rem]">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={"Feature Image"}
                            fill
                            className="object-cover md:p-2 lg:p-4 md:rounded"
                        />
                    </div>
                    <div className="p-2 font-sourceSerif4 font-light text-body-text-grey md:px-8 md:max-w-4xl mx-auto z-20 ">
                        <div className="bg-transparent md:bg-card-grey md:rounded md:-mt-32 md:p-10 text-lg">
                            <PortableText value={post.body} components={RichTextComponents} onMissingComponent={false} />
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}
