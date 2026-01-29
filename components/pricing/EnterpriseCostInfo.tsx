
import React from 'react';

/**
 * Enterprise Cost Information Component
 *
 * Substitui o accordion "Ver custos adicionais" no plano Enterprise
 * Mostra que os custos são negociáveis e customizados
 */

export const EnterpriseCostInfo: React.FC = () => {
    return (
        <div className="border border-gray-700 rounded-sm p-4 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-sm text-white uppercase tracking-wide">Modelo Customizado</h4>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2.5 text-xs text-gray-300">
                    <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Volumes negociáveis:</strong> Pacotes fechados de e-mails, WhatsApp e IA com desconto</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-300">
                    <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Preço fixo mensal:</strong> Pagamento único sem variação por uso (previsibilidade total)</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-300">
                    <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">SLA garantido:</strong> Infraestrutura dedicada incluída no contrato</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-gray-300">
                    <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong className="text-white">Onboarding completo:</strong> Setup personalizado e migração de dados inclusos</span>
                </li>
            </ul>

            {/* Example Pricing */}
            <div className="bg-black/50 border border-gray-800 rounded p-3 mb-4">
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Exemplo de Precificação</div>
                <div className="space-y-1.5 text-xs text-gray-300">
                    <div className="flex justify-between">
                        <span>200 usuários</span>
                        <span className="text-white">Inclusos</span>
                    </div>
                    <div className="flex justify-between">
                        <span>500k contatos</span>
                        <span className="text-white">Inclusos</span>
                    </div>
                    <div className="flex justify-between">
                        <span>100k e-mails/mês</span>
                        <span className="text-white">Inclusos</span>
                    </div>
                    <div className="flex justify-between">
                        <span>50k msgs WhatsApp/mês</span>
                        <span className="text-white">Inclusos</span>
                    </div>
                    <div className="flex justify-between">
                        <span>1.000 gerações IA/mês</span>
                        <span className="text-white">Inclusos</span>
                    </div>
                    <div className="border-t border-gray-800 mt-2 pt-2 flex justify-between font-bold">
                        <span className="text-white">Valor Fixo:</span>
                        <span className="text-neon-green">R$ 15.000/mês</span>
                    </div>
                </div>
            </div>

            {/* CTA Info */}
            <div className="text-center">
                <p className="text-[10px] text-gray-500 leading-relaxed">
                    Cada empresa tem necessidades únicas. <strong className="text-neon-green">Fale com nosso time</strong> para montar um pacote sob medida.
                </p>
            </div>
        </div>
    );
};
