import React, { useState, useEffect } from 'react';

interface ShowcaseItem {
    id: string;
    title: string;
    subtitle: string;
    label: string;
    quote: string;
    image: string;
}

interface AgentsShowcaseProps {
    items: ShowcaseItem[];
}

export const AgentsShowcase: React.FC<AgentsShowcaseProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, items.length]);

    const currentItem = items[activeIndex];

    return (
        <div className="w-full bg-deep-black py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-[0.03] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(27,252,79,0.03),_transparent_60%)] pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Inteligência Artificial</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-space mb-4 tracking-tight text-white leading-none">
                        A Era dos Agentes.
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Não apenas ferramentas. Inteligência que trabalha por você 24/7.
                    </p>
                </div>

                {/* Main Content - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: Thumbnail Grid + Content */}
                    <div className="space-y-8">
                        {/* Active Item Content */}
                        <div className="mb-12" key={activeIndex}>
                            <div className="animate-fade-in-up">
                                <span className="inline-block px-3 py-1 bg-neon-green/10 text-neon-green text-xs font-mono font-bold rounded-sm mb-4 border border-neon-green/20">
                                    {currentItem.label}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 font-space">
                                    {currentItem.title}
                                </h3>
                                <p className="text-sm font-mono tracking-wider text-gray-500 uppercase mb-6">
                                    {currentItem.subtitle}
                                </p>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    {currentItem.quote}
                                </p>
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="grid grid-cols-3 gap-4">
                            {items.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    onMouseLeave={() => setIsAutoPlaying(true)}
                                    className={`group relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                        index === activeIndex
                                            ? 'border-neon-green shadow-[0_0_20px_rgba(27,252,79,0.3)] scale-105'
                                            : 'border-gray-800 hover:border-gray-700'
                                    }`}
                                >
                                    {/* Thumbnail Image */}
                                    <div className="absolute inset-0 bg-gray-900">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className={`w-full h-full object-cover transition-all duration-300 ${
                                                index === activeIndex
                                                    ? 'opacity-100 scale-100'
                                                    : 'opacity-40 scale-95 grayscale group-hover:opacity-70 group-hover:scale-100'
                                            }`}
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 ${
                                        index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                    } transition-opacity`}>
                                        <span className="text-white text-xs font-semibold font-space">
                                            {item.title}
                                        </span>
                                    </div>

                                    {/* Active Indicator */}
                                    {index === activeIndex && (
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neon-green"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Progress Indicators */}
                        <div className="flex gap-2 justify-center">
                            {items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setIsAutoPlaying(false);
                                    }}
                                    className={`h-1 rounded-full transition-all duration-300 ${
                                        index === activeIndex
                                            ? 'w-12 bg-neon-green'
                                            : 'w-8 bg-gray-800 hover:bg-gray-700'
                                    }`}
                                    aria-label={`Ir para ${items[index].title}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Large Featured Image */}
                    <div className="relative">
                        <div className="relative rounded-xl overflow-hidden border border-gray-800 bg-black shadow-2xl">
                            {/* Browser-style Header */}
                            <div className="h-10 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] opacity-50"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] opacity-50"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] opacity-50"></div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-gray-900 rounded px-4 py-1 text-xs text-gray-500 font-mono">
                                        app.usefunnels.io
                                    </div>
                                </div>
                            </div>

                            {/* Main Featured Image */}
                            <div className="aspect-[16/10] bg-black relative p-4">
                                {items.map((item, index) => (
                                    <img
                                        key={item.id}
                                        src={item.image}
                                        alt={item.title}
                                        className={`absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain transition-all duration-700 ${
                                            index === activeIndex
                                                ? 'opacity-100 translate-x-0 scale-100'
                                                : index < activeIndex
                                                    ? 'opacity-0 -translate-x-8 scale-95'
                                                    : 'opacity-0 translate-x-8 scale-95'
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-neon-green opacity-10 blur-[100px] pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
