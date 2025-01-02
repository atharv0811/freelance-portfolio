'use client'

import { useState } from 'react'
import BlogList from './_components/blog-list'
import Sidebar from './_components/sidebar'

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <div className="min-h-screen bg-[#f7fbfe]">
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <main className="lg:w-2/3">
                        <BlogList searchQuery={searchQuery} />
                    </main>
                    <aside className="lg:w-1/3">
                        <Sidebar onSearch={handleSearch} />
                    </aside>
                </div>
            </div>
        </div>
    )
}







