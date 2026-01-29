import React, { useState, useEffect } from 'react';

export const ToolsOrbitHero: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    const tools = [
        { name: 'HubSpot', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2363ee02357ace3c.png' },
        { name: 'Salesforce', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbceae13a4258b1f172d.png' },
        { name: 'ActiveCampaign', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00ec79e22f48.png' },
        { name: 'Mailchimp', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcdb0b72168e6c40dbf.png' },
        { name: 'Twilio', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00b537e22f47.png' },
        { name: 'Zapier', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae56c108df.png' },
        { name: 'Intercom', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd416ab7253585e520.png' },
        { name: 'Zendesk', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae64c108e0.png' },
    ];

    return (
        <div className="relative w-full min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-white py-16">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

            {/* Gradient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(27,252,79,0.05),_transparent_70%)] pointer-events-none"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                {/* Headline - Centered at Top */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-space mb-6 leading-[1.1] tracking-tight">
                        <span className="block text-deep-black">Todas as suas ferramentas.</span>
                        <span className="block text-neon-green drop-shadow-[0_0_20px_rgba(27,252,79,0.3)]">Um único sistema.</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                        Conecte CRM, automação, WhatsApp, e-mail e IA em uma plataforma centralizada. Elimine custos de múltiplas ferramentas e ganhe produtividade real.
                    </p>
                </div>

                {/* Orbital Animation Container */}
                <div className="relative w-full h-[500px] flex items-center justify-center mb-16">
                    {/* Central Funnels Logo */}
                    <div
                        className="relative z-20"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className={`w-40 h-40 bg-deep-black rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(27,252,79,0.4)] border-4 border-neon-green/40 transition-all duration-500 ${isHovered ? 'scale-110 shadow-[0_0_120px_rgba(27,252,79,0.6)]' : 'scale-100'}`}>
                            <span className="text-neon-green font-bold text-3xl font-space tracking-tight">FUNNELS</span>
                        </div>

                        {/* Pulse Rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-neon-green/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute inset-0 rounded-full border border-neon-green/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                    </div>

                    {/* Orbital Ring Visual */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'blur(0.5px)' }}>
                        <circle cx="50%" cy="50%" r="220" fill="none" stroke="rgba(27,252,79,0.08)" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>

                    {/* Orbiting Tools */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${isHovered ? '' : 'animate-[spin_40s_linear_infinite]'}`}>
                        <div className="relative w-[440px] h-[440px]">
                            {tools.map((tool, i) => {
                                const angle = (i * 360) / tools.length;
                                const radius = 220;
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;

                                return (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
                                        style={{
                                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                        }}
                                    >
                                        {/* Connecting Line */}
                                        <svg className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" style={{ transformOrigin: 'center' }}>
                                            <line
                                                x1="110"
                                                y1="110"
                                                x2={110 - x}
                                                y2={110 - y}
                                                stroke="rgba(27,252,79,0.15)"
                                                strokeWidth="1.5"
                                                strokeDasharray="4 4"
                                                className="group-hover:stroke-[rgba(27,252,79,0.4)] transition-all"
                                            />
                                        </svg>

                                        <div className={`w-16 h-16 bg-white rounded-xl shadow-xl flex items-center justify-center p-3 border-2 border-gray-100 hover:border-neon-green/50 transition-all duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(27,252,79,0.3)] cursor-pointer ${isHovered ? '' : 'animate-[spin_40s_linear_infinite_reverse]'}`}>
                                            <img
                                                src={tool.logo}
                                                alt={tool.name}
                                                className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                            />
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-deep-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                            {tool.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Benefit Cards - Clean Minimalist Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-sm border border-gray-200/50 hover:border-gray-300 transition-all">
                        <h3 className="text-lg font-semibold font-space mb-1 text-deep-black">Economize até R$ 35.000/ano</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Substitua 8+ ferramentas por uma</p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-sm border border-gray-200/50 hover:border-gray-300 transition-all">
                        <h3 className="text-lg font-semibold font-space mb-1 text-deep-black">80% mais produtividade</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">Dados centralizados e sincronizados</p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <button className="px-8 py-4 bg-neon-green text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(27,252,79,0.4)] transition-all hover:scale-105 text-base min-w-[200px]">
                        Agendar Demo Gratuita →
                    </button>
                    <button className="px-8 py-4 bg-white text-deep-black font-bold rounded-lg border-2 border-gray-200 hover:border-neon-green/50 transition-all text-base min-w-[200px]">
                        Ver Todas Integrações
                    </button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center gap-3">
                    <div className="flex -space-x-2">
                        <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/150?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/150?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                        <img src="https://i.pravatar.cc/150?img=65" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                        <div className="w-10 h-10 rounded-full bg-neon-green border-2 border-white flex items-center justify-center text-xs font-bold text-deep-black">
                            +796
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                        <span className="font-bold text-deep-black">800+ empresas</span> economizando
                    </p>
                </div>
            </div>
        </div>
    );
};
