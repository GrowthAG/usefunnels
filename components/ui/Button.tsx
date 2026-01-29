import React from 'react';

export const Button: React.FC<{ children?: React.ReactNode; variant?: "primary" | "secondary" | "dark" | "outline"; className?: string; onClick?: () => void }> = ({ children, variant = "primary", className = "", onClick }) => {
    // Design Rules: font-space, uppercase, tracking-widest, rounded-sm
    const baseStyles = "inline-flex items-center justify-center font-bold font-space uppercase tracking-widest py-3.5 px-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-sm cursor-pointer relative overflow-hidden group active:scale-95";

    const variants = {
        primary: "bg-neon-green text-deep-black border-2 border-neon-green hover:shadow-[0_0_20px_rgba(27,252,79,0.5)] hover:text-deep-black",
        secondary: "bg-transparent text-deep-black border-2 border-deep-black hover:bg-deep-black hover:text-white",
        dark: "bg-deep-black text-neon-green border-2 border-deep-black hover:bg-transparent hover:text-deep-black",
        outline: "bg-transparent text-white border-2 border-white hover:bg-neon-green hover:border-neon-green hover:text-deep-black"
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            <span className="relative z-10">{children}</span>
        </button>
    );
};
