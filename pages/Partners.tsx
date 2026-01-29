
import React from 'react';
import { Container, Section, Button, TechBadge } from '../components/ui';
import { ASSETS } from '../constants';

export const Partners = ({ onOpenForm }: { onOpenForm: () => void }) => (
    <main className="pt-[100px] bg-deep-black text-white">
        {/* HERO */}
        <Section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden border-b border-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(27,252,79,0.08),_transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-20"></div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Persuasion */}
                    <div className="max-w-2xl">
                        <TechBadge className="bg-neon-green text-black mb-8 font-bold border-none">PROGRAMA DE CANAIS 2025</TechBadge>
                        <h1 className="text-5xl md:text-7xl font-bold font-space mb-8 leading-[0.95] tracking-tighter text-balance">
                            A Tecnologia é Nossa.<br />
                            A Marca é <span className="text-neon-green">Sua.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10 font-light text-balance">
                            Entregue valor real. Com o modelo <strong>White-Label</strong>, o cliente vê a SUA logo, o SEU domínio e paga o preço que VOCÊ definir.
                        </p>

                        <ul className="space-y-4 font-mono text-sm text-gray-300 mb-10">
                            <li className="flex items-center gap-3"><span className="text-neon-green">{'>>>'}</span> Infraestrutura gerenciada por nós.</li>
                            <li className="flex items-center gap-3"><span className="text-neon-green">{'>>>'}</span> Cobrança direta ao seu cliente.</li>
                            <li className="flex items-center gap-3"><span className="text-neon-green">{'>>>'}</span> Margem de lucro de 100% no setup.</li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Button variant="primary" className="px-12 py-5 text-lg shadow-[0_0_30px_rgba(27,252,79,0.3)]" onClick={onOpenForm}>
                                Quero ser Parceiro
                            </Button>
                        </div>
                    </div>

                    {/* Right: Whitelabel Visual Mockup */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-neon-green/20 blur-[100px] rounded-full pointer-events-none opacity-30"></div>
                        <div className="bg-[#0a0a0a] border border-gray-800 rounded-sm shadow-2xl p-2 relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="h-8 bg-[#111] flex items-center px-3 gap-2 border-b border-gray-800 mb-[-1px]">
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                                <div className="ml-4 w-48 h-4 bg-gray-800 rounded-full opacity-50"></div>
                            </div>
                            <div className="relative bg-[#111] overflow-hidden h-[400px]">
                                <img
                                    src={ASSETS.screenshots.dashboard2}
                                    alt="Dashboard"
                                    className="w-full h-full object-cover opacity-40 grayscale"
                                />
                                <div className="absolute top-6 left-6 z-20 animate-pulse-slow">
                                    <div className="bg-white text-black font-bold font-space uppercase tracking-widest px-4 py-2 text-sm border-l-4 border-neon-green shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                                        SUA AGÊNCIA
                                    </div>
                                </div>
                                <div className="absolute top-20 left-6 w-48 h-8 bg-gray-800 rounded-sm animate-pulse"></div>
                                <div className="absolute top-32 left-6 w-full h-px bg-gray-800"></div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-neon-green text-black px-6 py-3 rounded-sm font-mono font-bold text-xs shadow-lg border border-white">
                            SEU_DOMINIO.COM
                        </div>
                    </div>
                </div>
            </Container>
        </Section>

        {/* BUSINESS MODEL */}
        <Section className="bg-off-black py-24 md:py-32">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-balance">Escolha seu Modelo de Negócio</h2>
                    <p className="text-gray-500 text-balance">A diferença entre sobreviver e escalar.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                    <div className="p-8 rounded-sm border border-gray-800 bg-[#111] opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-2xl font-bold font-space text-gray-400">Modelo Tradicional</h3>
                            <span className="text-xs font-mono border border-red-500 text-red-500 px-2 py-1 rounded-sm uppercase">Risco Alto</span>
                        </div>
                        <ul className="space-y-6 mb-8">
                            <li className="flex items-center gap-4 text-gray-500">
                                <span className="text-red-500 font-mono">[-]</span> Venda de horas (limitado)
                            </li>
                            <li className="flex items-center gap-4 text-gray-500">
                                <span className="text-red-500 font-mono">[-]</span> Cliente é dono das ferramentas
                            </li>
                            <li className="flex items-center gap-4 text-gray-500">
                                <span className="text-red-500 font-mono">[-]</span> Churn alto se o ads falhar
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-gray-600 font-mono uppercase mb-1">LTV Médio</p>
                                    <p className="text-2xl font-bold text-gray-400">Baixo</p>
                                </div>
                                <div className="h-12 w-24 bg-gray-800 relative overflow-hidden rounded-sm">
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-sm border border-neon-green bg-[#080808] shadow-[0_0_40px_rgba(27,252,79,0.1)] transform md:-translate-y-4 relative">
                        <div className="absolute top-0 right-0 bg-neon-green text-black text-xs font-bold px-3 py-1 font-mono">RECOMENDADO</div>
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-2xl font-bold font-space text-white">Parceiro FUNNELS</h3>
                            <span className="text-xs font-mono border border-neon-green text-neon-green px-2 py-1 rounded-sm uppercase">Escalável</span>
                        </div>
                        <ul className="space-y-6 mb-8">
                            <li className="flex items-center gap-4 text-white">
                                <span className="text-neon-green font-mono">[+]</span> Receita Recorrente (MRR)
                            </li>
                            <li className="flex items-center gap-4 text-white">
                                <span className="text-neon-green font-mono">[+]</span> Você controla a tecnologia
                            </li>
                            <li className="flex items-center gap-4 text-white">
                                <span className="text-neon-green font-mono">[+]</span> Retenção por ecossistema
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-gray-500 font-mono uppercase mb-1">LTV Médio</p>
                                    <p className="text-2xl font-bold text-neon-green">Recorrente</p>
                                </div>
                                <div className="h-12 w-24 bg-gray-900 relative overflow-hidden rounded-sm flex items-end">
                                    <div className="w-1/3 h-[30%] bg-neon-green/30"></div>
                                    <div className="w-1/3 h-[60%] bg-neon-green/60"></div>
                                    <div className="w-1/3 h-[100%] bg-neon-green"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    </main>
);
