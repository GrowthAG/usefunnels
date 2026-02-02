import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, Reveal } from '../components/ui';
import { FeatureTourSection, type TourSlide } from '../components/features';

const AUTOMACAO_SLIDES: TourSlide[] = [
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png',
        title: 'Workflows Visuais Drag & Drop',
        description: 'Crie automações complexas sem código usando nossa interface visual intuitiva com centenas de triggers e ações.',
        details: [
            'Editor visual drag-and-drop sem necessidade de código',
            'Mais de 100 triggers disponíveis (formulário, email, WhatsApp, etc)',
            'Lógica condicional (if/else) para automações inteligentes',
            'Templates prontos para casos de uso comuns'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8ba11311f634bb435686.png',
        title: 'Triggers e Condições Inteligentes',
        description: 'Dispare automações baseadas em comportamento, tempo ou eventos específicos com regras condicionais avançadas.',
        details: [
            'Triggers baseados em ações (abriu email, visitou página)',
            'Triggers de tempo (após X horas, todo dia Y às Z horas)',
            'Condições if/else com múltiplos critérios',
            'Split testing (A/B) automático'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c061311f6b75f438693.png',
        title: 'Sequências de Email Automatizadas',
        description: 'Crie sequências de nurturing, onboarding e recuperação com emails personalizados enviados no momento certo.',
        details: [
            'Sequências de boas-vindas personalizadas',
            'Nurturing baseado em interesse e comportamento',
            'Recuperação de carrinho abandonado',
            'Re-engagement de leads frios'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8bd01f68d19404a08b2d.png',
        title: 'Automações Multi-Canal',
        description: 'Combine email, SMS e WhatsApp em uma única jornada automatizada para máxima conversão.',
        details: [
            'Sequências que combinam email + SMS + WhatsApp',
            'Regras de preferência de canal por contato',
            'Fallback automático se um canal não funcionar',
            'Timing otimizado por IA para cada canal'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c2766e7ca5f55820695.png',
        title: 'Testes A/B Automáticos',
        description: 'Teste diferentes versões de emails, mensagens e timings automaticamente para otimizar resultados.',
        details: [
            'A/B testing de assunto, conteúdo e CTA',
            'Split testing de diferentes caminhos no workflow',
            'Detecção automática do vencedor',
            'Ajuste automático para usar a melhor variação'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c4f1f68d13936a0c08e.png',
        title: 'Relatórios de Performance',
        description: 'Analise o desempenho de cada automação com métricas detalhadas de conversão, engajamento e ROI.',
        details: [
            'Taxa de abertura, cliques e conversão por etapa',
            'Funil de conversão visual',
            'ROI calculado automaticamente',
            'Identificação de gargalos e oportunidades'
        ]
    }
];

export const AutomacaoPage = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const navigate = useNavigate();

    return (
        <main className="pt-[100px] bg-white">
            <Section className="bg-gradient-to-br from-orange-50 via-white to-white border-b border-gray-100 min-h-[70vh] flex flex-col justify-center">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Link to="/" className="inline-flex items-center gap-3 mb-8 text-gray-600 hover:text-deep-black transition-colors duration-300 group px-4 py-2 rounded-full border border-gray-200 hover:border-neon-green hover:bg-neon-green/5">
                                <span className="text-lg">←</span>
                                <span className="font-bold text-sm uppercase tracking-wide">Voltar</span>
                            </Link>

                            <div className="block mb-6">
                                <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-xs font-bold font-mono uppercase border border-orange-500/30">
                                    Automação de Marketing
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight text-deep-black text-balance">
                                Automatize e Escale Sem Esforço Manual
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed text-balance">
                                Crie workflows complexos sem código e automatize toda sua jornada de marketing e vendas.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button variant="primary" className="min-w-[200px] py-4" onClick={() => navigate('/precos', { state: { targetId: 'pricing-plans' } })}>
                                    Começar Agora
                                </Button>
                                <Button variant="outline" className="min-w-[200px] py-4 border-gray-300 hover:border-orange-600 hover:text-orange-600" onClick={onBookDemo}>
                                    Ver Demonstração
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">100+</div>
                                    <div className="text-sm text-gray-500 mt-1">Triggers</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">Zero Code</div>
                                    <div className="text-sm text-gray-500 mt-1">Visual</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">24/7</div>
                                    <div className="text-sm text-gray-500 mt-1">Trabalhando</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-orange-500/20">
                                <img src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png" alt="Automação - Interface" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-orange-500 opacity-20 blur-[80px] pointer-events-none"></div>
                        </div>
                    </div>
                </Container>
            </Section>

            <FeatureTourSection badge="Tour Completo" title="Explore as Automações" subtitle="Veja como criar workflows poderosos sem escrever uma linha de código." slides={AUTOMACAO_SLIDES} browserUrl="app.usefunnels.io/automacao" />

            <Section className="bg-gray-50 border-y border-gray-100">
                <Container>
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">Por Que Nossa Automação é Superior?</h2>
                            <p className="text-gray-600 text-balance max-w-2xl mx-auto">Mais do que um Zapier. Um sistema completo de automação de marketing e vendas.</p>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Drag & Drop Visual', description: 'Crie automações complexas arrastando blocos. Sem necessidade de código ou desenvolvedores.' },
                            { title: 'Multi-Canal Nativo', description: 'Email, SMS, WhatsApp e notificações push em um único workflow.' },
                            { title: 'Lógica Condicional', description: 'If/else, delays, splits e loops para automações super inteligentes.' },
                            { title: 'Templates Prontos', description: 'Biblioteca com 50+ templates para casos de uso comuns. Ative em segundos.' },
                            { title: 'A/B Testing Integrado', description: 'Teste diferentes versões e deixe a IA escolher automaticamente a vencedora.' },
                            { title: 'Integrações Ilimitadas', description: 'Conecte com +1000 ferramentas via Zapier, webhooks e API REST.' }
                        ].map((benefit, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="p-8 bg-white border border-gray-200 rounded-lg hover:border-orange-600 hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                                        <svg className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
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

            <Section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white text-center py-20 md:py-24">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-balance">Deixe a Automação Trabalhar por Você 24/7</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance">Comece hoje e libere sua equipe para focar no que realmente importa.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-orange-600 hover:bg-gray-50 min-w-[200px] py-4 font-bold border-2 border-white" onClick={() => navigate('/precos', { state: { targetId: 'pricing-plans' } })}>
                                Começar Agora
                            </Button>
                            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 min-w-[200px] py-4" onClick={onBookDemo}>
                                Falar com Especialista
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>
        </main>
    );
};
