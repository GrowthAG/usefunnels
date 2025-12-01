
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Container, Section, Reveal, Button, CornerBrackets, TechBadge, Modal } from '../components/UI';
import { ASSETS, FEATURES, BLOG_POSTS, LEGAL_CONTENT } from '../constants';

/* --- FEATURE DETAIL PAGE TEMPLATE --- */
export const FeaturePage = () => {
    const { id } = useParams();
    // Find feature in the FEATURES array
    const feature = FEATURES.find(f => f.id === id);

    if (!feature) return <Navigate to="/" replace />;

    return (
        <main className="pt-[100px]">
            {/* HERO */}
            <Section className="bg-off-black text-white border-b border-gray-800 min-h-[80vh] flex flex-col justify-center">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                             <Link 
                                to="/#features-grid" 
                                className="inline-flex items-center gap-3 mb-8 text-gray-400 hover:text-white transition-colors duration-300 group px-4 py-2 rounded-full border border-gray-700 hover:border-neon-green hover:bg-neon-green/10"
                             >
                                <span className="text-lg">←</span>
                                <span className="font-bold text-sm uppercase tracking-wide">Voltar</span>
                             </Link>
                             
                             <div className="block mb-6">
                                <TechBadge className="bg-neon-green text-black font-bold text-sm">{feature.title.toUpperCase()}</TechBadge>
                             </div>
                             
                             <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight text-balance">{feature.description}</h1>
                             <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed text-balance">
                                Potencialize sua operação com a ferramenta de {feature.title} mais completa do mercado. Totalmente integrada e pronta para escalar.
                             </p>
                             
                             <div className="flex flex-col sm:flex-row gap-4">
                                 <Button variant="primary" onClick={() => window.location.href = '/#precos'}>
                                    Testar Agora
                                 </Button>
                             </div>
                        </div>
                        <div className="order-1 lg:order-2 relative rounded-sm overflow-hidden border border-gray-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] group bg-[#111] p-2">
                             <div className="absolute top-0 left-0 w-full h-8 bg-[#1a1a1a] border-b border-gray-700 flex items-center px-3 gap-2 z-10">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                             </div>
                             <CornerBrackets className="text-neon-green z-20" />
                             <div className="mt-6 relative overflow-hidden rounded-sm">
                                <img src={feature.detailImage} alt={feature.title} className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700" />
                             </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* DEEP DIVE */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-space mb-4 text-deep-black text-balance">Tudo o que você precisa. Nada que você não precisa.</h2>
                        <p className="text-gray-500 text-balance">Funcionalidades nativas desenhadas para performance.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {feature.benefits.map((benefit, i) => (
                            <div key={i} className="p-8 border border-gray-200 hover:border-neon-green hover:shadow-xl transition-all bg-white rounded-sm group flex flex-col h-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-neon-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                <div className="text-3xl mb-6 text-gray-200 group-hover:text-neon-green font-mono font-bold transition-colors">0{i+1}</div>
                                <h3 className="text-xl font-bold font-space mb-3 group-hover:text-deep-black transition-colors text-balance">{benefit}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Funcionalidade nativa projetada para alta performance e conversão.</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FINAL CTA */}
            <Section className="bg-light-gray border-t border-gray-200">
                <Container className="text-center">
                    <h2 className="text-4xl font-bold font-space mb-8 text-balance">Pronto para dominar {feature.title}?</h2>
                    <Button variant="dark" onClick={() => window.location.href = '/#precos'} className="text-lg px-12 py-5">
                        Escolher meu Plano
                    </Button>
                </Container>
            </Section>
        </main>
    );
};

/* --- ABOUT PAGE --- */
export const About = () => (
    <main className="pt-[100px]">
        {/* HERO */}
        <Section className="bg-deep-black text-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden border-b border-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(27,252,79,0.08),_transparent_40%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-20"></div>
            
            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Copy */}
                    <Reveal>
                        <div>
                            <TechBadge className="bg-neon-green text-black mb-8 font-bold border-none px-4 py-1">MANIFESTO 2025</TechBadge>
                            
                            <h1 className="text-5xl md:text-7xl font-bold font-space mb-8 leading-[0.95] tracking-tighter text-white text-balance">
                                Complexidade <br/>drena lucro.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-green-700">Unificação gera escala.</span>
                            </h1>
                            
                            <div className="text-lg md:text-xl text-gray-400 leading-relaxed font-light space-y-6 max-w-md text-balance">
                                <p>
                                    O cenário era caótico. Empresas gastavam mais tempo conectando ferramentas (Zapier, CRM, Email) do que vendendo.
                                </p>
                                <p className="border-l-2 border-neon-green pl-4 text-white">
                                    O FUNNELS não nasceu para ser "mais um software". Nasceu para ser o <strong>Sistema Operacional Definitivo</strong> de quem quer crescer.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: Visual Proof (Dashboard) */}
                    <Reveal delay={200}>
                        <div className="relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-green/20 blur-[80px] rounded-full pointer-events-none"></div>
                            
                            <div className="bg-[#111] rounded-sm border border-gray-800 shadow-2xl overflow-hidden relative group transform hover:-translate-y-2 transition-transform duration-500">
                                {/* Window Header */}
                                <div className="h-8 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                                    <div className="flex-grow text-center text-[9px] font-mono text-gray-600">FUNNELS_OS_V3.0</div>
                                </div>
                                {/* Screen Content */}
                                <div className="relative">
                                    <img 
                                        src={ASSETS.screenshots.dashboard2} 
                                        alt="FUNNELS Dashboard" 
                                        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-50"></div>
                                </div>
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-neon-green text-black p-4 rounded-sm shadow-xl hidden md:block">
                                <div className="text-xs font-mono font-bold uppercase tracking-wider mb-1">Status</div>
                                <div className="text-xl font-space font-bold">100% Integrado</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* TIMELINE VISUAL */}
        <Section className="bg-off-black text-white py-24">
            <Container>
                <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 space-y-24">
                    <Reveal>
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-800 rounded-full border-4 border-off-black"></div>
                            <span className="font-mono text-gray-500 text-sm mb-2 block">2022</span>
                            <h3 className="text-3xl font-bold font-space mb-4 text-gray-300">A Frustração</h3>
                            <p className="text-gray-500 max-w-xl text-balance">
                                Agências e empresas pagando fortunas em 5, 6 ferramentas diferentes que mal funcionavam juntas. O custo de "setup" engolia o lucro.
                            </p>
                        </div>
                    </Reveal>
                    
                    <Reveal delay={100}>
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-600 rounded-full border-4 border-off-black"></div>
                            <span className="font-mono text-gray-500 text-sm mb-2 block">2023</span>
                            <h3 className="text-3xl font-bold font-space mb-4 text-white">A Construção</h3>
                            <p className="text-gray-400 max-w-xl text-balance">
                                Desenvolvemos o núcleo do FUNNELS. Não um "plugin", mas um Sistema Operacional de Crescimento completo. CRM nativo, Automação nativa.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[11px] top-0 w-6 h-6 bg-neon-green rounded-full border-4 border-off-black shadow-[0_0_20px_rgba(27,252,79,0.5)]"></div>
                            <span className="font-mono text-neon-green text-sm mb-2 block font-bold">HOJE</span>
                            <h3 className="text-4xl font-bold font-space mb-4 text-white">A Consolidação</h3>
                            <p className="text-lg text-gray-300 max-w-xl leading-relaxed text-balance">
                                Mais de 3.000 operações rodando. O padrão de mercado mudou. Quem não centraliza, fica para trás.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </Section>

        {/* DNA GRID */}
        <Section className="bg-white py-24 md:py-32">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                    <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
                        <span className="font-mono text-neon-green text-xl font-bold mb-6 block">01.</span>
                        <h3 className="text-2xl font-bold font-space mb-4 text-balance">Velocidade é Feature</h3>
                        <p className="text-gray-500 leading-relaxed text-sm text-balance">
                            Se uma tarefa leva 5 cliques, ela está errada. Construímos software para quem tem pressa.
                        </p>
                    </div>
                    <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
                        <span className="font-mono text-neon-green text-xl font-bold mb-6 block">02.</span>
                        <h3 className="text-2xl font-bold font-space mb-4 text-balance">Métricas Reais</h3>
                        <p className="text-gray-500 leading-relaxed text-sm text-balance">
                            Sem métricas de vaidade. Apenas custo, valor e retorno. O que não pode ser medido, não existe.
                        </p>
                    </div>
                    <div className="bg-white p-12 hover:bg-gray-50 transition-colors group">
                        <span className="font-mono text-neon-green text-xl font-bold mb-6 block">03.</span>
                        <h3 className="text-2xl font-bold font-space mb-4 text-balance">Tecnologia Invisível</h3>
                        <p className="text-gray-500 leading-relaxed text-sm text-balance">
                            A melhor automação é aquela que você esquece. Infraestrutura silenciosa para o seu império.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    </main>
);

/* --- PARTNERS PAGE --- */
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
                            A Tecnologia é Nossa.<br/>
                            A Marca é <span className="text-neon-green">Sua.</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10 font-light text-balance">
                            Entregue valor real. Com o modelo <strong>White-Label</strong>, o cliente vê a SUA logo, o SEU domínio e paga o preço que VOCÊ definir.
                        </p>
                        
                        <ul className="space-y-4 font-mono text-sm text-gray-300 mb-10">
                            <li className="flex items-center gap-3"><span className="text-neon-green">>>></span> Infraestrutura gerenciada por nós.</li>
                            <li className="flex items-center gap-3"><span className="text-neon-green">>>></span> Cobrança direta ao seu cliente.</li>
                            <li className="flex items-center gap-3"><span className="text-neon-green">>>></span> Margem de lucro de 100% no setup.</li>
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

/* --- ENTERPRISE PAGE --- */
export const Enterprise = () => (
    <main className="pt-[100px]">
        <Section className="bg-off-black text-white min-h-screen flex flex-col justify-center">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <TechBadge className="bg-neon-green text-black mb-6 border-none">ENTERPRISE</TechBadge>
                        <h1 className="text-5xl md:text-7xl font-bold font-space mb-8 leading-tight text-balance">
                            Escala Industrial.<br/>
                            Segurança Militar.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light text-balance">
                            Para grandes operações que exigem SLA garantido, infraestrutura isolada e suporte dedicado 24/7.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-6 mb-12">
                            {["SSO (Single Sign-On)", "Auditoria de Logs", "IP Dedicado", "Gerente de Conta", "API Ilimitada", "Whitelabel Total"].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm font-mono text-gray-300">
                                    <span className="text-neon-green">✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-sm overflow-hidden text-black shadow-[0_0_60px_rgba(27,252,79,0.1)]">
                         <iframe src="https://pages.usefunnels.io/widget/form/HboT9FNm8CBdjUoZ2ie5" style={{width:'100%', height:'600px', border:'none'}} title="Enterprise Form"></iframe>
                    </div>
                </div>
            </Container>
        </Section>
    </main>
);

/* --- BLOG PAGE --- */
export const Blog = () => (
    <main className="pt-[140px] min-h-screen bg-light-gray">
        <Container>
            <div className="text-center mb-16">
                <TechBadge className="bg-black text-white mb-4">CONHECIMENTO</TechBadge>
                <h1 className="text-5xl font-bold font-space mb-4 text-balance">Blog & Recursos</h1>
                <p className="text-gray-600 text-balance">Estratégias validadas de growth e vendas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                    <a 
                        key={post.id} 
                        href="https://usefunnels.io/blog" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-xl hover:border-neon-green transition-all group cursor-pointer flex flex-col h-full"
                    >
                        <div className="h-48 bg-gray-100 relative overflow-hidden">
                             <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                             <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase">{post.category}</div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold font-space mb-3 leading-tight group-hover:text-green-700 transition-colors text-balance">{post.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-deep-black uppercase mt-4 pt-4 border-t border-gray-100">
                                Ler Artigo <span className="text-neon-green transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Container>
    </main>
);

/* --- LEGAL PAGE (NEW) --- */
export const Legal = () => {
    const { type } = useParams();
    const doc = type === 'termos' ? LEGAL_CONTENT.termos : type === 'privacidade' ? LEGAL_CONTENT.privacidade : null;

    if (!doc) return <Navigate to="/" replace />;

    return (
        <main className="pt-[140px] min-h-screen bg-white text-deep-black">
            <Container className="max-w-4xl">
                <h1 className="text-4xl font-bold font-space mb-8 text-balance">{doc.title}</h1>
                <div className="prose prose-lg text-gray-600 font-inter max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: doc.content }} />
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 mb-20">
                    <Link to="/" className="text-neon-green font-bold font-mono hover:underline">← Voltar para Home</Link>
                </div>
            </Container>
        </main>
    );
};
