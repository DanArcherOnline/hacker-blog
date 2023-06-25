import BulbIcon from "./BulbIcon"
import FlagIcon from "./FlagIcon"
import TutorialIcon from "./TutorialIcon"

export enum Category {
    Tutorial = "Tutorial",
    CTF = "Walkthrough",
    General = "General",
    All = "All",
}

interface Props {
    selected?: boolean
    category: Category
    onClick: () => void
}

export default function CategoryFilterButton({ category, selected, onClick }: Props) {
    const renderIcon = () => {
        switch (category) {
            case Category.Tutorial:
                return (<TutorialIcon />)
            case Category.CTF:
                return (<FlagIcon />)
            case Category.General:
                return (<BulbIcon />)
        }
    }
    return (
        <div onClick={onClick} className={`flex items-center justify-center border-2 rounded-md w-10 h-10 border-card-content-grey text-card-content-grey hover:border-accent-pink hover:text-accent-pink ${selected && 'border-white text-white'} hover:scale-110 transform duration-300`}>
            {renderIcon()}
        </div>
    )
}
