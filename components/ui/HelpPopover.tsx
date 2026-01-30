import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export interface HelpContent {
    title: string;
    whatIs: string;
    whyMatters: string;
    example: string;
}

interface HelpPopoverProps {
    content: HelpContent;
    className?: string;
}

export const HelpPopover: React.FC<HelpPopoverProps> = ({ content, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<{ top: number; left: number; placement: 'right' | 'left' | 'top' | 'bottom' }>({
        top: 0,
        left: 0,
        placement: 'right'
    });
    const [isMobile, setIsMobile] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);
    const popoverId = useRef(`help-${Math.random().toString(36).substr(2, 9)}`);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Calculate position with collision detection
    useEffect(() => {
        if (!isOpen || !triggerRef.current || !popoverRef.current || isMobile) return;

        const trigger = triggerRef.current.getBoundingClientRect();
        const popover = popoverRef.current.getBoundingClientRect();
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const gap = 12; // espaço entre trigger e popover
        const popoverWidth = 320;
        const popoverHeight = popover.height || 200;

        let placement: 'right' | 'left' | 'top' | 'bottom' = 'right';
        let top = trigger.top + trigger.height / 2 - popoverHeight / 2;
        let left = trigger.right + gap;

        // Collision detection - tentar direita primeiro
        const spaceRight = viewport.width - trigger.right;
        const spaceLeft = trigger.left;
        const spaceTop = trigger.top;
        const spaceBottom = viewport.height - trigger.bottom;

        if (spaceRight < popoverWidth + gap + 20) {
            // Não cabe à direita, tentar esquerda
            if (spaceLeft >= popoverWidth + gap + 20) {
                placement = 'left';
                left = trigger.left - popoverWidth - gap;
            } else if (spaceBottom >= popoverHeight + gap + 20) {
                // Não cabe nos lados, tentar embaixo
                placement = 'bottom';
                top = trigger.bottom + gap;
                left = trigger.left + trigger.width / 2 - popoverWidth / 2;
            } else if (spaceTop >= popoverHeight + gap + 20) {
                // Tentar acima
                placement = 'top';
                top = trigger.top - popoverHeight - gap;
                left = trigger.left + trigger.width / 2 - popoverWidth / 2;
            }
        }

        // Ajustar top para não sair da tela (quando placement = left ou right)
        if (placement === 'left' || placement === 'right') {
            if (top < 10) top = 10;
            if (top + popoverHeight > viewport.height - 10) {
                top = viewport.height - popoverHeight - 10;
            }
        }

        // Ajustar left para não sair da tela (quando placement = top ou bottom)
        if (placement === 'top' || placement === 'bottom') {
            if (left < 10) left = 10;
            if (left + popoverWidth > viewport.width - 10) {
                left = viewport.width - popoverWidth - 10;
            }
        }

        setPosition({ top, left, placement });
    }, [isOpen, isMobile]);

    // Close on click outside
    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (
                triggerRef.current &&
                popoverRef.current &&
                !triggerRef.current.contains(e.target as Node) &&
                !popoverRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    // Renderizar seta baseado no placement
    const renderCaret = () => {
        const caretClasses = "absolute w-3 h-3 bg-gray-900 border-gray-700 rotate-45";

        switch (position.placement) {
            case 'right':
                return <div className={`${caretClasses} -left-[6px] top-1/2 -translate-y-1/2 border-l border-t`} />;
            case 'left':
                return <div className={`${caretClasses} -right-[6px] top-1/2 -translate-y-1/2 border-r border-b`} />;
            case 'top':
                return <div className={`${caretClasses} -bottom-[6px] left-1/2 -translate-x-1/2 border-b border-r`} />;
            case 'bottom':
                return <div className={`${caretClasses} -top-[6px] left-1/2 -translate-x-1/2 border-t border-l`} />;
        }
    };

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                aria-expanded={isOpen}
                aria-controls={isOpen ? popoverId.current : undefined}
                className={`inline-flex items-center justify-center w-4 h-4 ml-2 text-gray-400 hover:text-neon-green focus:text-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-1 rounded-full transition-colors cursor-help ${className}`}
                aria-label={`Ajuda sobre ${content.title}`}
            >
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && createPortal(
                <React.Fragment>
                    {isMobile ? (
                        /* Mobile: Bottom Sheet */
                        <React.Fragment>
                            <div className="fixed inset-0 bg-black/50 z-[200] animate-fade-in" onClick={() => setIsOpen(false)} />
                            <div
                                ref={popoverRef}
                                id={popoverId.current}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby={`${popoverId.current}-title`}
                                className="fixed bottom-0 left-0 right-0 z-[201] bg-gray-900 border-t border-gray-700 rounded-t-2xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto animate-slide-up"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 id={`${popoverId.current}-title`} className="text-base font-bold text-white">
                                        {content.title}
                                    </h3>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors"
                                        aria-label="Fechar"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                                    <div>
                                        <span className="font-semibold text-neon-green">O que é:</span> {content.whatIs}
                                    </div>
                                    <div>
                                        <span className="font-semibold text-neon-green">Por que importa:</span> {content.whyMatters}
                                    </div>
                                    <div className="pt-2 border-t border-gray-700">
                                        <span className="font-semibold text-gray-400">Exemplo:</span> {content.example}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    ) : (
                        /* Desktop: Floating Popover */
                        <div
                            ref={popoverRef}
                            id={popoverId.current}
                            role="dialog"
                            aria-labelledby={`${popoverId.current}-title`}
                            className="fixed z-[200] w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4 animate-fade-in"
                            style={{
                                top: `${position.top}px`,
                                left: `${position.left}px`,
                            }}
                        >
                            {renderCaret()}

                            <h3 id={`${popoverId.current}-title`} className="text-sm font-bold text-white mb-3">
                                {content.title}
                            </h3>

                            <div className="space-y-2.5 text-xs text-gray-300 leading-relaxed">
                                <div>
                                    <span className="font-semibold text-neon-green">O que é:</span> {content.whatIs}
                                </div>
                                <div>
                                    <span className="font-semibold text-neon-green">Por que importa:</span> {content.whyMatters}
                                </div>
                                <div className="pt-2 border-t border-gray-700">
                                    <span className="font-semibold text-gray-400 text-[11px]">Exemplo:</span>{' '}
                                    <span className="text-gray-400">{content.example}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }

                .animate-slide-up {
                    animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
                </React.Fragment>,
                document.body
            )}
        </>
    );
};
