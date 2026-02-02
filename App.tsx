
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, PageTransition } from './components/layout';
import { Home, About, Partners, Enterprise, Blog, BlogPost, FeaturePage, Legal, PricingPageFull, WhatsAppPage, DashboardsPage, CRMPage, AutomacaoPage, ConstrutorPaginasPage } from './pages';
import { Modal } from './components/ui';
import { CheckoutModal } from './components/checkout';

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
            // Force instant scroll to top for new pages
            // We use both CSS property and scrollTo behavior option for maximum compatibility
            document.documentElement.style.scrollBehavior = 'auto';
            document.body.style.scrollBehavior = 'auto'; // Safety net

            window.scrollTo({ top: 0, behavior: 'instant' });

            // Restore smooth scroll behavior after a safe delay
            setTimeout(() => {
                document.documentElement.style.scrollBehavior = '';
                document.body.style.scrollBehavior = '';
                // Ensure manual restoration is set to prevent browser interference
                if ('scrollRestoration' in window.history) {
                    window.history.scrollRestoration = 'manual';
                }
            }, 100);
        }
    }, [pathname, hash, state]);

    // Set manual restoration on mount
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

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
    const [checkoutPlanName, setCheckoutPlanName] = useState('scale');
    const [checkoutIsAnnual, setCheckoutIsAnnual] = useState(false);

    // Verify production version
    useEffect(() => {
        console.log('🚀 FUNNELS VERSION: BUILD_v2_TEST_FRESH - ' + new Date().toISOString());
    }, []);

    const handleCheckout = (url: string, planName?: string, isAnnual?: boolean) => {
        setCheckoutUrl(url);
        setCheckoutPlanName(planName || 'scale');
        setCheckoutIsAnnual(isAnnual || false);
        setIsCheckoutModalOpen(true);
    };

    return (
        <Router>
            <ScrollToTop />
            <ProgressBar />
            <div className="flex flex-col min-h-screen bg-pure-white text-deep-black font-space">
                <Header onBookDemo={() => setIsDemoModalOpen(true)} />

                <Routes>
                    <Route path="/" element={<PageTransition><Home onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/recursos/:id" element={<PageTransition><FeaturePage onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/whatsapp" element={<PageTransition><WhatsAppPage onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/dashboards" element={<PageTransition><DashboardsPage onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/crm" element={<PageTransition><CRMPage onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/automacao" element={<PageTransition><AutomacaoPage onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/construtor-paginas" element={<PageTransition><ConstrutorPaginasPage onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>} />
                    <Route path="/sobre" element={<PageTransition><About /></PageTransition>} />
                    <Route path="/precos" element={<PageTransition><PricingPageFull onBookDemo={() => setIsDemoModalOpen(true)} onCheckout={handleCheckout} /></PageTransition>} />
                    <Route path="/legal/:type" element={<PageTransition><Legal /></PageTransition>} />
                    <Route
                        path="/parceiros"
                        element={<PageTransition><Partners onBookDemo={() => setIsDemoModalOpen(true)} /></PageTransition>}
                    />
                    <Route path="/enterprise" element={<PageTransition><Enterprise /></PageTransition>} />
                    <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
                    <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
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

                {/* Premium Checkout Modal with Bridge Page */}
                <CheckoutModal
                    isOpen={isCheckoutModalOpen}
                    onClose={() => setIsCheckoutModalOpen(false)}
                    checkoutUrl={checkoutUrl}
                    planName={checkoutPlanName}
                    isAnnual={checkoutIsAnnual}
                />
            </div>
        </Router>
    );
};

export default App;