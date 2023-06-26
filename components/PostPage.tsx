
import { urlFor } from "@/sanity/sanity-utils";
import { Post } from "@/types/types";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Image from "next/image";
import { PostNavigationComponents } from './PostNavigationComponents';
import { RichTextComponents } from "./RichTextComponents";


interface Props {
    post: Post
}

export default function PostPage({ post }: Props) {
    return (
        <div className="bg-page-bg-grey">
            <div className="lg:max-w-screen-4xl mx-auto">
                <Head>
                    <title>Dan Archer Online</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <PostNavigationComponents isAboutMePage={post.slug.current == 'about-me'} />
                <main className={`flex flex-col pt-20 font-inter pb-16`}>
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
                    <div className="p-2 font-light text-body-text-grey w-full md:px-8 md:max-w-4xl mx-auto z-20 ">
                        <div className="bg-transparent md:bg-card-grey md:rounded md:-mt-32 md:p-10 text-lg">
                            <PortableText value={post.body} components={RichTextComponents} onMissingComponent={false} />
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}
