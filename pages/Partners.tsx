
import React from 'react';
import { Container, Section, Reveal, Button } from '../components/ui';
import { ASSETS } from '../constants';

export const Partners = ({ onBookDemo }: { onBookDemo: () => void }) => {

    const scrollToForm = () => {
        const formSection = document.getElementById('partner-form');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="overflow-hidden bg-deep-black">
            {/* HERO SECTION - Centered Standard Pattern */}
            <Section className="min-h-[70vh] flex flex-col justify-center bg-deep-black pt-[100px] md:pt-[120px] relative overflow-hidden border-b border-gray-900">
                {/* Volumetric Light Source (Radial Gradient) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,_rgba(27,252,79,0.12),_transparent_50%)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none"></div>

                <Container className="text-center relative z-10 px-4 md:px-12">
                    <Reveal>


                        {/* Headline - Standardized Size */}
                        <h1 className="text-white text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] mb-5 md:mb-6 leading-[1.1] md:leading-[0.95] font-space drop-shadow-2xl flex flex-col items-center">
                            <span className="block text-white">A Tecnologia é Nossa.</span>
                            <span className="block text-neon-green drop-shadow-[0_0_15px_rgba(27,252,79,0.3)]">A Marca é Sua.</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light font-space px-2 text-balance">
                            Entregue valor real. Com o modelo <strong className="text-white">White-Label</strong>, o cliente vê a SUA logo, o SEU domínio e paga o preço que VOCÊ definir.
                        </p>

                        {/* White-Label Visual */}
                        <div className="max-w-5xl mx-auto mb-8 md:mb-12">
                            <div className="relative shadow-2xl rounded-xl overflow-hidden border border-gray-800">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b82a204b05bc454517c8c.jpeg"
                                    alt="FUNNELS White-Label Dashboard"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                                {/* Bottom Glow */}
                                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-neon-green opacity-10 blur-[100px] pointer-events-none"></div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-0 px-2">
                            <Button className="w-full sm:w-auto min-w-[200px] shadow-[0_0_30px_rgba(27,252,79,0.2)] py-4 hover:shadow-[0_0_50px_rgba(27,252,79,0.4)] border border-neon-green/50 hover:border-neon-green transition-all duration-300" onClick={scrollToForm}>Quero Ser Parceiro</Button>
                            <Button variant="outline" className="w-full sm:w-auto min-w-[200px] py-4" onClick={onBookDemo}>Agendar Demo</Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            {/* HOW IT WORKS - White Section */}
            <Section className="bg-white py-16 md:py-20">
                <Container>
                    <Reveal>
                        <div className="text-center mb-12">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-3 block">Como Funciona</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">White-Label em 3 passos</h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Reveal delay={50}>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-neon-green text-2xl font-bold font-mono">01</span>
                                </div>
                                <h3 className="text-lg font-bold font-space mb-3 text-deep-black">Personalize</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Adicione sua logo, cores e domínio. O FUNNELS vira SUA plataforma.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={100}>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-neon-green text-2xl font-bold font-mono">02</span>
                                </div>
                                <h3 className="text-lg font-bold font-space mb-3 text-deep-black">Venda</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Defina seus preços e margens. Cobrança direta no cartão do seu cliente.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className="text-center p-6">
                                <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-neon-green text-2xl font-bold font-mono">03</span>
                                </div>
                                <h3 className="text-lg font-bold font-space mb-3 text-deep-black">Escale</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Nós cuidamos da infra, suporte técnico e atualizações. Você foca no cliente.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* BENEFITS - Gray Section */}
            <Section className="bg-gray-50 py-16 md:py-20">
                <Container>
                    <Reveal>
                        <div className="text-center mb-12">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-3 block">Vantagens</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-space text-deep-black text-balance">Por que ser Parceiro</h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <Reveal delay={50}>
                            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                                <span className="text-3xl mb-4 block">💰</span>
                                <h3 className="text-lg font-bold font-space mb-2 text-deep-black">100% Margem no Setup</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Cobre R$ 3.000, R$ 5.000 ou R$ 10.000 de implementação. Tudo seu.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={100}>
                            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                                <span className="text-3xl mb-4 block">🏷️</span>
                                <h3 className="text-lg font-bold font-space mb-2 text-deep-black">Sua Marca, Sua Regra</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Logo, cores, domínio, precificação. O cliente nunca sabe que é FUNNELS.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={150}>
                            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                                <span className="text-3xl mb-4 block">🔧</span>
                                <h3 className="text-lg font-bold font-space mb-2 text-deep-black">Nós Cuidamos da Infra</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Servidores, atualizações, segurança. Você foca no relacionamento.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={200}>
                            <div className="bg-white p-8 rounded-sm border border-gray-200 hover:border-neon-green/50 transition-all hover:shadow-lg">
                                <span className="text-3xl mb-4 block">📈</span>
                                <h3 className="text-lg font-bold font-space mb-2 text-deep-black">Receita Recorrente</h3>
                                <p className="text-gray-500 text-sm leading-relaxed text-balance">
                                    Cada cliente seu paga mensal. MRR crescendo sem limite.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>

            {/* CTA FORM - Dark Section */}
            <Section id="partner-form" className="bg-deep-black py-16 md:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(27,252,79,0.08),_transparent_50%)] pointer-events-none"></div>

                <Container className="relative z-10">
                    <Reveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-neon-green mb-3 block">Próximo Passo</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-space text-white mb-5 text-balance">
                                Pronto para escalar<br />
                                <span className="text-neon-green">com a sua marca?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 text-balance">
                                Agende uma conversa e descubra como o programa White-Label pode transformar sua agência.
                            </p>
                            <Button
                                className="min-w-[250px] shadow-[0_0_30px_rgba(27,252,79,0.2)] py-4 hover:shadow-[0_0_50px_rgba(27,252,79,0.4)] border border-neon-green/50 hover:border-neon-green transition-all duration-300"
                                onClick={onBookDemo}
                            >
                                Agendar Conversa →
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </Section>
        </main>
    );
};
