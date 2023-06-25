import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    secondary?: boolean
    full?: boolean
    href?: string
}

export default function Button({ children, secondary, full, href }: Props) {
    return (
        <Link href={href ?? '#'}>
            <button
                className={`${full && 'w-full'} ${secondary ? 'bg-card-content-grey' : 'bg-accent-pink'} font-black px-8 py-3 rounded-2xl shadow-[inset_0_-2px_2px_rgba(0,0,0,0.25),inset_0_2px_2px_rgba(255,255,255,0.25)] mb-4 hover:bg-[#cf2e67]`}>
                {children}
            </button>
        </Link>
    )
}
