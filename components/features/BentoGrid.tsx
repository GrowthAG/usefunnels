
import React from 'react';
import { ASSETS } from '../../constants';
// Using Lucide icons for a cleaner, tech-focused look
// Assuming lucide-react is available, or we use SVG paths directly for zero-dep

export const BentoGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">

            {/* Card 1: Main Feature (Large) - IA Autônoma */}
            <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0a0a0a] hover:border-gray-700 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-10 h-10 mb-4 rounded-sm bg-neon-green/10 flex items-center justify-center text-neon-green border border-neon-green/20">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-2">Marketplace de Agentes</h3>
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Crie, treine e implemente agentes de IA especializados. Do suporte ao fechamento de vendas.
                        </p>
                    </div>

                    {/* Visual Mockup Area */}
                    <div className="mt-8 w-full h-[400px] bg-black rounded-sm border border-gray-800 overflow-hidden relative shadow-2xl">
                        <img
                            src="/assets/screenshots/dashboard-marketplace-dark.png"
                            alt="Marketplace de Agentes"
                            className="w-full h-full object-cover opacity-90 group-hover:scale-[1.01] transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Card 2: Stats (Small) - Resultados */}
            <div className="relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0a0a0a] p-6 hover:border-neon-green/30 transition-colors duration-500 flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-2 text-neon-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <span className="text-4xl md:text-5xl font-bold font-space text-white mb-1 group-hover:text-neon-green transition-colors duration-300">24/7/365</span>
                <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mt-2">Disponibilidade Total</p>
            </div>

            {/* Card 3: Chat/Interaction (Tall) - Conversa */}
            <div className="row-span-2 relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0a0a0a] p-6 hover:border-gray-700 transition-colors duration-500">
                <div className="absolute flex flex-col h-full w-full inset-0 p-6">
                    <div className="w-10 h-10 mb-4 rounded-sm bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-2">Qualificação Real</h3>
                    <p className="text-gray-400 text-xs mb-8 leading-relaxed">
                        A IA entende contexto, intenção e objeções do lead em tempo real.
                    </p>

                    {/* Chat Simulation */}
                    <div className="flex-1 space-y-6 overflow-hidden relative font-mono">
                        {/* Message 1 */}
                        <div className="flex gap-3">
                            <div className="w-6 h-6 rounded-sm bg-gray-800 flex-shrink-0 border border-gray-700"></div>
                            <div className="bg-gray-900 border border-gray-800 p-3 rounded-sm text-xs text-gray-400 max-w-[80%]">
                                <span className="text-[10px] text-gray-600 block mb-1">LEAD</span>
                                Qual o valor para 10 usuários?
                            </div>
                        </div>
                        {/* Message 2 (IA) */}
                        <div className="flex gap-3 flex-row-reverse">
                            <div className="w-6 h-6 rounded-sm bg-neon-green/10 flex items-center justify-center text-neon-green text-[10px] border border-neon-green/20 flex-shrink-0">AI</div>
                            <div className="bg-neon-green/5 border border-neon-green/10 p-3 rounded-sm text-xs text-gray-300 max-w-[85%]">
                                <span className="text-[10px] text-neon-green/70 block mb-1">AGENT</span>
                                Para 10 usuários, o plano Scale é ideal. Ele inclui automação ilimitada. Gostaria de ver uma demo focada nisso?
                            </div>
                        </div>
                        {/* Typing Indicator */}
                        <div className="flex gap-1 ml-10 mt-2">
                            <div className="w-1 h-1 bg-gray-600 animate-pulse"></div>
                            <div className="w-1 h-1 bg-gray-600 animate-pulse delay-75"></div>
                            <div className="w-1 h-1 bg-gray-600 animate-pulse delay-150"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4: Integration (Small) - Conectividade */}
            <div className="relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0a0a0a] p-6 hover:border-gray-700 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-4 mb-4 text-gray-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    <div className="h-px flex-1 bg-gray-800"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 className="text-lg font-bold font-space text-white">Setup Instantâneo</h3>
                <p className="text-gray-500 text-xs mt-2">Templates validados prontos para rodar.</p>
            </div>

        </div>
    );
};
