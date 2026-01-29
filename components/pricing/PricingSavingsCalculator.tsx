import React, { useState } from 'react';

export const PricingSavingsCalculator: React.FC = () => {
    const [teamSize, setTeamSize] = useState(5);
    const [contacts, setContacts] = useState(50000);
    const [emails, setEmails] = useState(10000);

    // Cálculo FUNNELS (Growth plan como base)
    const funnelsBase = 697; // Growth mensal
    const funnelsExtras = Math.max(0, (teamSize - 5) * 99); // Usuários extras
    const funnelsTotal = funnelsBase + funnelsExtras;

    // Cálculo Concorrentes (estimativa conservadora)
    const hubspotTotal = (teamSize * 450) + (contacts > 1000 ? 800 : 0);
    const activeCampaignTotal = (contacts > 25000 ? 900 : 500) + (teamSize * 50);
    const zapierTotal = 799 + (emails / 1000) * 20; // Estimativa de tarefas

    const totalSavings = Math.round((hubspotTotal + activeCampaignTotal + zapierTotal) - funnelsTotal);
    const yearlySavings = totalSavings * 12;

    const competitors = [
        {
            name: "HubSpot",
            cost: hubspotTotal,
            includes: "CRM + Marketing Hub",
            color: "bg-orange-500"
        },
        {
            name: "ActiveCampaign",
            cost: activeCampaignTotal,
            includes: "E-mail + Automação",
            color: "bg-blue-500"
        },
        {
            name: "Zapier",
            cost: zapierTotal,
            includes: "Integrações",
            color: "bg-purple-500"
        },
        {
            name: "FUNNELS",
            cost: funnelsTotal,
            includes: "Tudo incluído",
            color: "bg-neon-green",
            isHighlight: true
        }
    ];

    return (
        <div className="mt-24 mb-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
                    Calcule Quanto Você Pode Economizar
                </h2>
                <p className="text-gray-600 text-lg">
                    Compare o FUNNELS com múltiplas ferramentas separadas
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calculator Inputs */}
                    <div className="bg-white border border-gray-200 rounded-sm p-8">
                        <h3 className="font-bold text-xl mb-6 font-space">Configure Seu Cenário</h3>

                        <div className="space-y-6">
                            {/* Team Size */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="font-semibold text-gray-700">Tamanho da Equipe</label>
                                    <span className="text-2xl font-bold font-space text-neon-green">{teamSize}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={teamSize}
                                    onChange={(e) => setTeamSize(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-sm appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>1 usuário</span>
                                    <span>50 usuários</span>
                                </div>
                            </div>

                            {/* Contacts */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="font-semibold text-gray-700">Contatos no CRM</label>
                                    <span className="text-2xl font-bold font-space text-neon-green">
                                        {contacts.toLocaleString('pt-BR')}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="200000"
                                    step="1000"
                                    value={contacts}
                                    onChange={(e) => setContacts(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-sm appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>1.000</span>
                                    <span>200.000</span>
                                </div>
                            </div>

                            {/* Emails per Month */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <label className="font-semibold text-gray-700">E-mails/Automações por Mês</label>
                                    <span className="text-2xl font-bold font-space text-neon-green">
                                        {emails.toLocaleString('pt-BR')}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="100000"
                                    step="1000"
                                    value={emails}
                                    onChange={(e) => setEmails(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-sm appearance-none cursor-pointer accent-neon-green"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>1.000</span>
                                    <span>100.000</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-neon-green/10 border border-neon-green/30 rounded-sm">
                            <div className="text-center">
                                <div className="text-sm text-gray-600 mb-2">Economia Mensal Estimada</div>
                                <div className="text-4xl font-bold font-space text-neon-green mb-1">
                                    R$ {totalSavings.toLocaleString('pt-BR')}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Isso é <span className="font-bold">R$ {yearlySavings.toLocaleString('pt-BR')}</span> por ano!
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Chart */}
                    <div className="bg-white border border-gray-200 rounded-sm p-8">
                        <h3 className="font-bold text-xl mb-6 font-space">Comparação de Custos Mensais</h3>

                        <div className="space-y-4">
                            {competitors.map((comp, index) => (
                                <div key={index} className={comp.isHighlight ? 'order-last' : ''}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div>
                                            <div className={`font-bold ${comp.isHighlight ? 'text-lg' : ''}`}>
                                                {comp.name}
                                            </div>
                                            <div className="text-xs text-gray-500">{comp.includes}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`font-bold font-space ${comp.isHighlight ? 'text-2xl text-neon-green' : 'text-xl'}`}>
                                                R$ {comp.cost.toLocaleString('pt-BR')}
                                            </div>
                                            <div className="text-xs text-gray-500">/mês</div>
                                        </div>
                                    </div>

                                    {/* Visual Bar */}
                                    <div className="h-2 bg-gray-100 rounded-sm overflow-hidden">
                                        <div
                                            className={`h-full ${comp.color} transition-all duration-500`}
                                            style={{
                                                width: `${(comp.cost / (hubspotTotal + activeCampaignTotal + zapierTotal)) * 100}%`
                                            }}
                                        ></div>
                                    </div>

                                    {comp.isHighlight && (
                                        <div className="mt-2 text-center">
                                            <span className="inline-block px-3 py-1 bg-neon-green/20 text-neon-green text-xs font-bold uppercase tracking-wider rounded-sm">
                                                Economia de {Math.round((1 - (funnelsTotal / (hubspotTotal + activeCampaignTotal + zapierTotal))) * 100)}%
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-gray-50 rounded-sm border border-gray-200">
                            <div className="text-xs text-gray-600 leading-relaxed">
                                <strong>O que está incluso no FUNNELS:</strong>
                                <ul className="mt-2 space-y-1 list-disc list-inside">
                                    <li>CRM completo com pipeline visual</li>
                                    <li>E-mail marketing e automação</li>
                                    <li>WhatsApp Business API</li>
                                    <li>Construtor de páginas e funis</li>
                                    <li>Chatbot com IA</li>
                                    <li>Calendário e agendamentos</li>
                                    <li>Formulários e análises</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action CTA */}
                <div className="mt-8 text-center p-8 bg-deep-black text-white rounded-sm">
                    <h3 className="text-2xl font-bold mb-3 font-space">
                        Pronto para economizar R$ {yearlySavings.toLocaleString('pt-BR')}/ano?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Comece hoje mesmo com nosso plano Growth e substitua múltiplas ferramentas por uma única plataforma
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neon-green text-deep-black font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-wide text-sm"
                        >
                            Começar Agora
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-deep-black transition-all uppercase tracking-wide text-sm"
                        >
                            Agendar Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
