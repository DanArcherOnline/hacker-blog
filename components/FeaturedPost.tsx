import Button from "./Button";

export default function FeaturedPost() {
    return (
        <div className="@container drop-shadow-xl bg-dragon-img bg-cover bg-center min-w-full rounded">
            <div className="bg-black/60 p-4 @xl:p-8 rounded @xl:bg-transparent @xl:bg-gradient-to-r @xl:from-black/75 @xl:from-25% @xl:to-transparent @xl:pr-[40%]">
                <h1 className="font-black text-4xl mb-2">Slovenias DragonHack convention and what to prepare for</h1>
                <p className="text-md mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in Ut et massa mi...</p>
                <Button>Read Now</Button>
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center px-4 py-1 border-white border-solid border-2 rounded-full text-xs font-bold">CTF</div>
                    <div className="flex items-center px-4 py-1 border-white border-solid border-2 rounded-full text-xs font-bold">RED TEAMING</div>
                    <div className="flex items-center px-4 py-1 border-white border-solid border-2 rounded-full text-xs font-bold">CONVENTION</div>
                    <div className="flex items-center px-4 py-1 border-white border-solid border-2 rounded-full text-xs font-bold">HACKATHON</div>
                    <div className="flex items-center px-4 py-1 border-white border-solid border-2 rounded-full text-xs font-bold">DRAGONHACK</div>
                </div>
            </div>
        </div>
    )
}
