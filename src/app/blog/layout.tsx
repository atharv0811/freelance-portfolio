'use client'

import { Provider } from "react-redux";
import Sidebar from "./_components/sidebar"
import { ReactNode } from 'react';
import { store } from "@/store";

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <Provider store={store}>
            <div className="min-h-screen bg-[#f7fbfe]">
                <div className="max-w-[1200px] mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <main className="lg:w-2/3">
                            {children}
                        </main>
                        <aside className="lg:w-1/3">
                            <Sidebar />
                        </aside>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default BlogLayout