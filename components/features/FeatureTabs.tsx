import React, { useState } from 'react';
import { ASSETS } from '../../constants';

export const FeatureTabs: React.FC = () => {
    const tabs = [
        { id: 'dashboard', label: 'Dashboard Unificado', image: ASSETS.screenshots.dashboard2 },
        { id: 'kanban', label: 'Kanban Inteligente', image: ASSETS.screenshots.automationsAI }, // approximate match?
        { id: 'automations', label: 'Automações Visuais', image: ASSETS.screenshots.automationsAI },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Tabs Header */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full text-sm font-bold font-space uppercase tracking-wider transition-all duration-300 border ${activeTab === tab.id
                            ? 'bg-neon-green text-deep-black border-neon-green shadow-[0_0_15px_rgba(27,252,79,0.3)]'
                            : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tabs Content - Image Display with polished container */}
            <div className="relative w-full aspect-video bg-[#0a0a0a] rounded-sm border border-gray-800 p-2 md:p-4 shadow-2xl overflow-hidden group">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>

                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out p-4 md:p-8 flex items-center justify-center ${activeTab === tab.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Placeholder for the feature screenshots - elegant empty state or actual image */}
                        <div className="w-full h-full bg-gray-900/50 rounded-sm border border-gray-800/50 relative overflow-hidden flex items-center justify-center">
                            {/* If real image exists */}
                            {tab.image && !tab.image.includes('placeholder') ? (
                                <img
                                    src={tab.image}
                                    alt={tab.label}
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
                                />
                            ) : (
                                <div className="text-center">
                                    <div className="text-6xl mb-4 opacity-20">🖥️</div>
                                    <p className="text-gray-600 font-mono text-xs uppercase tracking-widest">Interface Preview: {tab.label}</p>
                                </div>
                            )}

                            {/* Reflection effect */}
                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
