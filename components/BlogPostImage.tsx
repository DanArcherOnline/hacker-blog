'use client'

import Image from "next/image"

interface Props {
    imageUrl: string
    alt: string
}

export default function BlogPostImage({ imageUrl, alt }: Props) {
    return (
        <div className="relative w-full h-96 mx-auto mb-12 mt-8">
            <Image
                className="object-contain hover:cursor-pointer"
                onClick={() => {
                    const newTab = window.open(imageUrl, '_blank');
                    if (newTab) {
                        newTab.focus();
                    } else {
                        // In some cases, browsers may block opening a new tab programmatically.
                        // You can provide a fallback solution here, like redirecting to the URL in the same window.
                        window.location.href = imageUrl;
                    }
                    }}
                src={imageUrl}
                alt={alt}
                fill />
        </div>
    )
}



