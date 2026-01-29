
import React from 'react';

export const InfiniteLogoCarousel: React.FC<{ logos: string[] }> = ({ logos }) => {
    // Duplicate logos to ensure seamless scrolling
    const seamlessLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden relative bg-deep-black py-10 md:py-16 border-b border-gray-800">
            {/* Headline */}
            <div className="text-center mb-8">
                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-widest font-mono">
                    Empresas que confiam no FUNNELS
                </p>
            </div>

            {/* Gradient Fade Edges - Dark */}
            <div className="absolute bottom-0 left-0 w-16 md:w-32 h-24 bg-gradient-to-r from-deep-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-16 md:w-32 h-24 bg-gradient-to-l from-deep-black to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll hover:pause-animation w-max">
                {seamlessLogos.map((logo, index) => (
                    <div key={index} className="mx-6 md:mx-12 w-[100px] md:w-[160px] h-10 md:h-12 flex items-center justify-center">
                        <img
                            src={logo}
                            alt={`Partner ${index}`}
                            className="w-full h-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 will-change-transform"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
