"use client"
import { CTFBadge, Certificate } from '@/types/types'
import Link from 'next/link'
import { useState } from 'react'
import CTFBadges from './CTFBadges'
import Certificates from './Certificates'
import NavBar from './NavBar'
import RightSidePanel from './RightSidePanel'
import SideNavMenu from './SideNavMenu'

enum RightSidePanelContent {
    CtfBadges,
    Certificates,
}

interface Props {
    certificates: Certificate[]
    ctfBadges: CTFBadge[]
    filterCtfBadges: (searchTerm: string) => void
}

export default function NavigationComponents({ filterCtfBadges, certificates, ctfBadges }: Props) {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isRightPanelOpen, setRightSidePanelOpen] = useState<boolean>(false)
    const [rightSidePanelContent, setRightSidePanelContent] = useState<RightSidePanelContent>(RightSidePanelContent.CtfBadges)

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

    return (
        <>
            <SideNavMenu
                isOpen={isMenuOpen}
                setMenuOpen={setMenuOpen}
                setRightPanelOpen={setRightSidePanelOpen}
            >
                <Link
                    href='/'
                    className="-m-4 p-4 flex items-center space-x-3 rounded-md text-accent-pink hover:text-white hover:bg-accent-pink transition duration-300"
                >
                    Home
                </Link>
                <Link
                    href='/post/about-me'
                    className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                >
                    About Me
                </Link>
                <div
                    className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                    onClick={() => {
                        setMenuOpen(false)
                        setRightSidePanelOpen(true)
                        setRightSidePanelContent(RightSidePanelContent.Certificates)
                    }}
                >
                    Certficates
                </div>
                <div
                    className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                    onClick={() => {
                        setMenuOpen(false)
                        setRightSidePanelOpen(true)
                        setRightSidePanelContent(RightSidePanelContent.CtfBadges)
                    }}
                >
                    CTF & Challenges
                </div>
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href='/resume.pdf'
                    className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300"
                >
                    Download Resume
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
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href='/resume.pdf'
                >Resume
                </a>
            </NavBar>
        </>
    )
}
