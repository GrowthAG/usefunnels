
import React, { useState, useEffect } from 'react';

// Tools that FUNNELS replaces with market prices
const REPLACED_TOOLS = [
    { name: 'CRM (Pipedrive)', icon: '📊', basePrice: 250, perUser: 50 },
    { name: 'E-mail Marketing (Mailchimp)', icon: '📧', basePrice: 150, perContacts: 0.003 },
    { name: 'WhatsApp API (Zenvia)', icon: '💬', basePrice: 200, perUser: 0 },
    { name: 'Landing Pages (Unbounce)', icon: '🌐', basePrice: 200, perUser: 0 },
    { name: 'Chatbot IA (ManyChat)', icon: '🤖', basePrice: 75, perUser: 0 },
    { name: 'Automação (ActiveCampaign)', icon: '⚡', basePrice: 300, perContacts: 0.004 },
    { name: 'Agendamento (Calendly)', icon: '📅', basePrice: 50, perUser: 15 },
    { name: 'Formulários (Typeform)', icon: '📝', basePrice: 100, perUser: 0 },
];

// FUNNELS pricing tiers
const FUNNELS_PLANS = [
    { name: 'Starter', price: 497, users: 3, contacts: 20000 },
    { name: 'Growth', price: 697, users: 5, contacts: 50000 },
    { name: 'Scale', price: 997, users: 10, contacts: 75000 },
];

interface SavingsCalculatorProps {
    variant?: 'compact' | 'full';
    className?: string;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ variant = 'full', className = '' }) => {
    const [users, setUsers] = useState(3);
    const [contacts, setContacts] = useState(20000);
    const [animatedSavings, setAnimatedSavings] = useState(0);

    // Calculate individual tools cost
    const calculateToolsCost = () => {
        return REPLACED_TOOLS.reduce((total, tool) => {
            let cost = tool.basePrice;
            if (tool.perUser) cost += tool.perUser * users;
            if (tool.perContacts) cost += tool.perContacts * contacts;
            return total + cost;
        }, 0);
    };

    // Determine recommended FUNNELS plan
    const getRecommendedPlan = () => {
        if (users <= 3 && contacts <= 20000) return FUNNELS_PLANS[0];
        if (users <= 5 && contacts <= 50000) return FUNNELS_PLANS[1];
        return FUNNELS_PLANS[2];
    };

    const toolsCost = calculateToolsCost();
    const recommendedPlan = getRecommendedPlan();
    const monthlySavings = toolsCost - recommendedPlan.price;
    const annualSavings = monthlySavings * 12;

    // Animate savings counter
    useEffect(() => {
        const target = annualSavings;
        const duration = 800;
        const steps = 30;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setAnimatedSavings(target);
                clearInterval(timer);
            } else {
                setAnimatedSavings(Math.round(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [annualSavings]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className={`bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 md:p-12 text-white ${className}`}>
            {/* Header */}
            <div className="text-center mb-10">
                <span className="inline-block bg-neon-green/20 text-neon-green px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    Calculadora de Economia
                </span>
                <h3 className="text-3xl md:text-4xl font-bold font-space mb-3">
                    Quanto você vai <span className="text-neon-green">economizar</span>?
                </h3>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Descubra quanto sua empresa pode economizar ao substituir múltiplas ferramentas pelo FUNNELS
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left: Sliders */}
                <div className="space-y-8">
                    {/* Users Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-sm font-bold text-gray-300">Número de Usuários</label>
                            <span className="text-2xl font-bold text-neon-green">{users}</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="15"
                            value={users}
                            onChange={(e) => setUsers(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-neon-green"
                            style={{
                                background: `linear-gradient(to right, #84FF0B ${(users / 15) * 100}%, #374151 ${(users / 15) * 100}%)`
                            }}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>1</span>
                            <span>15+</span>
                        </div>
                    </div>

                    {/* Contacts Slider */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <label className="text-sm font-bold text-gray-300">Contatos no CRM</label>
                            <span className="text-2xl font-bold text-neon-green">{(contacts / 1000).toFixed(0)}k</span>
                        </div>
                        <input
                            type="range"
                            min="5000"
                            max="100000"
                            step="5000"
                            value={contacts}
                            onChange={(e) => setContacts(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, #84FF0B ${((contacts - 5000) / 95000) * 100}%, #374151 ${((contacts - 5000) / 95000) * 100}%)`
                            }}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>5k</span>
                            <span>100k+</span>
                        </div>
                    </div>

                    {/* Tools Being Replaced */}
                    {variant === 'full' && (
                        <div className="mt-8 pt-6 border-t border-gray-800">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                                Ferramentas Substituídas
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                                {REPLACED_TOOLS.map((tool, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 px-3 py-2 rounded"
                                    >
                                        <span>{tool.icon}</span>
                                        <span className="truncate">{tool.name.split('(')[0]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Results */}
                <div className="bg-gray-800/50 rounded-lg p-6 md:p-8 border border-gray-700">
                    {/* Comparison */}
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                            <span className="text-gray-400">Custo Ferramentas Separadas</span>
                            <span className="text-xl font-bold text-red-400 line-through">
                                {formatCurrency(toolsCost)}/mês
                            </span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">FUNNELS</span>
                                <span className="bg-neon-green text-black text-[10px] px-2 py-0.5 rounded-full font-bold">
                                    {recommendedPlan.name}
                                </span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                {formatCurrency(recommendedPlan.price)}/mês
                            </span>
                        </div>
                    </div>

                    {/* Annual Savings Highlight */}
                    <div className="bg-gradient-to-r from-neon-green/20 to-neon-green/5 rounded-lg p-6 text-center mb-6">
                        <p className="text-xs font-bold text-neon-green uppercase tracking-widest mb-2">
                            Economia Anual Estimada
                        </p>
                        <div className="text-4xl md:text-5xl font-bold text-neon-green font-space">
                            {formatCurrency(animatedSavings)}
                        </div>
                        <p className="text-gray-400 text-sm mt-2">
                            {((1 - recommendedPlan.price / toolsCost) * 100).toFixed(0)}% de redução nos custos
                        </p>
                    </div>

                    {/* CTA */}
                    <a
                        href="/#precos"
                        className="block w-full text-center bg-neon-green text-black font-bold py-4 rounded-sm hover:bg-white transition-colors uppercase tracking-wide"
                    >
                        Começar a Economizar
                    </a>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        * Valores baseados em preços médios de mercado
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SavingsCalculator;
