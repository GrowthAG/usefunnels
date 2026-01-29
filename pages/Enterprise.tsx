
import React from 'react';
import { Container, Section, TechBadge } from '../components/ui';

export const Enterprise = () => (
    <main className="pt-[100px]">
        <Section className="bg-off-black text-white min-h-[70vh] flex flex-col justify-center">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <TechBadge className="bg-neon-green text-black mb-5 border-none">ENTERPRISE</TechBadge>
                        <h1 className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold font-space mb-6 leading-[1.1] md:leading-[0.95] text-balance tracking-[-0.04em]">
                            Escala Industrial.<br />
                            Segurança Militar.
                        </h1>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light text-balance">
                            Para grandes operações que exigem SLA garantido, infraestrutura isolada e suporte dedicado 24/7.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {["SSO (Single Sign-On)", "Auditoria de Logs", "IP Dedicado", "Gerente de Conta", "API Ilimitada", "Whitelabel Total"].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm font-mono text-gray-300">
                                    <span className="text-neon-green">✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-sm overflow-hidden text-black shadow-[0_0_60px_rgba(27,252,79,0.1)]">
                        <iframe src="https://pages.usefunnels.io/widget/form/HboT9FNm8CBdjUoZ2ie5" style={{ width: '100%', height: '600px', border: 'none' }} title="Enterprise Form"></iframe>
                    </div>
                </div>
            </Container>
        </Section>
    </main>
);
