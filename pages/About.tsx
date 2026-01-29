
import React from 'react';
import { Container, Section, Reveal, Button } from '../components/ui';

export const About = () => (
    <main className="overflow-hidden bg-deep-black">
        {/* HERO SECTION - Same pattern as Home */}
        <Section className="min-h-[70vh] flex flex-col justify-center bg-deep-black pt-[100px] md:pt-[120px] relative overflow-hidden border-b border-gray-900">
            {/* Volumetric Light Source (Radial Gradient) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,_rgba(27,252,79,0.12),_transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

            <Container className="text-center relative z-10 px-4 md:px-12">
                <Reveal>


                    {/* Headline - Reduced size */}
                    <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] mb-5 md:mb-6 leading-[1.1] md:leading-[0.95] font-space drop-shadow-2xl flex flex-col items-center">
                        <span className="block text-white">Menos ferramentas.</span>
                        <span className="block text-neon-green drop-shadow-[0_0_15px_rgba(27,252,79,0.3)]">Mais resultado.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-0 leading-relaxed font-light font-space px-2 text-balance">
                        Criado por quem cansou de gastar <strong className="text-white">R$ 3.000+/mês</strong> em ferramentas separadas que não conversam entre si.
                    </p>
                </Reveal>
            </Container>
        </Section>

        {/* TIMELINE - White Section */}
        <Section className="bg-white py-16 md:py-20">
            <Container>
                <Reveal>
                    <div className="text-center mb-10">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-3 block">Nossa História</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Por que construímos isso</h2>
                    </div>
                </Reveal>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 space-y-12">
                        <Reveal delay={50}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[20px] top-0 w-10 h-10 bg-gray-100 rounded-full border-4 border-white flex items-center justify-center text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </div>
                                <span className="font-mono text-gray-400 text-sm mb-2 block">2022</span>
                                <h3 className="text-xl font-bold font-space mb-2 text-deep-black">O Problema</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Empresas pagando R$ 3.000/mês em Hubspot, ActiveCampaign, Zapier, WhatsApp Business API e mais 3 ferramentas. Dados espalhados, tempo perdido integrando tudo.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[20px] top-0 w-10 h-10 bg-gray-100 rounded-full border-4 border-white flex items-center justify-center text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                                </div>
                                <span className="font-mono text-gray-400 text-sm mb-2 block">2023</span>
                                <h3 className="text-xl font-bold font-space mb-2 text-deep-black">A Solução</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Lançamos o FUNNELS: Landing Pages + CRM + Automação + WhatsApp + Email em um único lugar. Sem integrações. Sem Zapier. Tudo funciona nativamente.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={150}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[24px] top-0 w-12 h-12 bg-neon-green rounded-full border-4 border-white shadow-[0_0_20px_rgba(27,252,79,0.3)] flex items-center justify-center text-deep-black">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <span className="font-mono text-neon-green text-sm mb-2 block font-bold">2025</span>
                                <h3 className="text-2xl font-bold font-space mb-2 text-deep-black">O Resultado</h3>
                                <p className="text-gray-600 text-base leading-relaxed text-balance">
                                    3.000+ empresas economizando 70% em ferramentas e reduzindo tempo de setup de semanas para horas. A stack completa em um só lugar.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>

        {/* DNA GRID - Light Gray Section */}
        <Section className="bg-gray-50 py-16 md:py-20">
            <Container>
                <Reveal>
                    <div className="text-center mb-10">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-3 block">Como Trabalhamos</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">O que nos move</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Reveal delay={50}>
                        <div className="bg-white p-6 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg h-full group">
                            <div className="w-10 h-10 mb-4 text-neon-green bg-neon-green/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            </div>
                            <h3 className="text-base font-bold font-space mb-2 text-deep-black text-balance">Funciona de Primeira</h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                Chega de configurar integrações, APIs e webhooks. Tudo já vem pronto. Você cria páginas, captura leads e automatiza no mesmo dia.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="bg-white p-6 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg h-full group">
                            <div className="w-10 h-10 mb-4 text-neon-green bg-neon-green/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <h3 className="text-base font-bold font-space mb-2 text-deep-black text-balance">Preço Honesto</h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                Não cobramos por "módulos extras" nem limitamos recursos no plano básico. Um preço fixo, todas as ferramentas. Sem surpresas na fatura.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="bg-white p-6 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg h-full group">
                            <div className="w-10 h-10 mb-4 text-neon-green bg-neon-green/5 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="text-base font-bold font-space mb-2 text-deep-black text-balance">Suporte que Responde</h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                Time brasileiro, suporte em português, sem bots genéricos. Quando você precisar, a gente está aqui. Simples assim.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    </main>
);
