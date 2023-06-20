import Image from 'next/image'
import Script from 'next/script'

function THMBadge() {
    return (
        <div>
            <Script src="https://tryhackme.com/badge/1380671" />
            <Image
                src="https://tryhackme-badges.s3.amazonaws.com/DanArcherOnline.png"
                alt="TryHackMe"
                width={249}
                height={58}
            />

        </div>
    )
}

export default THMBadge