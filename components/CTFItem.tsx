import Image from "next/image"
import CTFProvidedIcon from "./CTFProvidedIcon"

export default function CTFItem() {
    return (
        <div className="flex flex-col py-4">
            <div className="flex items-center gap-2">
                <div className="relative w-24 h-24">
                    <Image
                        src={"/../public/test_img.jpeg"}
                        alt={"Certificate Image"}
                        fill
                        className="object-contain"
                    />
                    <CTFProvidedIcon className="w-6 h-6 absolute bottom-2 right-2 drop-shadow-lg" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-black text-white text-lg">cat linux.txt</h1>
                    <h2 className="font-light text-white text-base">CTF Event</h2>
                    <h3 className="font-light text-xs text-accent-pink">Try Hack Me</h3>
                </div>
            </div>

        </div>
    )
}
