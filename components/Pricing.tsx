
import React, { useState } from 'react';
import { PricingPlan } from '../types';
import { CornerBrackets } from './ui';
import { Link } from 'react-router-dom';
import { FEATURES } from '../constants';
import { CostBreakdown } from './pricing/CostBreakdown';
import { EnterpriseCostInfo } from './pricing/EnterpriseCostInfo';
import { CompactPricingTable } from './pricing/CompactPricingTable';
import { PricingFAQ } from './pricing/PricingFAQ';
import { PricingAddons } from './pricing/PricingAddons';
import { PricingSavingsCalculator } from './pricing/PricingSavingsCalculator';

const commonCosts = [
    { label: "Fluxos de trabalho Premium", value: "$0.0105" },
    { label: "Verificação de e-mail", value: "$0.002625" },
    { label: "Envio de E-mail", value: "$0.000675" },
    { label: "Conteúdo de IA", value: "$0.0945" },
    { label: "Fluxos de trabalho com IA", value: "$0.0315" },
    { label: "Por mensagem para IA", value: "$0.021" }
];

const whatsappCosts = {
    monthly: "$29 USD/mês",
    perMessage: "$0.0080 USD"
};

const plans: PricingPlan[] = [
    {
        name: "Starter",
        subtitle: "Ideal para pequenas empresas",
        monthlyPrice: "497",
        annualPrice: "4.970",
        monthlySavings: "",
        annualSavings: "Economize R$ 994/ano",
        linkMonthly: "https://checkout.usefunnels.io/plano-starter-mensal",
        linkAnnual: "https://checkout.usefunnels.io/plano-starter-anual",
        recommendedBadge: "Ideal para: Startups e Freelancers",
        features: ["3 usuários", "20.000 contatos", "Landing Pages ilimitadas", "CRM de vendas"],
        additionalCosts: {
            label: "Ver custos adicionais",
            items: commonCosts
        }
    },
    {
        name: "Growth",
        subtitle: "Para empresas em expansão",
        monthlyPrice: "697",
        annualPrice: "6.970",
        annualSavings: "Economize R$ 1.394/ano",
        linkMonthly: "https://checkout.usefunnels.io/plano-growth-mensal",
        linkAnnual: "https://checkout.usefunnels.io/plano-growth-anual",
        recommendedBadge: "Ideal para: E-commerce e Agências",
        features: ["5 usuários", "50.000 contatos", "WhatsApp Business"],
        isPopular: true,
        additionalCosts: {
            label: "Ver custos adicionais",
            whatsapp: whatsappCosts,
            items: commonCosts
        }
    },
    {
        name: "Scale",
        subtitle: "Empresas em crescimento",
        monthlyPrice: "997",
        annualPrice: "9.970",
        annualSavings: "Economize R$ 1.994/ano",
        linkMonthly: "#",
        linkAnnual: "#",
        recommendedBadge: "Ideal para: Empresas Médias",
        features: ["10 usuários", "75.000 contatos", "WhatsApp API + VoIP", "Suporte prioritário"],
        isDark: true,
        additionalCosts: {
            label: "Ver custos adicionais",
            whatsapp: whatsappCosts,
            items: commonCosts
        }
    },
    {
        name: "Enterprise",
        subtitle: "Sob consulta",
        monthlyPrice: "Custom",
        annualPrice: "Custom",
        annualSavings: "",
        linkMonthly: "/enterprise",
        linkAnnual: "/enterprise",
        recommendedBadge: "Ideal para: Grandes Corporações",
        features: ["Usuários ilimitados", "Contatos ilimitados", "Whitelabel", "Suporte 24/7"],
        isEnterprise: true
    }
];

const PricingCard: React.FC<{ plan: PricingPlan; isAnnual: boolean; onBookDemo: () => void; onCheckout?: (url: string) => void }> = ({ plan, isAnnual, onBookDemo, onCheckout }) => {
    const [showCosts, setShowCosts] = useState(false);

    // Helper to check if a feature matches a resource page
    const getFeatureLink = (featureText: string) => {
        if (featureText.includes("CRM")) return "crm";
        if (featureText.includes("WhatsApp")) return "whatsapp";
        if (featureText.includes("Chat Bots") || featureText.includes("IA")) return "chatbot";
        if (featureText.includes("Landing Pages") || featureText.includes("Páginas")) return "paginas";
        return null;
    };

    const handleCtaClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const link = isAnnual ? plan.linkAnnual : plan.linkMonthly;

        if (link === '#' || link.includes('enterprise')) {
            onBookDemo();
        } else if (onCheckout) {
            onCheckout(link);
        } else {
            window.location.href = link;
        }
    };

    // Card Styling Logic
    let cardStyleClasses = "";
    if (plan.isPopular) {
        cardStyleClasses = "bg-white border-2 border-neon-green shadow-[0_0_30px_rgba(27,252,79,0.15)] relative";
    } else if (plan.isEnterprise) {
        cardStyleClasses = "bg-gradient-to-b from-[#1a1a1a] to-black border border-gray-700 text-white shadow-xl";
    } else if (plan.isDark) {
        cardStyleClasses = "bg-deep-black border border-gray-800 text-white shadow-lg";
    } else {
        cardStyleClasses = "bg-white border border-gray-200 shadow-sm";
    }

    return (
        <div className={`relative p-4 lg:p-5 rounded-sm transition-all duration-300 flex flex-col h-full w-full hover:-translate-y-2 hover:shadow-2xl group ${cardStyleClasses} ${showCosts ? 'z-50' : 'z-10'}`}>

            {/* Badge for Popular */}
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-deep-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white whitespace-nowrap z-20">
                    Mais Escolhido
                </div>
            )}

            {/* Badge for Enterprise */}
            {plan.isEnterprise && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-800 text-gray-200 border border-gray-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap z-20">
                    Exclusivo
                </div>
            )}

            {/* Corner Brackets for Standard Plans */}
            {!plan.isDark && !plan.isPopular && !plan.isEnterprise && <CornerBrackets className="opacity-0 group-hover:opacity-100 transition-opacity" />}

            {/* Spotlight Effect for Popular */}
            {plan.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent pointer-events-none rounded-sm"></div>
            )}

            {/* Header Section: Fixed Height for Alignment */}
            <div className="mb-4 text-center h-[80px] flex flex-col justify-center relative z-10">
                <h3 className={`text-2xl font-bold font-space mb-2 ${plan.isDark || plan.isEnterprise ? 'text-white' : 'text-deep-black'}`}>
                    {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.isDark || plan.isEnterprise ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.subtitle}
                </p>
            </div>

            {/* Price Section: Fixed Height */}
            <div className={`pb-3 mb-3 border-b ${plan.isDark || plan.isEnterprise ? 'border-gray-800' : 'border-gray-100'} text-center flex-shrink-0 h-[65px] flex flex-col justify-center relative z-10`}>
                <div className="flex items-end justify-center gap-1">
                    <span className={`text-3xl lg:text-4xl font-bold font-space tracking-tighter ${plan.isDark || plan.isEnterprise ? 'text-white' : 'text-deep-black'}`}>
                        {plan.isEnterprise ? 'Custom' : `R$ ${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                    </span>
                    {!plan.isEnterprise && (
                        <span className={`text-xs font-bold mb-1 ${plan.isDark || plan.isEnterprise ? 'text-gray-400' : 'text-gray-500'}`}>
                            /{isAnnual ? 'ano' : 'mês'}
                        </span>
                    )}
                </div>
                {isAnnual && !plan.isEnterprise && (
                    <div className="mt-1 text-[10px] font-bold text-neon-green bg-neon-green/10 px-2 py-0.5 rounded-full inline-block mx-auto">
                        {plan.annualSavings}
                    </div>
                )}
            </div>

            {/* Recommended Badge */}
            <div className={`text-center text-[11px] font-bold py-1.5 rounded-lg mb-3 relative z-10 ${plan.isPopular ? 'bg-deep-black text-white border border-gray-800' :
                plan.isDark || plan.isEnterprise ? 'bg-white/10 text-neon-green' : 'bg-gray-50 text-gray-500'
                }`}>
                {plan.recommendedBadge}
            </div>

            {/* Additional Costs Section */}
            <div className="relative mb-3 z-20">
                {plan.isEnterprise ? (
                    // Enterprise: Show custom info instead of costs
                    <EnterpriseCostInfo />
                ) : plan.additionalCosts ? (
                    // Other plans: Show accordion with new CostBreakdown
                    <div>
                        <button
                            onClick={() => setShowCosts(!showCosts)}
                            className={`w-full flex items-center justify-between p-2 text-[11px] font-bold border rounded-sm transition-colors ${plan.isDark ? 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <span>{plan.additionalCosts.label}</span>
                            <svg className={`w-3 h-3 transition-transform duration-300 ${showCosts ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Dropdown Content - Using new CostBreakdown component */}
                        <div className={`absolute left-0 right-0 z-50 mt-2 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl rounded-sm ${showCosts ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                            <CostBreakdown
                                planName={plan.name}
                                hasWhatsApp={!!plan.additionalCosts.whatsapp}
                                isDark={plan.isDark}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="h-[36px]"></div>
                )}
            </div>

            {/* Features List */}
            <div className="flex-grow relative z-10">
                <ul className="space-y-2 pt-0">
                    {plan.features.map((feature, idx) => {
                        const linkId = getFeatureLink(feature);
                        return (
                            <li key={idx} className={`flex items-start gap-2 text-xs font-medium text-left ${plan.isDark || plan.isEnterprise ? 'text-gray-300' : 'text-gray-600'}`}>
                                <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {linkId ? (
                                    <Link to={`/recursos/${linkId}`} className="border-b border-gray-300 hover:border-neon-green hover:text-neon-green transition-colors cursor-pointer flex items-center gap-1">
                                        {feature} <span className="text-[10px]">→</span>
                                    </Link>
                                ) : (
                                    feature
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-4 pt-3 border-t border-dashed border-gray-200/20 relative z-10">
                <a
                    href={isAnnual ? plan.linkAnnual : plan.linkMonthly}
                    onClick={handleCtaClick}
                    className={`block w-full text-center py-3 rounded-sm font-bold uppercase tracking-wide text-xs transition-all duration-300 cursor-pointer ${plan.isPopular ? 'bg-deep-black text-neon-green hover:bg-opacity-90 hover:shadow-lg hover:scale-[1.02]' :
                        plan.isDark ? 'bg-neon-green text-deep-black hover:bg-white' :
                            plan.isEnterprise ? 'bg-white text-deep-black hover:bg-neon-green' :
                                'bg-deep-black text-white hover:scale-[1.02] hover:shadow-lg'
                        }`}
                >
                    {plan.isEnterprise ? 'Falar com Vendas' : 'Começar Agora'}
                </a>
            </div>
        </div>
    );
};

/* --- NEW COMPARISON TABLE COMPONENT --- */
export const PricingTable = () => {
    const featuresList = [
        {
            category: "CRM & Vendas", items: [
                { name: "Usuários", starter: "3", growth: "5", scale: "10", enterprise: "Ilimitado" },
                { name: "Contatos", starter: "20.000", growth: "50.000", scale: "75.000", enterprise: "Ilimitado" },
                { name: "Pipelines de Venda", starter: "3", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
                { name: "Oportunidades", starter: "Ilimitado", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
            ]
        },
        {
            category: "Canais & Comunicação", items: [
                { name: "E-mail Marketing", starter: true, growth: true, scale: true, enterprise: true },
                { name: "WhatsApp Business API", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Chat Widget", starter: true, growth: true, scale: true, enterprise: true },
                { name: "Telefonia VoIP", starter: false, growth: false, scale: true, enterprise: true },
                { name: "Custo WhatsApp", starter: "-", growth: "Tarifa Meta", scale: "Tarifa Meta", enterprise: "Tarifa Meta" },
            ]
        },
        {
            category: "Automação & IA", items: [
                { name: "Construtor de Fluxos", starter: "Básico", growth: "Avançado", scale: "Premium", enterprise: "Custom" },
                { name: "Disparos de E-mail", starter: true, growth: true, scale: true, enterprise: true },
                { name: "Chatbot IA", starter: false, growth: true, scale: true, enterprise: true },
                { name: "IA Content Generator", starter: false, growth: true, scale: true, enterprise: true },
            ]
        },
        {
            category: "Suporte & Serviços", items: [
                { name: "Suporte via Chat", starter: "Horário Comercial", growth: "Prioritário", scale: "Prioritário", enterprise: "24/7 Dedicado" },
                { name: "Onboarding", starter: "Gravado", growth: "Gravado", scale: "Ao Vivo", enterprise: "Personalizado" },
                { name: "API de Integração", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Whitelabel", starter: false, growth: false, scale: false, enterprise: true },
            ]
        }
    ];

    const Check = () => <span className="text-neon-green text-lg">✓</span>;
    const Cross = () => <span className="text-gray-300 text-lg">✕</span>;

    const renderValue = (val: string | boolean) => {
        if (val === true) return <Check />;
        if (val === false) return <Cross />;
        return <span className="font-mono text-xs md:text-sm font-medium">{val}</span>;
    };

    return (
        <div className="mt-20 overflow-x-auto relative pb-4">
            {/* Fade Indicator for scrolling */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none md:hidden z-10"></div>

            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold font-space mb-2">Compare os planos e veja o que está incluso</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Transparente. Simples. Sem pegadinhas.</p>
            </div>

            <div className="min-w-[800px] border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
                {/* Header */}
                <div className="grid grid-cols-5 bg-gray-50 border-b border-gray-200">
                    <div className="p-4 font-bold text-gray-500 text-sm flex items-end">Recursos</div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-gray-200">Starter</div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-neon-green/30 bg-neon-green/10 relative">
                        Growth
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-green"></div>
                    </div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-gray-200">Scale</div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-gray-200 bg-deep-black text-white">Enterprise</div>
                </div>

                {/* Rows */}
                {featuresList.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                        <div className="bg-gray-100 p-2 pl-4 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-200">
                            {category.category}
                        </div>
                        {category.items.map((row, rowIdx) => (
                            <div key={rowIdx} className={`grid grid-cols-5 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                <div className="p-4 text-sm font-medium text-gray-700">{row.name}</div>
                                <div className="p-4 text-center border-l border-gray-100">{renderValue(row.starter)}</div>
                                <div className="p-4 text-center border-l border-neon-green/10 bg-neon-green/5 font-bold h-full flex items-center justify-center relative">{renderValue(row.growth)}</div>
                                <div className="p-4 text-center border-l border-gray-100">{renderValue(row.scale)}</div>
                                <div className="p-4 text-center border-l border-gray-100 text-deep-black">{renderValue(row.enterprise)}</div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export const Pricing = ({ onBookDemo, onCheckout }: { onBookDemo: () => void; onCheckout?: (url: string) => void }) => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <div className="w-full">
            <div className="flex items-center justify-center gap-6 mb-12 relative z-10">
                <span className={`font-bold font-mono uppercase text-sm cursor-pointer transition-colors ${!isAnnual ? 'text-deep-black' : 'text-gray-400'}`} onClick={() => setIsAnnual(false)}>
                    Mensal
                </span>

                <div
                    onClick={() => setIsAnnual(!isAnnual)}
                    className={`w-14 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 relative ${isAnnual ? 'bg-neon-green' : 'bg-gray-300'}`}
                >
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`}></div>
                </div>

                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsAnnual(true)}>
                    <span className={`font-bold font-mono uppercase text-sm transition-colors ${isAnnual ? 'text-deep-black' : 'text-gray-400'}`}>
                        Anual
                    </span>
                    {isAnnual && (
                        <span className="bg-neon-green/10 text-green-700 border border-neon-green/30 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide font-bold animate-fade-in">
                            -17% OFF
                        </span>
                    )}
                </div>
            </div>

            {/* Grid Layout - Standardized */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto mb-16 items-stretch">
                {plans.map((plan, idx) => (
                    <div key={idx} className="w-full h-full">
                        <PricingCard plan={plan} isAnnual={isAnnual} onBookDemo={onBookDemo} onCheckout={onCheckout} />
                    </div>
                ))}
            </div>

            {/* INTEGRATE COMPARISON TABLE */}
            <PricingTable />
        </div>
    );
};

/* ===================================
   PÁGINA DEDICADA DE PREÇOS
   =================================== */

interface PricingPageProps {
    onBookDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
                    Pronto para Crescer com FUNNELS?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Junte-se a mais de 800 empresas que estão economizando tempo e dinheiro com nossa plataforma
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://checkout.usefunnels.io/plano-growth-mensal"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-deep-black font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-wide text-sm"
                    >
                        Começar Agora
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <button
                        onClick={onBookDemo}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-deep-black transition-all uppercase tracking-wide text-sm"
                    >
                        Agendar Demo Gratuita
                    </button>
                </div>
                <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Sem cartão de crédito
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Cancele quando quiser
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        7 dias de garantia
                    </div>
                </div>
            </div>
        </div>
    );
};
