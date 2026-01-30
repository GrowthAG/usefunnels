
import React from 'react';
import { ASSETS } from '../../constants';

interface BridgePageProps {
    planName: string;
    price: string;
    isAnnual: boolean;
    savings?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export const BridgePage: React.FC<BridgePageProps> = ({
    planName,
    price,
    isAnnual,
    savings,
    onConfirm,
    onCancel
}) => {
    return (
        <div className="relative z-[201] w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-up border border-gray-100">
            {/* Header */}
            <div className="bg-deep-black px-8 py-6 text-center border-b border-gray-800">
                <img src={ASSETS.logoWhite} alt="Funnels" className="h-6 mx-auto mb-4" />
                <h2 className="text-white font-space text-lg md:text-xl font-bold">
                    Último passo para escalar suas vendas
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                        Ambiente Seguro
                    </span>
                </div>
            </div>

            <div className="p-8">
                {/* Plan Summary Box */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1 block">
                                Plano Selecionado
                            </span>
                            <div className="font-bold font-space text-2xl text-deep-black">
                                {planName}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-xl text-deep-black">R$ {price}</div>
                            <div className="text-xs text-gray-500">{isAnnual ? '/ano' : '/mês'}</div>
                        </div>
                    </div>

                    {isAnnual && savings && (
                        <div className="bg-neon-green/10 text-neon-green text-xs font-bold px-3 py-2 rounded-lg text-center border border-neon-green/20">
                            🎉 {savings}
                        </div>
                    )}
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                    <h3 className="font-bold text-sm text-gray-700 uppercase tracking-wide">
                        O que acontece agora:
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>Acesso liberado imediatamente após confirmação</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>Onboarding personalizado agendado em seguida</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span>Garantia incondicional de 7 dias</span>
                        </li>
                    </ul>
                </div>

                {/* Secure Payment Footer */}
                <div className="flex flex-col gap-4">
                    <button
                        onClick={onConfirm}
                        className="w-full py-4 bg-neon-green text-deep-black font-bold font-space text-lg rounded-lg hover:shadow-[0_0_20px_rgba(27,252,79,0.4)] hover:-translate-y-0.5 transition-all uppercase tracking-wide flex items-center justify-center gap-2 group"
                    >
                        Finalizar Assinatura
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <button
                        onClick={onCancel}
                        className="text-gray-400 text-sm hover:text-gray-600 transition-colors font-medium"
                    >
                        Cancelar
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest mt-2">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Pagamento Seguro via Stripe
                    </div>
                </div>
            </div>
        </div>
    );
};
