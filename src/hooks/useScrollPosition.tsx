import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled past threshold
            setIsScrolled(currentScrollY > 80);

            // Show/hide navbar based on scroll direction
            setIsVisible(currentScrollY <= 80 || currentScrollY < lastScrollY);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return { isScrolled, isVisible };
}