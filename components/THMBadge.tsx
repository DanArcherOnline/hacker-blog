import Image from 'next/image'
import Script from 'next/script'

function THMBadge() {
    return (
        <a href='https://tryhackme.com/p/DanArcherOnline' className='w-full block hover:scale-110 group-hover:drop-shadow-md transform duration-300'>
            <Script src="https://tryhackme.com/badge/1380671" />
            <div className='relative h-12 w-full'>
                <Image
                    src="https://tryhackme-badges.s3.amazonaws.com/DanArcherOnline.png"
                    alt="TryHackMe"
                    className='object-contain'
                    // width={249}
                    // height={58}
                    fill
                />
            </div>
        </a>
    )
}

export default THMBadge