import React, { useState } from 'react';
import { CompactPricingTable } from './pricing/CompactPricingTable';

interface PricingPageProps {
    onBookDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
    const [teamSize, setTeamSize] = useState(5);
    const [contacts, setContacts] = useState(50000);

    // Cálculo simples e direto
    const funnelsPrice = 697; // Growth plan
    const competitorPrice = (teamSize * 450) + (contacts > 25000 ? 900 : 500) + 799;
    const savings = competitorPrice - funnelsPrice;

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Simples */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-space mb-4">
                        Preços Transparentes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Escolha o plano ideal para o seu negócio. Sem taxas escondidas, sem surpresas.
                    </p>
                </div>

                {/* Calculadora Minimalista */}
                <div className="mb-20 max-w-4xl mx-auto">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center">Calcule sua economia</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Input 1 */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tamanho da equipe
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    className="w-full"
                                />
                                <div className="text-right text-2xl font-bold mt-1">{teamSize}</div>
                            </div>

                            {/* Input 2 */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Contatos
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="200000"
                                    step="1000"
                                    value={contacts}
                                    onChange={(e) => setContacts(Number(e.target.value))}
                                    className="w-full"
                                />
                                <div className="text-right text-2xl font-bold mt-1">
                                    {contacts.toLocaleString('pt-BR')}
                                </div>
                            </div>
                        </div>

                        {/* Resultado */}
                        <div className="border-t border-gray-300 pt-6">
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Ferramentas separadas</div>
                                    <div className="text-2xl font-bold text-gray-400">
                                        R$ {competitorPrice.toLocaleString('pt-BR')}
                                    </div>
                                </div>
                                <div className="border-l border-r border-gray-200">
                                    <div className="text-sm text-gray-600 mb-1">FUNNELS</div>
                                    <div className="text-3xl font-bold text-neon-green">
                                        R$ {funnelsPrice}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Você economiza</div>
                                    <div className="text-2xl font-bold text-deep-black">
                                        R$ {savings.toLocaleString('pt-BR')}/mês
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabela Comparativa */}
                <div className="mb-16">
                    <CompactPricingTable />
                </div>

                {/* CTA Simples */}
                <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-12">
                    <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Escolha seu plano e comece a economizar hoje mesmo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/#/pricing"
                            className="px-8 py-4 bg-neon-green text-deep-black font-bold rounded hover:bg-opacity-90 transition-all"
                        >
                            Ver Planos
                        </a>
                        <button
                            onClick={onBookDemo}
                            className="px-8 py-4 border-2 border-deep-black text-deep-black font-bold rounded hover:bg-deep-black hover:text-white transition-all"
                        >
                            Falar com Vendas
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
