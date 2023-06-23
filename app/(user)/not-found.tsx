import Button from "@/components/Button";

export default function NotFound() {
    return (
        <div className="flex font-lato bg-page-bg-grey h-screen w-screen items-center justify-center">
            <div className='flex flex-col items-center w-[80%] py-20 space-y-4 bg-card-grey rounded'>
                <p className="text-[8rem] text-white/50 leading-[8rem]">404</p>
                <p className="text-4xl">PAGE NOT FOUND</p>
                <p className="text-sml text-accent-pink">You seem lost mate 😅</p>
                <Button href="/">Back To Home?</Button>
            </div>
        </div>
    )
}
