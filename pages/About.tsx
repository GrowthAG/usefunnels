
import React from 'react';
import { Container, Section, Reveal, TechBadge } from '../components/ui';
import { ASSETS } from '../constants';

export const About = () => (
    <main className="pt-[100px]">
        {/* HERO - Dark Section */}
        <Section className="bg-deep-black text-white py-24 md:py-32 relative overflow-hidden border-b border-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(27,252,79,0.08),_transparent_40%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-20"></div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <TechBadge className="bg-neon-green text-black mb-8 font-bold border-none px-4 py-1">MANIFESTO 2025</TechBadge>

                        <h1 className="text-4xl md:text-6xl font-bold font-space mb-8 leading-[1.1] tracking-tighter text-white text-balance">
                            Complexidade drena lucro.<br />
                            <span className="text-neon-green">Unificação gera escala.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-2xl mx-auto text-balance">
                            O FUNNELS não nasceu para ser "mais um software". Nasceu para ser o <strong className="text-white">Sistema Operacional Definitivo</strong> de quem quer crescer.
                        </p>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* TIMELINE - Light Section */}
        <Section className="bg-white py-24 md:py-32">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0 space-y-16">
                        <Reveal>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
                                <span className="font-mono text-gray-400 text-sm mb-2 block">2022</span>
                                <h3 className="text-2xl font-bold font-space mb-3 text-deep-black">A Frustração</h3>
                                <p className="text-gray-500 text-balance">
                                    Agências e empresas pagando fortunas em 5, 6 ferramentas diferentes que mal funcionavam juntas. O custo de "setup" engolia o lucro.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-400 rounded-full border-4 border-white"></div>
                                <span className="font-mono text-gray-400 text-sm mb-2 block">2023</span>
                                <h3 className="text-2xl font-bold font-space mb-3 text-deep-black">A Construção</h3>
                                <p className="text-gray-500 text-balance">
                                    Desenvolvemos o núcleo do FUNNELS. Não um "plugin", mas um Sistema Operacional de Crescimento completo. CRM nativo, Automação nativa.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[11px] top-0 w-6 h-6 bg-neon-green rounded-full border-4 border-white shadow-[0_0_20px_rgba(27,252,79,0.3)]"></div>
                                <span className="font-mono text-neon-green text-sm mb-2 block font-bold">HOJE</span>
                                <h3 className="text-3xl font-bold font-space mb-3 text-deep-black">A Consolidação</h3>
                                <p className="text-lg text-gray-600 leading-relaxed text-balance">
                                    Mais de 3.000 operações rodando. O padrão de mercado mudou. Quem não centraliza, fica para trás.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </Section>

        {/* DNA GRID - Light Gray Section */}
        <Section className="bg-light-gray py-24 md:py-32">
            <Container>
                <Reveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Nosso DNA</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Reveal delay={50}>
                        <div className="bg-white p-10 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-colors">
                            <span className="font-mono text-neon-green text-xl font-bold mb-4 block">01.</span>
                            <h3 className="text-xl font-bold font-space mb-3 text-deep-black text-balance">Velocidade é Feature</h3>
                            <p className="text-gray-500 text-sm text-balance">
                                Se uma tarefa leva 5 cliques, ela está errada. Construímos software para quem tem pressa.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="bg-white p-10 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-colors">
                            <span className="font-mono text-neon-green text-xl font-bold mb-4 block">02.</span>
                            <h3 className="text-xl font-bold font-space mb-3 text-deep-black text-balance">Métricas Reais</h3>
                            <p className="text-gray-500 text-sm text-balance">
                                Sem métricas de vaidade. Apenas custo, valor e retorno. O que não pode ser medido, não existe.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="bg-white p-10 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-colors">
                            <span className="font-mono text-neon-green text-xl font-bold mb-4 block">03.</span>
                            <h3 className="text-xl font-bold font-space mb-3 text-deep-black text-balance">Tecnologia Invisível</h3>
                            <p className="text-gray-500 text-sm text-balance">
                                A melhor automação é aquela que você esquece. Infraestrutura silenciosa para o seu império.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>
    </main>
);
