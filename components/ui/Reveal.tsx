import React, { useState, useEffect, useRef } from 'react';

export const Reveal: React.FC<{ children?: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.disconnect();
            }
        }, { threshold: 0.1, rootMargin: '50px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`transform transition-all duration-1000 ease-out will-change-transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
            {children}
        </div>
    );
};
