import React from 'react';

export const Section: React.FC<{ id?: string, className?: string, children?: React.ReactNode }> = ({ id, className = "bg-pure-white text-deep-black", children }) => (
    // Design Rules: py-24 md:py-32 for premium spacing
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
        {children}
    </section>
);
