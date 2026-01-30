import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ASSETS } from '../../constants';
import { Button, Container } from '../ui';

export const Header = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Fechar menu automaticamente ao mudar de rota
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Bloquear scroll quando menu estiver aberto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", path: "/", external: false },
        { name: "Sobre", path: "/sobre", external: false },
        { name: "Parceiros", path: "/parceiros", external: false },
        { name: "Blog", path: "/blog", external: false },
        { name: "Preços", path: "/precos", external: false },
    ];

    const linkClasses = ({ isActive }: { isActive: boolean }) => `relative font-space font-medium text-sm hover:text-white transition-colors uppercase tracking-wide py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neon-green after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'text-white font-bold after:w-full' : 'text-gray-400'}`;
    const baseLinkClasses = "relative font-space font-medium text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wide py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neon-green after:transition-all after:duration-300 hover:after:w-full";

    return (
        <React.Fragment>
            <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-lg border-b border-gray-900 h-20 flex items-center transition-all duration-300">
                <Container className="flex items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0 group relative z-[60]">
                        <img src={ASSETS.logoWhite} alt="FUNNELS" className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
                    </NavLink>

                    {/* Right Side: Nav + Buttons Grouped */}
                    <div className="flex items-center gap-8 ml-auto">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={baseLinkClasses}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={linkClasses}
                                    >
                                        {link.name}
                                    </NavLink>
                                )
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">
                            {/* Login Button (Desktop Only) */}
                            <a
                                href="https://app.usefunnels.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:block"
                            >
                                <Button variant="outline" className="!py-2.5 !px-6 !text-xs !rounded-full !border-gray-700 !text-gray-300 hover:!border-white hover:!text-white">
                                    Login
                                </Button>
                            </a>

                            {/* Demo Button (Desktop Only) */}
                            <Button variant="primary" className="hidden md:flex !py-2.5 !px-6 !text-xs !rounded-full shadow-lg shadow-neon-green/10" onClick={onBookDemo}>
                                Agendar Demo
                            </Button>

                            {/* Mobile Menu Toggle (Hamburger) */}
                            <button
                                className="md:hidden text-white p-2 relative z-[60] focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                            >
                                <div className="w-6 flex flex-col items-end gap-1.5">
                                    <span className={`h-0.5 bg-white w-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-neon-green' : ''}`}></span>
                                    <span className={`h-0.5 bg-white w-3/4 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`h-0.5 bg-white w-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-neon-green' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* MOBILE MENU OVERLAY (SLIDE-IN DRAWER) */}
            <div
                className={`fixed inset-0 z-[55] bg-[#050505] md:hidden transition-transform duration-500 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none"></div>

                {/* Header Placeholder to keep spacing correct below fixed header */}
                <div className="h-20 w-full flex-shrink-0 border-b border-gray-900/50"></div>

                {/* Links Container */}
                <div className="flex-grow flex flex-col items-center justify-center gap-8 relative z-10 p-6 overflow-y-auto">
                    {navLinks.map((link, idx) => (
                        link.external ? (
                            <a
                                key={link.name}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-space text-3xl font-bold text-white hover:text-neon-green transition-colors animate-fade-in-up"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `font-space text-3xl font-bold transition-colors animate-fade-in-up ${isActive ? 'text-neon-green' : 'text-white'}`}
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                </div>

                {/* Footer Actions (Fixed at bottom of drawer) */}
                <div className="w-full p-6 pb-10 bg-[#0a0a0a] border-t border-gray-900 flex flex-col gap-4 relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                    <a
                        href="https://app.usefunnels.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                    >
                        <Button variant="outline" className="w-full !py-4 !border-gray-700 !text-gray-300 hover:!text-white hover:!border-white uppercase tracking-widest text-sm">
                            Acessar Conta
                        </Button>
                    </a>
                    <Button variant="primary" className="w-full !py-4 shadow-[0_0_20px_rgba(27,252,79,0.2)] text-sm" onClick={() => { setIsMenuOpen(false); onBookDemo(); }}>
                        Agendar Demonstração
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};
