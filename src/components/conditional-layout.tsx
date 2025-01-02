'use client';

import Navbar from "@/components/navbar";
import UpperNavbar from "@/components/upper-navbar";
import ScrollToTop from "@/components/scroll-to-top";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isAdmin = pathname.startsWith('/admin')

    return (
        <>
            {!isAdmin && <UpperNavbar />}
            {!isAdmin && <Navbar />}
            <main className="min-h-screen mx-auto">
                {children}
                <ScrollToTop />
            </main>
            {!isAdmin && <footer className="border-t backdrop:blur py-9 supports-[backdrop-filter]:bg-background/60">
                <div className="max-w-[1200px] mx-auto px-4 text-center text-white flex items-center justify-between">
                    <p className="text-[#221b68]">© {new Date().getFullYear()} <a href="#" className="text-[#6930c3]">AK Web Developers</a>. All rights reserved.</p>
                    <div className="divide-x-2 divide-[#6930c3]">
                        <Link href="/sitemap.xml" className="text-[#221b68] pr-4">Sitemap</Link>
                        <Link href="" className="text-[#221b68] px-4">Privacy Policy</Link>
                        <Link href="" className="text-[#221b68] pl-4">Contact Us</Link>
                    </div>
                </div>
            </footer>}
        </>
    );
}
