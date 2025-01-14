'use client'

import SearchBox from './search-box'
import FeaturedPosts from './featured-posts'
import Categories from './categories'
import Tags from './tags'

interface SidebarProps {
    onSearch: (query: string) => void
}

export default function Sidebar({ onSearch }: SidebarProps) {
    return (
        <div className="space-y-8">
            <SearchBox onSearch={onSearch} />
            <FeaturedPosts />
            <Categories />
            <Tags />
        </div>
    )
}





