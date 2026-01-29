
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ui';

export const ExitPopup: React.FC<{ onBookDemo: () => void }> = ({ onBookDemo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasShown = useRef(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown.current && !sessionStorage.getItem('exitPopupShown')) {
                setIsOpen(true);
                hasShown.current = true;
                sessionStorage.setItem('exitPopupShown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
            <div className="relative z-[201] bg-white w-full max-w-lg rounded-sm p-8 shadow-2xl animate-fade-in-up border border-neon-green">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                    aria-label="Fechar aviso"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-neon-green text-black text-xs font-bold font-mono uppercase mb-4 border border-black">[ SYSTEM_ALERT ]</span>
                    <h3 className="text-3xl font-bold font-space mb-4">Você está deixando dinheiro na mesa.</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">Não vá embora sem ver como o <strong>FUNNELS</strong> pode economizar mais de <strong>R$ 30.000/ano</strong> na sua operação.</p>
                    <Button variant="primary" className="w-full !py-4 shadow-xl" onClick={() => { setIsOpen(false); onBookDemo(); }}>
                        Ver Demonstração Rápida
                    </Button>
                    <p className="mt-4 text-xs text-gray-400 cursor-pointer hover:text-black" onClick={() => setIsOpen(false)}>[x] Fechar e continuar pagando caro</p>
                </div>
            </div>
        </div>
    );
};
