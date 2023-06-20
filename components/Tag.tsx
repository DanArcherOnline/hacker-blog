import { ReactNode } from "react"

interface Props {
    outline?: boolean
    children: ReactNode
}

export default function Tag({ outline, children }: Props) {
    const styles = outline ? 'border-white' : 'bg-accent-pink border-accent-pink text-white'
    return (
        <div className={
            `flex items-center px-4 py-1 rounded-full text-xs font-bold border-2 ${styles}`

        }>{children}</div>
    )
}
