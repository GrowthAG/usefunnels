import React from 'react';
import { Link } from 'react-router-dom';
import {
    Lightbulb,
    AlertTriangle,
    CheckCircle2,
    ArrowRight,
    Download,
    Calendar,
    Quote,
    Target,
    Rocket,
    FileText,
    Play
} from 'lucide-react';

// ============================================
// CALLOUT COMPONENTS
// ============================================

interface CalloutProps {
    children: React.ReactNode;
    title?: string;
}

export const CalloutInsight: React.FC<CalloutProps> = ({ children, title = "Insight" }) => (
    <div className="my-8 bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-neon-green rounded-r-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex gap-4 relative">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-neon-green" />
                </div>
            </div>
            <div>
                <h4 className="font-bold font-space text-deep-black mb-2 text-lg">{title}</h4>
                <div className="text-gray-700 leading-relaxed">{children}</div>
            </div>
        </div>
    </div>
);

export const CalloutAlert: React.FC<CalloutProps> = ({ children, title = "Atenção" }) => (
    <div className="my-8 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 rounded-r-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex gap-4 relative">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
            </div>
            <div>
                <h4 className="font-bold font-space text-deep-black mb-2 text-lg">{title}</h4>
                <div className="text-gray-700 leading-relaxed">{children}</div>
            </div>
        </div>
    </div>
);

export const CalloutSuccess: React.FC<CalloutProps> = ({ children, title = "Resultado" }) => (
    <div className="my-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="flex gap-4 relative">
            <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                </div>
            </div>
            <div>
                <h4 className="font-bold font-space text-deep-black mb-2 text-lg">{title}</h4>
                <div className="text-gray-700 leading-relaxed">{children}</div>
            </div>
        </div>
    </div>
);

// ============================================
// QUOTE / TESTIMONIAL COMPONENT
// ============================================

interface QuoteBlockProps {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    image?: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author, role, company, image }) => (
    <div className="my-10 relative">
        <div className="absolute -top-4 -left-2 text-8xl text-neon-green/20 font-serif leading-none select-none">"</div>
        <blockquote className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 pl-12 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-neon-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="text-xl text-gray-800 leading-relaxed italic mb-6 relative">
                {quote}
            </p>
            <footer className="flex items-center gap-4 relative">
                {image && (
                    <img src={image} alt={author} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg" />
                )}
                <div>
                    <cite className="not-italic font-bold font-space text-deep-black block">{author}</cite>
                    {(role || company) && (
                        <span className="text-sm text-gray-500 font-mono">
                            {role}{role && company && ' @ '}{company}
                        </span>
                    )}
                </div>
            </footer>
        </blockquote>
    </div>
);

// ============================================
// CTA COMPONENTS
// ============================================

interface CTAProps {
    title: string;
    description?: string;
    buttonText: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'download';
}

export const CTAInline: React.FC<CTAProps> = ({ title, description, buttonText, href, variant = 'primary' }) => {
    const variants = {
        primary: {
            bg: 'bg-gradient-to-r from-deep-black to-gray-900',
            border: 'border-neon-green/30',
            icon: <Rocket className="w-5 h-5" />,
            button: 'bg-neon-green text-deep-black hover:shadow-[0_0_30px_rgba(27,252,79,0.4)]'
        },
        secondary: {
            bg: 'bg-gradient-to-r from-gray-50 to-white',
            border: 'border-gray-200',
            icon: <Target className="w-5 h-5 text-neon-green" />,
            button: 'bg-deep-black text-white hover:bg-gray-800'
        },
        download: {
            bg: 'bg-gradient-to-r from-neon-green/10 to-emerald-50',
            border: 'border-neon-green/30',
            icon: <Download className="w-5 h-5 text-neon-green" />,
            button: 'bg-neon-green text-deep-black hover:shadow-[0_0_30px_rgba(27,252,79,0.4)]'
        }
    };

    const style = variants[variant];

    return (
        <div className={`my-10 ${style.bg} rounded-2xl p-8 border ${style.border} relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
                <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${variant === 'primary' ? 'bg-neon-green/20 text-neon-green' : 'bg-gray-100'}`}>
                        {style.icon}
                    </div>
                    <div>
                        <h4 className={`font-bold font-space text-xl mb-1 ${variant === 'primary' ? 'text-white' : 'text-deep-black'}`}>
                            {title}
                        </h4>
                        {description && (
                            <p className={`text-sm ${variant === 'primary' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {description}
                            </p>
                        )}
                    </div>
                </div>
                <Link
                    to={href}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold font-space uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 ${style.button}`}
                >
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
};

export const CTABox: React.FC<{
    title: string;
    benefits: string[];
    primaryButton: { text: string; href: string };
    secondaryButton?: { text: string; href: string };
}> = ({ title, benefits, primaryButton, secondaryButton }) => (
    <div className="my-12 bg-gradient-to-br from-deep-black via-gray-900 to-deep-black rounded-2xl p-10 border border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />
        <div className="absolute top-4 right-4 w-20 h-20 border border-neon-green/20 rounded-full" />
        <div className="absolute top-8 right-8 w-12 h-12 border border-neon-green/10 rounded-full" />

        <div className="relative">
            <h3 className="text-3xl font-bold font-space text-white mb-6 text-center">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-neon-green" />
                        <span>{benefit}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    to={primaryButton.href}
                    className="inline-flex items-center gap-2 bg-neon-green text-deep-black px-8 py-4 rounded-lg font-bold font-space uppercase tracking-wider text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(27,252,79,0.5)]"
                >
                    {primaryButton.text}
                    <ArrowRight className="w-4 h-4" />
                </Link>
                {secondaryButton && (
                    <Link
                        to={secondaryButton.href}
                        className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-lg font-bold font-space uppercase tracking-wider text-sm transition-all duration-300 hover:border-white"
                    >
                        {secondaryButton.text}
                    </Link>
                )}
            </div>
        </div>
    </div>
);

// ============================================
// TABLE OF CONTENTS
// ============================================

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export const TableOfContents: React.FC<{ items: TOCItem[] }> = ({ items }) => (
    <nav className="my-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 className="font-bold font-space text-deep-black mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-neon-green" />
            Neste Artigo
        </h4>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} style={{ paddingLeft: `${(item.level - 2) * 16}px` }}>
                    <a
                        href={`#${item.id}`}
                        className="text-gray-600 hover:text-neon-green transition-colors text-sm flex items-center gap-2 py-1"
                    >
                        <span className="w-1.5 h-1.5 bg-neon-green/50 rounded-full flex-shrink-0" />
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);

// ============================================
// STATS / METRICS BLOCK
// ============================================

interface StatItem {
    value: string;
    label: string;
    change?: string;
}

export const StatsBlock: React.FC<{ stats: StatItem[]; title?: string }> = ({ stats, title }) => (
    <div className="my-10 bg-gradient-to-r from-gray-900 to-deep-black rounded-2xl p-8 border border-gray-800">
        {title && (
            <h4 className="text-white font-bold font-space text-center mb-6">{title}</h4>
        )}
        <div className={`grid gap-6 ${stats.length === 3 ? 'grid-cols-3' : stats.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2'}`}>
            {stats.map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold font-space text-neon-green mb-1">
                        {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    {stat.change && (
                        <div className="text-xs text-emerald-400 mt-1 font-mono">{stat.change}</div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

// ============================================
// COMPARISON TABLE (Premium Style)
// ============================================

interface ComparisonRow {
    feature: string;
    values: (string | boolean)[];
}

export const ComparisonTable: React.FC<{
    headers: string[];
    rows: ComparisonRow[];
    highlightColumn?: number;
}> = ({ headers, rows, highlightColumn = 1 }) => (
    <div className="my-10 overflow-x-auto">
        <div className="min-w-[600px]">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th
                                key={i}
                                className={`p-4 text-left font-bold font-space text-sm uppercase tracking-wider
                                    ${i === 0 ? 'bg-gray-100 text-gray-600' : ''}
                                    ${i === highlightColumn ? 'bg-neon-green text-deep-black' : i !== 0 ? 'bg-gray-800 text-white' : ''}
                                `}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-gray-200">
                            <td className="p-4 font-medium text-gray-700 bg-gray-50">
                                {row.feature}
                            </td>
                            {row.values.map((value, colIndex) => (
                                <td
                                    key={colIndex}
                                    className={`p-4 text-center
                                        ${colIndex + 1 === highlightColumn ? 'bg-neon-green/10' : ''}
                                    `}
                                >
                                    {typeof value === 'boolean' ? (
                                        value ? (
                                            <CheckCircle2 className="w-5 h-5 text-neon-green mx-auto" />
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )
                                    ) : (
                                        <span className={colIndex + 1 === highlightColumn ? 'font-bold text-deep-black' : 'text-gray-600'}>
                                            {value}
                                        </span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// ============================================
// VIDEO EMBED
// ============================================

export const VideoEmbed: React.FC<{
    videoId: string;
    platform?: 'youtube' | 'vimeo';
    title?: string;
}> = ({ videoId, platform = 'youtube', title }) => (
    <div className="my-10">
        {title && (
            <h4 className="font-bold font-space text-deep-black mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-neon-green" />
                {title}
            </h4>
        )}
        <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
                src={platform === 'youtube'
                    ? `https://www.youtube.com/embed/${videoId}`
                    : `https://player.vimeo.com/video/${videoId}`
                }
                className="w-full h-full"
                allowFullScreen
                title={title || 'Video'}
            />
        </div>
    </div>
);

// ============================================
// AUTHOR BOX
// ============================================

export const AuthorBox: React.FC<{
    name: string;
    role: string;
    bio: string;
    image?: string;
    social?: { linkedin?: string; twitter?: string };
}> = ({ name, role, bio, image, social }) => (
    <div className="my-10 bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col md:flex-row gap-6">
        {image && (
            <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg flex-shrink-0" />
        )}
        <div>
            <div className="font-bold font-space text-deep-black text-lg">{name}</div>
            <div className="text-sm text-neon-green font-mono mb-2">{role}</div>
            <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
        </div>
    </div>
);

// ============================================
// STEP BY STEP
// ============================================

interface Step {
    title: string;
    description: string;
}

export const StepByStep: React.FC<{ steps: Step[]; title?: string }> = ({ steps, title }) => (
    <div className="my-10">
        {title && (
            <h4 className="font-bold font-space text-deep-black text-xl mb-6">{title}</h4>
        )}
        <div className="space-y-6">
            {steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-neon-green text-deep-black font-bold font-space flex items-center justify-center text-lg">
                            {i + 1}
                        </div>
                        {i < steps.length - 1 && (
                            <div className="w-px h-full bg-gray-200 mx-auto mt-2" />
                        )}
                    </div>
                    <div className="pb-6">
                        <h5 className="font-bold font-space text-deep-black mb-2">{step.title}</h5>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
