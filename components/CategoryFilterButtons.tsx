import CategoryFilterButton, { Category } from './CategoryFilterButton'

export default function CategoryFilterButtons() {
    return (
        <div className="flex gap-4">
            <CategoryFilterButton category={Category.Tutorial} />
            <CategoryFilterButton category={Category.CTF} />
            <CategoryFilterButton category={Category.General} />
        </div>
    )
}
