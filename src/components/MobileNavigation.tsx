'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import pageLinks from '@/constants/pageLinks'
const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const ArrowUp = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
    );

    return (
        <>
            {/* Navigation Drawer */}
            <nav className={`z-10 fixed bottom-0 left-0 right-0 bg-primary border-t border-accent transition-all duration-300 ease-in-out ${isOpen ? 'h-24' : 'h-0'}`}>
                <ul className={`flex flex-row justify-center items-center py-4 px-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    {pageLinks.map((item) => (
                        <li key={item.title} className="mx-2">
                            <Link
                                href={item.href}
                                className={`text-tertiary hover:text-accent transition-colors duration-200 px-4 py-2 rounded-full border border-accent ${
                                    pathname === item.href ? 'bg-accent text-primary font-bold' : 'bg-primary'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Square button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed left-1/2 transform -translate-x-1/2 bottom-0 w-12 h-12 bg-accent flex items-center justify-center focus:outline-none z-50 transition-all duration-300 ${isOpen ? 'translate-y-[-6rem]' : ''}`}
            >
                <span className={`text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ArrowUp />
                </span>
            </button>
        </>
    )
}

export default MobileNavigation