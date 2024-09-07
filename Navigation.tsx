'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navigation = () => {
    const pathname = usePathname()


    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Interests', href: '/interests' },
    ]


    return (
        <nav className={`bg-primary fixed top-0 left-0 w-full z-10 border-b border-accent py-4 px-8 flex justify-between transition-all duration-500 ease-in-out`}>
            <Link href="/">
            <img height={50} width={50} src="/JC-logo-2020-filled.svg" alt="JC-logo-2020-filled" />
            </Link>
            <ul className="flex justify-end space-x-8 flex items-center">
                {navItems.map((item) => (
                    <li key={item.name} className="py-2">
                        <Link
                            href={item.href}
                            className={`text-tertiary hover:text-accent transition-colors duration-200 px-3 py-2 ${
                                pathname === item.href ? 'font-bold' : ''
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation