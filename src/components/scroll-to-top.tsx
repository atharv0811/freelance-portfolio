'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            className={`fixed bottom-4 right-4 rounded-full p-3 bg-[#6930c3] hover:bg-[#6930c3]/90 transition-all duration-300 shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <ArrowUp className="h-6 w-6 text-white" />
        </button>
    )
}

export default ScrollToTop

