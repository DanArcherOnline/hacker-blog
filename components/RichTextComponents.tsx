import { urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import Refractor from "react-refractor";
import "../refractor-registrars";
import BlogPostImage from "./BlogPostImage";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            const imageUrl = urlFor(value).url();
            return <BlogPostImage imageUrl={imageUrl} alt={value.alt} />
        },
        code: ({ value }: any) => {
            return <div className="w-full pb-8 pt-4">
                <Refractor
                    value={value.code}
                    language={value?.language ?? "markdown"}
                    markers={value.highlightedLines}
                    className="rounded-lg"
                />
            </div>
        }
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a className="text-accent-pink hover:underline hover:underline-offset-2" href={value.href} rel={rel}>
                    {children}
                </a>
            )
        },
        strong: ({ children }: any) => {
            return (
                <span className="font-black">
                    {children}
                </span>
            )
        },
        em: ({ children }: any) => {
            return (
                <span className="italic">
                    {children}
                </span>
            )
        },
        code: ({ children }: any) => {
            return (
                <span className="font-mono text-base bg-[#1e1e1e] px-2 py-1 mx-1 rounded-lg border-[1px] border-body-text-grey">
                    {children}
                </span>
            )
        },

    },
    block: {
        normal: ({ children }: any) => <p className="font-sourceSerif4 pb-4 text-xl leading-9">{children}</p>,
        h1: ({ children }: any) => <h1 className="font-inter pb-4 pt-10 text-6xl">{children}</h1>,
        h2: ({ children }: any) => <h2 className="font-inter pb-4 pt-8 text-5xl">{children}</h2>,
        h3: ({ children }: any) => <h3 className="font-inter pb-2 pt-4 text-4xl">{children}</h3>,
        h4: ({ children }: any) => <h4 className="font-inter text-3xl pb-2 pt-4">{children}</h4>,
        h5: ({ children }: any) => <h5 className="font-inter text-2xl pb-2 pt-2">{children}</h5>,
        h6: ({ children }: any) => <h6 className="font-inter text-xl pb-2 pt-2">{children}</h6>,
        blockquote: ({ children }: any) => <blockquote className="border-l-accent-pink border-l-2 pl-4 mt-4 mb-10 italic font-sourceSerif4 text-xl leading-9">{children}</blockquote>,

    },
    list: {
        bullet: ({ children }: any) => <ul className="pl-5 font-sourceSerif4 text-xl pb-4">{children}</ul>,
        number: ({ children }: any) => <ol className="pl-5 font-sourceSerif4 text-xl pb-4">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li className="list-disc">{children}</li>,
        number: ({ children }: any) => <li className="list-decimal">{children}</li>,
    },
}