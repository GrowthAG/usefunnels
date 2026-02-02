import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, Reveal } from '../components/ui';
import { FeatureTourSection, type TourSlide } from '../components/features';

const WHATSAPP_SLIDES: TourSlide[] = [
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png',
        title: 'Multi-Atendente Inteligente',
        description: 'Conecte múltiplos números de WhatsApp e distribua conversas automaticamente entre sua equipe com regras personalizadas de roteamento.',
        details: [
            'Conecte quantos números quiser sem limitações',
            'Distribu

ição automática baseada em disponibilidade, carga de trabalho ou expertise',
            'Transferência de conversas entre atendentes em tempo real',
            'Histórico completo sincronizado entre todos os dispositivos'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8ba11311f634bb435686.png',
        title: 'Chatbot com IA Contextual',
        description: 'Responda automaticamente 24/7 com inteligência artificial que entende contexto, agenda reuniões e qualifica leads sem intervenção humana.',
        details: [
            'IA treinada com seus produtos, serviços e FAQ',
            'Agendamento automático integrado com Google Calendar',
            'Qualificação de leads com scoring inteligente',
            'Transferência para humano quando necessário com contexto completo'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c061311f6b75f438693.png',
        title: 'Campanhas de Broadcast',
        description: 'Envie mensagens em massa personalizadas com variáveis dinâmicas, segmentação avançada e agendamento inteligente para máxima taxa de abertura.',
        details: [
            'Personalização com nome, empresa e campos customizados',
            'Segmentação por tags, comportamento e histórico de compras',
            'Agendamento com fuso horário automático do contato',
            'Análise de entrega, abertura e resposta em tempo real'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8bd01f68d19404a08b2d.png',
        title: 'Templates e Respostas Rápidas',
        description: 'Crie templates aprovados pelo WhatsApp Business e respostas rápidas para acelerar o atendimento sem perder personalização.',
        details: [
            'Biblioteca de templates pré-aprovados prontos para usar',
            'Editor visual para criar templates personalizados',
            'Atalhos de teclado para respostas rápidas frequentes',
            'Variáveis dinâmicas para personalização em escala'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c2766e7ca5f55820695.png',
        title: 'Métricas e Analytics Completos',
        description: 'Monitore o desempenho do seu atendimento com métricas detalhadas de tempo de resposta, satisfação e conversão por atendente.',
        details: [
            'Dashboard em tempo real com KPIs de atendimento',
            'Análise de sentimento das conversas com IA',
            'Relatórios de produtividade por atendente e período',
            'Funil de conversão desde primeiro contato até venda fechada'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c4f1f68d13936a0c08e.png',
        title: 'Integração com CRM e Vendas',
        description: 'Sincronize automaticamente todas as conversas com seu CRM, crie oportunidades e atualize deals sem sair do WhatsApp.',
        details: [
            'Criação automática de contatos e leads no CRM',
            'Atualização de status de deals em tempo real',
            'Histórico completo de conversas vinculado ao contato',
            'Automações baseadas em respostas (ex: lead respondeu = mover para "Interessado")'
        ]
    }
];

export const WhatsAppPage = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const navigate = useNavigate();

    return (
        <main className="pt-[100px] bg-white">
            {/* HERO */}
            <Section className="bg-gradient-to-br from-[#25D366]/5 via-white to-white border-b border-gray-100 min-h-[70vh] flex flex-col justify-center">
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
                                <span className="bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full text-xs font-bold font-mono uppercase border border-[#25D366]/30">
                                    WhatsApp Business
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight text-deep-black text-balance">
                                Atendimento e Vendas no Canal #1 do Brasil
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed text-balance">
                                Transforme conversas em vendas com inteligência artificial, automação e uma inbox unificada que centraliza todos os seus números de WhatsApp.
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
                                    className="min-w-[200px] py-4 border-gray-300 hover:border-[#25D366] hover:text-[#25D366]"
                                    onClick={onBookDemo}
                                >
                                    Agendar Demo
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">24/7</div>
                                    <div className="text-sm text-gray-500 mt-1">Atendimento IA</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">98%</div>
                                    <div className="text-sm text-gray-500 mt-1">Taxa de Entrega</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">3x</div>
                                    <div className="text-sm text-gray-500 mt-1">Mais Conversões</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-[#25D366]/20">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png"
                                    alt="WhatsApp Inteligente - Interface"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#25D366] opacity-20 blur-[80px] pointer-events-none"></div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* TOUR SECTION */}
            <FeatureTourSection
                badge="Tour Completo"
                title="Explore Todos os Recursos"
                subtitle="Veja como cada funcionalidade funciona na prática e como pode transformar seu atendimento."
                slides={WHATSAPP_SLIDES}
                browserUrl="app.usefunnels.io/whatsapp"
            />

            {/* BENEFITS */}
            <Section className="bg-gray-50 border-y border-gray-100">
                <Container>
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">Por Que Escolher Nossa Solução?</h2>
                            <p className="text-gray-600 text-balance max-w-2xl mx-auto">
                                Mais do que um simples chat. Uma plataforma completa de vendas e relacionamento.
                            </p>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Múltiplos Números',
                                description: 'Conecte quantos números quiser sem custo adicional. Perfeito para equipes grandes ou múltiplas marcas.'
                            },
                            {
                                title: 'IA Contextual',
                                description: 'Chatbot que entende intenção, responde perguntas complexas e aprende com cada interação.'
                            },
                            {
                                title: 'Compliance Garantido',
                                description: 'Totalmente em conformidade com as políticas do WhatsApp Business. Sem risco de bloqueio.'
                            },
                            {
                                title: 'Integração Nativa',
                                description: 'Sincronização automática com CRM, calendário, e-mail e outras ferramentas que você já usa.'
                            },
                            {
                                title: 'Relatórios Avançados',
                                description: 'Analytics completo com métricas de conversão, tempo de resposta e satisfação do cliente.'
                            },
                            {
                                title: 'Suporte Prioritário',
                                description: 'Time dedicado para onboarding, treinamento e suporte técnico sempre que precisar.'
                            }
                        ].map((benefit, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="p-8 bg-white border border-gray-200 rounded-lg hover:border-[#25D366] hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#25D366] transition-colors">
                                        <svg className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
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
            <Section className="bg-gradient-to-br from-[#25D366] to-[#1ebe5d] text-white text-center py-20 md:py-24">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-balance">
                            Comece a Vender Mais pelo WhatsApp Hoje
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance">
                            Comece a usar hoje mesmo e transforme suas conversas em vendas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-white text-[#25D366] hover:bg-gray-50 min-w-[200px] py-4 font-bold border-2 border-white"
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
