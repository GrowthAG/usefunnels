
import React from 'react';
import { Container, Section, Button, TechBadge, Reveal } from '../components/ui';

// Image URL provided by user
const PARTNERS_HERO_IMAGE = 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b82a204b05bc454517c8c.jpeg';

export const Partners = ({ onOpenForm }: { onOpenForm: () => void }) => (
    <main className="pt-[100px]">
        {/* HERO - Dark Section (Same pattern as Home) */}
        <Section className="bg-deep-black text-white py-24 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(27,252,79,0.08),_transparent_50%)] pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Copy */}
                    <Reveal>
                        <div>
                            <TechBadge className="bg-neon-green text-black mb-6 font-bold border-none">PROGRAMA DE CANAIS 2025</TechBadge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 leading-[1.1] tracking-tight text-balance">
                                A Tecnologia é Nossa.<br />
                                A Marca é <span className="text-neon-green">Sua.</span>
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8 font-light text-balance max-w-lg">
                                Entregue valor real. Com o modelo <strong className="text-white">White-Label</strong>, o cliente vê a SUA logo, o SEU domínio e paga o preço que VOCÊ definir.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-300 mb-8">
                                <li className="flex items-center gap-3"><span className="text-neon-green font-mono">{'>>>'}</span> Infraestrutura gerenciada por nós.</li>
                                <li className="flex items-center gap-3"><span className="text-neon-green font-mono">{'>>>'}</span> Cobrança direta ao seu cliente.</li>
                                <li className="flex items-center gap-3"><span className="text-neon-green font-mono">{'>>>'}</span> Margem de lucro de 100% no setup.</li>
                            </ul>

                            <Button variant="primary" className="px-10 py-4 text-base" onClick={onOpenForm}>
                                Quero ser Parceiro
                            </Button>
                        </div>
                    </Reveal>

                    {/* Right: Hero Image */}
                    <Reveal delay={200}>
                        <div className="relative">
                            <img
                                src={PARTNERS_HERO_IMAGE}
                                alt="Programa de Parceiros FUNNELS"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-neon-green text-black px-5 py-2 rounded-sm font-mono font-bold text-xs shadow-lg">
                                WHITE-LABEL
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* BENEFITS - White Section (Same pattern as Home) */}
        <Section className="bg-white py-20 md:py-28">
            <Container>
                <Reveal>
                    <div className="text-center mb-12">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Vantagens</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Por que ser um Parceiro FUNNELS?</h2>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Reveal delay={50}>
                        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">01.</span>
                            <h3 className="text-lg font-bold font-space text-deep-black mb-3">Infraestrutura Gerenciada</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Nós cuidamos de tudo: servidores, updates, suporte técnico. Você foca no cliente.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">02.</span>
                            <h3 className="text-lg font-bold font-space text-deep-black mb-3">Cobrança Direta</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Cobre o valor que quiser. A diferença entre o custo e o seu preço é margem pura.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">03.</span>
                            <h3 className="text-lg font-bold font-space text-deep-black mb-3">Margem de 100%</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Setup e implementação são 100% seus. Receita recorrente com MRR previsível.</p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* COMPARISON - Light Gray Section (Same pattern as Home) */}
        <Section className="bg-gray-50 py-20 md:py-28">
            <Container>
                <Reveal>
                    <div className="text-center mb-12">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-4 block">Comparativo</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Escolha seu Modelo de Negócio</h2>
                        <p className="text-gray-500 mt-3 text-balance">A diferença entre sobreviver e escalar.</p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <Reveal delay={50}>
                        <div className="p-8 rounded-sm border border-gray-300 bg-white">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-lg font-bold font-space text-gray-400">Modelo Tradicional</h3>
                                <span className="text-xs font-mono border border-red-400 text-red-500 px-2 py-1 rounded-sm uppercase">Risco Alto</span>
                            </div>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-center gap-3 text-gray-500 text-sm">
                                    <span className="text-red-500 font-mono">[-]</span> Venda de horas (limitado)
                                </li>
                                <li className="flex items-center gap-3 text-gray-500 text-sm">
                                    <span className="text-red-500 font-mono">[-]</span> Cliente é dono das ferramentas
                                </li>
                                <li className="flex items-center gap-3 text-gray-500 text-sm">
                                    <span className="text-red-500 font-mono">[-]</span> Churn alto se o ads falhar
                                </li>
                            </ul>
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-xs text-gray-400 font-mono uppercase mb-1">LTV Médio</p>
                                <p className="text-xl font-bold text-gray-400">Baixo</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="p-8 rounded-sm border-2 border-neon-green bg-white shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold px-3 py-1 font-mono">RECOMENDADO</div>
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-lg font-bold font-space text-deep-black">Parceiro FUNNELS</h3>
                                <span className="text-xs font-mono border border-neon-green text-green-darker px-2 py-1 rounded-sm uppercase">Escalável</span>
                            </div>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-center gap-3 text-deep-black text-sm">
                                    <span className="text-neon-green font-mono">[+]</span> Receita Recorrente (MRR)
                                </li>
                                <li className="flex items-center gap-3 text-deep-black text-sm">
                                    <span className="text-neon-green font-mono">[+]</span> Você controla a tecnologia
                                </li>
                                <li className="flex items-center gap-3 text-deep-black text-sm">
                                    <span className="text-neon-green font-mono">[+]</span> Retenção por ecossistema
                                </li>
                            </ul>
                            <div className="pt-6 border-t border-gray-200 flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-gray-500 font-mono uppercase mb-1">LTV Médio</p>
                                    <p className="text-xl font-bold text-green-darker">Recorrente</p>
                                </div>
                                <div className="h-10 w-20 bg-gray-100 relative overflow-hidden rounded-sm flex items-end gap-0.5">
                                    <div className="flex-1 h-[30%] bg-green-light rounded-sm"></div>
                                    <div className="flex-1 h-[60%] bg-green-dark rounded-sm"></div>
                                    <div className="flex-1 h-[100%] bg-neon-green rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* CTA */}
                <Reveal delay={200}>
                    <div className="text-center mt-12">
                        <Button variant="primary" className="px-10 py-4 text-base" onClick={onOpenForm}>
                            Começar Parceria
                        </Button>
                    </div>
                </Reveal>
            </Container>
        </Section>
    </main>
);
