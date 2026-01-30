
import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturePopupModal: React.FC<{ feature: any; onClose: () => void }> = ({ feature, onClose }) => {
    if (!feature) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 lg:p-8">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md animate-fade-in" onClick={onClose} />

            {/* Modal Container */}
            <div className="relative z-[151] bg-deep-black w-full max-w-[1600px] rounded-sm border border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden animate-scale-up flex flex-col lg:flex-row max-h-[95vh] h-[90vh] lg:h-[850px]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[160] text-gray-400 bg-black/50 hover:bg-white hover:text-black transition-all p-3 rounded-full border border-gray-700 hover:border-white shadow-xl backdrop-blur-md"
                    aria-label="Fechar detalhes"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Left Side: Image / Visuals (Clean) */}
                <div className="w-full lg:w-[65%] h-[350px] lg:h-full bg-white relative flex items-center justify-center p-4 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-800">
                    <div className="w-full h-full relative flex items-center justify-center">
                        <img
                            src={feature.detailImage}
                            alt={feature.title}
                            className="w-full h-full object-contain drop-shadow-2xl"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-[35%] h-[calc(100%-350px)] lg:h-full p-6 lg:p-10 flex flex-col bg-[#050505] text-white relative overflow-y-auto border-l border-gray-900">
                    <div className="flex-grow">
                        {/* Title - No Icon Above */}
                        <h3 className="text-2xl md:text-4xl font-bold font-space text-white mb-6 uppercase leading-none tracking-tight">{feature.title}</h3>

                        {/* Green Bar Description */}
                        <div className="border-l-4 border-[#03FC3B] pl-4 lg:pl-6 mb-8 lg:mb-10">
                            <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-mono text-[10px] md:text-xs font-bold text-[#03FC3B] uppercase tracking-widest mb-4 lg:mb-6">Recursos Principais</h4>
                                <ul className="space-y-3 lg:space-y-4">
                                    {feature.benefits.map((benefit: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-white font-medium">
                                            <span className="text-[#03FC3B] font-bold">✓</span>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-900 sticky bottom-0 bg-[#050505] pb-4 lg:pb-0 z-10">
                        <Link
                            to="/"
                            state={{ targetId: 'pricing-plans' }}
                            onClick={onClose}
                            className="w-full flex items-center justify-center gap-3 bg-neon-green text-deep-black font-bold font-space text-xs md:text-sm uppercase py-4 rounded-sm hover:bg-white hover:scale-[1.02] transition-all group tracking-wider shadow-lg"
                        >
                            Começar Agora
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
