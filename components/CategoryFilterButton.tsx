import BulbIcon from "./BulbIcon"
import FlagIcon from "./FlagIcon"
import TutorialIcon from "./TutorialIcon"

export enum Category {
    Tutorial,
    CTF,
    General,
}

interface Props {
    category: Category
}

export default function CategoryFilterButton({ category }: Props) {
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
        <div className="flex items-center justify-center border-2 rounded-md w-10 h-10 border-card-content-grey text-card-content-grey hover:border-white hover:text-white">
            {renderIcon()}
        </div>
    )
}
