
import React, { useRef } from 'react';
import { ASSETS } from '../../constants';

interface IntegrationHeroProps {
    onBookDemo: () => void;
}

// All tool logos provided
const ALL_TOOLS = [
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2363ee02357ace3c.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbceae13a4258b1f172d.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00ec79e22f48.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcdb0b72168e6c40dbf.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00b537e22f47.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae56c108df.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd416ab7253585e520.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae64c108e0.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976b0b7217384c3cee5.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976b0b721476ac3cee6.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976ce37bec6554c8ed1.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bfce37be5a804c8377.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf2cc2619572c0b938.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf8e86ad17def2a515.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf06b06d505ec0c4ff.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7fe2363ee44bb7a6f2a.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7fe2cc261ce91c0a6ba.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7feb0b721bfbdc3ae55.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7feae13a4f7af1eb903.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b707b0b7213ee2c39d9e.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b6c11c4c00da8fe1b8c6.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b6c106b06d91abc09814.png',
    'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b51db0b72160fdc359b3.png'
];

// Distribute logos into orbits
const ORBIT_1 = ALL_TOOLS.slice(0, 6).map((logo, i) => ({ logo, angle: i * (360 / 6) }));
const ORBIT_2 = ALL_TOOLS.slice(6, 14).map((logo, i) => ({ logo, angle: i * (360 / 8) }));
const ORBIT_3 = ALL_TOOLS.slice(14).map((logo, i) => ({ logo, angle: i * (360 / 9) }));

// Avatares para social proof
const AVATARS = [
    'https://i.pravatar.cc/80?img=11',
    'https://i.pravatar.cc/80?img=12',
    'https://i.pravatar.cc/80?img=13',
];

export const IntegrationHero: React.FC<IntegrationHeroProps> = ({ onBookDemo }) => {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <>
            {/* CSS Animations - SINGULARITY EFFECTS */}
            <style>{`
                @keyframes pulse-core {
                    0%, 100% {
                        transform: translate(-50%, -50%) scale(1);
                        box-shadow: 0 0 50px rgba(132, 255, 11, 0.2);
                    }
                    50% {
                        transform: translate(-50%, -50%) scale(1.05);
                        box-shadow: 0 0 80px rgba(132, 255, 11, 0.4);
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

                @keyframes rotate-orbit-3 {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                .orbit-1-container {
                    animation: rotate-orbit-1 60s linear infinite;
                }
                
                .orbit-2-container {
                    animation: rotate-orbit-2 90s linear infinite;
                }

                .orbit-3-container {
                    animation: rotate-orbit-3 120s linear infinite;
                }
                
                .tool-node-1 { animation: rotate-orbit-1 60s linear infinite reverse; }
                .tool-node-2 { animation: rotate-orbit-2 90s linear infinite reverse; }
                .tool-node-3 { animation: rotate-orbit-3 120s linear infinite reverse; }
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
                {/* Visual Grid Background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'radial-gradient(circle at 75% 50%, rgba(132, 255, 11, 0.05) 0%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                {/* Grid Container -> Now Flex Container for Centered Layout */}
                <div
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '60px',
                        position: 'relative',
                        zIndex: 1
                    }}
                    className="hero-grid"
                >
                    {/* ============================================ */}
                    {/* CONTEÚDO CENTRALIZADO */}
                    {/* ============================================ */}
                    <div className="hero-content" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
                                maxWidth: '600px',
                            }}
                        >
                            Conecte CRM, automação, WhatsApp, e-mail e IA em uma plataforma
                            centralizada. Elimine custos de múltiplas ferramentas e ganhe
                            produtividade real.
                        </p>

                        {/* VISUALIZAÇÃO SINGULARIDADE - Centralizada */}
                        <div
                            className="integration-visual"
                            style={{
                                position: 'relative',
                                width: '600px',
                                height: '600px',
                                margin: '0 auto 60px auto',
                                overflow: 'visible'
                            }}
                        >
                            {/* HUB CENTRAL (Funnels) */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 50,
                                    animation: 'pulse-core 4s ease-in-out infinite'
                                }}
                            >
                                {/* Logo Box */}
                                <div
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        background: '#050505',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '2px solid #84FF0B',
                                        boxShadow: '0 0 60px rgba(132, 255, 11, 0.3)'
                                    }}
                                >
                                    <img
                                        src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/6942ede10190af58ee895209.png"
                                        alt="Funnels"
                                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                                    />
                                </div>
                            </div>

                            {/* ÓRBITA 1 (Inner) */}
                            <div className="orbit-1-container" style={{ ...orbitContainerStyle, width: '260px', height: '260px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                {ORBIT_1.map((tool) => (
                                    <OrbitNode key={tool.logo} tool={tool} radius={130} className="tool-node-1" size={48} />
                                ))}
                            </div>

                            {/* ÓRBITA 2 (Middle) */}
                            <div className="orbit-2-container" style={{ ...orbitContainerStyle, width: '400px', height: '400px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                {ORBIT_2.map((tool) => (
                                    <OrbitNode key={tool.logo} tool={tool} radius={200} className="tool-node-2" size={40} />
                                ))}
                            </div>

                            {/* ÓRBITA 3 (Outer) */}
                            <div className="orbit-3-container" style={{ ...orbitContainerStyle, width: '540px', height: '540px', border: '1px solid rgba(0,0,0,0.05)' }}>
                                {ORBIT_3.map((tool) => (
                                    <OrbitNode key={tool.logo} tool={tool} radius={270} className="tool-node-3" size={32} opacity={0.8} />
                                ))}
                            </div>
                        </div>

                        {/* 4. Cards de Benefícios - Horizontal para centralizado */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                gap: '24px',
                                marginBottom: '48px',
                                width: '100%',
                            }}
                        >
                            {/* Card 1 */}
                            <div className="benefit-card" style={{ ...benefitCardStyle, textAlign: 'left' }}>
                                <span style={{ fontSize: '24px', flexShrink: 0, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F5F5', borderRadius: '8px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </span>
                                <div>
                                    <h4 style={benefitTitleStyle}>Economize até R$ 35.000/ano</h4>
                                    <p style={benefitDescStyle}>Substitua 8+ ferramentas por uma</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="benefit-card" style={{ ...benefitCardStyle, textAlign: 'left' }}>
                                <span style={{ fontSize: '24px', flexShrink: 0, width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F5F5F5', borderRadius: '8px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                    </svg>
                                </span>
                                <div>
                                    <h4 style={benefitTitleStyle}>80% mais produtividade</h4>
                                    <p style={benefitDescStyle}>Dados centralizados e sincronizados</p>
                                </div>
                            </div>
                        </div>



                        {/* 5. Botões de CTA */}
                        <div
                            style={{
                                display: 'flex',
                                gap: '16px',
                                marginBottom: '40px',
                                justifyContent: 'center',
                                flexWrap: 'wrap'
                            }}
                            className="cta-buttons"
                        >
                            <button onClick={onBookDemo} className="btn-primary-integration" style={btnPrimaryStyle}>
                                <span>Agendar Demo Gratuita</span>
                                <span className="btn-arrow" style={{ transition: 'transform 200ms ease' }}>→</span>
                            </button>

                            <button style={btnSecondaryStyle}>
                                Ver Todas Integrações
                            </button>
                        </div>

                        {/* 6. Social Proof */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {AVATARS.map((avatar, i) => (
                                    <img key={i} src={avatar} alt="" style={{ ...avatarStyle, marginLeft: i === 0 ? 0 : '-12px' }} />
                                ))}
                                <span style={{ ...avatarStyle, background: '#84FF0B', color: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, marginLeft: '-12px' }}>
                                    +847
                                </span>
                            </div>
                            <p style={{ fontSize: '14px', color: '#525252', margin: 0 }}>
                                <strong style={{ color: '#171717', fontWeight: 600 }}>800+ empresas</strong> economizando
                            </p>
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
                            transform: scale(0.8);
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .hero-content h2 {
                            font-size: 40px !important;
                        }
                        .integration-visual {
                            transform: scale(0.55);
                            margin-top: -80px !important;
                            margin-bottom: -80px !important;
                        }
                        .cta-buttons {
                            flex-direction: column !important;
                        }
                        .cta-buttons button {
                            width: 100% !important;
                        }
                    }
                `}</style>
            </section >
        </>
    );
};

// Helper Components & Styles to clean up render

const OrbitNode = ({ tool, radius, className, size, opacity = 1 }: any) => (
    <div
        className={className}
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${tool.angle}deg) translateX(${radius}px) rotate(-${tool.angle}deg)`,
            transformOrigin: '0 0',
            marginTop: `-${size / 2}px`,
            marginLeft: `-${size / 2}px`,
            opacity: opacity
        }}
    >
        <div style={{
            width: '100%',
            height: '100%',
            background: '#FFFFFF',
            borderRadius: '50%',
            padding: '6px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #F0F0F0'
        }}>
            <img src={tool.logo} alt="Tool" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
    </div>
);

// Styles
const benefitCardStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '16px',
    padding: '20px', background: '#FFFFFF', border: '1px solid #E5E5E5', borderRadius: '12px',
    transition: 'all 300ms ease', cursor: 'default',
};
const benefitTitleStyle: React.CSSProperties = { fontSize: '18px', fontWeight: 600, color: '#171717', margin: '0 0 4px 0', lineHeight: 1.3 };
const benefitDescStyle: React.CSSProperties = { fontSize: '14px', color: '#737373', margin: 0, lineHeight: 1.5 };

const btnPrimaryStyle: React.CSSProperties = {
    background: '#84FF0B', color: '#000000', padding: '18px 32px', border: 'none', borderRadius: '8px',
    fontSize: '16px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
    transition: 'all 200ms ease', boxShadow: '0 2px 8px rgba(132, 255, 11, 0.2)',
};

const btnSecondaryStyle: React.CSSProperties = {
    background: 'transparent', color: '#171717', padding: '18px 32px', border: '2px solid #E5E5E5',
    borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 200ms ease',
};

const avatarStyle: React.CSSProperties = {
    width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #FFFFFF', objectFit: 'cover',
};

const orbitContainerStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%',
};
