import React from 'react';

export const Container: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`w-[95%] max-w-[1400px] mx-auto px-4 md:px-12 relative z-10 ${className}`}>{children}</div>
);
