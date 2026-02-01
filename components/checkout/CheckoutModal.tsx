import React, { useState, useEffect } from 'react';
import { ASSETS } from '../../constants';
import { BridgePage } from './BridgePage';

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    checkoutUrl: string;
    planName?: string;
    planPrice?: string;
    isAnnual?: boolean;
}

interface PlanDetails {
    name: string;
    monthlyPrice: string;
    annualPrice: string;
    features: string[];
    savings?: string;
}

const PLAN_DETAILS: Record<string, PlanDetails> = {
    starter: {
        name: 'Starter',
        monthlyPrice: '497',
        annualPrice: '4.970',
        savings: 'Economize R$ 994/ano',
        features: ['3 usuários inclusos', '20.000 contatos', 'CRM completo', 'Email marketing ilimitado', 'Landing pages']
    },
    growth: {
        name: 'Growth',
        monthlyPrice: '697',
        annualPrice: '6.970',
        savings: 'Economize R$ 1.394/ano',
        features: ['5 usuários inclusos', '50.000 contatos', 'WhatsApp Business API', 'Chatbot básico', 'Automações avançadas']
    },
    scale: {
        name: 'Scale',
        monthlyPrice: '997',
        annualPrice: '9.970',
        savings: 'Economize R$ 1.994/ano',
        features: ['10 usuários inclusos', '75.000 contatos', 'WhatsApp + Telefonia VoIP', 'IA nativa integrada', 'Suporte prioritário']
    }
};

// Dummy tracking function - replace with actual analytics integration
const trackEvent = (eventName: string, properties: Record<string, any>) => {
    console.log(`[TRACKING] ${eventName}`, properties);
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: eventName, ...properties });
    }
};

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
    isOpen,
    onClose,
    checkoutUrl,
    planName = 'scale',
    isAnnual = false
}) => {
    const [step, setStep] = useState<'bridge' | 'checkout'>('bridge');
    const [showExitIntent, setShowExitIntent] = useState(false);
    const [hasShownExitIntent, setHasShownExitIntent] = useState(false);
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const plan = PLAN_DETAILS[planName.toLowerCase()] || PLAN_DETAILS.scale;
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const billingText = isAnnual ? '/ano' : '/mês';

    // Detect mobile
    const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep('checkout'); // DIRECT CHECKOUT RE-ENABLED
            setHasShownExitIntent(false);
            setShowExitIntent(false);
            setIframeLoaded(false);
            document.body.style.overflow = 'hidden';

            // Track modal opened
            trackEvent('checkout_modal_opened', { plan: plan.name, billing: isAnnual ? 'annual' : 'monthly' });
            trackEvent('checkout_started', { plan: plan.name });
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen, plan.name, isAnnual, isMobile]);

    // Exit intent detection (desktop only)
    useEffect(() => {
        if (!isOpen || isMobile || hasShownExitIntent) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                setShowExitIntent(true);
                setHasShownExitIntent(true);
                trackEvent('exit_intent_shown', { plan: plan.name, step });
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [isOpen, isMobile, hasShownExitIntent, plan.name, step]);

    // Mobile: redirect to new tab
    useEffect(() => {
        if (isOpen && isMobile && checkoutUrl) {
            window.open(checkoutUrl, '_blank');
            onClose();
        }
    }, [isOpen, isMobile, checkoutUrl, onClose]);

    const handleClose = () => {
        if (!hasShownExitIntent && step === 'checkout') {
            setShowExitIntent(true);
            setHasShownExitIntent(true);
            trackEvent('exit_intent_shown', { plan: plan.name, step });
        } else {
            onClose();
        }
    };

    const handleConfirmBridge = () => {
        setStep('checkout');
        trackEvent('checkout_started', { plan: plan.name });
    };

    if (!isOpen || isMobile) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
            {/* Overlay with blur */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                style={{ animation: 'fadeIn 0.2s ease-out' }}
                onClick={handleClose}
            />

            {/* Exit Intent Modal */}
            {showExitIntent && (
                <div className="absolute inset-0 z-[220] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60" onClick={() => setShowExitIntent(false)} />
                    <div
                        className="relative z-[221] bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
                        style={{ animation: 'scaleUp 0.2s ease-out' }}
                    >
                        <h3 className="text-xl font-bold font-space text-deep-black mb-3">
                            Tem certeza que quer sair?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Sua conta já está pronta para o plano {plan.name}. Quer continuar?
                        </p>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => {
                                    setShowExitIntent(false);
                                    trackEvent('exit_intent_recovered', { plan: plan.name });
                                }}
                                className="w-full py-3 px-6 bg-neon-green text-deep-black font-bold rounded-lg hover:bg-neon-green/90 transition-colors"
                            >
                                Continuar compra
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full py-3 px-6 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                Sair mesmo assim
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bridge Page Step */}
            {step === 'bridge' && (
                <BridgePage
                    planName={plan.name}
                    price={price}
                    isAnnual={isAnnual}
                    savings={plan.savings}
                    onConfirm={handleConfirmBridge}
                    onCancel={onClose}
                />
            )}

            {/* Main Modal - Split Layout */}
            <div
                className={`relative z-[201] bg-white w-full max-w-5xl rounded-2xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300 ${step === 'bridge'
                    ? 'opacity-0 scale-95 absolute pointer-events-none'
                    : 'opacity-100 scale-100'
                    }`}
                style={{
                    maxHeight: '90vh',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 80px rgba(27, 252, 79, 0.1)',
                    animation: step === 'checkout' ? 'modalEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
                }}
            >
                {/* Left Sidebar - Plan Summary (Always Visible) */}
                <div className="bg-deep-black text-white lg:w-[320px] flex-shrink-0 p-5 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <img src={ASSETS.logoWhite} alt="Funnels" className="h-5" />
                        <button
                            onClick={handleClose}
                            className="lg:hidden text-gray-400 hover:text-white transition-colors p-1"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Plan Badge */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
                            Plano selecionado
                        </span>
                    </div>

                    {/* Plan Name */}
                    <h2 className="text-2xl font-bold font-space mb-3">
                        Plano <span className="text-neon-green">{plan.name}</span>
                    </h2>

                    {/* Price */}
                    <div className="bg-gray-900/50 rounded-xl p-3 mb-4 border border-gray-800">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold font-space">R$ {price}</span>
                            <span className="text-gray-400 text-sm">{billingText}</span>
                        </div>
                        {isAnnual && plan.savings && (
                            <span className="inline-block bg-neon-green/20 text-neon-green text-xs px-2 py-0.5 rounded-full font-medium mt-2">
                                {plan.savings}
                            </span>
                        )}
                    </div>

                    {/* Features */}
                    <div className="flex-grow overflow-y-auto min-h-0">
                        <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-mono">
                            Incluso no plano:
                        </h3>
                        <ul className="space-y-1.5">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                    <svg className="w-4 h-4 text-neon-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trust Signals */}
                    <div className="mt-4 pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Seguro</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>7 dias garantia</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Signups - Social Proof */}
                    <div className="mt-4 pt-4 border-t border-gray-800">
                        <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-mono">
                            Empresas que acabaram de aderir
                        </h4>
                        <div className="space-y-2">
                            {[
                                { name: "TechCorp", plan: "Growth", time: "2h atrás" },
                                { name: "StartupXYZ", plan: "Scale", time: "5h atrás" },
                                { name: "Agência Digital", plan: "Growth", time: "1 dia atrás" }
                            ].map((signup, i) => (
                                <div key={i} className="flex items-center justify-between text-xs">
                                    <span className="text-gray-300">{signup.name}</span>
                                    <span className="text-gray-500">{signup.time}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-gray-500 mt-3 font-mono">
                            120+ empresas se cadastraram este mês
                        </p>
                    </div>
                </div>

                {/* Right Side - Checkout Form */}
                <div className="flex-grow flex flex-col bg-white min-h-0 overflow-y-auto">
                    {/* Header - Desktop only */}
                    <div className="hidden lg:flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0 bg-gray-50/30">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                                <span className="font-bold font-space text-sm text-deep-black">
                                    Crie sua conta de acesso
                                </span>
                            </div>
                            <span className="text-xs text-gray-500 ml-3.5">
                                Seus dados de acesso serão enviados para seu e-mail
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-lg border border-gray-100">
                                <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                                    Pagamento Seguro via
                                </span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                                    alt="Stripe"
                                    className="h-5 opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <button
                                onClick={handleClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Iframe Container - Ensure full height */}
                    <div className="flex-grow relative flex flex-col min-h-[600px] h-full">
                        {/* Loading State */}
                        {!iframeLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-neon-green mx-auto mb-3" />
                                    <p className="text-sm text-gray-500">Carregando checkout...</p>
                                </div>
                            </div>
                        )}

                        {/* Iframe with scroll - GoHighLevel checkout */}
                        <iframe
                            src={checkoutUrl}
                            className="w-full flex-grow border-none"
                            style={{
                                height: '100%',
                                minHeight: '100%',
                                marginTop: '-20px', // Pull content up to reduce whitespace
                                opacity: iframeLoaded ? 1 : 0,
                                transition: 'opacity 0.3s ease'
                            }}
                            title="Checkout"
                            allow="payment; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation"
                            referrerPolicy="no-referrer-when-downgrade"
                            frameBorder="0"
                            scrolling="yes"
                            onLoad={() => {
                                setIframeLoaded(true);
                                trackEvent('checkout_iframe_loaded', { plan: plan.name });
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes modalEnter {
                    from {
                        opacity: 0;
                        transform: scale(0.96) translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleUp {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default CheckoutModal;
