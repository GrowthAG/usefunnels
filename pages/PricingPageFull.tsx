
import React, { useState, useEffect } from 'react';
import { Container, Section, Reveal, Button, TechBadge, CornerBrackets } from '../components/ui';
import { Pricing } from '../components/Pricing';

// FUNNELS pricing tiers with feature availability
const FUNNELS_PLANS = [
    { name: 'Starter', price: 497, users: 3, contacts: 20000, hasWhatsapp: false, hasAI: false },
    { name: 'Growth', price: 697, users: 5, contacts: 50000, hasWhatsapp: true, hasAI: true },
    { name: 'Scale', price: 997, users: 10, contacts: 75000, hasWhatsapp: true, hasAI: true },
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

    // Usage Calculator State - Growth plan (697) as default
    const [selectedPlan, setSelectedPlan] = useState(1); // 0=Starter, 1=Growth, 2=Scale
    const [emailsPerMonth, setEmailsPerMonth] = useState(10000);
    const [whatsappMessages, setWhatsappMessages] = useState(1000);
    const [aiActions, setAiActions] = useState(500);

    // Cost rates (based on real GoHighLevel billing - USD converted to BRL at ~5.50)
    const COST_RATES = {
        // Email: $0.000675/email = R$ 0.0037
        emailPerUnit: 0.0037,
        // WhatsApp Marketing: ~$0.065/msg = R$ 0.36
        whatsappMarketingPerMsg: 0.36,
        // WhatsApp Utility: ~$0.007/msg = R$ 0.04  
        whatsappUtilityPerMsg: 0.04,
        // Average WhatsApp (70% utility, 30% marketing)
        whatsappAvgPerMsg: 0.14,
        // AI Conversation: ~$0.011/action = R$ 0.06
        aiPerAction: 0.06,
        // Workflow Premium: ~$0.01/action = R$ 0.055
        workflowPremium: 0.055
    };

    // Calculate variable costs (respecting plan limitations)
    const currentPlan = FUNNELS_PLANS[selectedPlan];
    const emailCost = emailsPerMonth * COST_RATES.emailPerUnit;
    const whatsappCost = currentPlan.hasWhatsapp ? whatsappMessages * COST_RATES.whatsappAvgPerMsg : 0;
    const aiCost = currentPlan.hasAI ? aiActions * COST_RATES.aiPerAction : 0;
    const variableCost = emailCost + whatsappCost + aiCost;
    const totalMonthlyCost = currentPlan.price + variableCost;

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
            {/* HERO + STATS - Unified Compact Dark Section */}
            <Section className="bg-deep-black py-12 md:py-16 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 via-transparent to-transparent pointer-events-none"></div>

                <Container className="relative z-10">
                    <Reveal>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">
                                Preços Transparentes
                            </span>
                            <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] mb-5 md:mb-6 leading-[1.1] md:leading-[0.95] font-space">
                                <span className="block text-white">Escolha seu plano.</span>
                                <span className="block text-neon-green">Comece hoje.</span>
                            </h1>
                            <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light font-space">
                                Sem taxas escondidas. Sem fidelidade. Cancele quando quiser.
                            </p>
                        </div>

                        {/* Stats Grid - Inline */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto text-center pt-8 border-t border-white/10">
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white font-space tracking-tight">
                                    R$ 35k
                                </p>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1">
                                    economia/ano
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white font-space tracking-tight">
                                    80<span className="text-neon-green">%</span>
                                </p>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1">
                                    mais produtivo
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white font-space tracking-tight">
                                    1
                                </p>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1">
                                    plataforma
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-3xl font-bold text-white font-space tracking-tight">
                                    <span className="text-neon-green">&lt;</span>5 min
                                </p>
                                <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider font-mono mt-1">
                                    para começar
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* PRICING CARDS */}
            <Section id="pricing-plans" className="bg-gray-50 py-16 md:py-24">
                <Container>
                    <Reveal>
                        <Pricing onBookDemo={onBookDemo} onCheckout={onCheckout} />
                    </Reveal>
                </Container>
            </Section>

            {/* USAGE CALCULATOR - Estimate Real Monthly Cost */}
            <Section className="bg-white py-16 md:py-24 border-y border-gray-100">
                <Container>
                    <Reveal>
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">
                                    Calculadora de Uso
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">
                                    Estime seu custo mensal
                                </h2>
                                <p className="text-gray-500">
                                    Calcule o custo total baseado no seu uso real
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 items-start">
                                {/* Usage Inputs */}
                                <div className="space-y-6">
                                    {/* Plan Selector */}
                                    <div className="bg-gray-50 p-4 rounded-sm border border-gray-200">
                                        <label className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 block">
                                            Plano Selecionado
                                        </label>
                                        <div className="flex gap-2">
                                            {FUNNELS_PLANS.map((plan, idx) => (
                                                <button
                                                    key={plan.name}
                                                    onClick={() => setSelectedPlan(idx)}
                                                    className={`flex-1 py-3 px-4 rounded-sm text-sm font-bold transition-all ${selectedPlan === idx
                                                        ? 'bg-deep-black text-white'
                                                        : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {plan.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Email Usage */}
                                    <div>
                                        <div className="flex justify-between items-center mb-3">
                                            <label className="text-sm font-medium text-gray-600">E-mails enviados/mês</label>
                                            <span className="text-lg font-bold text-deep-black font-mono">
                                                {emailsPerMonth >= 1000 ? `${(emailsPerMonth / 1000).toFixed(0)}k` : emailsPerMonth}
                                            </span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100000"
                                            step="1000"
                                            value={emailsPerMonth}
                                            onChange={(e) => setEmailsPerMonth(Number(e.target.value))}
                                            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                                            <span>0</span>
                                            <span>100k</span>
                                        </div>
                                    </div>

                                    {/* WhatsApp Usage - Only for Growth/Scale */}
                                    {currentPlan.hasWhatsapp ? (
                                        <div>
                                            <div className="flex justify-between items-center mb-3">
                                                <label className="text-sm font-medium text-gray-600">Conversas WhatsApp/mês</label>
                                                <span className="text-lg font-bold text-deep-black font-mono">
                                                    {whatsappMessages >= 1000 ? `${(whatsappMessages / 1000).toFixed(1)}k` : whatsappMessages}
                                                </span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="10000"
                                                step="100"
                                                value={whatsappMessages}
                                                onChange={(e) => setWhatsappMessages(Number(e.target.value))}
                                                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                            />
                                            <div className="flex justify-between text-xs text-gray-400 mt-2">
                                                <span>0</span>
                                                <span>10k</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-100 p-4 rounded-sm">
                                            <p className="text-sm text-gray-400">
                                                <span className="font-medium text-gray-500">WhatsApp</span> — disponível nos planos Growth e Scale
                                            </p>
                                        </div>
                                    )}

                                    {/* AI Usage - Only for Growth/Scale */}
                                    {currentPlan.hasAI ? (
                                        <div>
                                            <div className="flex justify-between items-center mb-3">
                                                <label className="text-sm font-medium text-gray-600">Ações de IA/mês</label>
                                                <span className="text-lg font-bold text-deep-black font-mono">{aiActions}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="5000"
                                                step="100"
                                                value={aiActions}
                                                onChange={(e) => setAiActions(Number(e.target.value))}
                                                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-neon-green"
                                            />
                                            <div className="flex justify-between text-xs text-gray-400 mt-2">
                                                <span>0</span>
                                                <span>5k</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="bg-gray-100 p-4 rounded-sm">
                                            <p className="text-sm text-gray-400">
                                                <span className="font-medium text-gray-500">IA</span> — disponível nos planos Growth e Scale
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Cost Breakdown */}
                                <div className="bg-gray-50 p-8 rounded-sm border border-gray-200">
                                    <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
                                        Detalhamento de Custos
                                    </p>

                                    <div className="space-y-4 mb-6">
                                        {/* Base Plan */}
                                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                            <div>
                                                <span className="text-gray-700 text-sm font-medium">Plano {FUNNELS_PLANS[selectedPlan].name}</span>
                                                <p className="text-xs text-gray-400">até {FUNNELS_PLANS[selectedPlan].users} usuários</p>
                                            </div>
                                            <span className="text-lg font-bold text-deep-black">
                                                {formatCurrency(FUNNELS_PLANS[selectedPlan].price)}
                                            </span>
                                        </div>

                                        {/* Variable Costs */}
                                        {emailsPerMonth > 0 && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">E-mails ({emailsPerMonth.toLocaleString()})</span>
                                                <span className="font-mono text-gray-600">
                                                    + {formatCurrency(emailCost)}
                                                </span>
                                            </div>
                                        )}

                                        {currentPlan.hasWhatsapp && whatsappMessages > 0 && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">WhatsApp ({whatsappMessages.toLocaleString()} msgs)</span>
                                                <span className="font-mono text-gray-600">
                                                    + {formatCurrency(whatsappCost)}
                                                </span>
                                            </div>
                                        )}

                                        {currentPlan.hasAI && aiActions > 0 && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">IA ({aiActions} ações)</span>
                                                <span className="font-mono text-gray-600">
                                                    + {formatCurrency(aiCost)}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Total */}
                                    <div className="bg-white p-6 rounded-sm border border-gray-200 text-center mb-6">
                                        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                                            Custo Mensal Estimado
                                        </p>
                                        <p className="text-4xl font-bold text-deep-black font-space">
                                            {formatCurrency(totalMonthlyCost)}
                                        </p>
                                        {variableCost > 0 && (
                                            <p className="text-xs text-gray-400 mt-2">
                                                Base: {formatCurrency(FUNNELS_PLANS[selectedPlan].price)} + Uso: {formatCurrency(variableCost)}
                                            </p>
                                        )}
                                    </div>

                                    <Button
                                        className="w-full"
                                        onClick={onBookDemo}
                                    >
                                        Agendar Demo
                                    </Button>

                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        * Custos de uso são repassados do provedor, sem markup
                                    </p>
                                </div>
                            </div>
                        </div>
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
