import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
    content: string;
    children?: React.ReactNode;
    className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<'top' | 'bottom'>('top');
    const triggerRef = useRef<HTMLButtonElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const tooltipId = useRef(`tooltip-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        if (isVisible && triggerRef.current && tooltipRef.current) {
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const spaceAbove = triggerRect.top;
            const spaceBelow = window.innerHeight - triggerRect.bottom;

            // Decidir posição baseado no espaço disponível
            if (spaceAbove > tooltipRect.height + 10 && spaceBelow < tooltipRect.height + 10) {
                setPosition('top');
            } else {
                setPosition('bottom');
            }
        }
    }, [isVisible]);

    // Fechar ao clicar fora (mobile)
    useEffect(() => {
        if (!isVisible) return;

        const handleClickOutside = (e: MouseEvent | TouchEvent) => {
            if (
                triggerRef.current &&
                tooltipRef.current &&
                !triggerRef.current.contains(e.target as Node) &&
                !tooltipRef.current.contains(e.target as Node)
            ) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isVisible]);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        } else if (e.key === 'Escape' && isVisible) {
            setIsVisible(false);
        }
    };

    return (
        <span className={`relative inline-flex items-center ${className}`}>
            <button
                ref={triggerRef}
                type="button"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onFocus={() => setIsVisible(true)}
                onBlur={() => setIsVisible(false)}
                aria-describedby={isVisible ? tooltipId.current : undefined}
                className="inline-flex items-center justify-center w-4 h-4 ml-1.5 text-gray-400 hover:text-neon-green focus:text-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green focus:ring-offset-1 rounded-full transition-colors"
            >
                {children || (
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>

            {isVisible && (
                <div
                    ref={tooltipRef}
                    id={tooltipId.current}
                    role="tooltip"
                    className={`absolute z-[100] w-64 px-3 py-2 text-xs text-white bg-gray-900 border border-gray-700 rounded-sm shadow-2xl pointer-events-none animate-fade-in ${
                        position === 'top'
                            ? 'bottom-full left-1/2 -translate-x-1/2 mb-2'
                            : 'top-full left-1/2 -translate-x-1/2 mt-2'
                    }`}
                    style={{
                        animation: 'fadeIn 0.2s ease-out',
                    }}
                >
                    <div className="relative">
                        {content}
                        {/* Seta do tooltip */}
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-gray-700 rotate-45 ${
                                position === 'top'
                                    ? 'bottom-[-5px] border-b border-r'
                                    : 'top-[-5px] border-t border-l'
                            }`}
                        />
                    </div>
                </div>
            )}
        </span>
    );
};
