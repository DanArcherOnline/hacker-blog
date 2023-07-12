import { urlFor } from "@/sanity/sanity-utils"
import { Certificate } from "@/types/types"
import Image from "next/image"
import Button from "./Button"

interface Props {
    certificate: Certificate
}

export default function CertificateItem({ certificate }: Props) {
    return (
        <div className="flex flex-col group">
            <hr className="border-page-bg-grey" />
            <div className="pt-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-24 h-24">
                        <Image
                            src={urlFor(certificate.logo).url()}
                            alt={`${certificate.company}'s logo for the ${certificate.name} certificate`}
                            fill
                            className="object-contain group-hover:scale-110 group-hover:drop-shadow-md transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <h1 className="font-black text-white text-lg">{certificate.name}</h1>
                        <h2 className="font-light text-white text-base">{certificate.company}</h2>
                    </div>
                </div>
                <Button href={certificate.link} full >View Online</Button>
            </div>
        </div>
    )
}
