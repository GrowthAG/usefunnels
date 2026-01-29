import React from 'react';

export const TechBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    // Design Rules: font-mono, tracking-[2px] (widest), uppercase
    <div className={`font-mono text-[10px] tracking-[2px] uppercase inline-block border border-deep-black/10 px-2 py-1 bg-gray-50 text-gray-500 rounded-sm ${className}`}>
        {children}
    </div>
);
