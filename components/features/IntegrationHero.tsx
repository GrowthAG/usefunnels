
import React, { useEffect, useState, useRef } from 'react';
import { ASSETS } from '../../constants';

interface IntegrationHeroProps {
    onBookDemo: () => void;
}

// Ferramentas da Órbita 1 (mais próxima - 6 ferramentas)
const ORBIT_1_TOOLS = [
    { name: 'Google Ads', logo: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg', angle: 0 },
    { name: 'Mailchimp', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', angle: 60 },
    { name: 'WhatsApp', logo: 'https://cdn.worldvectorlogo.com/logos/whatsapp-business-bg.svg', angle: 120 },
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier-1.svg', angle: 180 },
    { name: 'WordPress', logo: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg', angle: 240 },
    { name: 'Stripe', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg', angle: 300 },
];

// Ferramentas da Órbita 2 (mais distante - 6 ferramentas)
const ORBIT_2_TOOLS = [
    { name: 'Facebook', logo: 'https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg', angle: 30 },
    { name: 'Instagram', logo: 'https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg', angle: 90 },
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', angle: 150 },
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-logo-1.svg', angle: 210 },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', angle: 270 },
    { name: 'Analytics', logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg', angle: 330 },
];

// Avatares para social proof
const AVATARS = [
    'https://i.pravatar.cc/80?img=11',
    'https://i.pravatar.cc/80?img=12',
    'https://i.pravatar.cc/80?img=13',
];

export const IntegrationHero: React.FC<IntegrationHeroProps> = ({ onBookDemo }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const targetCount = 12;

    // Intersection Observer para animar contador
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

    // Animação do contador
    useEffect(() => {
        if (isVisible && count < targetCount) {
            const timer = setTimeout(() => {
                setCount((prev) => Math.min(prev + 1, targetCount));
            }, 80);
            return () => clearTimeout(timer);
        }
    }, [isVisible, count]);

    return (
        <>
            {/* CSS Animations */}
            <style>{`
                @keyframes pulse-glow {
                    0%, 100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 0.6;
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.15);
                        opacity: 1;
                    }
                }
                
                @keyframes pulse-ring {
                    0% {
                        width: 140px;
                        height: 140px;
                        opacity: 1;
                    }
                    100% {
                        width: 340px;
                        height: 340px;
                        opacity: 0;
                        border-width: 1px;
                    }
                }
                
                @keyframes rotate-orbit-1 {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                @keyframes rotate-orbit-2 {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(-360deg); }
                }
                
                .orbit-1-container {
                    animation: rotate-orbit-1 60s linear infinite;
                }
                
                .orbit-2-container {
                    animation: rotate-orbit-2 80s linear infinite;
                }
                
                .tool-node-1 {
                    animation: rotate-orbit-1 60s linear infinite reverse;
                }
                
                .tool-node-2 {
                    animation: rotate-orbit-2 80s linear infinite reverse;
                }
            `}</style>

            <section
                ref={sectionRef}
                style={{
                    background: '#FFFFFF',
                    padding: '120px 24px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Grid Container */}
                <div
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '45% 55%',
                        gap: '80px',
                        alignItems: 'center',
                    }}
                    className="hero-grid"
                >
                    {/* ============================================ */}
                    {/* COLUNA ESQUERDA - Conteúdo */}
                    {/* ============================================ */}
                    <div className="hero-content">

                        {/* 1. Badge */}
                        <div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'rgba(132, 255, 11, 0.1)',
                                border: '1px solid rgba(132, 255, 11, 0.3)',
                                borderRadius: '100px',
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#5AB906',
                                marginBottom: '24px',
                            }}
                        >
                            <span>🔗</span>
                            <span>Integração Total</span>
                        </div>

                        {/* 2. Título Principal */}
                        <h2
                            style={{
                                fontSize: '56px',
                                fontWeight: 700,
                                lineHeight: 1.1,
                                marginBottom: '24px',
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                            }}
                        >
                            <span style={{ display: 'block', color: '#000000' }}>
                                Todas as suas ferramentas.
                            </span>
                            <span style={{ display: 'block', color: '#84FF0B' }}>
                                Um único sistema.
                            </span>
                        </h2>

                        {/* 3. Descrição */}
                        <p
                            style={{
                                fontSize: '18px',
                                lineHeight: 1.6,
                                color: '#525252',
                                marginBottom: '48px',
                                maxWidth: '540px',
                            }}
                        >
                            Conecte CRM, automação, WhatsApp, e-mail e IA em uma plataforma
                            centralizada. Elimine custos de múltiplas ferramentas e ganhe
                            produtividade real.
                        </p>

                        {/* 4. Cards de Benefícios (EMPILHADOS VERTICALMENTE) */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                marginBottom: '48px',
                                width: '100%',
                            }}
                        >
                            {/* Card 1 */}
                            <div
                                className="benefit-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    padding: '20px',
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E5E5',
                                    borderRadius: '12px',
                                    transition: 'all 300ms ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#84FF0B';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 255, 11, 0.15)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#E5E5E5';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <span style={{ fontSize: '32px', flexShrink: 0, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>💰</span>
                                <div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#171717', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                                        Economize até R$ 35.000/ano
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#737373', margin: 0, lineHeight: 1.5 }}>
                                        Substitua 8+ ferramentas por uma
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="benefit-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    padding: '20px',
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E5E5',
                                    borderRadius: '12px',
                                    transition: 'all 300ms ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#84FF0B';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 255, 11, 0.15)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#E5E5E5';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <span style={{ fontSize: '32px', flexShrink: 0, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>⚡</span>
                                <div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#171717', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                                        80% mais produtividade
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#737373', margin: 0, lineHeight: 1.5 }}>
                                        Dados centralizados e sincronizados
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="benefit-card"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    padding: '20px',
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E5E5',
                                    borderRadius: '12px',
                                    transition: 'all 300ms ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#84FF0B';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(132, 255, 11, 0.15)';
                                    e.currentTarget.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#E5E5E5';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateX(0)';
                                }}
                            >
                                <span style={{ fontSize: '32px', flexShrink: 0, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎯</span>
                                <div>
                                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#171717', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                                        Zero integrações quebradas
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#737373', margin: 0, lineHeight: 1.5 }}>
                                        Tudo funciona nativamente
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Botões de CTA */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '16px',
                                marginBottom: '40px',
                            }}
                            className="cta-buttons"
                        >
                            <button
                                onClick={onBookDemo}
                                className="btn-primary-integration"
                                style={{
                                    background: '#84FF0B',
                                    color: '#000000',
                                    padding: '18px 32px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 200ms ease',
                                    boxShadow: '0 2px 8px rgba(132, 255, 11, 0.2)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#6FD908';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(132, 255, 11, 0.3)';
                                    const arrow = e.currentTarget.querySelector('.btn-arrow') as HTMLElement;
                                    if (arrow) arrow.style.transform = 'translateX(4px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#84FF0B';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(132, 255, 11, 0.2)';
                                    const arrow = e.currentTarget.querySelector('.btn-arrow') as HTMLElement;
                                    if (arrow) arrow.style.transform = 'translateX(0)';
                                }}
                            >
                                <span>Agendar Demo Gratuita</span>
                                <span className="btn-arrow" style={{ transition: 'transform 200ms ease' }}>→</span>
                            </button>

                            <button
                                style={{
                                    background: 'transparent',
                                    color: '#171717',
                                    padding: '18px 32px',
                                    border: '2px solid #E5E5E5',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 200ms ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#84FF0B';
                                    e.currentTarget.style.color = '#5AB906';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#E5E5E5';
                                    e.currentTarget.style.color = '#171717';
                                }}
                            >
                                Ver Todas Integrações
                            </button>
                        </div>

                        {/* 6. Social Proof */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {AVATARS.map((avatar, i) => (
                                    <img
                                        key={i}
                                        src={avatar}
                                        alt=""
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            border: '2px solid #FFFFFF',
                                            marginLeft: i === 0 ? 0 : '-12px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                ))}
                                <span
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: '#84FF0B',
                                        color: '#000000',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        marginLeft: '-12px',
                                        border: '2px solid #FFFFFF',
                                    }}
                                >
                                    +847
                                </span>
                            </div>
                            <p style={{ fontSize: '14px', color: '#525252', margin: 0 }}>
                                <strong style={{ color: '#171717', fontWeight: 600 }}>800+ empresas</strong> economizando com Funnels
                            </p>
                        </div>
                    </div>

                    {/* ============================================ */}
                    {/* COLUNA DIREITA - Visualização "Sistema Solar" */}
                    {/* ============================================ */}
                    <div
                        className="integration-visual"
                        style={{
                            position: 'relative',
                            width: '600px',
                            height: '600px',
                            margin: '0 auto',
                        }}
                    >
                        {/* HUB CENTRAL (Funnels) */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 10,
                            }}
                        >
                            {/* Glow Effect */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '240px',
                                    height: '240px',
                                    background: 'radial-gradient(circle, rgba(132, 255, 11, 0.4) 0%, rgba(132, 255, 11, 0.2) 40%, transparent 70%)',
                                    animation: 'pulse-glow 3s ease-in-out infinite',
                                    zIndex: 1,
                                }}
                            />

                            {/* Pulse Ring */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '140px',
                                    height: '140px',
                                    border: '3px solid #84FF0B',
                                    borderRadius: '24px',
                                    animation: 'pulse-ring 2.5s ease-out infinite',
                                    zIndex: 0,
                                }}
                            />

                            {/* Logo Box */}
                            <div
                                style={{
                                    position: 'relative',
                                    width: '140px',
                                    height: '140px',
                                    background: '#FFFFFF',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 0 12px rgba(132, 255, 11, 0.15), 0 12px 40px rgba(0, 0, 0, 0.12)',
                                    zIndex: 2,
                                }}
                            >
                                <img
                                    src={ASSETS.logoBlack}
                                    alt="Funnels"
                                    style={{ width: '100px', height: 'auto' }}
                                />
                            </div>
                        </div>

                        {/* ÓRBITA 1 (mais próxima) */}
                        <div
                            className="orbit-1-container"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '400px',
                                height: '400px',
                                borderRadius: '50%',
                                border: '2px dashed rgba(132, 255, 11, 0.25)',
                            }}
                        >
                            {ORBIT_1_TOOLS.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="tool-node-1"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '72px',
                                        height: '72px',
                                        transform: `rotate(${tool.angle}deg) translateX(200px) rotate(-${tool.angle}deg)`,
                                        transformOrigin: '0 0',
                                        marginTop: '-36px',
                                        marginLeft: '-36px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '14px',
                                            background: '#FFFFFF',
                                            border: '2px solid #E5E5E5',
                                            borderRadius: '16px',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                                            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#84FF0B';
                                            e.currentTarget.style.transform = 'scale(1.2)';
                                            e.currentTarget.style.boxShadow = '0 0 0 6px rgba(132, 255, 11, 0.15), 0 12px 28px rgba(132, 255, 11, 0.25)';
                                            e.currentTarget.style.zIndex = '100';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#E5E5E5';
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
                                            e.currentTarget.style.zIndex = 'auto';
                                        }}
                                        title={tool.name}
                                    >
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ÓRBITA 2 (mais distante) */}
                        <div
                            className="orbit-2-container"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '540px',
                                height: '540px',
                                borderRadius: '50%',
                                border: '2px dotted rgba(132, 255, 11, 0.15)',
                            }}
                        >
                            {ORBIT_2_TOOLS.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="tool-node-2"
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        width: '64px',
                                        height: '64px',
                                        transform: `rotate(${tool.angle}deg) translateX(270px) rotate(-${tool.angle}deg)`,
                                        transformOrigin: '0 0',
                                        marginTop: '-32px',
                                        marginLeft: '-32px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '12px',
                                            background: '#FFFFFF',
                                            border: '2px solid #E5E5E5',
                                            borderRadius: '14px',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                                            transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#84FF0B';
                                            e.currentTarget.style.transform = 'scale(1.2)';
                                            e.currentTarget.style.boxShadow = '0 0 0 6px rgba(132, 255, 11, 0.15), 0 12px 28px rgba(132, 255, 11, 0.25)';
                                            e.currentTarget.style.zIndex = '100';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#E5E5E5';
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
                                            e.currentTarget.style.zIndex = 'auto';
                                        }}
                                        title={tool.name}
                                    >
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CONTADOR */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: '#FFFFFF',
                                padding: '24px 32px',
                                borderRadius: '16px',
                                border: '3px solid #84FF0B',
                                boxShadow: '0 0 0 8px rgba(132, 255, 11, 0.1), 0 12px 32px rgba(132, 255, 11, 0.25)',
                                textAlign: 'center',
                                zIndex: 20,
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '56px',
                                    fontWeight: 700,
                                    color: '#84FF0B',
                                    lineHeight: 1,
                                    marginBottom: '8px',
                                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                                }}
                            >
                                {count}
                            </div>
                            <div
                                style={{
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    color: '#525252',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.8px',
                                    lineHeight: 1.3,
                                }}
                            >
                                Ferramentas Unificadas
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive Styles */}
                <style>{`
                    @media (max-width: 1024px) {
                        .hero-grid {
                            grid-template-columns: 1fr !important;
                            gap: 60px !important;
                        }
                        .hero-content {
                            max-width: 100%;
                            text-align: center;
                        }
                        .hero-content > div:not(.cta-buttons) {
                            justify-content: center;
                        }
                        .cta-buttons {
                            justify-content: center !important;
                        }
                        .integration-visual {
                            width: 500px !important;
                            height: 500px !important;
                        }
                        .orbit-1-container {
                            width: 340px !important;
                            height: 340px !important;
                        }
                        .orbit-2-container {
                            width: 460px !important;
                            height: 460px !important;
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .hero-content h2 {
                            font-size: 40px !important;
                        }
                        .hero-content p {
                            font-size: 16px !important;
                        }
                        .benefit-card {
                            padding: 16px !important;
                        }
                        .cta-buttons {
                            flex-direction: column !important;
                            width: 100% !important;
                        }
                        .cta-buttons button {
                            width: 100% !important;
                            justify-content: center !important;
                        }
                        .integration-visual {
                            width: 100% !important;
                            max-width: 380px !important;
                            height: 380px !important;
                        }
                        .orbit-1-container {
                            width: 260px !important;
                            height: 260px !important;
                        }
                        .orbit-2-container {
                            width: 340px !important;
                            height: 340px !important;
                        }
                        .tool-node-1, .tool-node-2 {
                            width: 56px !important;
                            height: 56px !important;
                        }
                    }
                `}</style>
            </section>
        </>
    );
};
