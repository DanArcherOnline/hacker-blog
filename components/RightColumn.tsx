import { CTFBadge } from "@/types/types";
import CTFBadges from "./CTFBadges";

interface Props {
    ctfBadges: CTFBadge[]
    filterCtfBadges: (searchTerm: string) => void
}

export function RightColumn({ ctfBadges, filterCtfBadges }: Props) {
    return <div className="hidden p-4 pl-2 xl:flex flex-col col-span-2 min-h-screen pt-[4.5rem] gap-4 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col bg-card-grey w-auto p-6 space-y-4 rounded drop-shadow-lg">
            <CTFBadges ctfBadges={ctfBadges} onSearch={filterCtfBadges} />
        </div>
    </div>;
}
