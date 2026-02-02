import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, Reveal } from '../components/ui';
import { FeatureTourSection, type TourSlide } from '../components/features';

const CRM_SLIDES: TourSlide[] = [
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png',
        title: 'Pipeline Visual de Vendas',
        description: 'Gerencie oportunidades com drag-and-drop intuitivo, previsão de receita em tempo real e visão clara de cada etapa do funil.',
        details: [
            'Interface drag-and-drop para mover deals entre etapas',
            'Previsão automática de receita baseada em histórico',
            'Alertas de deals parados há mais de X dias',
            'Probabilidade de fechamento calculada por IA'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8ba11311f634bb435686.png',
        title: 'Gestão Inteligente de Contatos',
        description: 'Perfis enriquecidos automaticamente com histórico completo de interações, tags dinâmicas e scoring de engajamento.',
        details: [
            'Enriquecimento automático com dados de redes sociais',
            'Histórico unificado: emails, ligações, WhatsApp, reuniões',
            'Tags inteligentes baseadas em comportamento',
            'Score de engajamento atualizado em tempo real'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c061311f6b75f438693.png',
        title: 'Automação de Follow-up',
        description: 'Sequências automáticas de follow-up por email, SMS e WhatsApp baseadas no comportamento e estágio do lead no funil.',
        details: [
            'Sequências multi-canal (Email + SMS + WhatsApp)',
            'Triggers baseados em ações (abriu email, clicou link, visitou página)',
            'Pausas inteligentes se o lead responder',
            'A/B testing automático de mensagens'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8bd01f68d19404a08b2d.png',
        title: 'Previsão de Receita com IA',
        description: 'Inteligência artificial analisa seu histórico e prevê receita dos próximos 30-90 dias com precisão superior a 85%.',
        details: [
            'Previsão de receita mensal/trimestral',
            'Identificação de tendências e sazonalidades',
            'Alertas de desvio da meta',
            'Recomendações de ações para acelerar fechamentos'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c2766e7ca5f55820695.png',
        title: 'Gestão de Tarefas e Atividades',
        description: 'Organize tarefas, agende follow-ups e nunca perca um prazo importante com lembretes inteligentes e priorização automática.',
        details: [
            'Criação automática de tarefas baseada em regras',
            'Priorização inteligente por valor de deal e urgência',
            'Lembretes por email, push e WhatsApp',
            'Integração com Google Calendar e Outlook'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c4f1f68d13936a0c08e.png',
        title: 'Integração com Email e Calendário',
        description: 'Sincronização bidirecional com Gmail, Outlook e Google Calendar. Todos os emails e reuniões aparecem automaticamente no CRM.',
        details: [
            'Sync automático de emails (Gmail, Outlook, Exchange)',
            'Reuniões do Google Calendar vinculadas a deals',
            'Rastreamento de opens e clicks em emails enviados',
            'Envio de emails diretamente do CRM com templates'
        ]
    }
];

export const CRMPage = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const navigate = useNavigate();

    return (
        <main className="pt-[100px] bg-white">
            {/* HERO */}
            <Section className="bg-gradient-to-br from-purple-50 via-white to-white border-b border-gray-100 min-h-[70vh] flex flex-col justify-center">
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
                                <span className="bg-purple-500/10 text-purple-600 px-4 py-2 rounded-full text-xs font-bold font-mono uppercase border border-purple-500/30">
                                    CRM & Pipeline
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight text-deep-black text-balance">
                                Gerencie Clientes e Feche Mais Vendas
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed text-balance">
                                Um CRM completo que organiza contatos, automatiza follow-ups e prevê receita com inteligência artificial.
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
                                    className="min-w-[200px] py-4 border-gray-300 hover:border-purple-600 hover:text-purple-600"
                                    onClick={onBookDemo}
                                >
                                    Ver Demonstração
                                </Button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">360°</div>
                                    <div className="text-sm text-gray-500 mt-1">Visão Cliente</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">85%</div>
                                    <div className="text-sm text-gray-500 mt-1">Precisão IA</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">2x</div>
                                    <div className="text-sm text-gray-500 mt-1">Mais Conversões</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-purple-500/20">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png"
                                    alt="CRM & Pipeline - Interface"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-purple-500 opacity-20 blur-[80px] pointer-events-none"></div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* TOUR SECTION */}
            <FeatureTourSection
                badge="Tour Completo"
                title="Explore o CRM na Prática"
                subtitle="Veja como cada funcionalidade ajuda você a organizar contatos e fechar mais vendas."
                slides={CRM_SLIDES}
                browserUrl="app.usefunnels.io/crm"
            />

            {/* BENEFITS */}
            <Section className="bg-gray-50 border-y border-gray-100">
                <Container>
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">Por Que Nosso CRM é Diferente?</h2>
                            <p className="text-gray-600 text-balance max-w-2xl mx-auto">
                                Mais do que uma planilha glorificada. Um sistema completo de gestão de vendas.
                            </p>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Enriquecimento Automático',
                                description: 'Dados de redes sociais, empresa e cargo preenchidos automaticamente para cada contato.'
                            },
                            {
                                title: 'Histórico Unificado',
                                description: 'Veja todos os emails, ligações, WhatsApp e reuniões em uma única timeline.'
                            },
                            {
                                title: 'IA Preditiva',
                                description: 'Inteligência artificial prevê qual lead tem maior chance de fechar e quando.'
                            },
                            {
                                title: 'Automação Multi-Canal',
                                description: 'Sequências de follow-up por email, SMS e WhatsApp sem intervenção manual.'
                            },
                            {
                                title: 'Integrações Nativas',
                                description: 'Gmail, Outlook, Google Calendar, WhatsApp e centenas de ferramentas integradas.'
                            },
                            {
                                title: 'Mobile First',
                                description: 'Acesse e atualize o CRM de qualquer lugar pelo celular com app nativo.'
                            }
                        ].map((benefit, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="p-8 bg-white border border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                                        <svg className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
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
            <Section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white text-center py-20 md:py-24">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-balance">
                            Organize Suas Vendas e Feche Mais Negócios
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance">
                            Comece hoje e veja sua taxa de conversão aumentar em até 2x.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-white text-purple-600 hover:bg-gray-50 min-w-[200px] py-4 font-bold border-2 border-white"
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
