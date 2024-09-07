'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Contact', href: '/contact' },
    ]
    
    const ArrowLeft = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
    );

    return (
        <>
            {/* Navigation Drawer */}
            <nav className={`fixed top-0 right-0 h-full bg-primary border-l border-accent transition-all duration-300 ease-in-out ${isOpen ? 'w-40' : 'w-0'}`}>
                <ul className={`flex flex-col items-start py-4 px-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                    {navItems.map((item) => (
                        <li key={item.name} className="py-2">
                            <Link
                                href={item.href}
                                className={`text-tertiary hover:text-accent transition-colors duration-200 px-2 py-1 ${
                                    pathname === item.href ? 'font-bold' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Square button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed right-0 bottom-[50px] w-12 h-12 bg-accent flex items-center justify-center focus:outline-none z-50 transition-all duration-300 ${isOpen ? 'transform -translate-x-40' : ''}`}
            >
                <span className={`text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ArrowLeft />
                </span>
            </button>
        </>
    )
}

export default MobileNavigation