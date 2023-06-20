import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
    isOpen: boolean
    setMenuOpen: (isOpen: boolean) => void
    setRightPanelOpen: (isOpen: boolean) => void
    children?: ReactNode
}

export default function NavBar({ isOpen: isMenuOpen, setMenuOpen, setRightPanelOpen, children }: Props) {
    return (
        <div className="mx-2 lg:mx-4 relative z-30">
            <header className="absolute left-0 font-black text-base w-full mx-auto bg-card-grey py-4 px-8 top-0 uppercase rounded-b">
                <div className="flex justify-between items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <Link href="/" className="flex items-center">
                            <div><span className="text-accent-pink">DANARCHER</span>ONLINE</div>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            onClick={() => setMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                            type="button"
                            className="inline-flex items-center justify-center p-2  text-white hover:text-accent-pink transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-3 lg:space-x-10">
                        {children}
                        {/* <Link
                            href='/'
                            className="text-accent-pink"
                        >Home
                        </Link>
                        <Link
                            href='#'
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
                        </Link> */}
                    </nav>
                </div>
            </header>
        </div>
    )
}
