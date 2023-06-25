import Image from 'next/image'
import GithubIcon from './GithubIcon'
import InstagramIcon from './InstagramIcon'
import LinkedInIcon from './LinkedInIcon'
import THMBadge from './THMBadge'

export default function ProfileCard() {
    return (
        <div className="rounded drop-shadow-lg">
            <div className="relative rounded-t h-52 overflow-clip">
                <Image
                    src="/../public/profile_card_top.png"
                    alt=""
                    fill
                />
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%] h-32 w-32 rounded-full border-2 border-purple-700 drop-shadow-xl overflow-clip hover:scale-110 group-hover:drop-shadow-md transform duration-300">
                    <Image
                        src="/../public/profile_img.jpeg"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
            <div className="flex flex-col items-center bg-white rounded-b -mt-6 pb-8 pt-12 px-4">
                <h1 className="font-thin text-3xl text-card-grey">Dan Archer</h1>
                <h2 className=" font-extralight text-lg text-accent-pink mb-4">Cyber Security Specialist</h2>
                <h3 className="font-light text-sm text-card-grey mb-2">@danarcheronline</h3>
                <div className="flex gap-2 mb-4">
                    <a href='https://www.instagram.com/danarcheronline/'><InstagramIcon className="text-card-grey h-6 w-6 hover:scale-110 transform duration-300 hover:text-accent-pink" /></a>
                    <a href='https://www.linkedin.com/in/danarcheronline/'><LinkedInIcon className="text-card-grey h-6 w-6 hover:scale-110 transform duration-300 hover:text-accent-pink" /></a>
                    <a href='https://github.com/DanArcherOnline'><GithubIcon className="text-card-grey h-6 w-6 hover:scale-110 transform duration-300 hover:text-accent-pink" /></a>
                </div>
                <THMBadge />
            </div>
        </div>
    )
}
