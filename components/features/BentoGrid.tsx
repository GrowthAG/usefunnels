
import React from 'react';
import { ASSETS } from '../../constants';

export const BentoGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">

            {/* Card 1: Main Feature (Large) - IA Autônoma */}
            <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl border border-gray-800 bg-[#0a0a0a] hover:border-gray-600 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10 h-full flex flex-col justify-between">
                    <div>
                        <div className="w-10 h-10 mb-4 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green border border-neon-green/20">
                            <span className="text-xl">🤖</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-2">Agentes Autônomos</h3>
                        <p className="text-gray-400 max-w-md">Eles trabalham enquanto você dorme. Qualificam leads, agendam reuniões e fecham vendas 24/7.</p>
                    </div>

                    {/* Visual Mockup Area */}
                    <div className="mt-8 w-full h-[300px] bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden relative shadow-2xl">
                        <img
                            src={ASSETS.screenshots.automationsAI}
                            alt="Agentes IA"
                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    </div>
                </div>
            </div>

            {/* Card 2: Stats (Small) - Resultados */}
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-[#0a0a0a] p-6 hover:border-neon-green/30 transition-colors duration-500 flex flex-col justify-center items-center text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <span className="text-5xl md:text-6xl font-bold font-space text-white mb-2 group-hover:text-neon-green transition-colors duration-300">24/7</span>
                <p className="text-gray-400 text-sm font-mono uppercase tracking-widest">Disponibilidade</p>
                <p className="text-gray-600 text-xs mt-2">Sem pausas, sem férias</p>
            </div>

            {/* Card 3: Chat/Interaction (Tall) - Conversa */}
            <div className="row-span-2 relative group overflow-hidden rounded-2xl border border-gray-800 bg-[#0a0a0a] p-6 hover:border-gray-600 transition-colors duration-500">
                <div className="absolute flex flex-col h-full w-full inset-0 p-6">
                    <div className="w-10 h-10 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                        <span className="text-xl">💬</span>
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-2">Qualificação Real</h3>
                    <p className="text-gray-400 text-sm mb-6">A IA entende contexto e intenção.</p>

                    {/* Chat Simulation */}
                    <div className="flex-1 space-y-4 overflow-hidden relative">
                        {/* Message 1 */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none text-xs text-gray-300">
                                Olá, gostaria de saber mais sobre os planos.
                            </div>
                        </div>
                        {/* Message 2 (IA) */}
                        <div className="flex gap-3 flex-row-reverse">
                            <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green text-xs border border-neon-green/30 flex-shrink-0">IA</div>
                            <div className="bg-neon-green/10 border border-neon-green/20 p-3 rounded-lg rounded-tr-none text-xs text-white">
                                Claro! Qual é o tamanho da sua equipe hoje?
                            </div>
                        </div>
                        {/* Message 3 */}
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none text-xs text-gray-300">
                                Somos em 5 pessoas.
                            </div>
                        </div>
                        {/* Typing Indicator */}
                        <div className="flex gap-2 ml-10 mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-bounce"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-bounce delay-200"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4: Integration (Small) - Conectividade */}
            <div className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-[#0a0a0a] p-6 hover:border-blue-500/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">🚀</div>
                    <div className="h-px flex-1 bg-gray-800"></div>
                    <div className="text-3xl">💰</div>
                </div>
                <h3 className="text-lg font-bold font-space text-white">Setup em Minutos</h3>
                <p className="text-gray-500 text-xs mt-2">Templates prontos para rodar.</p>
            </div>

        </div>
    );
};
