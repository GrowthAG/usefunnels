
import React from 'react';
import { Container, Section, Reveal, Button } from '../components/ui';

export const About = () => (
    <main className="overflow-hidden bg-deep-black">
        {/* HERO SECTION - Same pattern as Home */}
        <Section className="min-h-[90vh] flex flex-col justify-center bg-deep-black pt-[100px] md:pt-[120px] relative overflow-hidden border-b border-gray-900">
            {/* Volumetric Light Source (Radial Gradient) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,_rgba(27,252,79,0.12),_transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

            <Container className="text-center relative z-10 px-4 md:px-12">
                <Reveal>


                    {/* Headline - Reduced size */}
                    <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-[-0.04em] mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] font-space drop-shadow-2xl flex flex-col items-center">
                        <span className="block text-white">Menos ferramentas.</span>
                        <span className="block text-neon-green drop-shadow-[0_0_15px_rgba(27,252,79,0.3)]">Mais resultado.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-sm sm:text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light font-space px-2 text-balance">
                        Criado por quem cansou de gastar <strong className="text-white">R$ 3.000+/mês</strong> em ferramentas separadas que não conversam entre si.
                    </p>
                </Reveal>
            </Container>
        </Section>

        {/* TIMELINE - White Section */}
        <Section className="bg-white py-20 md:py-28">
            <Container>
                <Reveal>
                    <div className="text-center mb-12">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Nossa História</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-space text-deep-black text-balance">Por que construímos isso</h2>
                    </div>
                </Reveal>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 space-y-12">
                        <Reveal delay={50}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
                                <span className="font-mono text-gray-400 text-sm mb-2 block">2022</span>
                                <h3 className="text-xl font-bold font-space mb-2 text-deep-black">O Problema</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Empresas pagando R$ 3.000/mês em Hubspot, ActiveCampaign, Zapier, WhatsApp Business API e mais 3 ferramentas. Dados espalhados, tempo perdido integrando tudo.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
                                <span className="font-mono text-gray-400 text-sm mb-2 block">2023</span>
                                <h3 className="text-xl font-bold font-space mb-2 text-deep-black">A Solução</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Lançamos o FUNNELS: Landing Pages + CRM + Automação + WhatsApp + Email em um único lugar. Sem integrações. Sem Zapier. Tudo funciona nativamente.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={150}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[11px] top-0 w-6 h-6 bg-neon-green rounded-full border-4 border-white shadow-[0_0_20px_rgba(27,252,79,0.3)]"></div>
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
        <Section className="bg-gray-50 py-20 md:py-28">
            <Container>
                <Reveal>
                    <div className="text-center mb-12">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Como Trabalhamos</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-space text-deep-black text-balance">O que nos move</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Reveal delay={50}>
                        <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg h-full">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">01.</span>
                            <h3 className="text-lg font-bold font-space mb-3 text-deep-black text-balance">Funciona de Primeira</h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                Chega de configurar integrações, APIs e webhooks. Tudo já vem pronto. Você cria páginas, captura leads e automatiza no mesmo dia.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg h-full">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">02.</span>
                            <h3 className="text-lg font-bold font-space mb-3 text-deep-black text-balance">Preço Honesto</h3>
                            <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                Não cobramos por "módulos extras" nem limitamos recursos no plano básico. Um preço fixo, todas as ferramentas. Sem surpresas na fatura.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg h-full">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">03.</span>
                            <h3 className="text-lg font-bold font-space mb-3 text-deep-black text-balance">Suporte que Responde</h3>
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
