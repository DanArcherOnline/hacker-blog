import { urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import Refractor from "react-refractor";
import "../refractor-registrars";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return <div className="relative w-full h-96 mx-auto">
                <Image
                    className="object-contain "
                    src={urlFor(value).url()}
                    alt={value.alt}
                    fill />
            </div>
        },
        code: ({ value }: any) => {
            return <Refractor value={value.code} language={value.language} markers={value.highlightedLines} />
        }
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a className="text-blue-500" href={value.href} rel={rel}>
                    {children}
                </a>
            )
        },
    },
    block: {
        h1: ({ children }: any) => <div><h1 className="text-blue-50 text-6xl">{children}</h1></div>,
        h2: ({ children }: any) => <h1 className="text-blue-100 text-5xl">{children}</h1>,
        h3: ({ children }: any) => <h1 className="text-blue-200 text-4xl">{children}</h1>,
        h4: ({ children }: any) => <h1 className="text-blue-300 text-3xl">{children}</h1>,
        h5: ({ children }: any) => <h1 className="text-blue-400 text-2xl">{children}</h1>,
        h6: ({ children }: any) => <h1 className="text-blue-500 text-xl">{children}</h1>,
        blockquote: ({ children }: any) => <blockquote className="border-l-purple-500 border-l-2">{children}</blockquote>,

    },
    list: {
        bullet: ({ children }: any) => <ul className="ml-5 text-green-400">{children}</ul>,
        number: ({ children }: any) => <ol className="ml-5">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: any) => <li style={{ listStyleType: 'disclosure-closed' }}>{children}</li>,
        number: ({ children }: any) => <li className=" list-decimal">{children}</li>,
    },
}