
export default function MainContentColumn({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col col-span-9 lg:col-span-6 xl:col-span-5 pt-[4.5rem] lg:pt-[4.5rem] p-2 lg:p-4 lg:pl-2 xl:px-2 max-h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
            {children}
        </div>

    )
}
