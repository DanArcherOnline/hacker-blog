import CertificateItem from "./CertificateItem";

export default function Certificates() {
    return (
        <div className="space-y-4 ">
            <h1 className="font-black text-xl ml-2">Certificates (3)</h1>
            <CertificateItem />
            <CertificateItem />
            <CertificateItem />
        </div>
    )
}
