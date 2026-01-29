
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Home, About, Partners, Enterprise, Blog, FeaturePage, Legal } from './pages';
import { Modal } from './components/ui';

// Scroll To Top Component
const ScrollToTop = () => {
    const { pathname, hash, state } = useLocation();

    useEffect(() => {
        // Handle scrolling behavior
        if (state && (state as any).targetId) {
            const id = (state as any).targetId;
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, state]);

    return null;
};

// Progress Bar Component
const ProgressBar = () => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight) {
                setWidth(totalScroll / windowHeight);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="fixed top-0 left-0 h-[3px] bg-neon-green z-[100] transition-all duration-100 ease-out" style={{ width: `${width * 100}%` }} />
    );
};

const App = () => {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [checkoutUrl, setCheckoutUrl] = useState('');

    const handleCheckout = (url: string) => {
        setCheckoutUrl(url);
        setIsCheckoutModalOpen(true);
    };

    return (
        <Router>
            <ScrollToTop />
            <ProgressBar />
            <div className="flex flex-col min-h-screen bg-pure-white text-deep-black font-space">
                <Header onBookDemo={() => setIsDemoModalOpen(true)} />

                <Routes>
                    <Route path="/" element={<Home onBookDemo={() => setIsDemoModalOpen(true)} onCheckout={handleCheckout} />} />
                    <Route path="/recursos/:id" element={<FeaturePage onBookDemo={() => setIsDemoModalOpen(true)} />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/legal/:type" element={<Legal />} />
                    <Route
                        path="/parceiros"
                        element={<Partners onBookDemo={() => setIsDemoModalOpen(true)} />}
                    />
                    <Route path="/enterprise" element={<Enterprise />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>

                <Footer />

                {/* Global Demo Modal */}
                <Modal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)}>
                    <div className="p-0 md:p-1 bg-white h-[85vh] md:h-auto flex flex-col">
                        <iframe
                            src="https://pages.usefunnels.io/widget/booking/MPETKLENngnBUUDATVAd"
                            style={{ width: '100%', border: 'none', flexGrow: 1, minHeight: '750px' }}
                            id="MPETKLENngnBUUDATVAd_1764182165031"
                            title="Agendar Demo"
                        ></iframe>
                    </div>
                </Modal>

                {/* Partner Application Modal */}
                <Modal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)}>
                    <div className="bg-white rounded-sm overflow-hidden flex flex-col h-[85vh]">
                        <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Aplicação de Parceria</span>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex-grow w-full overflow-hidden">
                            <iframe
                                src="https://pages.usefunnels.io/widget/form/jME4FK4zm8bkuVEux59g"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                title="Partner Form"
                            ></iframe>
                        </div>
                    </div>
                </Modal>

                {/* Checkout Modal */}
                <Modal isOpen={isCheckoutModalOpen} onClose={() => setIsCheckoutModalOpen(false)}>
                    <div className="bg-white rounded-sm overflow-hidden flex flex-col h-[90vh] md:h-[85vh] w-full max-w-6xl">
                        <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-deep-black">Checkout Seguro</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1BFC4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <button onClick={() => setIsCheckoutModalOpen(false)} className="text-gray-400 hover:text-deep-black transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="flex-grow w-full overflow-hidden relative bg-white">
                            <div className="absolute inset-0 flex items-center justify-center z-0">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-green"></div>
                            </div>
                            <iframe
                                src={checkoutUrl}
                                style={{ width: '100%', height: '100%', border: 'none', position: 'relative', zIndex: 10 }}
                                title="Checkout"
                            ></iframe>
                        </div>
                    </div>
                </Modal>
            </div>
        </Router>
    );
};

export default App;