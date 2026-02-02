import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, Reveal } from '../components/ui';
import { FeatureTourSection, type TourSlide } from '../components/features';

const DASHBOARD_SLIDES: TourSlide[] = [
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png',
        title: 'Visão 360° do Negócio',
        description: 'Centralize todas as métricas de vendas, marketing e atendimento em um dashboard unificado com atualização em tempo real.',
        details: [
            'Dashboard personalizável com drag-and-drop de widgets',
            'Métricas de receita, conversão e ROI em um só lugar',
            'Atualização automática a cada 30 segundos',
            'Visualização de múltiplos períodos (hoje, semana, mês, ano)'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8ba11311f634bb435686.png',
        title: 'Relatórios Customizáveis',
        description: 'Crie relatórios personalizados com filtros avançados, exportação automática e agendamento de envio por email.',
        details: [
            'Construtor visual de relatórios sem código',
            'Mais de 50 métricas disponíveis para análise',
            'Exportação em PDF, Excel ou Google Sheets',
            'Agendamento automático (diário, semanal, mensal)'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c061311f6b75f438693.png',
        title: 'Análise de Funil Completo',
        description: 'Visualize cada etapa do funil de vendas, identifique gargalos e otimize conversões com insights baseados em IA.',
        details: [
            'Funil visual com taxas de conversão entre etapas',
            'Identificação automática de gargalos e oportunidades',
            'Análise de tempo médio em cada estágio',
            'Comparação de performance entre períodos'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8bd01f68d19404a08b2d.png',
        title: 'Performance por Canal',
        description: 'Analise o desempenho de cada canal de aquisição (orgânico, pago, email, WhatsApp) e entenda de onde vêm seus melhores clientes.',
        details: [
            'Rastreamento automático de origem de leads',
            'ROI por canal de marketing',
            'Custo de aquisição (CAC) por canal',
            'Lifetime Value (LTV) por fonte de tráfego'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c2766e7ca5f55820695.png',
        title: 'Previsões com IA',
        description: 'Utilize inteligência artificial para prever receita futura, identificar tendências e tomar decisões baseadas em dados reais.',
        details: [
            'Previsão de receita para os próximos 30-90 dias',
            'Identificação de padrões sazonais automaticamente',
            'Alertas de anomalias (queda ou pico inesperado)',
            'Recomendações de ações baseadas em ML'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c4f1f68d13936a0c08e.png',
        title: 'Dashboards por Equipe',
        description: 'Crie dashboards específicos para cada time (vendas, marketing, atendimento) com permissões e métricas relevantes.',
        details: [
            'Dashboards separados por departamento ou projeto',
            'Controle de acesso granular por usuário',
            'Métricas de produtividade individual e coletiva',
            'Metas e KPIs customizados por equipe'
        ]
    }
];

export const DashboardsPage = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const navigate = useNavigate();

    return (
        <main className="pt-[100px] bg-white">
            {/* HERO */}
            <Section className="bg-gradient-to-br from-blue-50 via-white to-white border-b border-gray-100 min-h-[70vh] flex flex-col justify-center">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-3 mb-8 text-gray-600 hover:text-deep-black transition-colors duration-300 group px-4 py-2 rounded-full border border-gray-200 hover:border-neon-green hover:bg-neon-green/5"
                            >
                                <span className="text-lg">←</span>
                                <span className="font-bold text-sm uppercase tracking-wide">Voltar</span>
                            </Link>

                            <div className="block mb-6">
                                <span className="bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold font-mono uppercase border border-blue-500/30">
                                    Analytics & BI
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight text-deep-black text-balance">
                                Decisões Baseadas em Dados Reais
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed text-balance">
                                Transforme dados em insights acionáveis com dashboards inteligentes, relatórios automáticos e previsões com IA.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button
                                    variant="primary"
                                    className="min-w-[200px] py-4"
                                    onClick={() => navigate('/precos', { state: { targetId: 'pricing-plans' } })}
                                >
                                    Começar Agora
                                </Button>
                                <Button
                                    variant="outline"
                                    className="min-w-[200px] py-4 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                                    onClick={onBookDemo}
                                >
                                    Ver Demonstração
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">50+</div>
                                    <div className="text-sm text-gray-500 mt-1">Métricas</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">Real-Time</div>
                                    <div className="text-sm text-gray-500 mt-1">Atualização</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">100%</div>
                                    <div className="text-sm text-gray-500 mt-1">Customizável</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-blue-500/20">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png"
                                    alt="Dashboards & Relatórios - Interface"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-blue-500 opacity-20 blur-[80px] pointer-events-none"></div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* TOUR SECTION */}
            <FeatureTourSection
                badge="Tour Interativo"
                title="Explore Todos os Dashboards"
                subtitle="Veja como cada relatório e métrica funciona e como pode impulsionar suas decisões estratégicas."
                slides={DASHBOARD_SLIDES}
                browserUrl="app.usefunnels.io/analytics"
            />

            {/* BENEFITS */}
            <Section className="bg-gray-50 border-y border-gray-100">
                <Container>
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">Por Que Nosso Analytics se Destaca?</h2>
                            <p className="text-gray-600 text-balance max-w-2xl mx-auto">
                                Mais do que gráficos bonitos. Inteligência que transforma dados em crescimento.
                            </p>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Atualização em Tempo Real',
                                description: 'Veja suas métricas atualizarem automaticamente a cada 30 segundos. Sem refresh manual.'
                            },
                            {
                                title: 'IA Preditiva',
                                description: 'Previsões precisas de receita, churn e crescimento baseadas em machine learning.'
                            },
                            {
                                title: 'Exportação Automática',
                                description: 'Agende envio de relatórios por email. PDF, Excel ou Google Sheets.'
                            },
                            {
                                title: 'Multi-Moeda e Timezone',
                                description: 'Suporte para múltiplas moedas e fusos horários. Perfeito para operações globais.'
                            },
                            {
                                title: 'API de Dados',
                                description: 'Integre com ferramentas de BI externas (Power BI, Tableau, Looker) via API REST.'
                            },
                            {
                                title: 'Auditoria Completa',
                                description: 'Histórico de todas as alterações em dados críticos. Conformidade garantida.'
                            }
                        ].map((benefit, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="p-8 bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                        <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold font-space mb-3 text-deep-black">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA FINAL */}
            <Section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center py-20 md:py-24">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-balance">
                            Pare de Voar no Escuro. Decida com Dados.
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance">
                            Tome decisões mais inteligentes com dados em tempo real.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-white text-blue-600 hover:bg-gray-50 min-w-[200px] py-4 font-bold border-2 border-white"
                                onClick={() => navigate('/precos', { state: { targetId: 'pricing-plans' } })}
                            >
                                Começar Agora
                            </Button>
                            <Button
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white/10 min-w-[200px] py-4"
                                onClick={onBookDemo}
                            >
                                Falar com Especialista
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>
        </main>
    );
};
