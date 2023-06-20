import { ReactNode } from "react"

interface Props {
    isOpen: boolean
    children?: ReactNode
    onClose: () => void
}

export default function RightSidePanel({
    isOpen: isRightPanelOpen,
    children,
    onClose,
}: Props) {
    return (
        <div>
            <div
                className={`${isRightPanelOpen ? '' : 'hidden'} fixed top-0 left-0 min-h-screen min-w-full bg-black/75 z-40`}
                onClick={onClose}
            />
            <div
                className={
                    `${isRightPanelOpen ? 'right-0' : 'right-[-100%]'} bg-card-grey fixed right-0 top-0 w-[75%] min-h-screen ease-in-out duration-300 max-w-md z-50 max-h-screen overflow-scroll scrollbar-hide`
                }
            >
                <div className="p-4">
                    <button
                        onClick={onClose}
                        aria-label="Toggle Menu"
                        type="button"
                        className="inline-flex items-center justify-center p-2  text-white hover:text-accent-pink transition duration-150 ease-in-out"
                    >
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="px-12 py-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
