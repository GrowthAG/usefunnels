
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Container, Section, Button, CornerBrackets, TechBadge } from '../components/ui';
import { FEATURES } from '../constants';

export const FeaturePage = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const { id } = useParams();
    // Find feature in the FEATURES array
    const feature = FEATURES.find(f => f.id === id);

    if (!feature) return <Navigate to="/" replace />;

    return (
        <main className="pt-[100px] bg-deep-black">
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

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button
                                    className="min-w-[200px] shadow-[0_0_30px_rgba(27,252,79,0.2)] py-4 hover:shadow-[0_0_50px_rgba(27,252,79,0.4)] border border-neon-green/50 hover:border-neon-green transition-all"
                                    onClick={() => window.location.href = '/#precos'}
                                >
                                    Testar Agora
                                </Button>
                                <Button
                                    variant="outline"
                                    className="min-w-[200px] py-4"
                                    onClick={onBookDemo}
                                >
                                    Agendar Demo
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
                                <div className="text-3xl mb-6 text-gray-200 group-hover:text-neon-green font-mono font-bold transition-colors">0{i + 1}</div>
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
