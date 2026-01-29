
import React, { useState } from 'react';

/**
 * Advanced Pricing Comparison Table
 *
 * Melhora a tabela comparativa com:
 * - Tooltips explicativos em cada feature
 * - Diferenciação clara entre planos
 * - Proof points e exemplos práticos
 * - Visual hierarquia melhor
 */

interface FeatureRow {
    name: string;
    tooltip?: string;
    starter: string | boolean | React.ReactNode;
    growth: string | boolean | React.ReactNode;
    scale: string | boolean | React.ReactNode;
    enterprise: string | boolean | React.ReactNode;
    highlight?: boolean; // Destaca linha importante
}

interface FeatureCategory {
    category: string;
    icon?: string;
    items: FeatureRow[];
}

export const AdvancedPricingTable: React.FC = () => {
    const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

    const Check = () => <span className="text-neon-green text-lg font-bold">✓</span>;
    const Cross = () => <span className="text-gray-300 text-lg">✕</span>;

    const featuresList: FeatureCategory[] = [
        {
            category: "CRM & VENDAS",
            icon: "📊",
            items: [
                {
                    name: "Usuários inclusos",
                    tooltip: "Número de pessoas da sua equipe que podem usar a plataforma",
                    starter: "3 usuários",
                    growth: "5 usuários",
                    scale: "10 usuários",
                    enterprise: "Ilimitado",
                    highlight: true
                },
                {
                    name: "Contatos (leads/clientes)",
                    tooltip: "Pessoas armazenadas no seu CRM (leads, clientes, prospects)",
                    starter: "20.000",
                    growth: "50.000",
                    scale: "75.000",
                    enterprise: "Ilimitado"
                },
                {
                    name: "Pipelines de Venda",
                    tooltip: "Funis independentes para diferentes produtos ou equipes (Ex: Inbound, Outbound, Renovação)",
                    starter: "3 pipelines",
                    growth: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>,
                    scale: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>,
                    enterprise: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>
                },
                {
                    name: "Oportunidades (deals)",
                    tooltip: "Negociações ativas sendo trabalhadas pela equipe",
                    starter: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>,
                    growth: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>,
                    scale: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>,
                    enterprise: <><Check /> <span className="text-xs text-gray-500">Ilimitado</span></>
                },
                {
                    name: "Campos customizados",
                    tooltip: "Crie campos personalizados para armazenar dados específicos do seu negócio",
                    starter: "50 campos",
                    growth: "200 campos",
                    scale: "500 campos",
                    enterprise: "Ilimitado"
                }
            ]
        },
        {
            category: "CANAIS & COMUNICAÇÃO",
            icon: "💬",
            items: [
                {
                    name: "E-mail Marketing",
                    tooltip: "Envie campanhas de e-mail diretamente da plataforma (SMTP dedicado incluído)",
                    starter: <Check />,
                    growth: <Check />,
                    scale: <Check />,
                    enterprise: <Check />
                },
                {
                    name: "WhatsApp Business API",
                    tooltip: "Canal oficial do WhatsApp para empresas (requer número verificado pela Meta)",
                    starter: <Cross />,
                    growth: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">+ Tarifa Meta</span></>,
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">+ Tarifa Meta</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Volume negociável</span></>,
                    highlight: true
                },
                {
                    name: "Chat Widget (site)",
                    tooltip: "Widget de chat ao vivo para seu site (integrado ao CRM)",
                    starter: <Check />,
                    growth: <Check />,
                    scale: <Check />,
                    enterprise: <Check />
                },
                {
                    name: "Telefonia VoIP",
                    tooltip: "Ligações direto da plataforma com gravação e transcrição automática",
                    starter: <Cross />,
                    growth: <Cross />,
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">+ Minutos</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Pacote incluído</span></>
                },
                {
                    name: "SMS Marketing",
                    tooltip: "Envio de SMS em massa para campanhas (Brasil e Internacional)",
                    starter: <Cross />,
                    growth: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">+ Créditos SMS</span></>,
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">+ Créditos SMS</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Pacote incluído</span></>
                }
            ]
        },
        {
            category: "AUTOMAÇÃO & IA",
            icon: "🤖",
            items: [
                {
                    name: "Construtor de Fluxos",
                    tooltip: "Crie automações visuais sem código (if/else, delays, webhooks)",
                    starter: "Básico (10 ações)",
                    growth: "Avançado (50 ações)",
                    scale: "Premium (ilimitado)",
                    enterprise: "Custom (ilimitado)",
                    highlight: true
                },
                {
                    name: "Gatilhos de automação",
                    tooltip: "Eventos que iniciam fluxos: novo lead, e-mail aberto, deal ganho, etc.",
                    starter: "15 gatilhos",
                    growth: "30 gatilhos",
                    scale: "50+ gatilhos",
                    enterprise: "Todos + Custom"
                },
                {
                    name: "Disparos de E-mail",
                    tooltip: "E-mails automáticos baseados em ações do lead ou condições específicas",
                    starter: <Check />,
                    growth: <Check />,
                    scale: <Check />,
                    enterprise: <Check />
                },
                {
                    name: "Chatbot com IA",
                    tooltip: "Assistente virtual que responde perguntas usando GPT-4 (treina com sua base de conhecimento)",
                    starter: <Cross />,
                    growth: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">500 msgs/mês</span></>,
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">2.000 msgs/mês</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Ilimitado</span></>
                },
                {
                    name: "IA Content Generator",
                    tooltip: "Gere e-mails, posts, descrições de produtos e landing pages com IA",
                    starter: <Cross />,
                    growth: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">50 gerações/mês</span></>,
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">200 gerações/mês</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Ilimitado</span></>
                },
                {
                    name: "Lead Scoring Automático",
                    tooltip: "IA classifica leads automaticamente por potencial de conversão (A, B, C, D)",
                    starter: <Cross />,
                    growth: <Check />,
                    scale: <Check />,
                    enterprise: <Check />
                }
            ]
        },
        {
            category: "ANALYTICS & RELATÓRIOS",
            icon: "📈",
            items: [
                {
                    name: "Dashboards",
                    tooltip: "Painéis visuais com métricas de vendas, marketing e atendimento",
                    starter: "3 dashboards",
                    growth: "10 dashboards",
                    scale: "Ilimitado",
                    enterprise: "Ilimitado"
                },
                {
                    name: "Relatórios customizados",
                    tooltip: "Crie relatórios personalizados com os dados que você precisa",
                    starter: "5 relatórios",
                    growth: "20 relatórios",
                    scale: "Ilimitado",
                    enterprise: "Ilimitado"
                },
                {
                    name: "Funil de vendas visual",
                    tooltip: "Visualize taxas de conversão em cada etapa do funil",
                    starter: <Check />,
                    growth: <Check />,
                    scale: <Check />,
                    enterprise: <Check />
                },
                {
                    name: "Previsão de receita (IA)",
                    tooltip: "IA analisa seu histórico e prevê faturamento dos próximos meses",
                    starter: <Cross />,
                    growth: <Cross />,
                    scale: <Check />,
                    enterprise: <Check />
                },
                {
                    name: "Exportação de dados",
                    tooltip: "Exporte relatórios em CSV, Excel, PDF para análises externas",
                    starter: "CSV",
                    growth: "CSV + Excel",
                    scale: "Todos formatos",
                    enterprise: "Todos + API"
                }
            ]
        },
        {
            category: "SUPORTE & SERVIÇOS",
            icon: "🛠️",
            items: [
                {
                    name: "Suporte via Chat",
                    tooltip: "Atendimento em português direto na plataforma",
                    starter: "Horário Comercial",
                    growth: "Prioritário (8h-20h)",
                    scale: "Prioritário (8h-22h)",
                    enterprise: "24/7 Dedicado",
                    highlight: true
                },
                {
                    name: "Onboarding",
                    tooltip: "Treinamento inicial para sua equipe começar a usar a plataforma",
                    starter: "Vídeos gravados",
                    growth: "Vídeos gravados",
                    scale: "Sessão ao vivo (1h)",
                    enterprise: "Personalizado (8h+)"
                },
                {
                    name: "Migração de dados",
                    tooltip: "Importamos seus dados de outras plataformas (RD, Pipedrive, Hubspot, etc.)",
                    starter: <Cross />,
                    growth: "Self-service (CSV)",
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">Com suporte</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Completa + validação</span></>
                },
                {
                    name: "API de Integração",
                    tooltip: "Conecte sistemas externos via REST API (webhooks, zapier, custom)",
                    starter: <Cross />,
                    growth: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">Rate limit padrão</span></>,
                    scale: <><Check /> <span className="text-[10px] text-gray-500 block mt-0.5">Rate limit alto</span></>,
                    enterprise: <><Check /> <span className="text-[10px] text-neon-green block mt-0.5">Dedicada</span></>
                },
                {
                    name: "Whitelabel (marca própria)",
                    tooltip: "Remova nossa marca e use seu logo, cores e domínio customizado",
                    starter: <Cross />,
                    growth: <Cross />,
                    scale: <Cross />,
                    enterprise: <Check />
                },
                {
                    name: "SLA de uptime",
                    tooltip: "Garantia contratual de disponibilidade da plataforma",
                    starter: "99.5%",
                    growth: "99.7%",
                    scale: "99.9%",
                    enterprise: "99.99% (4-nines)"
                }
            ]
        }
    ];

    const renderValue = (val: string | boolean | React.ReactNode) => {
        if (val === true) return <Check />;
        if (val === false) return <Cross />;
        if (typeof val === 'string') {
            return <span className="font-mono text-xs md:text-sm font-medium text-gray-700">{val}</span>;
        }
        return val;
    };

    return (
        <div className="mt-20 overflow-x-auto relative pb-4">
            {/* Mobile scroll indicator */}
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none md:hidden z-10"></div>

            <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold font-space mb-3 text-deep-black">Compare os planos e veja o que está incluso</h3>
                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Transparente. Simples. Sem pegadinhas.</p>
            </div>

            <div className="min-w-[900px] border border-gray-200 rounded-sm overflow-hidden bg-white shadow-lg">
                {/* Header */}
                <div className="grid grid-cols-5 bg-gradient-to-b from-gray-50 to-white border-b-2 border-gray-300 sticky top-0 z-20">
                    <div className="p-4 font-bold text-gray-500 text-sm flex items-end uppercase tracking-wide">Recursos</div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-gray-200">
                        <div className="text-deep-black">Starter</div>
                        <div className="text-xs font-normal text-gray-500 mt-1">R$ 497/mês</div>
                    </div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-neon-green bg-neon-green/5 relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-green"></div>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-black px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                            Mais Escolhido
                        </div>
                        <div className="text-deep-black mt-2">Growth</div>
                        <div className="text-xs font-normal text-gray-500 mt-1">R$ 697/mês</div>
                    </div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-gray-200">
                        <div className="text-deep-black">Scale</div>
                        <div className="text-xs font-normal text-gray-500 mt-1">R$ 997/mês</div>
                    </div>
                    <div className="p-4 text-center font-bold font-space text-lg border-l border-gray-200 bg-deep-black text-white">
                        <div className="text-white">Enterprise</div>
                        <div className="text-xs font-normal text-gray-400 mt-1">Custom</div>
                    </div>
                </div>

                {/* Rows */}
                {featuresList.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                        {/* Category Header */}
                        <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-3 pl-4 text-xs font-bold uppercase tracking-widest text-gray-600 border-b border-gray-200 flex items-center gap-2">
                            <span className="text-base">{category.icon}</span>
                            {category.category}
                        </div>

                        {/* Feature Rows */}
                        {category.items.map((row, rowIdx) => (
                            <div
                                key={rowIdx}
                                className={`grid grid-cols-5 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors group ${row.highlight ? 'bg-blue-50/30' : rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                    }`}
                                onMouseEnter={() => setHoveredFeature(row.name)}
                                onMouseLeave={() => setHoveredFeature(null)}
                            >
                                {/* Feature Name */}
                                <div className="p-4 text-sm font-medium text-gray-700 flex items-center gap-2">
                                    <span>{row.name}</span>
                                    {row.tooltip && (
                                        <div className="relative">
                                            <svg className="w-3.5 h-3.5 text-gray-400 hover:text-neon-green cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            {hoveredFeature === row.name && (
                                                <div className="absolute left-full ml-2 top-0 w-64 bg-black text-white text-xs p-3 rounded shadow-2xl z-50 leading-relaxed">
                                                    {row.tooltip}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Plan Values */}
                                <div className="p-4 text-center border-l border-gray-100">{renderValue(row.starter)}</div>
                                <div className="p-4 text-center border-l border-neon-green/10 bg-neon-green/5 font-bold h-full flex items-center justify-center relative">
                                    {renderValue(row.growth)}
                                </div>
                                <div className="p-4 text-center border-l border-gray-100">{renderValue(row.scale)}</div>
                                <div className="p-4 text-center border-l border-gray-100 text-deep-black bg-gray-50">{renderValue(row.enterprise)}</div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>

            {/* Footer Note */}
            <div className="mt-6 text-center text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-deep-black">Nota:</strong> Todos os planos incluem SSL, backups diários, LGPD compliance e atualizações automáticas.
                Custos adicionais se aplicam apenas para uso acima dos limites (e-mail, WhatsApp, IA).
            </div>
        </div>
    );
};
