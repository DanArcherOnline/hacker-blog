import { Certificate } from "@/types/types";
import CertificatesCard from "./CertificatesCard";
import ProfileCard from "./ProfileCard";

interface Props {
    certificates: Certificate[]
}

export function LeftColumn({ certificates }: Props) {
    return <div className="hidden p-4 pr-2 lg:flex flex-col lg:col-span-3 xl:col-span-2 pt-[4.5rem] gap-4 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
        <ProfileCard />
        <CertificatesCard certificates={certificates} />
    </div>;
}
