"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const Navbar = () => {
    const { isScrolled, isVisible } = useScrollPosition();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`bg-white w-full z-50 transition-all duration-300 
                ${isScrolled
                    ? "fixed top-0 left-0 right-0 shadow-lg animate-slideDown"
                    : "top-0 left-0 right-0"
                }
                ${!isVisible && isScrolled ? "-translate-y-full" : "translate-y-0"}
            `}
        >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-[#6930c3] text-3xl font-bold transition-colors duration-300"
                        >
                            ATHARV
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About" },
                            { href: "/#services", label: "Services" },
                            { href: "/#projects", label: "Projects" },
                            { href: "/plans", label: "Plans" },
                            { href: "/blog", label: "Blog" },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-base text-gray-600 cursor-pointer font-semibold hover:text-[#6930c3] transition-all duration-200"
                            >
                                {label}
                            </Link>
                        ))}

                        <button className="relative px-4 py-2 border border-gray-500 rounded-3xl hover:bg-[#6930c3] hover:text-white transition-colors duration-500">
                            <a
                                href="https://wa.me/919370755714?text=Hello, How can I help you ?"
                                target="_blank"
                                className="font-medium"
                            >
                                Connect On WhatsApp
                            </a>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative w-10 h-10 focus:outline-none transition-colors duration-300 text-black"
                            aria-label="Toggle menu"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Menu
                                    className={`h-6 w-6 transition-all duration-300 transform ${isMobileMenuOpen
                                        ? "opacity-0 rotate-90 scale-0"
                                        : "opacity-100 rotate-0 scale-100"
                                        }`
                                    }
                                />
                                <X
                                    className={`absolute h-6 w-6 transition-all duration-300 transform ${isMobileMenuOpen
                                        ? "opacity-100 rotate-0 scale-100"
                                        : "opacity-0 -rotate-90 scale-0"
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[22rem] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About" },
                            { href: "/#services", label: "Services" },
                            { href: "/#projects", label: "Projects" },
                            { href: "/plans", label: "Plans" },
                            { href: "/blog", label: "Blog" },
                        ].map(({ href, label }, index) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={handleNavClick}
                                className={`text-base text-gray-600 block px-3 py-2 rounded-md font-medium hover:bg-indigo-50 transform transition-all duration-300 delay-${index * 100} ${isMobileMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-4 opacity-0"
                                    }`
                                }
                            >
                                {label}
                            </Link>
                        ))}

                        <button className="relative px-4 py-2 border border-gray-500 rounded-3xl hover:bg-[#6930c3] hover:text-white transition-colors duration-500">
                            <a
                                href="https://wa.me/919370755714?text=Hello, How can I help you ?"
                                target="_blank"
                                className="font-medium"
                            >
                                Connect On WhatsApp
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
