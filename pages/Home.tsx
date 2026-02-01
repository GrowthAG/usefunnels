
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Section, Reveal, Button, CornerBrackets, TechBadge } from '../components/ui/index';
import { AICarousel, ExitPopup, InfiniteLogoCarousel, FeaturePopupModal, IntegrationHero, AgentsEraSection } from '../components/features';
import { ASSETS, FEATURES, TESTIMONIALS, CLIENT_LOGOS, TOOLS_REPLACED } from '../constants';

export const Home = ({ onBookDemo, onCheckout }: { onBookDemo: () => void; onCheckout?: (url: string, planName?: string, isAnnual?: boolean) => void }) => {
    const navigate = useNavigate();
    // Modal State for Features
    const [selectedFeature, setSelectedFeature] = useState<typeof FEATURES[0] | null>(null);
    // Video Testimonial Modal State
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [demoLoaded, setDemoLoaded] = useState(false);



    const scrollToPricing = () => {
        navigate('/precos', { state: { targetId: 'pricing-plans' } });
    };

    return (
        <main className="overflow-hidden bg-deep-black">
            <ExitPopup onBookDemo={onBookDemo} />

            {/* Feature Details Modal */}
            <FeaturePopupModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />

            {/* HERO SECTION - Dark Mode with Volumetric Lighting */}
            <Section className="min-h-screen flex flex-col justify-center bg-deep-black pt-[100px] md:pt-[120px] relative overflow-hidden border-b border-gray-900">
                {/* Volumetric Light Source (Radial Gradient) REMOVED */}

                <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

                <Container className="text-center relative z-10 px-4 md:px-12">
                    <Reveal>
                        <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] mb-5 md:mb-6 leading-[1.1] md:leading-[0.95] font-space drop-shadow-2xl flex flex-col items-center">
                            <span className="block text-white">Sua empresa inteira</span>
                            <span className="block text-neon-green drop-shadow-[0_0_15px_rgba(27,252,79,0.3)]">dentro de um único lugar.</span>
                        </h1>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light font-space px-2 text-balance">
                            Automatize marketing, CRM e atendimento em um só lugar e reduza seus custos de software em até 80%.
                        </p>

                        {/* Interactive Demo - Browser Mockup */}
                        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
                            <div className="relative shadow-2xl rounded-lg overflow-hidden border border-[#222]">
                                {/* Browser Header - Dark Mode (Restored) */}
                                <div className="bg-[#111] border-b border-[#222] px-3 py-2 flex items-center gap-2">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-[#000] rounded-md px-3 py-1 text-[10px] text-gray-500 font-mono w-full max-w-sm text-center border border-[#222]">
                                            app.usefunnels.io/dashboard
                                        </div>
                                    </div>
                                    <div className="w-12"></div>
                                </div>


                                <div className="relative aspect-video bg-black group cursor-pointer overflow-hidden">
                                    <iframe
                                        src="https://app.supademo.com/embed/cm1qijo7401trspgck35m6mcw?embed_v=2"
                                        loading="eager"
                                        title="FUNNELS Demo Interativa"
                                        allow="clipboard-write"
                                        frameBorder="0"
                                        allowFullScreen
                                        className="w-full h-full animate-fade-in"
                                    ></iframe>
                                </div>

                                {/* Bottom Glow Removed */}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Button variant="primary" className="min-w-[200px]" onClick={scrollToPricing}>
                                Começar Teste Grátis
                            </Button>
                            <Button variant="outline" className="min-w-[200px] border-gray-700 hover:border-neon-green hover:text-neon-green" onClick={scrollToPricing}>
                                Ver Preços
                            </Button>
                        </div>

                        {/* Stats Bar Removed */}
                    </Reveal>
                </Container>
            </Section>

            {/* PARTNERS - Infinite Carousel */}
            <InfiniteLogoCarousel logos={CLIENT_LOGOS} />

            {/* INTEGRATION HERO - Singularity */}
            <IntegrationHero onBookDemo={onBookDemo} />

            {/* 1. AI BENEFITS - DARK MODE */}
            <Section className="bg-[#050505] text-white border-y border-gray-900 py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-[0.05] pointer-events-none"></div>
                <Container>
                    <Reveal>
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-6 block">
                                Automação Nativa
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold font-space mb-6 tracking-tight text-balance leading-tight text-white">
                                Pare de perder leads.<br />
                                Construa relacionamentos.
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light max-w-2xl mx-auto text-balance leading-relaxed">
                                A única plataforma que une captura, conversão e retenção em um piloto automático inteligente.
                            </p>
                        </div>
                        {/* Reusing AICarousel here if intended, or just keeping the structure as it was previously valid. Assuming content here was correct before my bad edit. */}
                        {/* NOTE: In the previous valid file, there was another instance of AICarousel here? Or was it something else?
                             Looking at the file history, line 125 had <AICarousel />. I will keep it consistent.
                          */}
                        <div className="relative z-10 max-w-5xl mx-auto">
                            <AICarousel />
                        </div>
                        <div className="flex justify-center mt-12 gap-4">
                            <Button
                                variant="primary"
                                className="min-w-[200px] shadow-[0_0_20px_rgba(27,252,79,0.3)] hover:shadow-[0_0_40px_rgba(27,252,79,0.5)]"
                                onClick={scrollToPricing}
                            >
                                Começar Teste Grátis
                            </Button>
                            <Button
                                variant="outline"
                                className="min-w-[200px] border-gray-700 hover:border-white text-gray-300 hover:text-white"
                                onClick={scrollToPricing}
                            >
                                Ver Preços
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* A ERA DOS AGENTES - NEW DESIGN (White BG, 3 Pillars) */}
            <AgentsEraSection />

            {/* FEATURE CARDS - Secondary Grid */}
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

            {/* TESTIMONIALS - Clean Grid */}
            <Section className="py-16 md:py-[120px] bg-white">
                <Container>
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6 font-space tracking-tight text-deep-black text-balance">+800 empresas crescendo com a Funnels</h2>
                        <p className="text-center text-gray-600 mb-8 md:mb-12 text-sm md:text-base max-w-2xl mx-auto">
                            De startups a empresas com +100 funcionários. Veja o que quem já migrou tem a dizer:
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-12 md:mb-16 pb-8 border-b border-gray-100">
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs md:text-sm font-medium">Certificado ISO 27001</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                </svg>
                                <span className="text-xs md:text-sm font-medium">99,9% Uptime SLA</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-xs md:text-sm font-medium">4.8/5 (247 avaliações)</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {TESTIMONIALS.map((t, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 flex flex-col justify-between hover:shadow-2xl hover:border-gray-200 transition-all duration-500 relative group">
                                    <CornerBrackets className="text-gray-200 group-hover:text-neon-green transition-colors" />
                                    <div>
                                        <div className="flex items-center justify-between mb-4 md:mb-6">
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4, 5].map(star => <span key={star} className="text-yellow-400 text-xs">★</span>)}
                                            </div>
                                            {t.result && (
                                                <span className="px-2 py-1 bg-neon-green/10 text-neon-green text-[9px] font-bold font-mono uppercase rounded border border-neon-green/20">
                                                    {t.result}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 font-sans text-sm leading-loose mb-6 font-normal text-balance tracking-wide">"{t.quote}"</p>
                                    </div>
                                    <div className="border-t border-gray-50 pt-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="relative">
                                                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md" />
                                                {t.video && (
                                                    <button
                                                        onClick={() => setVideoUrl(t.video!)}
                                                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon-green rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                                        aria-label="Assistir depoimento em vídeo"
                                                    >
                                                        <svg className="w-2.5 h-2.5 text-deep-black ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M3 2v12l10-6z" />
                                                        </svg>
                                                    </button>
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm leading-tight font-space">{t.name}</h4>
                                                {t.role && <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>}
                                                <p className="text-xs text-gray-400 font-mono mt-0.5">{t.company}</p>
                                            </div>
                                        </div>
                                        {t.video && (
                                            <button
                                                onClick={() => setVideoUrl(t.video!)}
                                                className="w-full py-2 px-3 bg-gray-50 hover:bg-neon-green/10 border border-gray-200 hover:border-neon-green rounded-sm text-xs font-bold text-gray-600 hover:text-neon-green transition-all flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M3 2v12l10-6z" />
                                                </svg>
                                                Assistir Depoimento
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* Video Testimonial Modal */}
            {videoUrl && (
                <div
                    className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
                    onClick={() => setVideoUrl(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-deep-black rounded-2xl overflow-hidden shadow-2xl"
                        style={{ animation: 'modalEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-deep-black border-b border-gray-800 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                                    Depoimento em Vídeo
                                </span>
                            </div>
                            <button
                                onClick={() => setVideoUrl(null)}
                                className="text-gray-400 hover:text-white transition-colors p-1"
                                aria-label="Fechar vídeo"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Video Player */}
                        <div className="relative aspect-video bg-black">
                            <video
                                src={videoUrl}
                                controls
                                autoPlay
                                className="w-full h-full"
                                playsInline
                            />
                        </div>

                        {/* Bottom Glow */}
                        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-neon-green opacity-10 blur-[100px] pointer-events-none"></div>
                    </div>
                </div>
            )}

            {/* FINAL CTA - 3D Lighting Effect */}
            <Section className="bg-deep-black text-white text-center py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

                <Container className="relative z-10 px-4">
                    <Reveal>
                        <div className="text-center max-w-4xl mx-auto">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Próximo Passo</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-8 tracking-tight leading-none text-balance">
                                Pare de adivinhar.<br />
                                <span className="text-neon-green">Comece a escalar.</span>
                            </h2>
                        </div>
                        <Button variant="primary" className="!text-base !px-8 md:!px-10 !py-3 md:!py-4 mb-8 md:mb-12 shadow-[0_0_40px_rgba(27,252,79,0.3)] hover:shadow-[0_0_60px_rgba(27,252,79,0.5)] scale-100 hover:scale-105 w-full md:w-auto transition-transform" onClick={scrollToPricing}>Começar Agora</Button>
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
