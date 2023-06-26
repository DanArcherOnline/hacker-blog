"use client"
import Link from "next/link";
import { useState } from "react";
import NavBar from "./NavBar";
import RightSidePanel from "./RightSidePanel";
import SideNavMenu from "./SideNavMenu";

interface Props {
    isAboutMePage: boolean
}

export function PostNavigationComponents({ isAboutMePage }: Props) {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isRightPanelOpen, setRightSidePanelOpen] = useState<boolean>(false)

    return <>
        <SideNavMenu isOpen={isMenuOpen} setMenuOpen={setMenuOpen} setRightPanelOpen={setRightSidePanelOpen}>
            <Link href='/' className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300">
                Home
            </Link>
            <Link href='/post/about-me' className={`${isAboutMePage && 'text-accent-pink hover:text-white'} -m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300`}>
                About Me
            </Link>
        </SideNavMenu>
        <RightSidePanel isOpen={isRightPanelOpen} onClose={() => setRightSidePanelOpen(false)} />
        <NavBar isOpen={isMenuOpen} setMenuOpen={setMenuOpen} setRightSidePanelOpen={setRightSidePanelOpen}>
            <Link href='/' >
                Home
            </Link>
            <Link href='/post/about-me' className={`${isAboutMePage && 'text-accent-pink'}`}>
                About Me
            </Link>
        </NavBar>
    </>;
}
