"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = ({ children, includeBackground }: { children: React.ReactNode, includeBackground: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

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
    <header
      className={`${includeBackground ? "bg-primary rounded-lg shadow-lg glow-card" : ""} animate-header transition-all duration-1000 ease-in-out max-w-[50%] ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`} // Removed text-lg here
    >
      <div className="pageContent">{children}</div>
    </header>
  );
};

export default Header;
