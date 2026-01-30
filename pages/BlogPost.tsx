import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, TechBadge } from '../components/ui';
import { BLOG_POSTS } from '../constants';
import {
    ArrowLeft,
    Calendar,
    Clock,
    User,
    Copy,
    Check,
    ChevronUp,
    FileText,
    ArrowRight,
    BookOpen
} from 'lucide-react';

// Social icons as SVGs (lucide deprecated these)
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
);

// ============================================
// TABLE OF CONTENTS COMPONENT
// ============================================

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

const TableOfContents: React.FC<{ items: TOCItem[]; activeId: string }> = ({ items, activeId }) => {
    if (items.length === 0) return null;

    return (
        <nav className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 sticky top-24">
            <h4 className="font-bold font-space text-deep-black mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4 text-neon-green" />
                Neste Artigo
            </h4>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                        <a
                            href={`#${item.id}`}
                            className={`text-sm flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all duration-200 group
                                ${activeId === item.id
                                    ? 'bg-neon-green/10 text-deep-black font-medium'
                                    : 'text-gray-500 hover:text-deep-black hover:bg-gray-100'
                                }`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors
                                ${activeId === item.id ? 'bg-neon-green' : 'bg-gray-300 group-hover:bg-neon-green/50'}`}
                            />
                            <span className="line-clamp-1">{item.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// ============================================
// SHARE BUTTONS COMPONENT
// ============================================

const ShareButtons: React.FC<{ title: string; url: string }> = ({ title, url }) => {
    const [copied, setCopied] = useState(false);

    const shareUrl = encodeURIComponent(url);
    const shareTitle = encodeURIComponent(title);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3">
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no Facebook"
            >
                <FacebookIcon />
            </a>
            <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#000000] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no X"
            >
                <TwitterIcon />
            </a>
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no LinkedIn"
            >
                <LinkedinIcon />
            </a>
            <button
                onClick={handleCopy}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-neon-green hover:text-deep-black transition-all duration-300 hover:scale-110"
                aria-label="Copiar link"
            >
                {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
        </div>
    );
};

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const ScrollToTop: React.FC<{ show: boolean }> = ({ show }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-12 h-12 bg-deep-black text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-neon-green hover:text-deep-black z-50
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label="Voltar ao topo"
        >
            <ChevronUp size={24} />
        </button>
    );
};

// ============================================
// NEWSLETTER SIGNUP COMPONENT
// ============================================

const NewsletterSignup: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="bg-gradient-to-br from-deep-black via-gray-900 to-deep-black rounded-2xl p-8 md:p-10 border border-gray-800 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl" />

            <div className="relative text-center">
                <div className="inline-flex items-center gap-2 bg-neon-green/20 text-neon-green px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-4">
                    <BookOpen size={14} />
                    Newsletter
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-space text-white mb-3">
                    Receba insights de growth toda semana
                </h3>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                    Estratégias de automação, vendas e CRM direto no seu email. Sem spam.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="flex-grow px-5 py-3.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3.5 bg-neon-green text-deep-black font-bold font-space uppercase tracking-wider text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(27,252,79,0.4)] hover:-translate-y-0.5"
                    >
                        Inscrever
                    </button>
                </form>

                <p className="text-xs text-gray-500 mt-4">
                    +2.500 profissionais de growth já assinam
                </p>
            </div>
        </div>
    );
};

// ============================================
// MAIN BLOGPOST COMPONENT
// ============================================

export const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.slug === slug);
    const [progress, setProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeHeadingId, setActiveHeadingId] = useState('');

    // Extract headings from content for TOC
    const tocItems = useMemo(() => {
        if (!post?.content) return [];

        const headingRegex = /<h([2-3])[^>]*>([^<]+)<\/h\1>/gi;
        const items: TOCItem[] = [];
        let match;

        while ((match = headingRegex.exec(post.content)) !== null) {
            const level = parseInt(match[1]);
            const text = match[2].trim();
            const id = text.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');
            items.push({ id, text, level });
        }

        return items;
    }, [post?.content]);

    // Add IDs to headings in content
    const processedContent = useMemo(() => {
        if (!post?.content) return '';

        let content = post.content;

        // Add IDs to h2 and h3 tags
        content = content.replace(/<h([2-3])([^>]*)>([^<]+)<\/h\1>/gi, (match, level, attrs, text) => {
            const id = text.trim().toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');
            return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
        });

        return content;
    }, [post?.content]);

    // Reading progress bar & scroll to top visibility
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight) {
                setProgress(totalScroll / windowHeight);
            }
            setShowScrollTop(totalScroll > 500);

            // Update active heading for TOC
            const headings = document.querySelectorAll('article h2, article h3');
            let currentActive = '';

            headings.forEach((heading) => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 150) {
                    currentActive = heading.id;
                }
            });

            setActiveHeadingId(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-deep-black text-white pt-[80px]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold font-space mb-4">Artigo não encontrado</h1>
                    <p className="text-gray-400 mb-6">O artigo que você está procurando não existe ou foi removido.</p>
                    <Button onClick={() => navigate('/blog')}>Voltar para o Blog</Button>
                </div>
            </div>
        );
    }

    const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <main className="bg-white min-h-screen pt-[80px]">
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-neon-green z-[100] transition-all duration-100"
                style={{ width: `${progress * 100}%` }}
            />

            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-deep-black/40 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover absolute inset-0 z-0 scale-105"
                />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16">
                    <Container className="max-w-5xl">
                        {/* Category Badge */}
                        <div className="mb-6">
                            <span className="inline-flex items-center gap-2 bg-neon-green text-deep-black px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-space text-white max-w-4xl leading-[1.1] mb-8 text-balance">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-mono">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center">
                                    <User size={14} className="text-neon-green" />
                                </div>
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Calendar size={14} className="text-gray-400" />
                                </div>
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                    <Clock size={14} className="text-gray-400" />
                                </div>
                                <span>{post.readTime} de leitura</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative bg-white">
                <Container className="max-w-7xl py-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content */}
                        <div className="flex-grow max-w-3xl">
                            {/* Back Button */}
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors mb-8 font-mono text-sm uppercase tracking-wider group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Voltar para o Blog
                            </Link>

                            {/* Excerpt/Lead */}
                            <div className="mb-10 relative">
                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-neon-green to-neon-green/0 rounded-full" />
                                <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed pl-6 italic">
                                    {post.excerpt}
                                </p>
                            </div>

                            {/* Article Content */}
                            <article className="
                                prose prose-lg max-w-none
                                prose-headings:font-space prose-headings:font-bold prose-headings:text-deep-black
                                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-100
                                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-neon-green prose-a:no-underline prose-a:font-medium hover:prose-a:underline
                                prose-strong:text-deep-black prose-strong:font-semibold
                                prose-ul:my-6 prose-ul:space-y-2
                                prose-li:text-gray-600 prose-li:leading-relaxed
                                prose-blockquote:border-l-4 prose-blockquote:border-neon-green prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-700
                                prose-table:border-collapse prose-table:w-full prose-table:my-8
                                prose-th:bg-gray-900 prose-th:text-white prose-th:font-space prose-th:font-bold prose-th:text-left prose-th:p-4 prose-th:text-sm prose-th:uppercase prose-th:tracking-wider
                                prose-td:p-4 prose-td:border-b prose-td:border-gray-200 prose-td:text-gray-600
                                prose-tr:hover:bg-gray-50 prose-tr:transition-colors
                                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                                prose-pre:bg-gray-900 prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto
                            ">
                                <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                            </article>

                            {/* Share Section */}
                            <div className="border-t border-gray-200 pt-8 mt-12">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <span className="font-bold font-space text-deep-black block mb-1">
                                            Gostou do conteúdo?
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            Compartilhe com sua rede
                                        </span>
                                    </div>
                                    <ShareButtons title={post.title} url={currentUrl} />
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="mt-12">
                                <NewsletterSignup />
                            </div>

                            {/* Keywords/Tags */}
                            {post.keywords && post.keywords.length > 0 && (
                                <div className="mt-10 pt-8 border-t border-gray-200">
                                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-3">
                                        Tags
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {post.keywords.map((keyword, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-72 flex-shrink-0">
                            <div className="lg:sticky lg:top-24 space-y-8">
                                {/* Table of Contents */}
                                {tocItems.length > 0 && (
                                    <TableOfContents items={tocItems} activeId={activeHeadingId} />
                                )}

                                {/* CTA Box */}
                                <div className="bg-gradient-to-br from-deep-black to-gray-900 rounded-2xl p-6 border border-gray-800">
                                    <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mb-4">
                                        <ArrowRight className="w-6 h-6 text-neon-green" />
                                    </div>
                                    <h4 className="font-bold font-space text-white mb-2">
                                        Quer ver na prática?
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Agende uma demo gratuita e veja como o Funnels pode transformar sua operação.
                                    </p>
                                    <Link
                                        to="/#demo"
                                        className="block w-full bg-neon-green text-deep-black text-center py-3 rounded-lg font-bold font-space uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,252,79,0.4)]"
                                    >
                                        Agendar Demo
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </Container>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <Section className="bg-gray-50 py-20 border-t border-gray-200">
                    <Container>
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <TechBadge className="bg-deep-black text-white mb-3">Relacionados</TechBadge>
                                <h2 className="text-3xl font-bold font-space text-deep-black">
                                    Continue lendo
                                </h2>
                            </div>
                            <Link
                                to="/blog"
                                className="hidden md:flex items-center gap-2 text-gray-500 hover:text-neon-green transition-colors font-mono text-sm uppercase tracking-wider group"
                            >
                                Ver todos
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map(related => (
                                <Link
                                    to={`/blog/${related.slug}`}
                                    key={related.id}
                                    className="group block bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={related.image}
                                            alt={related.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 left-4 bg-deep-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                                            {related.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-mono">
                                                <Clock size={12} />
                                                {related.readTime}
                                            </div>
                                            <h3 className="text-lg font-bold font-space mb-3 leading-tight group-hover:text-neon-green transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {related.excerpt}
                                            </p>
                                        </div>
                                        <span className="mt-4 text-xs font-bold font-mono uppercase text-gray-400 flex items-center gap-2 group-hover:text-neon-green transition-colors">
                                            Ler Artigo
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Scroll to Top Button */}
            <ScrollToTop show={showScrollTop} />
        </main>
    );
};
