"use client"

import { CTFBadge } from "@/types/types";
import { useState } from "react";
import CTFItem from "./CTFItem";
import Searchbar from "./Searchbar";

interface Props {
    ctfBadges: CTFBadge[]
    onSearch: (searchTerm: string) => void
}

export default function CTFBadges({ ctfBadges, onSearch }: Props) {
    const [searchTerm, setSearchTerm] = useState<string>('')
    return (
        <div>
            <h1 className="font-black text-xl ml-2">CTF & Challenges <span>({ctfBadges.length})</span></h1>
            <Searchbar onSearch={onSearch} />

            <div className=" divide-y divide-page-bg-grey">
                {ctfBadges.map((ctfBadge, i) => <CTFItem key={i} ctfBadge={ctfBadge} />)}
            </div>
        </div>
    )
}
