
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

    return (
        <Router>
            <ScrollToTop />
            <ProgressBar />
            <div className="flex flex-col min-h-screen bg-pure-white text-deep-black font-space">
                <Header onBookDemo={() => setIsDemoModalOpen(true)} />

                <Routes>
                    <Route path="/" element={<Home onBookDemo={() => setIsDemoModalOpen(true)} />} />
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
                            style={{ width: '100%', border: 'none', flexGrow: 1, minHeight: '500px' }}
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
            </div>
        </Router>
    );
};

export default App;