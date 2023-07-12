"use client"
import Certificates from "@/components/Certificates";
import FeaturedPost from "@/components/FeaturedPost";
import MainContentColumn from "@/components/MainContentColumn";
import PostFilters from "@/components/PostFilters";
import PostsMasonaryGrid from "@/components/PostsMasonaryGrid";
import { CTFBadge, Certificate, Post } from "@/types/types";
import Head from "next/head";
import { useState } from "react";
import CTFBadges from './CTFBadges';
import { Category } from "./CategoryFilterButton";
import { LeftColumn } from './LeftColumn';
import NavigationComponents from "./NavigationComponents";
import { RightColumn } from './RightColumn';


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
                    post.tags?.some((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
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
        <div className="bg-page-bg-grey min-h-screen overflow-hidden font-lato">
            <div className="lg:max-w-screen-4xl mx-auto">
                <Head>
                    <title>Dan Archer Online</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <NavigationComponents
                    certificates={certificates}
                    ctfBadges={ctfBadges}
                    filterCtfBadges={filterCtfBadges} />
                <main className="grid grid-cols-9 max-h-screen">
                    <LeftColumn certificates={certificates} />
                    <MainContentColumn>
                        <FeaturedPost post={featuredPost} />
                        <PostFilters postsCount={posts.length} onFilterChanged={filterPosts} />
                        <PostsMasonaryGrid posts={posts} />
                    </MainContentColumn>

                    {/* right side bar */}
                    <RightColumn ctfBadges={ctfBadges} filterCtfBadges={filterCtfBadges} />
                </main>
            </div>
        </div>
    )
}
