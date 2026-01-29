
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
    id: string;
    title: string;
    subtitle: string;
    label: string; // The "WIKIMEE" equivalent
    quote: string;
    image: string;
}

interface WikimeeCarouselProps {
    items: CarouselItem[];
}

export const WikimeeCarousel: React.FC<WikimeeCarouselProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % items.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const currentItem = items[activeIndex];

    return (
        <div className="w-full bg-[#050505] py-20 lg:py-32 overflow-hidden border-t border-gray-900/50">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* LEFT: Image Area (Browser Mockup) */}
                    <div className="w-full lg:w-[65%] relative">
                        {/* Browser Window Frame */}
                        <div className="relative rounded-lg overflow-hidden border border-gray-800 bg-[#0f0f0f] shadow-2xl group">
                            {/* Browser Bar */}
                            <div className="h-8 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-50"></div>
                            </div>

                            {/* Main Image */}
                            <div className="aspect-[16/10] bg-black relative flex items-center justify-center p-1">
                                {items.map((item, index) => (
                                    <img
                                        key={item.id}
                                        src={item.image}
                                        alt={item.title}
                                        className={`absolute inset-0 w-full h-full object-contain object-top transition-all duration-700 transform ${index === activeIndex
                                            ? 'opacity-100 translate-x-0 scale-100'
                                            : index < activeIndex
                                                ? 'opacity-0 -translate-x-10 scale-95'
                                                : 'opacity-0 translate-x-10 scale-95'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Content Area */}
                    <div className="w-full lg:w-[35%] flex flex-col justify-center">
                        <div className="min-h-[300px] flex flex-col justify-between">

                            {/* Text Content */}
                            <div key={activeIndex} className="animate-fade-in-up">
                                <p className="text-gray-400 italic font-medium text-lg lg:text-xl leading-relaxed mb-12">
                                    "{currentItem.quote}"
                                </p>

                                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-space">
                                        {currentItem.title}
                                    </h3>
                                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-gray-500 uppercase">
                                        {currentItem.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex gap-4 mt-12">
                                <button
                                    onClick={handlePrev}
                                    className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all rounded-sm"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-12 h-12 flex items-center justify-center border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-900 transition-all rounded-sm"
                                    aria-label="Próximo"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
