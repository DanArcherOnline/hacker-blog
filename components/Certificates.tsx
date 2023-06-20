import CertificateItem from './CertificateItem'

export default function Certificates() {
    return (
        <div className="flex flex-col bg-card-grey w-auto p-6 space-y-4 rounded drop-shadow-lg shadow-white">
            <h1 className="font-black text-xl ml-2">Certificates (3)</h1>
            <CertificateItem />
            <CertificateItem />
            <CertificateItem />
        </div>
    )
}
