
import React from 'react';

export const InfiniteLogoCarousel: React.FC<{ logos: string[] }> = ({ logos }) => {
    // Duplicate logos to ensure seamless scrolling
    const seamlessLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden relative bg-white py-8 md:py-12 border-b border-gray-100">
            {/* Gradient Fade Edges - Subtle */}
            <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll hover:pause-animation w-max">
                {seamlessLogos.map((logo, index) => (
                    <div key={index} className="mx-6 md:mx-12 w-[100px] md:w-[160px] h-10 md:h-12 flex items-center justify-center">
                        <img
                            src={logo}
                            alt={`Partner ${index}`}
                            className="w-full h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110 will-change-transform"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
