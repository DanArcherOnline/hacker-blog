import Image from "next/image"
import Tag from "./Tag"
import TutorialIcon from "./TutorialIcon"
export default function PostCard() {
    return (

        <div className="bg-card-grey rounded p-6 break-inside-avoid-column drop-shadow-lg">
            <div className="relative w-full h-52 mb-4">
                <Image
                    src='/../public/test_img.jpeg'
                    alt='a dragon'
                    className="object-cover rounded-3xl drop-shadow-lg"
                    fill
                />
            </div>
            <div className="flex gap-2 items-center mb-2">
                <div className="w-6 h-6">
                    <TutorialIcon />
                </div>
                <h3 className="font-normal text-xl">How to phish a target with GoPhish</h3>
            </div>
            <p className="font-normal text-base text-body-text-grey mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in Ut et massa mi...</p>
            <div className="flex flex-wrap gap-2">
                <Tag>CTF</Tag>
                <Tag>RED TEAMING</Tag>
                <Tag>CONVENTION</Tag>
                <Tag>HACKATHON</Tag>
                <Tag>DRAGONHACK</Tag>
            </div>
        </div>

    )
}
