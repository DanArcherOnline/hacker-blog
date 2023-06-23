import { Certificate } from '@/types/types'
import Certificates from './Certificates'

interface Props {
    certificates: Certificate[]
}

export default function CertificatesCard({ certificates }: Props) {
    return (
        <div className="flex flex-col bg-card-grey w-auto p-6 rounded drop-shadow-lg shadow-white">
            <Certificates certificates={certificates} />
        </div>
    )
}
