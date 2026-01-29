import React from 'react';

interface PricingPageProps {
    onBookDemo: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onBookDemo }) => {
    const Check = () => <span className="text-neon-green text-lg">✓</span>;
    const Cross = () => <span className="text-gray-400 text-lg">✕</span>;

    const features = [
        {
            category: "USUÁRIOS & CONTATOS",
            items: [
                { name: "Usuários inclusos", starter: "3", growth: "5", scale: "10", enterprise: "Ilimitado" },
                { name: "Contatos no CRM", starter: "20.000", growth: "50.000", scale: "75.000", enterprise: "Ilimitado" },
                { name: "Usuários extras", starter: "R$ 99/usuário", growth: "R$ 99/usuário", scale: "R$ 99/usuário", enterprise: "Negociável" },
            ]
        },
        {
            category: "CRM & VENDAS",
            items: [
                { name: "Pipeline de Vendas", starter: "3 pipelines", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
                { name: "Oportunidades", starter: true, growth: true, scale: true, enterprise: true },
                { name: "Relatórios", starter: "Básico", growth: "Avançado", scale: "Avançado", enterprise: "Custom" },
                { name: "API de Integração", starter: false, growth: true, scale: true, enterprise: true },
            ]
        },
        {
            category: "COMUNICAÇÃO",
            items: [
                { name: "E-mail Marketing", starter: true, growth: true, scale: true, enterprise: true },
                { name: "WhatsApp Business API", starter: false, growth: true, scale: true, enterprise: true },
                { name: "SMS", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Chat Widget", starter: true, growth: true, scale: true, enterprise: true },
                { name: "Telefonia VoIP", starter: false, growth: false, scale: true, enterprise: true },
            ]
        },
        {
            category: "AUTOMAÇÃO & IA",
            items: [
                { name: "Workflows", starter: "Básico", growth: "Avançado", scale: "Premium", enterprise: "Ilimitado" },
                { name: "Chatbot com IA", starter: false, growth: true, scale: true, enterprise: true },
                { name: "IA Content Generator", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Respostas Automáticas", starter: true, growth: true, scale: true, enterprise: true },
            ]
        },
        {
            category: "PÁGINAS & FORMULÁRIOS",
            items: [
                { name: "Landing Pages", starter: "Ilimitado", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
                { name: "Formulários", starter: "Ilimitado", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
                { name: "Sites Completos", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Domínio Próprio", starter: true, growth: true, scale: true, enterprise: true },
            ]
        },
        {
            category: "SUPORTE",
            items: [
                { name: "Suporte via Chat", starter: "Horário Comercial", growth: "Prioritário", scale: "Prioritário", enterprise: "24/7 Dedicado" },
                { name: "Onboarding", starter: "Gravado", growth: "Gravado", scale: "Ao Vivo", enterprise: "Personalizado" },
                { name: "Gerente de Conta", starter: false, growth: false, scale: false, enterprise: true },
                { name: "Whitelabel", starter: false, growth: false, scale: false, enterprise: true },
            ]
        }
    ];

    const renderValue = (val: string | boolean) => {
        if (val === true) return <Check />;
        if (val === false) return <Cross />;
        return <span className="text-sm font-medium">{val}</span>;
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-space mb-4">
                        Preços Transparentes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Compare todos os planos e escolha o melhor para o seu negócio
                    </p>
                </div>

                {/* Tabela de Comparação */}
                <div className="overflow-x-auto mb-16">
                    <div className="min-w-[900px]">
                        {/* Header com preços */}
                        <div className="grid grid-cols-5 gap-4 mb-8">
                            <div className="col-span-1"></div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                                <h3 className="font-bold text-xl mb-2">Starter</h3>
                                <div className="text-3xl font-bold mb-1">R$ 497</div>
                                <div className="text-sm text-gray-500 mb-4">/mês</div>
                                <a
                                    href="https://checkout.usefunnels.io/plano-starter-mensal"
                                    className="block w-full py-3 bg-deep-black text-white font-bold rounded hover:bg-opacity-90 transition-all text-sm"
                                >
                                    Começar
                                </a>
                            </div>
                            <div className="bg-neon-green/5 border-2 border-neon-green rounded-lg p-6 text-center relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-deep-black text-xs font-bold px-3 py-1 rounded-full">
                                    MAIS POPULAR
                                </div>
                                <h3 className="font-bold text-xl mb-2">Growth</h3>
                                <div className="text-3xl font-bold mb-1">R$ 697</div>
                                <div className="text-sm text-gray-500 mb-4">/mês</div>
                                <a
                                    href="https://checkout.usefunnels.io/plano-growth-mensal"
                                    className="block w-full py-3 bg-neon-green text-deep-black font-bold rounded hover:bg-opacity-90 transition-all text-sm"
                                >
                                    Começar
                                </a>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                                <h3 className="font-bold text-xl mb-2">Scale</h3>
                                <div className="text-3xl font-bold mb-1">R$ 997</div>
                                <div className="text-sm text-gray-500 mb-4">/mês</div>
                                <a
                                    href="https://checkout.usefunnels.io/plano-scale-mensal"
                                    className="block w-full py-3 bg-deep-black text-white font-bold rounded hover:bg-opacity-90 transition-all text-sm"
                                >
                                    Começar
                                </a>
                            </div>
                            <div className="bg-deep-black text-white border border-gray-800 rounded-lg p-6 text-center">
                                <h3 className="font-bold text-xl mb-2">Enterprise</h3>
                                <div className="text-3xl font-bold mb-1">Custom</div>
                                <div className="text-sm text-gray-400 mb-4">Sob consulta</div>
                                <button
                                    onClick={onBookDemo}
                                    className="block w-full py-3 bg-neon-green text-deep-black font-bold rounded hover:bg-opacity-90 transition-all text-sm"
                                >
                                    Falar com Vendas
                                </button>
                            </div>
                        </div>

                        {/* Tabela de Features */}
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            {features.map((category, catIdx) => (
                                <React.Fragment key={catIdx}>
                                    <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-700">
                                            {category.category}
                                        </h4>
                                    </div>
                                    {category.items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                        >
                                            <div className="col-span-1 text-sm font-medium text-gray-700 flex items-center">
                                                {item.name}
                                            </div>
                                            <div className="text-center flex items-center justify-center">
                                                {renderValue(item.starter)}
                                            </div>
                                            <div className="text-center flex items-center justify-center bg-neon-green/5">
                                                {renderValue(item.growth)}
                                            </div>
                                            <div className="text-center flex items-center justify-center">
                                                {renderValue(item.scale)}
                                            </div>
                                            <div className="text-center flex items-center justify-center bg-gray-50">
                                                {renderValue(item.enterprise)}
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Simples */}
                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
                    <div className="space-y-4">
                        <details className="bg-white border border-gray-200 rounded-lg p-6">
                            <summary className="font-bold cursor-pointer">Posso mudar de plano a qualquer momento?</summary>
                            <p className="mt-3 text-gray-600">Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento sem taxas adicionais.</p>
                        </details>
                        <details className="bg-white border border-gray-200 rounded-lg p-6">
                            <summary className="font-bold cursor-pointer">Como funcionam os custos adicionais?</summary>
                            <p className="mt-3 text-gray-600">Você paga apenas pelo que usa além do plano base. Automações avançadas, e-mails e mensagens têm custo por uso com valores transparentes.</p>
                        </details>
                        <details className="bg-white border border-gray-200 rounded-lg p-6">
                            <summary className="font-bold cursor-pointer">Existe período de teste gratuito?</summary>
                            <p className="mt-3 text-gray-600">Oferecemos garantia de reembolso total em até 7 dias após a primeira assinatura. Experimente sem riscos!</p>
                        </details>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="text-center bg-gray-50 border border-gray-200 rounded-lg p-12">
                    <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Escolha o plano ideal e comece agora mesmo
                    </p>
                    <button
                        onClick={onBookDemo}
                        className="px-8 py-4 bg-neon-green text-deep-black font-bold rounded hover:bg-opacity-90 transition-all text-lg"
                    >
                        Falar com Especialista
                    </button>
                </div>
            </div>
        </div>
    );
};
