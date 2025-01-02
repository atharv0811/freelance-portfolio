import Link from 'next/link'
import { HomeIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-[url('/about-bg.webp')] bg-no-repeat bg-cover">
            <h1 className="text-6xl font-bold text-black mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-8 text-center max-w-md">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
            </p>
            <Button variant='outline' className='border-[#9253f7] bg-transparent hover:bg-[#6930c3] hover:text-white transition-colors duration-500'>
                <Link href="/" className='flex items-center gap-1'>
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
        </div>
    )
}

