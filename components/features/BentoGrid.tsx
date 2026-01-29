import React from 'react';
import { Bot, Settings, Workflow, ArrowRight } from 'lucide-react';

export const BentoGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto p-4">

            {/* Card 1: Agent Flow (Main Feature - Wide) */}
            <div className="md:col-span-8 relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0A0A0A] shadow-2xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
                    <div className="flex flex-col mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-sm bg-neon-green/10 text-neon-green border border-neon-green/20">
                                <Workflow size={20} />
                            </div>
                            <span className="text-neon-green font-mono text-xs uppercase tracking-widest font-bold">Studio</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold font-space text-white mb-3 tracking-tight">Fluxos Inteligentes</h3>
                        <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                            Construa a lógica dos seus agentes em uma tela infinita. Conecte gatilhos e ações visualmente.
                        </p>
                    </div>

                    {/* Image Container - "Window" Style to isolate the white screenshot */}
                    <div className="flex-1 w-full bg-[#151515] rounded-t-lg border-t border-l border-r border-gray-700 overflow-hidden relative shadow-2xl mx-auto">
                        <div className="h-6 bg-[#202020] border-b border-gray-800 flex items-center px-4 gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        </div>
                        <img
                            src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ffec766f3caf41ae5ee191.png"
                            alt="Fluxo de Agentes"
                            className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Card 2: Configuration (Vertical) */}
            <div className="md:col-span-4 row-span-2 relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0A0A0A] shadow-2xl flex flex-col">
                <div className="p-8 relative z-10 flex-1 flex flex-col">
                    <div className="mb-8">
                        <div className="p-2 w-fit rounded-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
                            <Settings size={20} />
                        </div>
                        <h3 className="text-2xl font-bold font-space text-white mb-2 tracking-tight">Configuração</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Defina personalidade e regras de negócio com precisão cirúrgica.
                        </p>
                    </div>

                    {/* Image Container - Full containment */}
                    <div className="flex-1 w-full bg-[#151515] rounded-t-lg border-t border-l border-r border-gray-700 overflow-hidden relative shadow-2xl mt-auto">
                        <div className="h-6 bg-[#202020] border-b border-gray-800 flex items-center px-4 gap-2">
                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                        </div>
                        <img
                            src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b726cf7a877358425c7d1.png"
                            alt="Configuração de Agente"
                            className="w-full h-full object-cover object-top hover:translate-y-[-10px] transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Card 3: Marketplace (Wide) */}
            <div className="md:col-span-8 relative group overflow-hidden rounded-sm border border-gray-800 bg-[#0A0A0A] shadow-2xl">
                <div className="flex flex-col md:flex-row h-full">
                    <div className="p-8 md:p-10 flex flex-col justify-center md:w-1/2 relative z-10">
                        <div className="p-2 w-fit rounded-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
                            <Bot size={20} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-3">Marketplace</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Templates prontos. De Vendas a Suporte, escolha seu agente e comece a rodar em segundos.
                        </p>
                        <button className="flex items-center gap-2 text-neon-green font-bold text-xs uppercase tracking-wider hover:gap-4 transition-all group/btn">
                            Ver Biblioteca <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="relative md:w-1/2 min-h-[250px] md:min-h-0 bg-[#111] overflow-hidden border-l border-gray-800">
                        {/* Image containment */}
                        <div className="absolute inset-4 top-8 right-[-20px] rounded-tl-lg overflow-hidden border border-gray-700 shadow-2xl bg-white">
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
