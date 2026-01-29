import React, { useState, useEffect } from 'react';
import { Network, GitGraph, Zap, Mail, MessageSquare } from 'lucide-react';

export const AICarousel: React.FC = () => {
    const aiFeatures = [
        {
            title: "Multi-Channel Nativo",
            description: "Email, SMS e WhatsApp em um único fluxo unificado. Sem integrações quebradas.",
            icon: Mail,
            stat: "Unified Inbox"
        },
        {
            title: "Workflows Visuais",
            description: "Construa automações complexas arraste-e-solte. Lógica condicional sem código.",
            icon: GitGraph,
            stat: "Drag & Drop"
        },
        {
            title: "Gatilhos de Intenção",
            description: "Dispare ações baseado no comportamento real do lead: cliques, visitas e abandono.",
            icon: Zap,
            stat: "Event Based"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % aiFeatures.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [aiFeatures.length]);

    return (
        <div className="relative w-full max-w-4xl mx-auto h-[320px]">
            {/* Connection Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-800 -translate-y-1/2 z-0"></div>

            {aiFeatures.map((feature, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${index === activeIndex
                        ? 'opacity-100 translate-x-0 z-20 pointer-events-auto'
                        : 'opacity-0 translate-x-8 z-10 pointer-events-none'
                        }`}
                >
                    <div className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-10 rounded-sm w-full max-w-2xl relative shadow-2xl">

                        {/* Connecting Nodes (Decorative) */}
                        <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center -translate-y-1/2 z-10">
                            <div className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-neon-green animate-pulse' : 'bg-gray-800'}`}></div>
                        </div>
                        <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#0a0a0a] border border-gray-800 rounded-full flex items-center justify-center -translate-y-1/2 z-10">
                            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            {/* Icon Box */}
                            <div className="w-24 h-24 bg-[#050505] rounded-sm border border-gray-800 flex items-center justify-center shrink-0">
                                <feature.icon className={`w-10 h-10 transition-colors duration-500 ${index === activeIndex ? 'text-neon-green' : 'text-gray-600'}`} strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left">
                                <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-2">
                                    Step 0{index + 1}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-space tracking-tight">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">{feature.description}</p>

                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green"></div>
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-300">
                                        {feature.stat}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                {aiFeatures.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1 transition-all duration-300 rounded-full ${idx === activeIndex ? 'w-12 bg-neon-green' : 'w-4 bg-gray-800 hover:bg-gray-700'
                            }`}
                        aria-label={`Ir para slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
