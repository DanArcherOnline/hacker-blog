"use client"
import Link from "next/link";
import { useState } from "react";
import NavBar from "./NavBar";
import RightSidePanel from "./RightSidePanel";
import SideNavMenu from "./SideNavMenu";


export function PostNavigationComponents() {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isRightPanelOpen, setRightSidePanelOpen] = useState<boolean>(false)

    return <>
        <SideNavMenu isOpen={isMenuOpen} setMenuOpen={setMenuOpen} setRightPanelOpen={setRightSidePanelOpen}>
            <Link href='/' className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300">
                <div>Home</div>
            </Link>
            <Link href='#' className="-m-4 p-4 flex items-center space-x-3 rounded-md hover:bg-accent-pink transition duration-300">
                <div>About Me</div>
            </Link>
        </SideNavMenu>
        <RightSidePanel isOpen={isRightPanelOpen} onClose={() => setRightSidePanelOpen(false)} />

        {
            /* Page Content */
        }
        <NavBar isOpen={isMenuOpen} setMenuOpen={setMenuOpen} setRightSidePanelOpen={setRightSidePanelOpen}>
            <Link href='/' className="text-accent-pink">Home
            </Link>
            <Link href='#' className="">About Me
            </Link>
        </NavBar>
    </>;
}
