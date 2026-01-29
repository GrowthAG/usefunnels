import React from 'react';

interface Addon {
    name: string;
    description: string;
    price: string;
    unit: string;
    icon: React.ReactNode;
    badge?: string;
    features: string[];
}

export const PricingAddons: React.FC = () => {
    const addons: Addon[] = [
        {
            name: "WhatsApp Business API",
            description: "Número oficial verificado com selo verde para envios em massa e múltiplos atendentes",
            price: "Tarifa Meta",
            unit: "~R$ 0,04/msg",
            badge: "Mais Popular",
            icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            features: [
                "Selo verde verificado (✓)",
                "Envios em massa ilimitados",
                "Múltiplos atendentes",
                "Respostas automáticas e chatbot"
            ]
        },
        {
            name: "Usuários Extras",
            description: "Adicione mais membros à sua equipe além do limite do seu plano",
            price: "R$ 99",
            unit: "/usuário/mês",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            features: [
                "Acesso completo à plataforma",
                "Permissões personalizáveis",
                "Sem limite de adição",
                "Cobrança proporcional"
            ]
        },
        {
            name: "Pacote de Contatos",
            description: "Aumente o limite de contatos do seu CRM conforme sua base cresce",
            price: "R$ 197",
            unit: "/25.000 contatos",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            features: [
                "Adicione 25.000 contatos",
                "Compre quantos pacotes precisar",
                "Renovação automática",
                "Exportação completa garantida"
            ]
        },
        {
            name: "Suporte Premium",
            description: "Atendimento prioritário 24/7 com SLA de resposta em até 1 hora",
            price: "R$ 497",
            unit: "/mês",
            badge: "Enterprise",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            features: [
                "Resposta em até 1 hora (SLA)",
                "Suporte por telefone, chat e e-mail",
                "Gerente de conta dedicado",
                "Treinamentos mensais personalizados"
            ]
        },
        {
            name: "API Premium",
            description: "Acesso prioritário à API com rate limits aumentados e webhooks avançados",
            price: "R$ 297",
            unit: "/mês",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            features: [
                "10.000 requisições/min",
                "Webhooks em tempo real",
                "Documentação avançada",
                "Suporte técnico dedicado"
            ]
        },
        {
            name: "Implementação Guiada",
            description: "Especialista dedicado para configurar e otimizar sua conta em 30 dias",
            price: "R$ 2.970",
            unit: "pagamento único",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            features: [
                "Setup completo da plataforma",
                "Migração de dados incluída",
                "Treinamento da equipe",
                "4 sessões de consultoria"
            ]
        }
    ];

    return (
        <div className="mt-24 mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Expanda com Add-ons</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Personalize sua experiência com recursos adicionais conforme sua operação cresce
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {addons.map((addon, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-sm p-6 bg-white hover:border-neon-green/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                    >
                        {addon.badge && (
                            <div className="absolute top-4 right-4">
                                <span className="inline-block px-3 py-1 bg-neon-green text-deep-black text-[10px] font-bold uppercase tracking-widest rounded-sm">
                                    {addon.badge}
                                </span>
                            </div>
                        )}

                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-gray-600 group-hover:bg-neon-green/10 group-hover:text-neon-green transition-colors flex-shrink-0">
                                {addon.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg mb-1 font-space">{addon.name}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{addon.description}</p>
                            </div>
                        </div>

                        <div className="mb-4 pb-4 border-b border-gray-100">
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold font-space">{addon.price}</span>
                                <span className="text-sm text-gray-500">{addon.unit}</span>
                            </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                            {addon.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 border-2 border-deep-black text-deep-black font-bold rounded-sm hover:bg-deep-black hover:text-white transition-all duration-300 uppercase tracking-wide text-sm">
                            Adicionar ao Plano
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-sm border border-gray-200">
                <h3 className="font-bold text-2xl mb-3 font-space">Precisa de algo personalizado?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Para grandes volumes, integrações customizadas ou necessidades específicas,
                    fale com nossa equipe Enterprise
                </p>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-deep-black text-white font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-wide text-sm"
                >
                    Falar com Enterprise
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
