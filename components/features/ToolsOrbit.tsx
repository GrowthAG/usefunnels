import React from 'react';

export const ToolsOrbit: React.FC = () => {
    const tools = [
        { name: 'HubSpot', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2363ee02357ace3c.png' },
        { name: 'Salesforce', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbceae13a4258b1f172d.png' },
        { name: 'ActiveCampaign', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00ec79e22f48.png' },
        { name: 'Mailchimp', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcdb0b72168e6c40dbf.png' },
        { name: 'Twilio', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00b537e22f47.png' },
        { name: 'Zapier', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae56c108df.png' },
        { name: 'Intercom', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd416ab7253585e520.png' },
        { name: 'Zendesk', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae64c108e0.png' },
        { name: 'SendGrid', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976b0b7217384c3cee5.png' },
        { name: 'Stripe', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976b0b721476ac3cee6.png' },
        { name: 'Calendly', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976ce37bec6554c8ed1.png' },
        { name: 'Typeform', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bfce37be5a804c8377.png' },
        { name: 'Notion', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf2cc2619572c0b938.png' },
        { name: 'ClickUp', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf8e86ad17def2a515.png' },
        { name: 'Slack', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf06b06d505ec0c4ff.png' },
        { name: 'Google Analytics', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7fe2363ee44bb7a6f2a.png' },
        { name: 'Meta Ads', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7fe2cc261ce91c0a6ba.png' },
        { name: 'Google Ads', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7feb0b721bfbdc3ae55.png' },
        { name: 'WordPress', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7feae13a4f7af1eb903.png' },
        { name: 'Webflow', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b707b0b7213ee2c39d9e.png' },
        { name: 'Make', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b6c11c4c00da8fe1b8c6.png' },
        { name: 'n8n', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b6c106b06d91abc09814.png' },
        { name: 'Airtable', logo: 'https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b51db0b72160fdc359b3.png' },
    ];

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            {/* Central Logo */}
            <div className="relative z-20">
                <div className="w-32 h-32 bg-deep-black rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(27,252,79,0.3)] border-2 border-neon-green/30">
                    <span className="text-neon-green font-bold text-2xl font-space tracking-tight">FUNNELS</span>
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-neon-green/20 animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 rounded-full border border-neon-green/10 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </div>

            {/* Orbital Rings */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(0.5px)' }}>
                <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <circle cx="50%" cy="50%" r="280" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
            </svg>

            {/* Inner Orbit - 8 tools */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[360px] h-[360px] animate-[spin_40s_linear_infinite]">
                    {tools.slice(0, 8).map((tool, i) => {
                        const angle = (i * 360) / 8;
                        const radius = 180;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        return (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                            >
                                <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center p-2 hover:scale-110 transition-transform border border-gray-100 animate-[spin_40s_linear_infinite_reverse]">
                                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Outer Orbit - 15 tools */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[560px] h-[560px] animate-[spin_60s_linear_infinite_reverse]">
                    {tools.slice(8).map((tool, i) => {
                        const angle = (i * 360) / 15;
                        const radius = 280;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        return (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                }}
                            >
                                <div className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center p-1.5 hover:scale-110 transition-transform border border-gray-100 animate-[spin_60s_linear_infinite]">
                                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(27,252,79,0.05),_transparent_70%)] pointer-events-none"></div>
        </div>
    );
};
