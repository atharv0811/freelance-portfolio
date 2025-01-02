'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'

const TopBar = () => {
    const pathname = usePathname();

    return (
        <Card className='rounded-md p-3 my-2 flex items-center justify-between'>
            <SidebarTrigger />
            <div>{pathname === '/admin' ? 'Dashboard' : 'Create Post'}</div>
            <div className='flex items-center gap-4'>
                <Bell className='cursor-pointer' />
                <Avatar className='cursor-pointer'>
                    <AvatarFallback>A</AvatarFallback>
                </Avatar>
            </div>
        </Card>
    )
}

export default TopBar