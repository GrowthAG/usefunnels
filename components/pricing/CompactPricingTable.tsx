
import React from 'react';

/**
 * Compact Pricing Comparison Table
 *
 * Design inspirado em: Stripe, Notion, Linear, Figma
 * - Tabela compacta (não expande)
 * - Tooltips em floating popup
 * - Visual clean e scannable
 */

export const CompactPricingTable: React.FC = () => {
    const Check = () => <span className="text-neon-green text-lg">✓</span>;
    const Cross = () => <span className="text-gray-300 text-lg">✕</span>;

    const featuresList = [
        {
            category: "CRM & VENDAS",
            items: [
                { name: "Usuários", starter: "3", growth: "5", scale: "10", enterprise: "Ilimitado" },
                { name: "Contatos", starter: "20.000", growth: "50.000", scale: "75.000", enterprise: "Ilimitado" },
                { name: "Pipelines de Venda", starter: "3", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
                { name: "Oportunidades", starter: "Ilimitado", growth: "Ilimitado", scale: "Ilimitado", enterprise: "Ilimitado" },
            ]
        },
        {
            category: "CANAIS & COMUNICAÇÃO",
            items: [
                { name: "E-mail Marketing", starter: true, growth: true, scale: true, enterprise: true },
                { name: "WhatsApp Business API", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Chat Widget", starter: true, growth: true, scale: true, enterprise: true },
                { name: "Telefonia VoIP", starter: false, growth: false, scale: true, enterprise: true },
                { name: "Custo WhatsApp", starter: "-", growth: "Tarifa Meta", scale: "Tarifa Meta", enterprise: "Negociável" },
            ]
        },
        {
            category: "AUTOMAÇÃO & IA",
            items: [
                { name: "Construtor de Fluxos", starter: "Básico", growth: "Avançado", scale: "Premium", enterprise: "Custom" },
                { name: "Disparos de E-mail", starter: true, growth: true, scale: true, enterprise: true },
                { name: "Chatbot IA", starter: false, growth: true, scale: true, enterprise: true },
                { name: "IA Content Generator", starter: false, growth: true, scale: true, enterprise: true },
            ]
        },
        {
            category: "SUPORTE & SERVIÇOS",
            items: [
                { name: "Suporte via Chat", starter: "Horário Comercial", growth: "Prioritário", scale: "Prioritário", enterprise: "24/7 Dedicado" },
                { name: "Onboarding", starter: "Gravado", growth: "Gravado", scale: "Ao Vivo", enterprise: "Personalizado" },
                { name: "API de Integração", starter: false, growth: true, scale: true, enterprise: true },
                { name: "Whitelabel", starter: false, growth: false, scale: false, enterprise: true },
            ]
        }
    ];

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
