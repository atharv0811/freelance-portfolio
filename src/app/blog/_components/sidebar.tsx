'use client'

import SearchBox from './search-box'
import FeaturedPosts from './featured-posts'
import Categories from './categories'
import Tags from './tags'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
    const path = usePathname();

    return (
        <div className="space-y-8">
            {path === "/blog" && <SearchBox />}
            <FeaturedPosts />
            <Categories />
            <Tags />
        </div>
    )
}





