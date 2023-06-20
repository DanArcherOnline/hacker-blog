import Image from "next/image"
import Button from "./Button"

export default function CertificateItem() {
    return (
        <div className="flex flex-col">
            <hr className="border-page-bg-grey" />
            <div className="pt-8">
                <div className="flex items-center gap-2 mb-4">
                    <div className="relative w-24 h-24">
                        <Image
                            src={"/../public/test_img.jpeg"}
                            alt={"Certificate Image"}
                            fill
                            className=" object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-black text-white text-lg">OSCP</h1>
                        <h2 className="font-light text-white text-base">Offensive Security</h2>
                    </div>
                </div>
                <Button full >View Online</Button>
            </div>
        </div>
    )
}
