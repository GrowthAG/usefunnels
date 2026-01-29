import React, { useState } from 'react';
import { CompactPricingTable } from './pricing/CompactPricingTable';

interface PricingPageProps {
    onBookDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
    const [users, setUsers] = useState(5);
    const [contacts, setContacts] = useState(50000);
    const [whatsappMessages, setWhatsappMessages] = useState(1000);
    const [emails, setEmails] = useState(5000);

    // Lógica da calculadora
    const calculatePlan = () => {
        // Starter: 3 users, 20k contacts
        // Growth: 5 users, 50k contacts
        // Scale: 10 users, 75k contacts

        if (users <= 3 && contacts <= 20000) {
            return { name: 'Starter', base: 497 };
        } else if (users <= 5 && contacts <= 50000) {
            return { name: 'Growth', base: 697 };
        } else if (users <= 10 && contacts <= 75000) {
            return { name: 'Scale', base: 997 };
        } else {
            return { name: 'Enterprise', base: 0 };
        }
    };

    const calculateAdditionalCosts = () => {
        const plan = calculatePlan();
        let extraUsers = 0;
        let extraContacts = 0;

        // Calcular usuários extras
        if (plan.name === 'Starter' && users > 3) extraUsers = (users - 3) * 99;
        else if (plan.name === 'Growth' && users > 5) extraUsers = (users - 5) * 99;
        else if (plan.name === 'Scale' && users > 10) extraUsers = (users - 10) * 99;

        // Calcular contatos extras (pacote de 25k = R$ 197)
        if (plan.name === 'Starter' && contacts > 20000) {
            extraContacts = Math.ceil((contacts - 20000) / 25000) * 197;
        } else if (plan.name === 'Growth' && contacts > 50000) {
            extraContacts = Math.ceil((contacts - 50000) / 25000) * 197;
        } else if (plan.name === 'Scale' && contacts > 75000) {
            extraContacts = Math.ceil((contacts - 75000) / 25000) * 197;
        }

        // WhatsApp: R$ 29/mês + R$ 0,04 por mensagem
        const whatsappCost = (plan.name !== 'Starter' ? 29 : 0) + (whatsappMessages * 0.04);

        // E-mails: R$ 0,0034 por e-mail enviado (convertido de USD)
        const emailCost = emails * 0.0034;

        return {
            plan: plan.name,
            base: plan.base,
            extraUsers,
            extraContacts,
            whatsapp: whatsappCost,
            email: emailCost,
            total: plan.base + extraUsers + extraContacts + whatsappCost + emailCost
        };
    };

    const costs = calculateAdditionalCosts();

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-space mb-4">
                        Compare Planos e Calcule Seus Custos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Use nossa calculadora para estimar o custo do FUNNELS para o seu negócio
                    </p>
                </div>

                {/* Calculadora Inteligente */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-8 text-center">Calculadora de Custos FUNNELS</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Usuários */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Número de Usuários
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={users}
                                    onChange={(e) => setUsers(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-gray-500">1</span>
                                    <span className="text-2xl font-bold">{users}</span>
                                    <span className="text-xs text-gray-500">50</span>
                                </div>
                            </div>

                            {/* Contatos */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Contatos no CRM
                                </label>
                                <input
                                    type="range"
                                    min="1000"
                                    max="200000"
                                    step="1000"
                                    value={contacts}
                                    onChange={(e) => setContacts(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-gray-500">1k</span>
                                    <span className="text-2xl font-bold">{(contacts / 1000).toFixed(0)}k</span>
                                    <span className="text-xs text-gray-500">200k</span>
                                </div>
                            </div>

                            {/* WhatsApp Mensagens */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    Mensagens WhatsApp/mês
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    step="100"
                                    value={whatsappMessages}
                                    onChange={(e) => setWhatsappMessages(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-gray-500">0</span>
                                    <span className="text-2xl font-bold">{whatsappMessages.toLocaleString('pt-BR')}</span>
                                    <span className="text-xs text-gray-500">10k</span>
                                </div>
                            </div>

                            {/* E-mails */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">
                                    E-mails Enviados/mês
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="1000"
                                    value={emails}
                                    onChange={(e) => setEmails(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between mt-2">
                                    <span className="text-xs text-gray-500">0</span>
                                    <span className="text-2xl font-bold">{(emails / 1000).toFixed(0)}k</span>
                                    <span className="text-xs text-gray-500">50k</span>
                                </div>
                            </div>
                        </div>

                        {/* Resultado da Calculadora */}
                        <div className="border-t-2 border-gray-200 pt-8">
                            <div className="bg-white border-2 border-neon-green rounded-lg p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold mb-4">Plano Recomendado: {costs.plan}</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Plano base:</span>
                                                <span className="font-bold">R$ {costs.base}</span>
                                            </div>
                                            {costs.extraUsers > 0 && (
                                                <div className="flex justify-between text-gray-600">
                                                    <span>+ Usuários extras:</span>
                                                    <span className="font-bold">R$ {costs.extraUsers}</span>
                                                </div>
                                            )}
                                            {costs.extraContacts > 0 && (
                                                <div className="flex justify-between text-gray-600">
                                                    <span>+ Contatos extras:</span>
                                                    <span className="font-bold">R$ {costs.extraContacts}</span>
                                                </div>
                                            )}
                                            {costs.whatsapp > 0 && (
                                                <div className="flex justify-between text-gray-600">
                                                    <span>+ WhatsApp:</span>
                                                    <span className="font-bold">R$ {costs.whatsapp.toFixed(2)}</span>
                                                </div>
                                            )}
                                            {costs.email > 0 && (
                                                <div className="flex justify-between text-gray-600">
                                                    <span>+ E-mails:</span>
                                                    <span className="font-bold">R$ {costs.email.toFixed(2)}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center border-l-2 border-gray-200 pl-6">
                                        <div className="text-sm text-gray-600 mb-2">Custo Total Estimado</div>
                                        <div className="text-4xl font-bold text-neon-green mb-4">
                                            R$ {costs.total.toFixed(2)}
                                        </div>
                                        <div className="text-xs text-gray-500">/mês</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabela Comparativa */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Comparação Completa de Recursos</h2>
                    <CompactPricingTable />
                </div>

                {/* CTA */}
                <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-12">
                    <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Fale com um especialista ou comece agora mesmo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={onBookDemo}
                            className="px-8 py-4 bg-neon-green text-deep-black font-bold rounded hover:bg-opacity-90 transition-all text-lg"
                        >
                            Falar com Especialista
                        </button>
                        <a
                            href="/#/pricing"
                            className="px-8 py-4 border-2 border-deep-black text-deep-black font-bold rounded hover:bg-deep-black hover:text-white transition-all text-lg"
                        >
                            Ver Planos Completos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
