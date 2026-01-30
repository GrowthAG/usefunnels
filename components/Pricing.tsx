
import React, { useState } from 'react';
import { PricingPlan } from '../types';
import { CornerBrackets, HelpPopover, HelpContent } from './ui';
import { Link } from 'react-router-dom';
import { FEATURES } from '../constants';

// Basic costs for Starter (only email-related)
const starterCosts = [
    { label: "Verificação de e-mail", value: "$ 0,0025 / verificação" },
    { label: "Envio de E-mail", value: "$ 0,000675 / e-mail" },
    { label: "Fluxos Premium", value: "$ 0,0105 / execução" },
];

// Full costs for Growth/Scale (includes AI)
const fullCosts = [
    { label: "Verificação de e-mail", value: "$ 0,0025 / verificação" },
    { label: "Envio de E-mail", value: "$ 0,000675 / e-mail" },
    { label: "Fluxos Premium", value: "$ 0,0105 / execução" },
    { label: "Conteúdo de IA", value: "$ 0,09 / geração" },
    { label: "Fluxos de IA", value: "$ 0,03 / execução" },
    { label: "Conversação IA", value: "$ 0,01 / mensagem" }
];

const whatsappCosts = {
    monthly: "$ 29 USD / mês",
    perMessage: "$ 0,008 USD / msg"
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
        features: ["3 usuários", "20.000 contatos", "Landing Pages ilimitadas", "CRM de vendas", "E-mail Marketing"],
        additionalCosts: {
            label: "Ver custos adicionais",
            items: starterCosts
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
        features: ["5 usuários", "50.000 contatos", "WhatsApp Business", "Automações avançadas", "Tudo do Starter +"],
        isPopular: true,
        isDark: true,
        additionalCosts: {
            label: "Ver custos adicionais",
            whatsapp: whatsappCosts,
            items: fullCosts
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
        features: ["10 usuários", "75.000 contatos", "WhatsApp API + VoIP", "Chatbot + IA", "Tudo do Growth +"],
        additionalCosts: {
            label: "Ver custos adicionais",
            whatsapp: whatsappCosts,
            items: fullCosts
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
        features: ["15+ usuários (personalizado)", "100k+ contatos (sob medida)", "Whitelabel completo", "Suporte 24/7 dedicado"],
        isEnterpriseWhite: true
    }
];

const PricingCard: React.FC<{ plan: PricingPlan; isAnnual: boolean; onBookDemo: () => void; onCheckout?: (url: string, planName?: string, isAnnual?: boolean) => void }> = ({ plan, isAnnual, onBookDemo, onCheckout }) => {
    const [showCosts, setShowCosts] = useState(false);

    // Help content para custos adicionais
    const costHelpContent: Record<string, HelpContent> = {
        "Verificação de e-mail": {
            title: "Verificação de E-mail",
            whatIs: "Validação técnica de endereços antes do envio.",
            whyMatters: "Reduz bounces e protege sua reputação de remetente, aumentando a entregabilidade.",
            example: "1.000 verificações = R$ 13,10/mês. Valida se o e-mail existe antes de disparar campanha."
        },
        "Envio de E-mail": {
            title: "Envio de E-mail",
            whatIs: "Custo por cada e-mail disparado pela plataforma.",
            whyMatters: "Permite campanhas ilimitadas pagando apenas pelo que usar, sem taxas fixas absurdas.",
            example: "10.000 envios = R$ 34/mês. Muito mais barato que ferramentas tradicionais."
        },
        "Fluxos Premium": {
            title: "Fluxos Premium",
            whatIs: "Automações avançadas com lógica condicional e integrações complexas.",
            whyMatters: "Automação sofisticada que economiza horas de trabalho manual da equipe.",
            example: "100 execuções = R$ 5,25/mês. Uma execução = um passo/ação dentro do fluxo."
        },
        "Conteúdo de IA": {
            title: "Conteúdo de IA",
            whatIs: "Geração de textos, e-mails e posts usando GPT-4.",
            whyMatters: "Cria conteúdo profissional em segundos, economizando tempo de copywriting.",
            example: "30 gerações = R$ 14,18/mês. Gera follow-ups, respostas, anúncios automaticamente."
        },
        "Fluxos de IA": {
            title: "Fluxos de IA",
            whatIs: "Automações que usam IA para tomar decisões (classificação, roteamento).",
            whyMatters: "Inteligência artificial decide a melhor ação baseada no contexto, qualificando leads automaticamente.",
            example: "50 execuções = R$ 7,88/mês. IA classifica leads e direciona para vendedor certo."
        },
        "Conversação IA": {
            title: "Conversação IA",
            whatIs: "Mensagens processadas pelo chatbot com IA conversacional.",
            whyMatters: "Atende e qualifica leads 24/7 sem intervenção humana, aumentando conversão.",
            example: "100 mensagens = R$ 10,50/mês. Bot responde perguntas e agenda reuniões sozinho."
        },
        "Custo Fixo WhatsApp": {
            title: "Custo Fixo WhatsApp",
            whatIs: "Taxa mensal cobrada pela Meta para uso da API oficial do WhatsApp Business.",
            whyMatters: "Necessário para enviar mensagens via WhatsApp de forma profissional e escalável.",
            example: "R$ 145/mês (tarifa Meta). Varia por número e região, cobrado pela Meta direto."
        },
        "Custo por msg": {
            title: "Custo por Mensagem WhatsApp",
            whatIs: "Cobrança da Meta por cada conversa iniciada no WhatsApp Business API.",
            whyMatters: "Modelo de cobrança oficial da Meta baseado em categorias de conversa (marketing, serviço, etc).",
            example: "5.000 msgs = R$ 200/mês. Cobrado pela Meta conforme tipo de conversa e país."
        }
    };

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
            onCheckout(link, plan.name.toLowerCase(), isAnnual);
        } else {
            window.location.href = link;
        }
    };

    // Card Styling Logic
    let cardStyleClasses = "";
    if (plan.isPopular && plan.isDark) {
        // Growth - dark card with green accent
        cardStyleClasses = "bg-deep-black border-2 border-neon-green shadow-[0_0_30px_rgba(27,252,79,0.15)] text-white relative";
    } else if (plan.isPopular) {
        cardStyleClasses = "bg-white border-2 border-neon-green shadow-[0_0_30px_rgba(27,252,79,0.15)] relative";
    } else if (plan.isEnterpriseWhite) {
        cardStyleClasses = "bg-white border border-gray-200 shadow-sm";
    } else if (plan.isDark) {
        cardStyleClasses = "bg-deep-black border border-gray-800 text-white shadow-lg";
    } else {
        cardStyleClasses = "bg-white border border-gray-200 shadow-sm";
    }

    return (
        <div className={`relative p-6 lg:p-8 rounded-sm transition-all duration-300 flex flex-col h-full w-full hover:-translate-y-2 hover:shadow-2xl group ${cardStyleClasses} ${showCosts ? 'z-50' : 'z-10'}`}>

            {/* Badge for Popular */}
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-deep-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border border-white whitespace-nowrap z-20">
                    Mais Escolhido
                </div>
            )}

            {/* Badge for Enterprise */}
            {plan.isEnterpriseWhite && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-800 text-white border border-gray-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap z-20">
                    Exclusivo
                </div>
            )}

            {/* Corner Brackets for Standard Plans */}
            {!plan.isDark && !plan.isPopular && !plan.isEnterpriseWhite && <CornerBrackets className="opacity-0 group-hover:opacity-100 transition-opacity" />}

            {/* Spotlight Effect for Popular */}
            {plan.isPopular && (
                <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent pointer-events-none rounded-sm"></div>
            )}

            {/* Header Section: Fixed Height for Alignment */}
            <div className="mb-6 text-center h-[80px] flex flex-col justify-center relative z-10">
                <h3 className={`text-2xl font-bold font-space mb-2 ${plan.isDark ? 'text-white' : 'text-deep-black'}`}>
                    {plan.name}
                </h3>
                <p className={`text-sm font-medium ${plan.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {plan.subtitle}
                </p>
            </div>

            {/* Price Section: Fixed Height */}
            <div className={`pb-6 mb-6 border-b ${plan.isDark ? 'border-gray-800' : 'border-gray-100'} text-center flex-shrink-0 h-[100px] flex flex-col justify-center relative z-10`}>
                <div className="flex items-end justify-center gap-1">
                    <span className={`text-4xl lg:text-5xl font-bold font-space tracking-tighter ${plan.isDark ? 'text-white' : 'text-deep-black'}`}>
                        {plan.isEnterpriseWhite ? 'Custom' : `R$ ${isAnnual ? plan.annualPrice : plan.monthlyPrice}`}
                    </span>
                    {!plan.isEnterpriseWhite && (
                        <span className={`text-sm font-bold mb-2 ${plan.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            /{isAnnual ? 'ano' : 'mês'}
                        </span>
                    )}
                </div>
                {isAnnual && !plan.isEnterpriseWhite && (
                    <div className="mt-2 text-xs font-bold text-neon-green bg-neon-green/10 px-2 py-1 rounded-full inline-block mx-auto">
                        {plan.annualSavings}
                    </div>
                )}
            </div>

            {/* Recommended Badge */}
            <div className={`text-center text-xs font-bold py-2 rounded-lg mb-6 relative z-10 ${plan.isPopular ? 'bg-deep-black text-white border border-gray-800' :
                plan.isDark ? 'bg-white/10 text-neon-green' : 'bg-gray-50 text-gray-500'
                }`}>
                {plan.recommendedBadge}
            </div>

            {/* Additional Costs Section */}
            <div className="relative mb-6 z-20">
                {plan.additionalCosts ? (
                    <div>
                        <button
                            onClick={() => setShowCosts(!showCosts)}
                            className={`w-full flex items-center justify-between p-3 text-xs font-bold border rounded-sm transition-colors ${plan.isDark ? 'bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <span>{plan.additionalCosts.label}</span>
                            <svg className={`w-3 h-3 transition-transform duration-300 ${showCosts ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Dropdown Content */}
                        <div className={`absolute left-0 right-0 z-50 mt-2 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl rounded-sm ${showCosts ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}>
                            <div className={`border p-4 text-xs text-left shadow-xl ${plan.isDark ? 'bg-[#151515] border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'
                                }`}>
                                {plan.additionalCosts.whatsapp && (
                                    <div className={`mb-3 pb-3 border-b ${plan.isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                                        <div className="flex items-center gap-2 font-bold mb-2 text-sm">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            WhatsApp Business API
                                        </div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="opacity-80 flex items-center">
                                                Custo Fixo:
                                                <HelpPopover content={costHelpContent["Custo Fixo WhatsApp"]} />
                                            </span>
                                            <span className="font-bold">{plan.additionalCosts.whatsapp.monthly}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="opacity-80 flex items-center">
                                                Por Msg:
                                                <HelpPopover content={costHelpContent["Custo por msg"]} />
                                            </span>
                                            <span className="font-bold">{plan.additionalCosts.whatsapp.perMessage}</span>
                                        </div>
                                    </div>
                                )}
                                <ul className="space-y-2">
                                    {plan.additionalCosts.items.map((item, idx) => (
                                        <li key={idx} className="flex justify-between items-center">
                                            <span className="opacity-90 flex items-center">
                                                {item.label}
                                                {costHelpContent[item.label] && (
                                                    <HelpPopover content={costHelpContent[item.label]} />
                                                )}
                                            </span>
                                            <span className="font-bold text-emerald-600">{item.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-[42px]"></div>
                )}
            </div>

            {/* Features List */}
            <div className="flex-grow relative z-10">
                <ul className="space-y-3 pt-2">
                    {plan.features.map((feature, idx) => {
                        const linkId = getFeatureLink(feature);
                        return (
                            <li key={idx} className={`flex items-start gap-3 text-sm font-medium text-left ${plan.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                <svg className="w-5 h-5 text-neon-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="mt-8 pt-6 border-t border-dashed border-gray-200/20 relative z-10">
                <a
                    href={isAnnual ? plan.linkAnnual : plan.linkMonthly}
                    onClick={handleCtaClick}
                    className={`block w-full text-center py-4 rounded-sm font-bold uppercase tracking-wide transition-all duration-300 cursor-pointer ${plan.isPopular ? 'bg-deep-black text-neon-green hover:bg-opacity-90 hover:shadow-lg hover:scale-[1.02]' :
                        plan.isDark ? 'bg-neon-green text-deep-black hover:bg-white' :
                            plan.isEnterpriseWhite ? 'bg-deep-black text-white hover:bg-neon-green hover:text-deep-black' :
                                'bg-deep-black text-white hover:scale-[1.02] hover:shadow-lg'
                        }`}
                >
                    {plan.isEnterpriseWhite ? 'Falar com Vendas' : 'Começar Agora'}
                </a>
            </div>
        </div>
    );
};

/* --- NEW COMPARISON TABLE COMPONENT --- */
export const PricingTable = () => {
    // Rich help content para features da tabela comparativa
    const helpContent: Record<string, HelpContent> = {
        "Usuários": {
            title: "Usuários",
            whatIs: "Número de pessoas da sua equipe que podem acessar o sistema simultaneamente.",
            whyMatters: "Cada usuário tem login próprio e permissões personalizadas para acessar pipelines, leads e campanhas.",
            example: "3 usuários = vendedor, gerente e marketing podem trabalhar juntos no sistema."
        },
        "Contatos": {
            title: "Contatos",
            whatIs: "Quantidade máxima de leads e clientes que podem ser armazenados no CRM.",
            whyMatters: "Todos os dados ficam centralizados: histórico de conversas, negociações e informações relevantes.",
            example: "20.000 contatos = sua base completa de prospects e clientes com todas interações registradas."
        },
        "Pipelines de Venda": {
            title: "Pipelines de Venda",
            whatIs: "Quadros visuais tipo Kanban para organizar etapas do funil de vendas.",
            whyMatters: "Visualize todo o processo comercial, identifique gargalos e acompanhe performance em tempo real.",
            example: "Pipeline B2B: Prospecção → Qualificação → Proposta → Negociação → Fechamento."
        },
        "Oportunidades": {
            title: "Oportunidades",
            whatIs: "Negócios em andamento dentro dos pipelines (cards individuais com valor e etapa).",
            whyMatters: "Acompanhe cada negociação, valor estimado, probabilidade de fechamento e próximos passos.",
            example: "Oportunidade: \"Venda XYZ Ltda\" - R$ 50k - 80% probabilidade - etapa Proposta Enviada."
        },
        "WhatsApp Business API": {
            title: "WhatsApp Business API",
            whatIs: "Integração oficial da Meta para enviar/receber mensagens profissionais no WhatsApp.",
            whyMatters: "Automações, múltiplos atendentes, templates aprovados e integração com CRM para atendimento escalável.",
            example: "Envie confirmações automáticas, notificações de pedido e atenda clientes direto no sistema."
        },
        "Telefonia VoIP": {
            title: "Telefonia VoIP",
            whatIs: "Sistema de chamadas integrado ao CRM sem necessidade de telefone físico.",
            whyMatters: "Discador automático, gravação de ligações, histórico completo e relatórios de performance.",
            example: "Vendedor liga para lead direto da plataforma, tudo fica registrado no histórico do contato."
        },
        "Construtor de Fluxos": {
            title: "Construtor de Fluxos",
            whatIs: "Editor visual para criar automações de marketing e vendas sem código.",
            whyMatters: "Níveis: Básico (gatilhos simples), Avançado (condições IF/ELSE), Premium (loops e integrações), Custom (personalizado).",
            example: "Fluxo Avançado: Se lead abriu e-mail 3x → enviar WhatsApp → se responder → atribuir vendedor."
        },
        "Disparos de E-mail": {
            title: "Disparos de E-mail",
            whatIs: "Envio automático de campanhas e sequências de e-mails personalizados.",
            whyMatters: "Nutrição de leads, follow-ups automáticos e campanhas segmentadas com tracking de abertura/clique.",
            example: "Sequência: E-mail 1 (dia 0) → E-mail 2 (dia 3 se não abriu) → E-mail 3 (dia 7)."
        },
        "Chatbot IA": {
            title: "Chatbot IA",
            whatIs: "Assistente virtual com inteligência artificial que atende e qualifica leads automaticamente.",
            whyMatters: "Funciona 24/7 sem intervenção humana, entende contexto e responde perguntas complexas naturalmente.",
            example: "Bot qualifica lead: identifica interesse, coleta dados, agenda reunião e envia para vendedor."
        },
        "IA Content Generator": {
            title: "IA Content Generator",
            whatIs: "Gerador de textos profissionais usando GPT-4 para marketing e vendas.",
            whyMatters: "Crie e-mails, posts, anúncios e respostas personalizadas em segundos mantendo tom de voz consistente.",
            example: "Gera follow-up personalizado baseado no histórico: 'Oi João, sobre nossa conversa de ontem...'"
        },
        "API de Integração": {
            title: "API de Integração",
            whatIs: "Interface de programação para conectar o sistema com ferramentas externas.",
            whyMatters: "Integre com ERP, e-commerce, apps personalizados e crie fluxos customizados entre sistemas.",
            example: "Integração com Shopify: pedido novo → cria lead no CRM → envia e-mail boas-vindas."
        },
        "Whitelabel": {
            title: "Whitelabel",
            whatIs: "Personalização completa da plataforma com sua marca, logo e domínio próprio.",
            whyMatters: "Revenda a solução como sua ou mantenha identidade visual 100% alinhada com sua empresa.",
            example: "Login em 'app.suaempresa.com' com seu logo, cores e nome da marca no lugar de Funnels."
        },
        "Custo WhatsApp": {
            title: "Tarifa Meta WhatsApp",
            whatIs: "Taxa oficial cobrada pela Meta para uso da API do WhatsApp Business.",
            whyMatters: "Custo fixo mensal + variável por conversa, estabelecido pela Meta e não pela Funnels.",
            example: "R$ 145/mês fixo + R$ 0,04/msg. Planos maiores absorvem parte dessa tarifa."
        }
    };

    const featuresList = [
        {
            category: "CRM & Vendas", items: [
                { name: "Usuários", starter: "3", growth: "5", scale: "10", enterprise: "15+" },
                { name: "Contatos", starter: "20.000", growth: "50.000", scale: "75.000", enterprise: "100k+" },
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
                { name: "Chatbot IA", starter: false, growth: false, scale: true, enterprise: true },
                { name: "IA Content Generator", starter: false, growth: false, scale: true, enterprise: true },
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
                                <div className="p-4 text-sm font-medium text-gray-700 flex items-center">
                                    {row.name}
                                    {helpContent[row.name] && (
                                        <HelpPopover content={helpContent[row.name]} />
                                    )}
                                </div>
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

export const Pricing = ({ onBookDemo, onCheckout }: { onBookDemo: () => void; onCheckout?: (url: string, planName?: string, isAnnual?: boolean) => void }) => {
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
