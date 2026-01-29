
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section, Reveal, Button, CornerBrackets, TechBadge } from '../components/ui/index';
import { AICarousel, ExitPopup, InfiniteLogoCarousel, FeaturePopupModal, IntegrationHero } from '../components/features';
import { Pricing } from '../components/Pricing';
import { ASSETS, FEATURES, TESTIMONIALS, CLIENT_LOGOS, TOOLS_REPLACED } from '../constants';

import { WikimeeCarousel } from '../components/features/WikimeeCarousel';

export const Home = ({ onBookDemo }: { onBookDemo: () => void }) => {
    // Modal State for Features
    const [selectedFeature, setSelectedFeature] = useState<typeof FEATURES[0] | null>(null);

    const CAROUSEL_ITEMS = [
        {
            id: 'agentes',
            title: "Agentes Autônomos",
            subtitle: "FORÇA DE TRABALHO DIGITAL",
            label: "FUNNELS AI",
            quote: "Crie agentes que trabalham 24/7. Eles qualificam leads, agendam reuniões e fecham vendas enquanto sua equipe dorme.",
            image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff68cb9d3acf04072af2fc.png"
        },
        {
            id: 'marketplace',
            title: "App Marketplace",
            subtitle: "TEMPLATES ENTERPRISE",
            label: "ECOSYSTEM",
            quote: "Acesse centenas de templates validados. Instale funis completos de alta conversão com apenas um clique.",
            image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e871be35e86931aef8f921.png"
        },
        {
            id: 'logic',
            title: "Logic Builder",
            subtitle: "AUTOMAÇÃO VISUAL",
            label: "NO-CODE",
            quote: "Construa fluxos complexos arrastando e soltando. Lógica condicional avançada sem escrever uma linha de código.",
            image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff88f1788aed9a1d078758.png"
        }
    ];

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('precos');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#precos';
        }
    };

    return (
        <main className="overflow-hidden bg-deep-black">
            <ExitPopup onBookDemo={onBookDemo} />

            {/* Feature Details Modal */}
            <FeaturePopupModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />

            {/* HERO SECTION - Dark Mode with Volumetric Lighting (No Blur Blobs) */}
            <Section className="min-h-[90vh] flex flex-col justify-center bg-deep-black pt-[100px] md:pt-[120px] relative overflow-hidden border-b border-gray-900">
                {/* Volumetric Light Source (Radial Gradient) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,_rgba(27,252,79,0.12),_transparent_50%)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

                <Container className="text-center relative z-10 px-4 md:px-12">
                    <Reveal>
                        <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] font-space drop-shadow-2xl flex flex-col items-center">
                            <span className="block text-white">Sua empresa inteira</span>
                            <span className="block text-neon-green drop-shadow-[0_0_15px_rgba(27,252,79,0.3)]">dentro de um único lugar.</span>
                        </h1>
                        <p className="text-sm sm:text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light font-space px-2 text-balance">
                            Automatize marketing, CRM e atendimento em um só lugar e reduza seus custos de software em até 80%.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-20 px-2">
                            <Button className="w-full sm:w-auto min-w-[200px] shadow-[0_0_30px_rgba(27,252,79,0.2)] py-4 hover:shadow-[0_0_50px_rgba(27,252,79,0.4)] border border-neon-green/50 hover:border-neon-green transition-all duration-300" onClick={scrollToPricing}>Começar Agora</Button>
                            <Button variant="outline" className="w-full sm:w-auto min-w-[200px] py-4" onClick={onBookDemo}>Agendar Demo</Button>
                        </div>

                        {/* 3D Depth Stats Bar - Refined for Clarity & Mobile */}
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs font-mono text-gray-400 uppercase tracking-widest border-t border-white/10 bg-white/[0.03] backdrop-blur-md pt-6 pb-6 max-w-4xl mx-auto rounded-sm border-x border-b border-b-white/5 shadow-2xl">
                            <span className="flex items-center gap-3 hover:text-white transition-colors group cursor-default">
                                <span className="text-neon-green font-bold opacity-80 group-hover:opacity-100">///</span>
                                Setup em 48h
                            </span>
                            <span className="hidden md:block w-px h-3 bg-gray-700"></span>
                            <span className="flex items-center gap-3 hover:text-white transition-colors group cursor-default">
                                <span className="text-neon-green font-bold opacity-80 group-hover:opacity-100">///</span>
                                Risco Zero
                            </span>
                            <span className="hidden md:block w-px h-3 bg-gray-700"></span>
                            <span className="flex items-center gap-3 hover:text-white transition-colors group cursor-default">
                                <span className="text-neon-green font-bold opacity-80 group-hover:opacity-100">///</span>
                                Suporte 24/7
                            </span>
                        </div>

                        {/* Interactive Demo Restored */}
                        <div className="mt-16 md:mt-24 max-w-5xl mx-auto text-left">
                            <div className="bg-gray-800/80 backdrop-blur-md rounded-t-xl border border-white/10 border-b-0 px-4 py-3 flex items-center gap-3">
                                {/* Traffic Lights */}
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                </div>
                                {/* URL Bar */}
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-black/50 rounded-md px-4 py-1.5 text-xs text-gray-400 font-mono w-full max-w-md text-center border border-white/5">
                                        app.usefunnels.io/dashboard
                                    </div>
                                </div>
                                <div className="w-16"></div> {/* Spacer for symmetry */}
                            </div>

                            {/* Demo Content */}
                            <div className="bg-white rounded-b-xl border border-white/10 overflow-hidden shadow-2xl relative">
                                <iframe
                                    src="https://app.supademo.com/embed/cm1qijo7401trspgck35m6mcw?embed_v=2"
                                    loading="lazy"
                                    title="FUNNELS Demo Interativa"
                                    allow="clipboard-write"
                                    frameBorder="0"
                                    allowFullScreen
                                    className="w-full aspect-video"
                                ></iframe>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* PARTNERS - Infinite Carousel with headline */}
            <InfiniteLogoCarousel logos={CLIENT_LOGOS} />



            {/* 1. AI BENEFITS - DARK MODE (Exact Match to Screenshot 2) */}
            <Section className="bg-[#050505] text-white border-y border-gray-900 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-[0.05] pointer-events-none"></div>
                <Container>
                    <Reveal>
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <TechBadge className="bg-neon-green text-black mb-6 font-bold border-none mx-auto">AUTOMAÇÃO INTELIGENTE</TechBadge>
                            <h2 className="text-5xl md:text-7xl font-bold font-space mb-6 tracking-tight text-balance leading-none">
                                Trabalhe menos. Venda mais.
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto text-balance">
                                Deixe os agentes de IA cuidarem do trabalho repetitivo para você focar no que importa.
                            </p>
                        </div>

                        {/* Dark Mode Carousel - "Lead Scoring" Style */}
                        <div className="relative z-10 max-w-5xl mx-auto">
                            <AICarousel />
                        </div>

                        <div className="flex justify-center mt-12">
                            <Button variant="outline" className="min-w-[200px] border-gray-700 hover:border-neon-green hover:text-neon-green" onClick={onBookDemo}>Agendar Demo</Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* A ERA DOS AGENTES - WIKIMEE STYLE CAROUSEL WITH INTEGRATED HEADER */}
            <section className="bg-deep-black py-20 md:py-28" id="agentes">
                <div className="max-w-7xl mx-auto px-6 mb-12">
                    <Reveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Inteligência Artificial</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4 tracking-tight text-white text-balance">
                                A Era dos Agentes.
                            </h2>
                            <p className="text-gray-400 text-lg text-balance leading-relaxed">
                                Não apenas ferramentas. Inteligência que trabalha por você 24/7.
                            </p>
                        </div>
                    </Reveal>
                </div>
                <WikimeeCarousel items={CAROUSEL_ITEMS} />
            </section>

            {/* FEATURE CARDS - Secondary Grid (REFINED DESIGN) */}
            <Section id="features-grid" className="bg-light-gray py-16 md:py-[120px]">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 uppercase tracking-tight text-deep-black text-balance">CONHEÇA NOSSAS FUNCIONALIDADES</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {FEATURES.map((feature, i) => (
                            <Reveal key={i} delay={i * 50}>
                                <div
                                    onClick={() => setSelectedFeature(feature)}
                                    className="cursor-pointer block h-full group"
                                >
                                    <div className="p-8 rounded-sm bg-white border border-gray-200 transition-all duration-300 h-full relative overflow-hidden hover:shadow-lg hover:border-gray-300">

                                        {/* Minimal Corner Accents (Active on Hover) */}
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-green opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        {/* Content */}
                                        <div className="flex flex-col items-start h-full justify-between relative z-10">
                                            <div className="w-14 h-14 mb-6 rounded-sm bg-gray-50 flex items-center justify-center group-hover:bg-neon-green transition-colors duration-300">
                                                <img src={feature.icon} alt={feature.title} className="w-7 h-7 object-contain group-hover:filter group-hover:invert-0 transition-all" />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold font-space mb-2 uppercase text-deep-black group-hover:text-black transition-colors text-balance">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-4 group-hover:bottom-0 group-hover:relative">
                                                    Ver detalhes &rarr;
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Line Accent */}
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>


            {/* INTEGRATION HUB - Solar System Visual (replaces ROI Comparison) */}
            <IntegrationHero onBookDemo={onBookDemo} />

            {/* PRICING - Premium Layout */}
            <Section className="bg-gray-50 relative py-16 md:py-[120px]" id="precos">
                <Container>
                    <Reveal>
                        <div className="text-center mb-12 md:mb-20 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 tracking-tight text-deep-black text-balance">Planos simples. Preços justos.<br />Sem surpresas.</h2>
                            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg text-balance">Sem taxas escondidas, sem fidelidade e com tudo incluído para começar agora.</p>
                        </div>
                        <Pricing onBookDemo={onBookDemo} />
                    </Reveal>
                </Container>
            </Section>

            {/* TESTIMONIALS - Clean Grid */}
            <Section className="py-16 md:py-[120px] bg-white">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 font-space tracking-tight text-deep-black text-balance">Resultados Reais.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:border-gray-200 transition-all duration-500 relative group">
                                    <CornerBrackets className="text-gray-200 group-hover:text-neon-green transition-colors" />
                                    <div>
                                        <div className="flex gap-1 mb-4 md:mb-6">
                                            {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-xs">★</span>)}
                                        </div>
                                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-6 font-medium text-balance">"{t.quote}"</p>
                                    </div>
                                    <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                                        <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md" />
                                        <div>
                                            <h4 className="font-bold text-sm leading-tight font-space">{t.name}</h4>
                                            <p className="text-xs text-gray-400 font-mono mt-0.5">{t.company}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* FINAL CTA - 3D Lighting Effect */}
            <Section className="bg-deep-black text-white text-center py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                {/* Clean Volumetric Glow - No Blur Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(27,252,79,0.1),_transparent_70%)] pointer-events-none"></div>

                <Container className="relative z-10 px-4">
                    <Reveal>
                        <h2 className="text-4xl md:text-7xl font-bold font-space mb-8 md:mb-10 tracking-tight leading-none drop-shadow-xl text-balance">
                            Pare de adivinhar.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-white">Comece a escalar.</span>
                        </h2>
                        <Button variant="primary" className="!text-lg md:!text-xl !px-10 md:!px-16 !py-5 md:!py-6 mb-8 md:mb-12 shadow-[0_0_40px_rgba(27,252,79,0.3)] hover:shadow-[0_0_60px_rgba(27,252,79,0.5)] scale-100 hover:scale-105 w-full md:w-auto transition-transform" onClick={scrollToPricing}>Começar Agora</Button>
                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-widest">
                            <span className="flex items-center justify-center gap-2">[+] Acesso Imediato</span>
                            <span className="flex items-center justify-center gap-2">[-] Sem fidelidade</span>
                        </div>
                    </Reveal>
                </Container>
            </Section>
        </main>
    );
};
