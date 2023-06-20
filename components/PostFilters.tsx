import CategoryFilterButtons from "./CategoryFilterButtons";
import Searchbar from "./Searchbar";

export default function PostFilters() {
    return (
        <div className="@container">
            <div className="flex flex-col py-6 px-4 lg:px-2 gap-2 @2xl:flex-row @2xl:justify-between @2xl:items-center">
                <div className="flex justify-between px-2 w-full">
                    <h2 className="text-3xl">Tutorials (<span>2</span>)</h2>
                    <CategoryFilterButtons />
                </div>
                <Searchbar />
            </div>
        </div>
    )
}

