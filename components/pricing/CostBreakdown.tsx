
import React, { useState } from 'react';

interface CostItem {
    label: string;
    value: string;
    usdValue?: string;
    tooltip?: string;
    example?: string;
}

interface CostBreakdownProps {
    planName: string;
    hasWhatsApp: boolean;
    isDark?: boolean;
}

export const CostBreakdown: React.FC<CostBreakdownProps> = ({ planName, hasWhatsApp, isDark = false }) => {
    const [showTooltip, setShowTooltip] = useState<string | null>(null);

    // Conversão USD → BRL (cotação aproximada: 1 USD = 5.00 BRL)
    const convertToBRL = (usdValue: string): string => {
        const numericValue = parseFloat(usdValue.replace(/[^0-9.]/g, ''));
        const brlValue = numericValue * 5.0;
        return `R$ ${brlValue.toFixed(4)}`.replace('.', ',');
    };

    const commonCosts: CostItem[] = [
        {
            label: "Automações Avançadas",
            value: "R$ 0,0525",
            usdValue: "$0.0105",
            tooltip: "Fluxos com lógica condicional, loops e integrações complexas",
            example: "Ex: 100 execuções = R$ 5,25/mês"
        },
        {
            label: "Verificação de E-mail",
            value: "R$ 0,0131",
            usdValue: "$0.002625",
            tooltip: "Valida se e-mail existe antes de enviar (evita bounces)",
            example: "Ex: 1.000 verificações = R$ 13,10/mês"
        },
        {
            label: "Envio de E-mail",
            value: "R$ 0,0034",
            usdValue: "$0.000675",
            tooltip: "Custo por e-mail enviado via SMTP dedicado",
            example: "Ex: 10.000 envios = R$ 34/mês"
        },
        {
            label: "IA - Geração de Conteúdo",
            value: "R$ 0,4725",
            usdValue: "$0.0945",
            tooltip: "Textos, e-mails, posts gerados por IA (GPT-4)",
            example: "Ex: 30 gerações = R$ 14,18/mês"
        },
        {
            label: "IA - Automações Inteligentes",
            value: "R$ 0,1575",
            usdValue: "$0.0315",
            tooltip: "Fluxos que usam IA para decisões (classificação, roteamento)",
            example: "Ex: 50 execuções = R$ 7,88/mês"
        },
        {
            label: "IA - Chat/Assistente",
            value: "R$ 0,1050",
            usdValue: "$0.021",
            tooltip: "Mensagens processadas pelo chatbot IA",
            example: "Ex: 100 mensagens = R$ 10,50/mês"
        }
    ];

    const whatsappCosts = {
        monthly: { brl: "R$ 145", usd: "$29 USD" },
        perMessage: { brl: "R$ 0,04", usd: "$0.0080 USD" },
        tooltip: "Custos cobrados pela Meta (WhatsApp Business API)",
        example: "Ex: 5.000 msgs = R$ 145 + R$ 200 = R$ 345/mês"
    };

    return (
        <div className={`text-xs text-left ${isDark ? 'bg-[#151515] border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'} border p-4 shadow-xl rounded-sm`}>

            {/* WhatsApp Section */}
            {hasWhatsApp && (
                <div className={`mb-4 pb-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-2 font-bold mb-3 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span>WhatsApp Business API</span>
                        <button
                            onMouseEnter={() => setShowTooltip('whatsapp')}
                            onMouseLeave={() => setShowTooltip(null)}
                            className="relative ml-auto"
                        >
                            <svg className="w-3.5 h-3.5 opacity-50 hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            {showTooltip === 'whatsapp' && (
                                <div className="absolute bottom-full right-0 mb-2 w-56 bg-black text-white text-xs p-2 rounded shadow-lg z-50">
                                    {whatsappCosts.tooltip}
                                </div>
                            )}
                        </button>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="opacity-80">Custo Fixo Meta:</span>
                            <div className="text-right">
                                <span className="font-bold text-neon-green block">{whatsappCosts.monthly.brl}/mês</span>
                                <span className="text-[10px] opacity-60">{whatsappCosts.monthly.usd}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="opacity-80">Por Mensagem:</span>
                            <div className="text-right">
                                <span className="font-bold text-neon-green block">{whatsappCosts.perMessage.brl}</span>
                                <span className="text-[10px] opacity-60">{whatsappCosts.perMessage.usd}</span>
                            </div>
                        </div>
                        <div className={`mt-2 p-2 rounded text-[10px] ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                            <span className="opacity-70">{whatsappCosts.example}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Common Costs */}
            <div className="mb-2 font-bold text-xs uppercase tracking-wide opacity-70">Custos por Uso</div>
            <ul className="space-y-2.5">
                {commonCosts.map((item, idx) => (
                    <li key={idx} className="relative">
                        <div className="flex justify-between items-start gap-2">
                            <div className="flex-1">
                                <div className="flex items-center gap-1.5">
                                    <span className="opacity-90">{item.label}</span>
                                    {item.tooltip && (
                                        <button
                                            onMouseEnter={() => setShowTooltip(item.label)}
                                            onMouseLeave={() => setShowTooltip(null)}
                                            className="relative"
                                        >
                                            <svg className="w-3 h-3 opacity-40 hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            {showTooltip === item.label && (
                                                <div className="absolute bottom-full left-0 mb-2 w-56 bg-black text-white text-xs p-2 rounded shadow-lg z-50">
                                                    {item.tooltip}
                                                </div>
                                            )}
                                        </button>
                                    )}
                                </div>
                                {item.example && (
                                    <div className="text-[10px] opacity-60 mt-0.5">{item.example}</div>
                                )}
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-neon-green block">{item.value}</span>
                                {item.usdValue && (
                                    <span className="text-[10px] opacity-50">{item.usdValue}</span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Comparison Footer */}
            <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center gap-2 text-[10px]">
                    <svg className="w-3.5 h-3.5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="opacity-70">
                        Muito mais barato que Zapier (R$ 0,20/tarefa) ou Make (R$ 0,15/operação)
                    </span>
                </div>
            </div>
        </div>
    );
};
