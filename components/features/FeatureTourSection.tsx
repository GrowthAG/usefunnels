import React, { useState } from 'react';
import { Container, Reveal } from '../ui';

export interface TourSlide {
    src: string;
    title: string;
    description: string;
    details?: string[]; // Bullet points explicativos adicionais
}

interface FeatureTourSectionProps {
    title: string;
    subtitle: string;
    badge: string;
    slides: TourSlide[];
    browserUrl?: string;
}

export const FeatureTourSection: React.FC<FeatureTourSectionProps> = ({
    title,
    subtitle,
    badge,
    slides,
    browserUrl = 'app.usefunnels.io'
}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlide = slides[activeSlide];

    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100 relative">
            <Container className="px-4 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                    <Reveal>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">
                            {badge}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 tracking-tight text-deep-black leading-tight">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light text-balance">
                            {subtitle}
                        </p>
                    </Reveal>
                </div>

                {/* Tour Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Slider - Left (Browser Mockup) */}
                    <div className="order-1 relative group">
                        <div className="relative shadow-2xl rounded-lg overflow-hidden border border-[#222]">
                            {/* Browser Header - Dark Mode */}
                            <div className="bg-[#111] border-b border-[#222] px-3 py-2 flex items-center gap-2">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-[#000] rounded-md px-3 py-1 text-[10px] text-gray-500 font-mono w-full max-w-sm text-center border border-[#222]">
                                        {browserUrl}
                                    </div>
                                </div>
                                <div className="w-12"></div>
                            </div>

                            {/* Slides Container */}
                            <div className="relative aspect-[16/10] bg-black">
                                {slides.map((slide, index) => (
                                    <img
                                        key={index}
                                        src={slide.src}
                                        alt={`${slide.title} - visualização`}
                                        className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-out ${
                                            index === activeSlide
                                                ? 'opacity-100 scale-100 z-10'
                                                : 'opacity-0 scale-95 z-0'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Slide Counter */}
                            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-mono border border-gray-700">
                                {activeSlide + 1} / {slides.length}
                            </div>
                        </div>
                    </div>

                    {/* Text Content - Right */}
                    <div className="order-2 text-left pl-0 lg:pl-4 flex flex-col justify-center h-full">
                        <Reveal key={activeSlide}>
                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-deep-black mb-4 font-space text-balance">
                                {currentSlide.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed mb-6 text-balance border-l-4 border-neon-green pl-6">
                                {currentSlide.description}
                            </p>

                            {/* Details (if provided) */}
                            {currentSlide.details && currentSlide.details.length > 0 && (
                                <ul className="space-y-3 mb-8">
                                    {currentSlide.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <svg className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="leading-relaxed">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Navigation Arrows */}
                            <div className="flex gap-3 mt-4">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 border-2 border-gray-200 text-deep-black flex items-center justify-center hover:bg-deep-black hover:text-white hover:border-deep-black transition-all rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
                                    aria-label="Slide anterior"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 border-2 border-gray-200 text-deep-black flex items-center justify-center hover:bg-deep-black hover:text-white hover:border-deep-black transition-all rounded-full"
                                    aria-label="Próximo slide"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dot Indicators */}
                            <div className="flex gap-2 mt-6">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSlide(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            index === activeSlide
                                                ? 'w-8 bg-neon-green'
                                                : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                        aria-label={`Ir para slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    );
};
