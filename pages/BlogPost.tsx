import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, TechBadge } from '../components/ui';
import { BLOG_POSTS } from '../components/data/blogPosts';
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
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
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Erro ao copiar:', err);
        }
    };

    const handleShare = (platform: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        let shareLink = '';

        switch(platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
                break;
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
                break;
            case 'linkedin':
                shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
                break;
            case 'whatsapp':
                shareLink = `https://wa.me/?text=${shareTitle}%20${shareUrl}`;
                break;
        }

        window.open(shareLink, '_blank', 'width=600,height=400');
    };

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={handleShare('facebook')}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no Facebook"
                title="Compartilhar no Facebook"
            >
                <FacebookIcon />
            </button>
            <button
                onClick={handleShare('twitter')}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#000000] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no X (Twitter)"
                title="Compartilhar no X"
            >
                <TwitterIcon />
            </button>
            <button
                onClick={handleShare('linkedin')}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no LinkedIn"
                title="Compartilhar no LinkedIn"
            >
                <LinkedinIcon />
            </button>
            <button
                onClick={handleShare('whatsapp')}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Compartilhar no WhatsApp"
                title="Compartilhar no WhatsApp"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </button>
            <button
                onClick={handleCopy}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-neon-green hover:text-deep-black transition-all duration-300 hover:scale-110 relative"
                aria-label="Copiar link"
                title={copied ? "Link copiado!" : "Copiar link"}
            >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        Copiado!
                    </span>
                )}
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="max-w-md mx-auto text-center">
                <span className="inline-block bg-neon-green/10 text-neon-green px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border border-neon-green/20">
                    Newsletter
                </span>

                <h3 className="text-xl md:text-2xl font-bold font-space text-deep-black mb-2">
                    Não perca nenhum conteúdo
                </h3>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Receba estratégias validadas de growth, automação e vendas toda semana.
                </p>

                <form className="flex flex-col gap-2.5">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        required
                        className="px-4 py-3 text-sm rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        required
                        className="px-4 py-3 text-sm rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-deep-black text-white font-bold font-space uppercase tracking-wider text-sm rounded-lg transition-all duration-300 hover:bg-gray-800"
                    >
                        Receber Insights
                    </button>
                    <p className="text-[10px] text-gray-500 mt-1">
                        Cancele quando quiser. Sem spam.
                    </p>
                </form>
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

        // Wrap tables in responsive container
        content = content.replace(/<table/gi, '<div class="overflow-x-auto my-8 rounded-lg border border-gray-100 shadow-sm"><table');
        content = content.replace(/<\/table>/gi, '</table></div>');

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
    // Construir URL absoluta correta para compartilhamento
    const getAbsoluteUrl = () => {
        if (typeof window === 'undefined') return '';
        const baseUrl = window.location.hostname === 'localhost'
            ? 'https://usefunnels.io'
            : window.location.origin;
        return `${baseUrl}/blog/${slug}`;
    };
    const currentUrl = getAbsoluteUrl();

    return (
        <main className="bg-white min-h-screen pt-[80px]">
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-neon-green z-[100] transition-all duration-100"
                style={{ width: `${progress * 100}%` }}
            />

            {/* Reading Progress Percentage - Desktop Only */}
            <div className="fixed top-20 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-mono text-gray-600 shadow-lg z-[100] hidden md:block">
                {Math.round(progress * 100)}%
            </div>

            {/* Hero Section */}
            <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/70 to-deep-black/30 z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    loading="eager"
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
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-space text-white max-w-4xl leading-[1.15] md:leading-[1.1] mb-8 text-balance tracking-normal md:tracking-tight">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-gray-300 text-sm font-mono">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/691a5368c656aa71361faa04.jpg"
                                    alt="Giulliano Alves"
                                    className="w-8 h-8 rounded-full object-cover border border-neon-green/30"
                                />
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
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors mb-4 font-mono text-sm uppercase tracking-wider group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Voltar para o Blog
                            </Link>

                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                                <Link to="/" className="hover:text-neon-green transition-colors">Home</Link>
                                <span>/</span>
                                <Link to="/blog" className="hover:text-neon-green transition-colors">Blog</Link>
                                <span>/</span>
                                <span className="text-gray-700 font-medium">{post.category}</span>
                            </nav>

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
                                prose-a:text-deep-black prose-a:font-bold prose-a:no-underline prose-a:border-b-2 prose-a:border-neon-green/50 hover:prose-a:border-neon-green hover:prose-a:text-deep-black prose-a:transition-colors
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

                            {/* Author Bio */}
                            <div className="border-t border-gray-200 pt-8 mt-12">
                                <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-lg border border-gray-100">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src="https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/691a5368c656aa71361faa04.jpg"
                                            alt="Giulliano Alves"
                                            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-neon-green/30 flex-shrink-0"
                                        />
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-lg md:text-xl font-bold font-space text-deep-black">
                                                    {post.author}
                                                </h3>
                                                <span className="px-2 py-0.5 bg-neon-green/10 text-neon-green text-[10px] font-bold font-mono uppercase rounded border border-neon-green/20">
                                                    Autor
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Especialista em automação de marketing e CRM. Ajuda empresas a escalarem suas vendas através de estratégias práticas de growth e tecnologia.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

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

                        {/* Sidebar - Desktop Only */}
                        <aside className="hidden lg:block lg:w-72 flex-shrink-0">
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
                                            loading="lazy"
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
