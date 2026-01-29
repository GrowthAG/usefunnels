
import React from 'react';
import { Bot, Settings, Workflow, Sparkles, ArrowRight } from 'lucide-react';

export const BentoGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto p-4">

            {/* Card 1: Agent Flow (Main Feature - Wide) */}
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 md:p-10 relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-neon-green/20 text-neon-green border border-neon-green/30">
                                    <Workflow size={24} />
                                </div>
                                <span className="text-neon-green font-mono text-xs uppercase tracking-widest font-bold">Automação Visual</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold font-space text-white mb-3">Fluxos Inteligentes</h3>
                            <p className="text-gray-300 max-w-lg text-base leading-relaxed">
                                Visualize e construa a lógica dos seus agentes. Conecte gatilhos, ações e respostas em uma tela infinita.
                            </p>
                        </div>
                    </div>

                    {/* Visual Mockup Area */}
                    <div className="mt-6 w-full aspect-video rounded-xl border border-white/10 overflow-hidden relative shadow-2xl group-hover:shadow-[0_0_40px_rgba(27,252,79,0.1)] transition-all duration-500">
                        <img
                            src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ffec766f3caf41ae5ee191.png"
                            alt="Fluxo de Agentes"
                            className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                        />
                        {/* Subtle inner shadow overlay */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Card 2: Configuration (Vertical - Tall) */}
            <div className="md:col-span-4 row-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10 flex-1 flex flex-col">
                    <div className="mb-6">
                        <div className="p-2 w-fit rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
                            <Settings size={24} />
                        </div>
                        <h3 className="text-2xl font-bold font-space text-white mb-2">Configuração Precisa</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Defina personalidade, tom de voz e regras de negócio. Seu agente, suas regras.
                        </p>
                    </div>

                    {/* Image Area - Full Height fill */}
                    <div className="flex-1 w-full bg-black/50 rounded-t-xl border-t border-l border-r border-white/10 overflow-hidden relative shadow-lg mt-auto mx-auto translate-y-2">
                        <img
                            src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b726cf7a877358425c7d1.png"
                            alt="Configuração de Agente"
                            className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Card 3: Marketplace (Wide) */}
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex flex-col md:flex-row h-full">
                    <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2">
                        <div className="p-2 w-fit rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-4">
                            <Bot size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-3">Marketplace de Agentes</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Escolha entre dezenas de especialistas pré-treinados. Vendas, Suporte, Agendamento e muito mais.
                        </p>
                        <button className="flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all group/btn">
                            Explorar Agentes <ArrowRight size={16} className="text-neon-green" />
                        </button>
                    </div>

                    <div className="relative md:w-1/2 min-h-[250px] md:min-h-0">
                        {/* Mask image on the right */}
                        <div className="absolute inset-4 rounded-xl border border-white/10 overflow-hidden shadow-2xl bg-black/40">
                            <img
                                src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e871be35e86931aef8f921.png"
                                alt="Marketplace"
                                className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
