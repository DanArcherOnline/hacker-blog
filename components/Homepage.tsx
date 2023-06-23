"use client"

import Certificates from "@/components/Certificates";
import CertificatesCard from "@/components/CertificatesCard";
import FeaturedPost from "@/components/FeaturedPost";
import MainContentColumn from "@/components/MainContentColumn";
import NavBar from "@/components/NavBar";
import PostFilters from "@/components/PostFilters";
import PostsMasonaryGrid from "@/components/PostsMasonaryGrid";
import ProfileCard from "@/components/ProfileCard";
import RightSidePanel from "@/components/RightSidePanel";
import SideNavMenu from "@/components/SideNavMenu";
import { CTFBadge, Certificate, Post } from "@/types/types";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Category } from "./CategoryFilterButton";
import CTFBadges from "./ctfBadges";

interface Props {
    posts: Post[]
    featuredPost: Post
    certificates: Certificate[]
    ctfBadges: CTFBadge[]
}

enum RightSidePanelContent {
    CtfBadges,
    Certificates,
}


export default function Homepage({
    posts: initialPosts,
    featuredPost,
    certificates,
    ctfBadges: initialCtfBadges,
}: Props) {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isRightPanelOpen, setRightSidePanelOpen] = useState<boolean>(false)
    const [rightSidePanelContent, setRightSidePanelContent] = useState<RightSidePanelContent>(RightSidePanelContent.CtfBadges)
    const [posts, setPosts] = useState<Post[]>(initialPosts)
    const [ctfBadges, setCtfBadges] = useState<CTFBadge[]>(initialCtfBadges)

    const getRightSidePanelContent = (rightPanelContent: RightSidePanelContent,
        certificates: Certificate[],
        ctfBadges: CTFBadge[],
    ) => {
        switch (rightPanelContent) {
            case RightSidePanelContent.CtfBadges:
                return (<CTFBadges ctfBadges={ctfBadges} onSearch={filterCtfBadges} />)
            case RightSidePanelContent.Certificates:
                return (<Certificates certificates={certificates} />)
        }
    }

    const filterPosts = (category?: Category, searchTerm?: string) => {
        let filteredPosts = initialPosts.filter((post) => {
            if (category === Category.All) return true
            return post.category.title === category
        })
        if (searchTerm) {
            filteredPosts = filteredPosts.filter((post) => {
                return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
            })
        }
        setPosts(filteredPosts)
    }

    const filterCtfBadges = (searchTerm: string) => {

        console.log(searchTerm)
        console.log(initialCtfBadges)
        if (searchTerm) {
            let filteredCtfBadges = initialCtfBadges.filter((ctfBadge) => {
                return ctfBadge.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    ctfBadge.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    (ctfBadge.event && ctfBadge.event.toLowerCase().includes(searchTerm.toLowerCase()))
            })
            setCtfBadges(filteredCtfBadges)
            return
        }
        setCtfBadges(initialCtfBadges)
    }

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
                    setRightPanelOpen={setRightSidePanelOpen}
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
                            setRightSidePanelOpen(true)
                            setRightSidePanelContent(RightSidePanelContent.Certificates)
                        }}
                    >
                        <div>Certficates</div>
                    </div>
                    <div
                        className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                        onClick={() => {
                            setMenuOpen(false)
                            setRightSidePanelOpen(true)
                            setRightSidePanelContent(RightSidePanelContent.CtfBadges)
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
                    onClose={() => setRightSidePanelOpen(false)}
                >
                    {
                        getRightSidePanelContent(rightSidePanelContent, certificates, ctfBadges)
                    }
                </RightSidePanel>

                {/* Page Content */}
                <NavBar
                    isOpen={isMenuOpen}
                    setMenuOpen={setMenuOpen}
                    setRightSidePanelOpen={setRightSidePanelOpen}
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
                        onClick={() => {
                            setRightSidePanelContent(RightSidePanelContent.Certificates)
                            setRightSidePanelOpen(true)
                        }}
                    >Certificates
                    </div>
                    <div
                        className="xl:hidden cursor-pointer"
                        onClick={() => {
                            setRightSidePanelContent(RightSidePanelContent.CtfBadges)
                            setRightSidePanelOpen(true)
                        }}
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
                        <CertificatesCard certificates={certificates} />
                    </div>

                    <MainContentColumn>
                        <FeaturedPost post={featuredPost} />
                        <PostFilters postsCount={posts.length} onFilterChanged={filterPosts} />
                        <PostsMasonaryGrid posts={posts} />
                    </MainContentColumn>

                    {/* right side bar */}
                    <div className="hidden p-4 pl-2 xl:flex flex-col col-span-2 min-h-screen pt-[4.5rem] gap-4 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
                        <div className="flex flex-col bg-card-grey w-auto p-6 space-y-4 rounded drop-shadow-lg">
                            <CTFBadges ctfBadges={ctfBadges} onSearch={filterCtfBadges} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
