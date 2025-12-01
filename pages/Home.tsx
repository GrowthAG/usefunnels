
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Section, Reveal, Button, CornerBrackets, ExitPopup, FeatureTabs, InfiniteLogoCarousel, TechBadge, AICarousel, FeaturePopupModal } from '../components/UI';
import { Pricing } from '../components/Pricing';
import { ASSETS, FEATURES, TESTIMONIALS, CLIENT_LOGOS, TOOLS_REPLACED } from '../constants';

export const Home = ({ onBookDemo }: { onBookDemo: () => void }) => {
    // Modal State for Features
    const [selectedFeature, setSelectedFeature] = useState<typeof FEATURES[0] | null>(null);

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
                        <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[48px] md:text-[72px] lg:text-[90px] font-bold tracking-[-0.04em] mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] font-space drop-shadow-2xl flex flex-col items-center">
                            <span className="block">Sua empresa inteira</span>
                            <span className="block bg-gradient-to-r from-white via-[#4aff7e] to-neon-green bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(27,252,79,0.3)]">dentro de um único lugar.</span>
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
                    </Reveal>
                </Container>
            </Section>

            {/* PARTNERS - Infinite Carousel (Original Colors) */}
            <InfiniteLogoCarousel logos={CLIENT_LOGOS} />

            {/* FEATURES TABS - CORE FUNCTIONALITY */}
            <Section id="recursos" className="py-16 md:py-[120px] bg-white">
                <Container>
                    <Reveal>
                        <div className="text-center mb-10 md:mb-16">
                            <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-neon-green mb-2 md:mb-4 block">Ecossistema Integrado</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 tracking-tight text-deep-black text-balance">O poder de um sistema único.</h2>
                            <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-lg text-balance">Tudo o que você precisa para capturar, nutrir e converter leads em escala.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={200}>
                        <FeatureTabs onBookDemo={scrollToPricing} />
                    </Reveal>
                </Container>
            </Section>

            {/* AI REVOLUTION - High-End Dark UI */}
            <Section className="bg-[#050505] text-white border-y border-gray-900 py-20 md:py-32 relative overflow-hidden">
                 {/* 3D Lighting Effect - No Blur, Just Gradient */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_#050505_100%)] pointer-events-none"></div>
                 <div className="absolute inset-0 bg-grid-pattern-dark opacity-[0.1] pointer-events-none"></div>
                 
                 <Container>
                     <Reveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
                            <div>
                                <TechBadge className="bg-neon-green text-black mb-4 font-bold border-none">NEXT_GEN</TechBadge>
                                <h2 className="text-4xl md:text-6xl font-bold font-space mb-2 tracking-tight text-balance">A Era dos Agentes.</h2>
                                <p className="text-gray-400 max-w-md text-lg text-balance">Não apenas ferramentas. Inteligência que trabalha por você 24/7.</p>
                            </div>
                        </div>
                        
                        {/* Interactive Carousel */}
                        <div className="mb-12 relative z-10">
                            <AICarousel />
                        </div>

                        {/* Bottom CTA */}
                        <div className="flex justify-center relative z-10">
                             <Button variant="outline" className="min-w-[240px] !text-lg !py-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all" onClick={onBookDemo}>Agendar Demo</Button>
                        </div>
                     </Reveal>
                 </Container>
            </Section>

            {/* FEATURE CARDS - Secondary Grid (REFINED DESIGN) */}
            <Section id="features-grid" className="bg-light-gray py-16 md:py-[120px]">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 uppercase tracking-tight text-balance">CONHEÇA NOSSAS FUNCIONALIDADES</h2>
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

            {/* ROI COMPARISON SECTION - REBUILT DARK PREMIUM */}
            <Section className="bg-[#050505] py-24 md:py-[140px] relative border-y border-gray-900 overflow-hidden">
                {/* Background Tech Effects */}
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(27,252,79,0.08),_transparent_60%)] pointer-events-none"></div>
                
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* LEFT: Copy & Economy Card (Mobile Order: Text -> Economy -> Visuals) */}
                        <div className="flex flex-col order-1 lg:order-1 relative z-10 items-center text-center lg:items-start lg:text-left">
                            <Reveal className="flex flex-col items-center lg:items-start">
                                <TechBadge className="bg-white/10 text-neon-green border border-neon-green/20 mb-6 w-fit">CONSOLIDAÇÃO</TechBadge>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 text-white tracking-tight leading-[1.05] text-balance">
                                    Pare de acumular ferramentas.
                                    <span className="block text-neon-green mt-2">Comece a economizar de verdade.</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed max-w-md text-balance">
                                    Centralize CRM, automação, WhatsApp, e-mail, páginas e IA em um único sistema.<br/>
                                    <strong className="text-white">Economize até R$ 30.000/ano.</strong>
                                </p>

                                {/* Economy Card - DARK PREMIUM */}
                                <div className="bg-[#0a0a0a] rounded-sm p-8 border border-gray-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-gray-700 transition-all duration-500 max-w-md w-full">
                                    <CornerBrackets className="text-gray-700 group-hover:text-neon-green transition-colors" />
                                    
                                    <div className="flex justify-between items-center text-xs md:text-sm font-mono text-gray-500 mb-4 relative z-10">
                                        <span>Economia anual estimada</span>
                                    </div>
                                    <div className="flex justify-between items-center relative z-10 border-t border-gray-800 pt-4 mt-2">
                                        <span className="text-white font-bold font-space">Total</span>
                                        <div className="flex flex-col items-end">
                                             <span className="text-neon-green text-3xl md:text-4xl font-bold drop-shadow-[0_0_10px_rgba(27,252,79,0.4)]">+ R$ 35.000</span>
                                             <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">/ano</span>
                                        </div>
                                    </div>
                                    
                                    {/* Subtle Green Glow Bottom */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50"></div>
                                </div>
                            </Reveal>
                        </div>

                        {/* RIGHT: Visual Comparison (Before vs After) */}
                        <div className="flex flex-col gap-6 order-2 lg:order-2 relative z-10">
                             {/* BEFORE BLOCK - CHAOS - Enhanced Chaos */}
                            <Reveal delay={100}>
                                <div className="bg-white/5 backdrop-blur-sm rounded-sm p-8 border border-white/10 relative group">
                                    <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest">[ CAOS ]</div>
                                    
                                    {/* Logos in White Squares with Rotation for Chaos */}
                                    <div className="mt-8 grid grid-cols-4 gap-4 animate-jitter">
                                         {TOOLS_REPLACED.slice(0, 8).map((tool, i) => (
                                            <div 
                                                key={i} 
                                                className={`w-16 h-16 bg-white rounded-sm flex items-center justify-center p-3 shadow-lg border border-gray-200 transform hover:scale-110 hover:z-10 hover:rotate-0 transition-transform duration-300 ${i % 2 === 0 ? 'rotate-3 translate-y-1' : '-rotate-2 -translate-y-1'}`}
                                            >
                                                <img src={tool.logo} alt="Tool" className="w-full h-full object-contain" />
                                            </div>
                                         ))}
                                    </div>
                                    
                                    <p className="text-xs font-mono text-center text-red-400/80 mt-8 border-t border-white/10 pt-4">
                                        ⚠ Vários sistemas. Zero integração.
                                    </p>
                                </div>
                            </Reveal>

                            {/* AFTER BLOCK - ORDER (FUNNELS) */}
                            <Reveal delay={200}>
                                <div className="bg-[#080808] rounded-sm p-8 border border-neon-green/30 relative group shadow-[0_0_30px_rgba(27,252,79,0.05)] overflow-hidden">
                                    <div className="absolute top-4 left-4 text-[10px] font-mono font-bold text-neon-green uppercase tracking-widest">[ FUNNELS ]</div>
                                    
                                    <div className="mt-6 flex justify-center items-center py-8 relative">
                                        {/* Logo Glow */}
                                        <div className="absolute inset-0 bg-neon-green/10 blur-3xl rounded-full opacity-20"></div>
                                        <img 
                                            src={ASSETS.logoWhite} 
                                            alt="FUNNELS" 
                                            className="h-10 md:h-14 w-auto object-contain relative z-10 drop-shadow-[0_0_8px_rgba(27,252,79,0.8)]" 
                                        />
                                    </div>
                                    
                                    <div className="mt-6 pt-4 border-t border-gray-800 flex justify-center">
                                        <p className="text-xs font-mono text-neon-green flex items-center gap-2 uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span> Tudo em um único lugar.
                                        </p>
                                    </div>
                                    
                                    {/* Neon Line Bottom */}
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-green shadow-[0_0_15px_#1bfc4f]"></div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* PRICING - Premium Layout */}
            <Section className="bg-gray-50 relative py-16 md:py-[120px]" id="precos">
                <Container>
                    <Reveal>
                        <div className="text-center mb-12 md:mb-20 relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 tracking-tight text-deep-black text-balance">Planos simples. Preços justos.<br/>Sem surpresas.</h2>
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
                                            {[1,2,3,4,5].map(star => <span key={star} className="text-yellow-400 text-xs">★</span>)}
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
                            Pare de adivinhar.<br/>
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
