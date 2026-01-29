import React from 'react';

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children?: React.ReactNode }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose} />
            <div className="relative z-[101] bg-white w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl animate-scale-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    aria-label="Fechar modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="max-h-[90vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};
