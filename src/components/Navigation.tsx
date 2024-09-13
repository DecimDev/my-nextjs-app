'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import navItems from '@/constants/pageLinks';
import Image from 'next/image';

const Navigation = () => {
    const pathname = usePathname()

    return (
        <nav className={`bg-primary top-0 left-0 w-full z-10 border-b border-accent py-4 px-8 flex justify-center md:justify-between transition-all duration-500 ease-in-out`}>
            <Link href="/">
            <Image src="/JC-logo-2020-filled.svg" alt="DecimDev Logo" width={50} height={50} />
            </Link>
            <ul className="justify-center md:justify-end xs:space-x-2 md:space-x-8 flex items-center">
                {navItems.map((item, i) => (
                    <li key={i} className="py-2" id={`${item.title}-nav-item`}>
                        <Link
                            href={item.href}
                            className={`text-tertiary hover:text-accent transition-colors duration-200 px-3 py-2 ${
                                pathname === item.title ? 'font-bold' : ''
                            }`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation