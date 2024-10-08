"use client";

import pageLinks from "@/constants/pageLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Adjusted import path

const Header = ({ children, includeBackground }: { children: React.ReactNode, includeBackground: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const currentIndex = pageLinks.findIndex(link => link.href === pathname);
  const nextPage = pageLinks[(currentIndex + 1) % pageLinks.length].href;
  const prevPage = pageLinks[(currentIndex - 1 + pageLinks.length) % pageLinks.length].href;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {

    const handleRouteChangeStart = () => {
      setIsVisible(false);
    };

    handleRouteChangeStart();

  }, [pathname]);

  return (
    <div className={`${ isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"} max-w-[100%] md:max-w-[75%] lg:max-w-[50%] animate-header transition-all duration-1000 ease-in-outflex flex-col items-center justify-center `}>
    <header
      className={`${includeBackground ? "bg-primary rounded-lg shadow-lg glow-card" : ""}`} 
    >
      <div className="pageContent">{children}</div>
    </header>
    <div className="mt-8 z-10 flex justify-between">
        {pathname !== '/' && (
          <Link href={prevPage} className="flex items-center justify-center px-6 py-2 glow-btn shadow-lg rounded-lg bg-primary text-primary transition-colors duration-300">
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <p className="text-secondary text-xl hidden md:inline">Previous</p>
          </Link>
        )}
        {pathname !== '/contact' && (
          <Link href={nextPage} className="flex items-center justify-center px-6 py-2 glow-btn shadow-lg rounded-lg bg-primary text-primary transition-colors duration-300">
            <span className="sr-only">Continue</span>
            <p className="text-secondary text-xl hidden md:inline">Continue</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
