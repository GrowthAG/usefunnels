import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, Reveal } from '../components/ui';
import { FeatureTourSection, type TourSlide } from '../components/features';

const CONSTRUTOR_SLIDES: TourSlide[] = [
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png',
        title: 'Editor Visual Drag & Drop',
        description: 'Crie páginas de alta conversão arrastando elementos. Sem código, sem complicação. Resultados profissionais em minutos.',
        details: [
            'Editor visual WYSIWYG (What You See Is What You Get)',
            'Biblioteca com 200+ elementos prontos (botões, formulários, vídeos)',
            'Grids e layouts responsivos automáticos',
            'Pré-visualização em tempo real (desktop, tablet, mobile)'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8ba11311f634bb435686.png',
        title: 'Templates Prontos para Converter',
        description: 'Escolha entre centenas de templates otimizados para conversão. Edite e publique em minutos.',
        details: [
            'Mais de 100 templates por segmento (SaaS, E-commerce, Serviços)',
            'Todos os templates são mobile-first e otimizados para SEO',
            'Templates específicos por objetivo (captura, vendas, webinar)',
            'Atualizações mensais com novos templates'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c061311f6b75f438693.png',
        title: 'Mobile-First Responsivo',
        description: 'Todas as páginas se adaptam automaticamente a qualquer dispositivo. Design profissional em mobile, tablet e desktop.',
        details: [
            'Ajustes automáticos para mobile, tablet e desktop',
            'Edição separada por breakpoint quando necessário',
            'Teste de velocidade mobile integrado (Google PageSpeed)',
            'AMP (Accelerated Mobile Pages) opcional'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8bd01f68d19404a08b2d.png',
        title: 'Integrações com Pixels e Analytics',
        description: 'Rastreie tudo com Facebook Pixel, Google Analytics, Google Tag Manager e dezenas de outras ferramentas.',
        details: [
            'Facebook Pixel e Conversion API nativos',
            'Google Analytics 4 e Google Tag Manager',
            'TikTok Pixel, LinkedIn Insight Tag',
            'Hotjar, Clarity e outras ferramentas de heatmap'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c2766e7ca5f55820695.png',
        title: 'Popups e Formulários Inteligentes',
        description: 'Capture leads com popups inteligentes baseados em comportamento, tempo ou intenção de saída.',
        details: [
            'Popups com gatilhos de comportamento (scroll, tempo, exit-intent)',
            'Formulários multi-etapa para aumentar conversão',
            'Validação de email em tempo real',
            'Integração nativa com CRM e automações'
        ]
    },
    {
        src: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e8c4f1f68d13936a0c08e.png',
        title: 'Testes A/B de Landing Pages',
        description: 'Teste diferentes versões de headlines, CTAs e layouts. A IA detecta automaticamente a variação vencedora.',
        details: [
            'A/B testing de qualquer elemento da página',
            'Split de tráfego configurável (50/50, 80/20, etc)',
            'Detecção automática de significância estatística',
            'Relatórios de conversão por variação'
        ]
    }
];

export const ConstrutorPaginasPage = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const navigate = useNavigate();

    return (
        <main className="pt-[100px] bg-white">
            <Section className="bg-gradient-to-br from-green-50 via-white to-white border-b border-gray-100 min-h-[70vh] flex flex-col justify-center">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Link to="/" className="inline-flex items-center gap-3 mb-8 text-gray-600 hover:text-deep-black transition-colors duration-300 group px-4 py-2 rounded-full border border-gray-200 hover:border-neon-green hover:bg-neon-green/5">
                                <span className="text-lg">←</span>
                                <span className="font-bold text-sm uppercase tracking-wide">Voltar</span>
                            </Link>

                            <div className="block mb-6">
                                <span className="bg-neon-green/10 text-neon-green px-4 py-2 rounded-full text-xs font-bold font-mono uppercase border border-neon-green/30">
                                    Page Builder
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight text-deep-black text-balance">
                                Crie Landing Pages que Convertem
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed text-balance">
                                Editor visual drag-and-drop com templates otimizados, testes A/B e publicação instantânea.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button variant="primary" className="min-w-[200px] py-4" onClick={() => navigate('/precos', { state: { targetId: 'pricing-plans' } })}>
                                    Começar Agora
                                </Button>
                                <Button variant="outline" className="min-w-[200px] py-4 border-gray-300 hover:border-neon-green hover:text-neon-green" onClick={onBookDemo}>
                                    Ver Demonstração
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100">
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">100+</div>
                                    <div className="text-sm text-gray-500 mt-1">Templates</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">Zero Code</div>
                                    <div className="text-sm text-gray-500 mt-1">Necessário</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-deep-black font-space">95+</div>
                                    <div className="text-sm text-gray-500 mt-1">PageSpeed</div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-neon-green/20">
                                <img src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697fb5941311f6cc856c53d6.png" alt="Construtor de Páginas - Interface" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-neon-green opacity-20 blur-[80px] pointer-events-none"></div>
                        </div>
                    </div>
                </Container>
            </Section>

            <FeatureTourSection badge="Tour Completo" title="Explore o Page Builder" subtitle="Veja como criar páginas profissionais sem escrever uma linha de código." slides={CONSTRUTOR_SLIDES} browserUrl="app.usefunnels.io/pages" />

            <Section className="bg-gray-50 border-y border-gray-100">
                <Container>
                    <div className="text-center mb-16">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black">Por Que Nosso Page Builder é Único?</h2>
                            <p className="text-gray-600 text-balance max-w-2xl mx-auto">Mais do que um Unbounce ou Leadpages. Um sistema completo de conversão.</p>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Velocidade Máxima', description: 'Score 95+ no Google PageSpeed. Páginas ultra-rápidas que convertem mais.' },
                            { title: 'SEO Otimizado', description: 'Meta tags, schema markup e sitemap automáticos. Ranqueie no Google sem esforço.' },
                            { title: 'A/B Testing Nativo', description: 'Teste headlines, CTAs e layouts sem ferramentas externas. Relatórios integrados.' },
                            { title: 'Domínio Personalizado', description: 'Publique em seu próprio domínio com SSL grátis e configuração automática.' },
                            { title: 'Integrações Ilimitadas', description: 'Pixels, Analytics, Tag Manager, CRM e 1000+ ferramentas via webhooks.' },
                            { title: 'Backup Automático', description: 'Histórico de versões ilimitado. Restaure qualquer versão anterior em 1 clique.' }
                        ].map((benefit, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="p-8 bg-white border border-gray-200 rounded-lg hover:border-neon-green hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-green transition-colors">
                                        <svg className="w-6 h-6 text-neon-green group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
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

            <Section className="bg-gradient-to-br from-neon-green to-green-600 text-white text-center py-20 md:py-24">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 text-balance">Crie Páginas que Convertem em Minutos</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto text-balance">Comece hoje com templates profissionais e publique sua primeira landing page em menos de 1 hora.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-deep-black text-white hover:bg-gray-900 min-w-[200px] py-4 font-bold border-2 border-deep-black" onClick={() => navigate('/precos', { state: { targetId: 'pricing-plans' } })}>
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
