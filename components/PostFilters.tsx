"use client"

import { useState } from "react";
import CategoryFilterButton, { Category } from "./CategoryFilterButton";
import Searchbar from "./Searchbar";

interface Props {
    postsCount: Number
    onFilterChanged: (category: Category, searchTerm?: string) => void
}

export default function PostFilters({ postsCount, onFilterChanged }: Props) {
    const [category, setCategory] = useState<Category>(Category.All)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [categoryTitle, setCategoryTitle] = useState<String>("All")

    const toggleSelected = (selectedCategory: Category) => {
        if (category === selectedCategory) {
            setCategory(Category.All)
            setCategoryTitle(Category.All)
            onFilterChanged(Category.All, searchTerm)
        } else {
            setCategory(selectedCategory)
            setCategoryTitle(selectedCategory)
            onFilterChanged(selectedCategory, searchTerm)
        }
    }



    return (
        <div className="@container">
            <div className="flex flex-col py-6 px-4 lg:px-2 gap-2 @2xl:flex-row @2xl:justify-between @2xl:items-center">
                <div className="flex justify-between px-2 w-full">
                    <h2 className="text-3xl">{categoryTitle} (<span>{postsCount.toString()}</span>)</h2>
                    <div className="flex gap-4">
                        <CategoryFilterButton
                            onClick={() => toggleSelected(Category.Tutorial)}
                            category={Category.Tutorial}
                            selected={category === Category.Tutorial}
                        />
                        <CategoryFilterButton
                            onClick={() => toggleSelected(Category.CTF)}
                            category={Category.CTF}
                            selected={category === Category.CTF}
                        />
                        <CategoryFilterButton
                            onClick={() => toggleSelected(Category.General)}
                            category={Category.General}
                            selected={category === Category.General}
                        />
                    </div>
                </div>
                <Searchbar placeholder="Search for posts..." onSearch={(updatedSearchTerm) => {
                    setSearchTerm(updatedSearchTerm)
                    onFilterChanged(category, updatedSearchTerm)
                }} />
            </div>
        </div>
    )
}

