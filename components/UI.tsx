
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../constants';

export const Container: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`w-[95%] max-w-[1400px] mx-auto px-4 md:px-12 relative z-10 ${className}`}>{children}</div>
);

export const CornerBrackets: React.FC<{ className?: string }> = ({ className = "text-deep-black" }) => (
    <React.Fragment>
        <svg className={`absolute top-0 left-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M1 10V1H10" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        <svg className={`absolute top-0 right-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M9 10V1H0" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        <svg className={`absolute bottom-0 left-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M1 0V9H10" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
        <svg className={`absolute bottom-0 right-0 w-3 h-3 ${className}`} viewBox="0 0 10 10"><path d="M9 0V9H0" fill="none" stroke="currentColor" strokeWidth="1" /></svg>
    </React.Fragment>
);

export const Section: React.FC<{ id?: string, className?: string, children?: React.ReactNode }> = ({ id, className = "bg-pure-white text-deep-black", children }) => (
    <section id={id} className={`py-24 md:py-32 relative ${className}`}>
        {children}
    </section>
);

export const Reveal: React.FC<{ children?: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.disconnect();
            }
        }, { threshold: 0.1, rootMargin: '50px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`transform transition-all duration-1000 ease-out will-change-transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
            {children}
        </div>
    );
};

export const Button: React.FC<{ children?: React.ReactNode; variant?: "primary" | "secondary" | "dark" | "outline"; className?: string; onClick?: () => void }> = ({ children, variant = "primary", className = "", onClick }) => {
    // Premium SaaS refinements: Reduced vertical padding (py-3.5), slightly smaller text, tracking-widest for distinctiveness
    const baseStyles = "inline-flex items-center justify-center font-bold font-space uppercase tracking-widest py-3.5 px-8 rounded-sm transition-all duration-300 transform hover:-translate-y-1 text-xs md:text-sm cursor-pointer relative overflow-hidden group active:scale-95";
    const variants = {
        primary: "bg-neon-green text-deep-black border-2 border-neon-green hover:shadow-[0_0_20px_rgba(27,252,79,0.5)] hover:text-deep-black",
        secondary: "bg-transparent text-deep-black border-2 border-deep-black hover:bg-deep-black hover:text-white",
        dark: "bg-deep-black text-neon-green border-2 border-deep-black hover:bg-transparent hover:text-deep-black",
        outline: "bg-transparent text-white border-2 border-white hover:bg-neon-green hover:border-neon-green hover:text-deep-black"
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            <span className="relative z-10">{children}</span>
        </button>
    );
};

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

export const FeaturePopupModal: React.FC<{ feature: any; onClose: () => void }> = ({ feature, onClose }) => {
    if (!feature) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 lg:p-8">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md animate-fade-in" onClick={onClose} />

            {/* Modal Container */}
            <div className="relative z-[151] bg-deep-black w-full max-w-[1600px] rounded-sm border border-gray-800 shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden animate-scale-up flex flex-col lg:flex-row max-h-[95vh] h-[90vh] lg:h-[850px]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-[160] text-gray-400 bg-black/50 hover:bg-white hover:text-black transition-all p-3 rounded-full border border-gray-700 hover:border-white shadow-xl backdrop-blur-md"
                    aria-label="Fechar detalhes"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Left Side: Image / Visuals (Original Background) */}
                <div className="w-full lg:w-[70%] h-1/2 lg:h-full bg-gray-50 relative flex items-center justify-center p-4 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-800">
                    {/* Window Controls Mockup - Subtle on Light Background */}
                    <div className="absolute top-6 left-6 flex gap-2 opacity-100 z-10 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>

                    {/* The Image - Clean, Original, No Dark Container */}
                    <div className="w-full h-full relative flex items-center justify-center">
                        <img
                            src={feature.detailImage}
                            alt={feature.title}
                            className="w-full h-full object-contain drop-shadow-xl"
                            style={{ maxHeight: '100%', maxWidth: '100%' }}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-[30%] h-1/2 lg:h-full p-8 lg:p-12 flex flex-col justify-center bg-[#050505] text-white relative overflow-y-auto border-l border-gray-900">
                    <div>
                        <div className="w-16 h-16 mb-8 bg-gray-900 border border-gray-800 flex items-center justify-center rounded-sm shadow-inner">
                            <img src={feature.icon} className="w-8 h-8 object-contain filter invert" alt="Icon" />
                        </div>
                        <h3 className="text-3xl font-bold font-space text-white mb-6 uppercase leading-tight tracking-tight">{feature.title}</h3>
                        <p className="text-gray-400 font-light text-base leading-relaxed mb-10 border-l-2 border-neon-green pl-6">
                            {feature.description}
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-mono text-xs text-neon-green uppercase tracking-widest border-b border-gray-800 pb-3 mb-4">Recursos Principais</h4>
                                <ul className="space-y-4">
                                    {feature.benefits.map((benefit: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <span className="text-neon-green mt-0.5">✓</span>
                                            <span className="font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-10 border-t border-gray-900">
                        <Link
                            to={`/recursos/${feature.id}`}
                            className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold uppercase py-4 rounded-sm hover:bg-neon-green hover:shadow-[0_0_20px_rgba(27,252,79,0.4)] transition-all group"
                        >
                            Ver Todos Detalhes
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

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

export const TechBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
    <div className={`font-mono text-[10px] tracking-[2px] uppercase inline-block border border-deep-black/10 px-2 py-1 bg-gray-50 text-gray-500 rounded-sm ${className}`}>
        {children}
    </div>
);

// AI CAROUSEL COMPONENT
export const AICarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        { id: "agents", title: "Agentes Autônomos", desc: "Crie sua força de trabalho digital.", img: ASSETS.screenshots.agents },
        { id: "marketplace", title: "Marketplace Apps", desc: "Templates prontos para usar.", img: ASSETS.screenshots.marketplace },
        { id: "builder", title: "IA Builder V2", desc: "Construa fluxos complexos em minutos.", img: ASSETS.screenshots.aiBuilder },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch h-auto lg:h-[600px] border border-gray-900/50 bg-[#0a0a0a] rounded-sm p-2">
            {/* Left: Navigation */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4 p-4 lg:p-8">
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        onClick={() => setActiveIndex(idx)}
                        className={`p-6 border-l-2 cursor-pointer transition-all duration-300 group ${activeIndex === idx
                                ? 'border-neon-green bg-white/5'
                                : 'border-gray-800 hover:border-gray-600'
                            }`}
                        role="button"
                        aria-label={`Ver slide ${slide.title}`}
                    >
                        <h3 className={`text-xl font-bold font-space mb-2 ${activeIndex === idx ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                            {slide.title}
                        </h3>
                        <p className={`text-sm font-mono ${activeIndex === idx ? 'text-neon-green' : 'text-gray-600'}`}>
                             // {slide.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right: Display Area (Window Mockup) */}
            <div className="w-full lg:w-2/3 relative rounded-sm bg-[#111] border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col m-2 lg:m-4">
                {/* Window Controls */}
                <div className="h-8 bg-[#1a1a1a] border-b border-gray-800 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    <div className="ml-4 text-[10px] font-mono text-gray-500 flex-grow text-center opacity-50">
                        SYSTEM_PREVIEW :: {slides[activeIndex].id.toUpperCase()}
                    </div>
                </div>

                {/* Image Container */}
                <div className="relative flex-grow bg-white w-full h-full overflow-hidden">
                    {slides.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const FeatureTabs = ({ onBookDemo }: { onBookDemo: () => void }) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { title: "Funis", id: "01", desc: "Convertedores de alta performance", img: ASSETS.screenshots.websites },
        { title: "Social", id: "02", desc: "Gestão de Mídia Unificada", img: ASSETS.screenshots.socialPlanner },
        { title: "E-mail", id: "03", desc: "Automação de alto nível", img: ASSETS.screenshots.emailMarketing },
        { title: "Workflows", id: "04", desc: "Lógica de negócio visual", img: ASSETS.screenshots.automationsAI },
        { title: "Analytics", id: "05", desc: "Dados em tempo real", img: ASSETS.screenshots.dashboard2 },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mt-8 md:mt-12">
            {/* Left Column: Tech Tabs */}
            <div className="w-full lg:w-1/3 flex flex-col justify-between">
                <div className="flex flex-col gap-2">
                    {tabs.map((tab, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`group relative p-3 md:p-4 cursor-pointer transition-all duration-300 border-l-2 ${activeTab === idx
                                    ? 'bg-gray-50 border-neon-green pl-4 md:pl-6'
                                    : 'border-gray-200 hover:border-black hover:pl-4 md:hover:pl-6'
                                } ${idx > 2 ? 'hidden md:block' : 'block'}`}
                        >
                            <div className="flex items-center gap-3 mb-1">
                                <span className={`font-mono text-[10px] md:text-xs font-bold ${activeTab === idx ? 'text-neon-green' : 'text-gray-400 group-hover:text-black'}`}>
                                    [{tab.id}]
                                </span>
                                <h4 className={`text-sm md:text-base font-bold font-space uppercase tracking-wide ${activeTab === idx ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                                    {tab.title}
                                </h4>
                            </div>
                            <p className={`text-[10px] md:text-xs font-mono ml-8 hidden md:block ${activeTab === idx ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-500'}`}>
                                // {tab.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 hidden lg:block">
                    <Button variant="dark" className="w-full" onClick={onBookDemo}>
                        Explorar Sistema
                    </Button>
                </div>
            </div>

            {/* Right Column: Screen Container (Polemic Style) */}
            <div className="w-full lg:w-2/3 relative h-[300px] md:h-[550px] bg-off-black p-2 md:p-3 rounded-sm shadow-2xl flex flex-col">
                {/* Tech Header */}
                <div className="flex justify-between items-center mb-2 px-1">
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-[8px] md:text-[9px] text-gray-500 uppercase tracking-widest">
                        System_View: <span className="text-neon-green">{tabs[activeTab].title.toUpperCase()}</span>
                    </div>
                </div>

                {/* Image Area */}
                <div className="relative flex-grow bg-white rounded-sm overflow-hidden border border-gray-800 group">
                    <CornerBrackets className="text-neon-green z-20" />

                    {tabs.map((tab, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeTab === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                                }`}
                        >
                            <img
                                src={tab.img}
                                alt={tab.title}
                                className="w-full h-full object-contain md:object-cover object-top"
                                loading="lazy"
                            />
                            {/* Scanning Line Effect */}
                            {activeTab === idx && (
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent bg-[length:100%_200%] animate-scan pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Tech Footer */}
                <div className="mt-2 flex justify-between items-center px-1 font-mono text-[8px] md:text-[9px] text-gray-600">
                    <span>STATUS: ONLINE</span>
                    <span>LATENCY: 12ms</span>
                </div>
            </div>

            <div className="w-full lg:hidden mt-6">
                <Button variant="dark" className="w-full py-4" onClick={onBookDemo}>
                    Explorar Funcionalidades
                </Button>
            </div>
        </div>
    );
};

export const InfiniteLogoCarousel: React.FC<{ logos: string[] }> = ({ logos }) => {
    // Duplicate logos to ensure seamless scrolling
    const seamlessLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden relative bg-white py-8 md:py-12 border-b border-gray-100">
            {/* Gradient Fade Edges - Subtle */}
            <div className="absolute top-0 left-0 w-12 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-12 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-scroll hover:pause-animation w-max">
                {seamlessLogos.map((logo, index) => (
                    <div key={index} className="mx-6 md:mx-12 w-[100px] md:w-[160px] h-10 md:h-12 flex items-center justify-center">
                        <img
                            src={logo}
                            alt={`Partner ${index}`}
                            className="w-full h-full object-contain filter-none opacity-100 transition-transform duration-300 hover:scale-110 will-change-transform"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};