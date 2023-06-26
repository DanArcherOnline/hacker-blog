import { ReactNode } from 'react'

interface Props {
    isOpen: boolean
    setMenuOpen: (isOpen: boolean) => void
    setRightPanelOpen: (isOpen: boolean) => void
    children?: ReactNode
}

export default function SideNavMenu({
    isOpen: isMenuOpen,
    setMenuOpen: setMenuState,
    setRightPanelOpen: setRightPanelState,
    children
}: Props) {
    return (
        <div>
            <div
                className={`${isMenuOpen ? '' : 'hidden'} fixed top-0 left-0 min-h-screen min-w-full bg-black/75 z-40 md:hidden`}
                onClick={() => setMenuState(false)}
            />
            <div
                className={
                    `${isMenuOpen ? 'left-0' : 'left-[-100%]'} bg-card-grey fixed top-0 w-[75%] min-h-screen ease-in-out duration-300 max-w-md z-50 md:hidden`
                }
            >
                <div className="p-4 flex flex-col gap-4">
                    <button
                        onClick={() => setMenuState(false)}
                        aria-label="Toggle Menu"
                        type="button"
                        className="text-white hover:text-accent-pink transition duration-150 ease-in-out self-end"
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
                    <div>
                        <nav className="grid gap-y-8 p-4">
                            {children}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
