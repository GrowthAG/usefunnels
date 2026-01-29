
import React, { useState, useEffect } from 'react';
import { Container, Section, Reveal, Button, TechBadge, CornerBrackets } from '../components/ui';
import { Pricing, PricingTable } from '../components/Pricing';

// Tools that FUNNELS replaces with market prices
const REPLACED_TOOLS = [
    { name: 'CRM', price: 250 },
    { name: 'E-mail Marketing', price: 150 },
    { name: 'WhatsApp API', price: 200 },
    { name: 'Landing Pages', price: 200 },
    { name: 'Chatbot IA', price: 75 },
    { name: 'Automação', price: 300 },
    { name: 'Agendamento', price: 50 },
    { name: 'Formulários', price: 100 },
];

// FUNNELS pricing tiers
const FUNNELS_PLANS = [
    { name: 'Starter', price: 497, users: 3, contacts: 20000 },
    { name: 'Growth', price: 697, users: 5, contacts: 50000 },
    { name: 'Scale', price: 997, users: 10, contacts: 75000 },
];

// FAQ Data
const FAQ_ITEMS = [
    {
        question: "Existe fidelidade ou contrato mínimo?",
        answer: "Não. Você pode cancelar a qualquer momento, sem multas ou taxas."
    },
    {
        question: "Como funciona o período de garantia?",
        answer: "7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor."
    },
    {
        question: "Posso mudar de plano depois?",
        answer: "Sim, upgrade ou downgrade a qualquer momento com ajuste proporcional."
    },
    {
        question: "O que são os custos adicionais?",
        answer: "Custos de uso como WhatsApp API e IA são repassados do provedor, sem markup. Média: R$50/mês."
    },
    {
        question: "Vocês oferecem suporte em português?",
        answer: "Sim, equipe 100% brasileira via chat, e-mail e telefone (Scale/Enterprise)."
    },
    {
        question: "Como funciona a migração?",
        answer: "Migração gratuita assistida. Importamos contatos, pipelines e automações."
    }
];

interface PricingPageFullProps {
    onBookDemo: () => void;
    onCheckout?: (url: string) => void;
}

export const PricingPageFull: React.FC<PricingPageFullProps> = ({ onBookDemo, onCheckout }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [users, setUsers] = useState(3);
    const [contacts, setContacts] = useState(20000);

    // Calculate costs
    const calculateToolsCost = () => {
        let total = 0;
        REPLACED_TOOLS.forEach(tool => {
            total += tool.price;
            if (tool.name === 'CRM') total += users * 50;
            if (tool.name === 'E-mail Marketing') total += contacts * 0.003;
            if (tool.name === 'Automação') total += contacts * 0.004;
        });
        return Math.round(total);
    };

    const getRecommendedPlan = () => {
        if (users <= 3 && contacts <= 20000) return FUNNELS_PLANS[0];
        if (users <= 5 && contacts <= 50000) return FUNNELS_PLANS[1];
        return FUNNELS_PLANS[2];
    };

    const toolsCost = calculateToolsCost();
    const recommendedPlan = getRecommendedPlan();
    const monthlySavings = toolsCost - recommendedPlan.price;
    const annualSavings = monthlySavings * 12;
    const savingsPercent = Math.round((1 - recommendedPlan.price / toolsCost) * 100);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <main className="pt-[80px] bg-white">
            {/* HERO - Minimalist */}
            <Section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <Container className="text-center">
                    <Reveal>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">
                            Preços
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 tracking-tight text-deep-black">
                            Planos simples.<br />
                            <span className="text-gray-400">Preços justos.</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-xl mx-auto">
                            Sem taxas escondidas, sem fidelidade.<br />
                            Tudo incluído para você começar agora.
                        </p>
                    </Reveal>
                </Container>
            </Section>

            {/* PRICING CARDS */}
            <Section className="bg-gray-50 py-16 md:py-24">
                <Container>
                    <Reveal>
                        <Pricing onBookDemo={onBookDemo} onCheckout={onCheckout} />
                    </Reveal>
                </Container>
            </Section>

            {/* SAVINGS CALCULATOR - Minimalist Version */}
            <Section className="bg-white py-16 md:py-24 border-y border-gray-100">
                <Container>
                    <Reveal>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">
                                    Calculadora
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">
                                    Quanto você vai economizar?
                                </h2>
                                <p className="text-gray-500">
                                    Calcule a economia ao consolidar suas ferramentas
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Sliders */}
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between items-center mb-3">
                                            <label className="text-sm font-medium text-gray-600">Usuários</label>
                                            <span className="text-lg font-bold text-deep-black font-mono">{users}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="15"
                                            value={users}
                                            onChange={(e) => setUsers(Number(e.target.value))}
                                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                                            <span>1</span>
                                            <span>15+</span>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-3">
                                            <label className="text-sm font-medium text-gray-600">Contatos</label>
                                            <span className="text-lg font-bold text-deep-black font-mono">{(contacts / 1000).toFixed(0)}k</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5000"
                                            max="100000"
                                            step="5000"
                                            value={contacts}
                                            onChange={(e) => setContacts(Number(e.target.value))}
                                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                                            <span>5k</span>
                                            <span>100k</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-mono mb-3">
                                            Ferramentas substituídas
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {REPLACED_TOOLS.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                                                >
                                                    {tool.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                            <span className="text-gray-500 text-sm">Ferramentas Separadas</span>
                                            <span className="text-lg font-bold text-gray-400 line-through">
                                                {formatCurrency(toolsCost)}/mês
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-600 text-sm font-medium">FUNNELS</span>
                                                <span className="text-[10px] font-bold text-neon-green bg-neon-green/10 px-2 py-0.5 rounded">
                                                    {recommendedPlan.name}
                                                </span>
                                            </div>
                                            <span className="text-lg font-bold text-deep-black">
                                                {formatCurrency(recommendedPlan.price)}/mês
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-white p-6 rounded-sm border border-neon-green/20 text-center mb-6">
                                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                                            Economia anual
                                        </p>
                                        <p className="text-3xl font-bold text-neon-green font-space">
                                            {formatCurrency(annualSavings)}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {savingsPercent}% de redução nos custos
                                        </p>
                                    </div>

                                    <Button
                                        className="w-full"
                                        onClick={onBookDemo}
                                    >
                                        Começar Agora
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* COMPARISON TABLE */}
            <Section className="bg-gray-50 py-16 md:py-24">
                <Container>
                    <Reveal>
                        <PricingTable />
                    </Reveal>
                </Container>
            </Section>

            {/* FAQ SECTION - Minimalist */}
            <Section className="bg-white py-16 md:py-24 border-t border-gray-100">
                <Container>
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">
                                    FAQ
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black">
                                    Perguntas Frequentes
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {FAQ_ITEMS.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className="border border-gray-200 rounded-sm overflow-hidden bg-white hover:border-gray-300 transition-colors"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-5 text-left"
                                        >
                                            <span className="font-medium text-deep-black text-sm">{faq.question}</span>
                                            <svg
                                                className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-200 ${openFaq === idx ? 'max-h-40' : 'max-h-0'}`}
                                        >
                                            <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* FINAL CTA - Minimalist */}
            <Section className="bg-deep-black py-16 md:py-24">
                <Container className="text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-white mb-6">
                            Pronto para consolidar?
                        </h2>
                        <p className="text-gray-400 max-w-md mx-auto mb-8">
                            Mais de 800 empresas já economizam tempo e dinheiro com o FUNNELS.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={onBookDemo}>
                                Agendar Demo
                            </Button>
                            <Button variant="outline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Ver Planos
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>
        </main>
    );
};

export default PricingPageFull;
