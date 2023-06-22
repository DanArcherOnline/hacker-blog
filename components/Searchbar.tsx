"use client"

import { useState } from "react"


interface Props {
    onSearch: (searchTerm: string) => void
}

export default function Searchbar({ onSearch }: Props) {
    const [searchText, setSearchText] = useState<string>("")

    return (
        <form className="relative">
            <div className="w-full @2xl:w-60 rounded-full bg-page-bg-grey border-card-content-grey border-2 py-2 px-4">
                <input
                    className="bg-transparent border-none outline-none placeholder:text-white font-black text-sm"
                    type="search"
                    placeholder="Search for posts..."
                    value={searchText}
                    onChange={(e) => {
                        const searchTerm = e.target.value
                        setSearchText(searchTerm)
                        onSearch(searchTerm)
                    }}
                />
                <button className="absolute right-4 text-card-content-grey hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </form>
    )
}
