"use client"

import { CTFBadge } from "@/types/types";
import { useState } from "react";
import CTFItem from "./CTFItem";
import CTFProvidedIcon from "./CTFProvidedIcon";
import Searchbar from "./Searchbar";

interface Props {
    ctfBadges: CTFBadge[]
    onSearch: (searchTerm: string) => void
}

export default function CTFBadges({ ctfBadges, onSearch }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('')
    return (
        <div>
            <h1 className="font-black text-xl ml-2 mb-1">CTF & Challenges <span>({ctfBadges.length})</span></h1>
            <p className="font-light text-base ml-2 mb-4">Click items with the <CTFProvidedIcon className="inline mb-1" /> icon to view the walkthrough</p>
            <Searchbar onSearch={onSearch} />

            <div className=" divide-y divide-page-bg-grey">
                {ctfBadges.map((ctfBadge, i) => <CTFItem key={i} ctfBadge={ctfBadge} />)}
            </div>
        </div>
    )
}
