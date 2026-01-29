
import React from 'react';
import { Container, Section, Button, TechBadge, Reveal } from '../components/ui';
import { ASSETS } from '../constants';

export const Partners = ({ onOpenForm }: { onOpenForm: () => void }) => (
    <main className="pt-[100px]">
        {/* HERO - Dark Section (13%) */}
        <Section className="bg-deep-black text-white py-24 md:py-32 relative overflow-hidden border-b border-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(27,252,79,0.08),_transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-20"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Persuasion */}
                    <Reveal>
                        <div className="max-w-2xl">
                            <TechBadge className="bg-neon-green text-black mb-8 font-bold border-none">PROGRAMA DE CANAIS 2025</TechBadge>
                            <h1 className="text-4xl md:text-6xl font-bold font-space mb-8 leading-[1.05] tracking-tighter text-balance">
                                A Tecnologia é Nossa.<br />
                                A Marca é <span className="text-neon-green">Sua.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 font-light text-balance">
                                Entregue valor real. Com o modelo <strong className="text-white">White-Label</strong>, o cliente vê a SUA logo, o SEU domínio e paga o preço que VOCÊ definir.
                            </p>

                            <Button variant="primary" className="px-12 py-5 text-lg shadow-[0_0_30px_rgba(27,252,79,0.3)]" onClick={onOpenForm}>
                                Quero ser Parceiro
                            </Button>
                        </div>
                    </Reveal>

                    {/* Right: Whitelabel Visual Mockup */}
                    <Reveal delay={200}>
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-neon-green/20 blur-[100px] rounded-full pointer-events-none opacity-30"></div>

                            {/* Browser Mockup */}
                            <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl shadow-2xl overflow-hidden relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                {/* Browser Chrome */}
                                <div className="h-10 bg-[#111] flex items-center px-4 gap-3 border-b border-gray-800">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-gray-800 rounded-md px-4 py-1 text-xs text-gray-500 font-mono">
                                            suaagencia.funnels.app
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="relative bg-[#111] overflow-hidden h-[350px]">
                                    <img
                                        src={ASSETS.screenshots.dashboard2}
                                        alt="Dashboard"
                                        className="w-full h-full object-cover opacity-50 grayscale"
                                    />
                                    <div className="absolute top-6 left-6 z-20 animate-pulse-slow">
                                        <div className="bg-white text-black font-bold font-space uppercase tracking-widest px-4 py-2 text-sm border-l-4 border-neon-green shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                            SUA AGÊNCIA
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-neon-green text-black px-6 py-3 rounded-sm font-mono font-bold text-xs shadow-lg">
                                SEU_DOMINIO.COM
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* BENEFITS - Light Section (85%) */}
        <Section className="bg-white py-24 md:py-32">
            <Container>
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Vantagens do Programa</h2>
                        <p className="text-gray-500 mt-4 text-balance">Tudo que você precisa para escalar sua agência.</p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Reveal delay={50}>
                        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-colors">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">>>></span>
                            <h3 className="text-xl font-bold font-space text-deep-black mb-3">Infraestrutura Gerenciada</h3>
                            <p className="text-gray-500 text-sm">Nós cuidamos de tudo: servidores, updates, suporte técnico. Você foca no cliente.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-colors">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">>>></span>
                            <h3 className="text-xl font-bold font-space text-deep-black mb-3">Cobrança Direta</h3>
                            <p className="text-gray-500 text-sm">Cobre o valor que quiser. A diferença entre o custo e o seu preço é margem pura.</p>
                        </div>
                    </Reveal>
                    <Reveal delay={150}>
                        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-colors">
                            <span className="font-mono text-neon-green text-2xl font-bold mb-4 block">>>></span>
                            <h3 className="text-xl font-bold font-space text-deep-black mb-3">Margem de 100%</h3>
                            <p className="text-gray-500 text-sm">Setup e implementação são 100% seus. Receita recorrente com MRR previsível.</p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* COMPARISON - Light Gray Section */}
        <Section className="bg-gray-50 py-24 md:py-32">
            <Container>
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Escolha seu Modelo de Negócio</h2>
                        <p className="text-gray-500 mt-4 text-balance">A diferença entre sobreviver e escalar.</p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Reveal delay={50}>
                        <div className="p-8 rounded-sm border border-gray-300 bg-white">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold font-space text-gray-400">Modelo Tradicional</h3>
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
                        <div className="p-8 rounded-sm border-2 border-neon-green bg-white shadow-lg relative transform md:-translate-y-2">
                            <div className="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold px-3 py-1 font-mono">RECOMENDADO</div>
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-xl font-bold font-space text-deep-black">Parceiro FUNNELS</h3>
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
                    <div className="text-center mt-16">
                        <Button variant="primary" className="px-12 py-5 text-lg" onClick={onOpenForm}>
                            Começar Parceria
                        </Button>
                    </div>
                </Reveal>
            </Container>
        </Section>
    </main>
);
