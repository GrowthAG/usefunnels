import React from 'react';
import { Link } from 'react-router-dom';
import { ASSETS, SOCIAL_LINKS, LEGAL_LINKS } from '../../constants';
import { Container } from '../ui';

export const Footer = () => {
    const socialLinks = [
        {
            link: SOCIAL_LINKS.instagram,
            label: "Instagram",
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        },
        {
            link: SOCIAL_LINKS.facebook,
            label: "Facebook",
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
        },
        {
            link: SOCIAL_LINKS.linkedin,
            label: "LinkedIn",
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        },
        {
            link: SOCIAL_LINKS.youtube,
            label: "YouTube",
            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
        }
    ];

    return (
        <footer className="bg-deep-black text-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-gray-900">
            <Container>
                {/* Mobile: Grid 2 cols (Logo spans 2). Desktop: Grid 4 cols. */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 md:gap-12 mb-12 md:mb-20">
                    <div className="col-span-2 md:col-span-1 space-y-6 md:space-y-8">
                        <img src={ASSETS.logoWhite} alt="FUNNELS" className="h-6 md:h-8 w-auto opacity-90" loading="lazy" />
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-inter text-balance">
                            A plataforma definitiva para escalar suas vendas e automatizar seu marketing sem complicação.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center hover:bg-neon-green hover:border-neon-green hover:text-black transition-all duration-300 cursor-pointer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-space font-bold text-sm mb-6 md:mb-8 text-white uppercase tracking-widest border-b border-neon-green pb-2 inline-block">Produto</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400 font-mono">
                            <li><Link to="/#recursos" className="hover:text-white hover:translate-x-1 transition-all inline-block">Recursos</Link></li>
                            <li><Link to="/precos" className="hover:text-white hover:translate-x-1 transition-all inline-block">Preços</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-space font-bold text-sm mb-6 md:mb-8 text-white uppercase tracking-widest border-b border-neon-green pb-2 inline-block">Empresa</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400 font-mono">
                            <li><Link to="/sobre" className="hover:text-white hover:translate-x-1 transition-all inline-block">Sobre Nós</Link></li>
                            <li><Link to="/parceiros" className="hover:text-white hover:translate-x-1 transition-all inline-block">Parceiros</Link></li>
                            <li><Link to="/blog" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-space font-bold text-sm mb-6 md:mb-8 text-white uppercase tracking-widest border-b border-neon-green pb-2 inline-block">Legal</h4>
                        <ul className="space-y-3 md:space-y-4 text-sm text-gray-400 font-mono">
                            <li><Link to={LEGAL_LINKS.privacy} className="hover:text-white hover:translate-x-1 transition-all inline-block">Privacidade</Link></li>
                            <li><Link to={LEGAL_LINKS.terms} className="hover:text-white hover:translate-x-1 transition-all inline-block">Termos</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-gray-900 pt-12 pb-8 mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-space">
                                Fique por Dentro das Novidades
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Estratégias de growth, automação e cases de sucesso direto no seu email. Toda semana.
                            </p>
                        </div>
                        <form className="w-full max-w-md lg:ml-auto">
                            <div className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Seu nome"
                                    required
                                    className="px-4 py-3 text-sm bg-gray-900 border border-gray-700 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    required
                                    className="px-4 py-3 text-sm bg-gray-900 border border-gray-700 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-all"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-neon-green text-deep-black font-bold font-space uppercase tracking-wider text-sm rounded-sm transition-all duration-300 hover:bg-neon-green/90 hover:-translate-y-0.5"
                                >
                                    Inscrever
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-500 mt-3">Cancele quando quiser. Sem spam.</p>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono text-center md:text-left">
                    <p>&copy; {new Date().getFullYear()} FUNNELS. Brasil.</p>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> All Systems Operational</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
