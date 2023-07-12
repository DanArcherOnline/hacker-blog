import { Certificate } from "@/types/types";
import CertificateItem from "./CertificateItem";

interface Props {
    certificates: Certificate[]
}

export default function Certificates({ certificates }: Props) {
    return (
        <div className="space-y-4 ">
            <h1 className="font-black text-xl ml-2">Certificates ({certificates.length})</h1>
            {certificates.map((certificate, i) => <CertificateItem key={i} certificate={certificate} />)}
        </div>
    )
}
