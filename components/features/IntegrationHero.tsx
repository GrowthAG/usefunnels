
import React, { useEffect, useState, useRef } from 'react';
import { ASSETS } from '../../constants';

interface IntegrationHeroProps {
    onBookDemo: () => void;
}

// Logos das ferramentas integradas
const INTEGRATIONS_ORBIT_1 = [
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg', angle: 0 },
    { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', angle: 60 },
    { name: 'WhatsApp', logo: 'https://cdn.worldvectorlogo.com/logos/whatsapp-business-bg.svg', angle: 120 },
    { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg', angle: 180 },
    { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg', angle: 240 },
    { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg', angle: 300 },
];

const INTEGRATIONS_ORBIT_2 = [
    { name: 'Facebook', logo: 'https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg', angle: 30 },
    { name: 'Instagram', logo: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg', angle: 90 },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', angle: 150 },
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-logo-1.svg', angle: 210 },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', angle: 270 },
    { name: 'Analytics', logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg', angle: 330 },
];

export const IntegrationHero: React.FC<IntegrationHeroProps> = ({ onBookDemo }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const targetCount = 12;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && count < targetCount) {
            const timer = setTimeout(() => {
                setCount((prev) => Math.min(prev + 1, targetCount));
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible, count]);

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-br from-white to-gray-50 py-20 md:py-28 relative overflow-hidden"
        >
            {/* Background decorativo */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(27,252,79,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* LADO ESQUERDO - Conteúdo */}
                    <div className="order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-ultra-light border border-neon-green/30 rounded-full text-sm font-semibold text-green-darker mb-6">
                            <span>🔗</span> Integração Total
                        </div>

                        {/* Título */}
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold font-space leading-[1.1] mb-6">
                            <span className="text-deep-black block">Todas as suas ferramentas.</span>
                            <span className="bg-gradient-to-r from-neon-green to-green-dark bg-clip-text text-transparent">
                                Um único sistema.
                            </span>
                        </h2>

                        {/* Descrição */}
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
                            Conecte CRM, automação, WhatsApp, e-mail e IA em uma plataforma centralizada.
                            Elimine custos de múltiplas ferramentas e ganhe produtividade real.
                        </p>

                        {/* Benefits Cards */}
                        <div className="flex flex-col gap-4 mb-10">
                            <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-neon-green/50 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
                                <span className="text-3xl flex-shrink-0">💰</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-deep-black mb-1">Economize até R$ 35.000/ano</h4>
                                    <p className="text-sm text-gray-500">Substitua 8+ ferramentas por uma</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-neon-green/50 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
                                <span className="text-3xl flex-shrink-0">⚡</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-deep-black mb-1">80% mais produtividade</h4>
                                    <p className="text-sm text-gray-500">Dados centralizados e sincronizados</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-neon-green/50 hover:shadow-lg hover:translate-x-1 transition-all duration-300">
                                <span className="text-3xl flex-shrink-0">🎯</span>
                                <div>
                                    <h4 className="text-lg font-semibold text-deep-black mb-1">Zero integrações quebradas</h4>
                                    <p className="text-sm text-gray-500">Tudo funciona nativamente</p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <button
                                onClick={onBookDemo}
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-black font-semibold rounded-lg hover:bg-green-dark transition-all duration-200 shadow-[0_2px_8px_rgba(27,252,79,0.3)] hover:shadow-[0_8px_24px_rgba(27,252,79,0.4)] hover:-translate-y-0.5 group"
                            >
                                Agendar Demo Gratuita
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </button>
                            <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-deep-black font-semibold border-2 border-gray-200 rounded-lg hover:border-neon-green hover:text-green-darker transition-all duration-200">
                                Ver Todas Integrações
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 -ml-3 first:ml-0 flex items-center justify-center text-xs font-medium"
                                        style={{
                                            backgroundImage: `url(https://i.pravatar.cc/40?img=${i + 10})`,
                                            backgroundSize: 'cover'
                                        }}
                                    />
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-neon-green -ml-3 flex items-center justify-center text-xs font-bold text-black">
                                    +847
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">
                                <strong className="text-deep-black">800+ empresas</strong> economizando com Funnels
                            </p>
                        </div>
                    </div>

                    {/* LADO DIREITO - Visualização "Sistema Solar" */}
                    <div className="order-1 lg:order-2 relative w-full h-[500px] lg:h-[600px]">

                        {/* Hub Central - Logo Funnels */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            {/* Glow effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[radial-gradient(circle,rgba(27,252,79,0.3)_0%,transparent_70%)] animate-pulse"></div>

                            {/* Pulse ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-neon-green rounded-2xl animate-[ping_2s_ease-out_infinite] opacity-50"></div>

                            {/* Logo container */}
                            <div className="relative w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_0_8px_rgba(27,252,79,0.1),0_8px_32px_rgba(0,0,0,0.1)]">
                                <img
                                    src={ASSETS.logoBlack}
                                    alt="Funnels"
                                    className="w-20 h-auto"
                                />
                            </div>
                        </div>

                        {/* Órbita 1 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[360px] md:h-[360px] border border-dashed border-neon-green/20 rounded-full animate-[spin_60s_linear_infinite]">
                            {INTEGRATIONS_ORBIT_1.map((tool, index) => (
                                <div
                                    key={tool.name}
                                    className="absolute top-1/2 left-1/2 w-14 h-14 md:w-16 md:h-16 group"
                                    style={{
                                        transform: `rotate(${tool.angle}deg) translateX(150px) md:translateX(180px) rotate(-${tool.angle}deg)`,
                                        transformOrigin: '0 0'
                                    }}
                                >
                                    <div
                                        className="w-full h-full bg-white rounded-xl border-2 border-gray-200 p-3 flex items-center justify-center hover:border-neon-green hover:scale-110 hover:shadow-[0_0_0_4px_rgba(27,252,79,0.1),0_8px_20px_rgba(27,252,79,0.2)] transition-all duration-300 cursor-pointer animate-[spin_60s_linear_infinite_reverse]"
                                    >
                                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                    </div>
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-neon-green px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                        {tool.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Órbita 2 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[500px] md:h-[500px] border border-dashed border-neon-green/10 rounded-full animate-[spin_80s_linear_infinite_reverse] hidden md:block">
                            {INTEGRATIONS_ORBIT_2.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="absolute top-1/2 left-1/2 w-12 h-12 md:w-14 md:h-14 group"
                                    style={{
                                        transform: `rotate(${tool.angle}deg) translateX(210px) md:translateX(250px) rotate(-${tool.angle}deg)`,
                                        transformOrigin: '0 0'
                                    }}
                                >
                                    <div
                                        className="w-full h-full bg-white rounded-xl border-2 border-gray-200 p-2.5 flex items-center justify-center hover:border-neon-green hover:scale-110 hover:shadow-[0_0_0_4px_rgba(27,252,79,0.1),0_8px_20px_rgba(27,252,79,0.2)] transition-all duration-300 cursor-pointer animate-[spin_80s_linear_infinite]"
                                    >
                                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                    </div>
                                    {/* Tooltip */}
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-neon-green px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                                        {tool.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contador de ferramentas */}
                        <div className="absolute bottom-8 right-8 bg-white p-5 rounded-2xl border-2 border-neon-green shadow-[0_8px_24px_rgba(27,252,79,0.2)] text-center">
                            <div className="text-4xl md:text-5xl font-bold text-neon-green leading-none mb-2">
                                {count}
                            </div>
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Ferramentas Unificadas
                            </div>
                        </div>

                        {/* Data particles */}
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-green rounded-full animate-[ping_4s_ease-in-out_infinite]"></div>
                        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-neon-green rounded-full animate-[ping_4s_ease-in-out_infinite_2s]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
