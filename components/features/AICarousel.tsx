import React, { useState, useEffect } from 'react';
import { Mic, Brain, Zap } from 'lucide-react';

export const AICarousel: React.FC = () => {
    const aiFeatures = [
        {
            title: "Reconhecimento de Voz",
            description: "Analisa chamadas em tempo real e extrai insights de vendas.",
            icon: Mic,
            stat: "98% Precisão"
        },
        {
            title: "Lead Scoring Preditivo",
            description: "Identifica quais leads vão fechar antes mesmo de falar com eles.",
            icon: Brain,
            stat: "+40% Conversão"
        },
        {
            title: "Automação de Follow-up",
            description: "Nunca mais esqueça de ligar para um cliente em potencial.",
            icon: Zap,
            stat: "0 Leads Perdidos"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % aiFeatures.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [aiFeatures.length]);

    return (
        <div className="relative w-full max-w-3xl mx-auto h-[280px]">
            {aiFeatures.map((feature, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === activeIndex
                        ? 'opacity-100 translate-x-0 scale-100 z-20'
                        : 'opacity-0 translate-x-12 scale-95 z-10'
                        }`}
                >
                    <div className="bg-[#050505] border border-gray-900 p-8 md:p-12 rounded-sm h-full flex flex-col justify-center relative overflow-hidden group hover:border-[#03FC3B] transition-colors duration-500 shadow-2xl">
                        {/* Watermark Number */}
                        <div className="absolute top-6 right-8 font-space text-6xl font-bold text-[#111] select-none">
                            0{index + 1}
                        </div>

                        <div className="flex items-center gap-8 relative z-10">
                            {/* Icon Box */}
                            <div className="w-20 h-20 bg-[#0f0f0f] rounded-sm border border-gray-800 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_30px_rgba(3,252,59,0.1)] transition-all duration-500">
                                <feature.icon className="w-10 h-10 text-gray-400 group-hover:text-[#03FC3B] transition-colors duration-500" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3 font-space tracking-tight">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-sm">{feature.description}</p>
                                <span className="inline-flex items-center px-3 py-1 bg-[#03FC3B]/10 text-[#03FC3B] text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm border border-[#03FC3B]/20">
                                    {feature.stat}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination Line Indicators */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
                {aiFeatures.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-10 bg-[#03FC3B]' : 'w-2 bg-gray-800 hover:bg-gray-700'}`}
                        aria-label={`Ir para slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
