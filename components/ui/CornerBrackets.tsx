import React from 'react';

export const CornerBrackets: React.FC<{ className?: string }> = ({ className = "text-deep-black" }) => (
    <React.Fragment>
        <svg className={`absolute top-0 left-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M1 10V1H10" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        <svg className={`absolute top-0 right-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M9 10V1H0" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        <svg className={`absolute bottom-0 left-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M1 0V9H10" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        <svg className={`absolute bottom-0 right-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M9 0V9H0" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
    </React.Fragment>
);
