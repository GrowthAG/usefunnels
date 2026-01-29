
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Section, Button, TechBadge } from '../components/ui';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = BLOG_POSTS.find(p => p.slug === slug);
    const [progress, setProgress] = useState(0);

    // Reading progress bar
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight) {
                const scrolled = totalScroll / windowHeight;
                setProgress(scrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-deep-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
                    <Button onClick={() => navigate('/blog')}>Voltar para o Blog</Button>
                </div>
            </div>
        );
    }

    const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

    return (
        <main className="bg-white min-h-screen pt-[80px]">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-neon-green z-[100] transition-all duration-100" style={{ width: `${progress * 100}%` }} />

            {/* Header / Hero */}
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover absolute inset-0 z-0" />

                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
                    <TechBadge className="mb-6 bg-neon-green text-deep-black font-bold border-none">{post.category}</TechBadge>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-space text-white max-w-4xl leading-tight mb-8 text-balance">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 text-sm md:text-base font-mono">
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-neon-green" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-neon-green" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-neon-green" />
                            <span>{post.readTime} leitura</span>
                        </div>
                    </div>
                </div>
            </div>

            <Container className="max-w-4xl py-12 relative">
                {/* Back Button */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-neon-green transition-colors mb-8 font-mono text-sm uppercase font-bold group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Voltar para o Blog
                </Link>

                {/* Content */}
                <article className="prose prose-lg max-w-none prose-headings:font-space prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-neon-green prose-strong:text-deep-black">
                    <div className="text-xl font-medium text-gray-800 mb-8 leading-relaxed border-l-4 border-neon-green pl-6 italic">
                        {post.excerpt}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                </article>

                {/* Share Section */}
                <div className="border-t border-b border-gray-100 py-8 my-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <span className="font-bold font-space text-lg text-deep-black">Compartilhe este artigo:</span>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors duration-300">
                            <Facebook size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300">
                            <Twitter size={20} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors duration-300">
                            <Linkedin size={20} />
                        </button>
                    </div>
                </div>
            </Container>

            {/* Related Posts */}
            <Section className="bg-light-gray py-20 border-t border-gray-200">
                <Container>
                    <h2 className="text-3xl font-bold font-space mb-10 text-deep-black">Artigos Relacionados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map(related => (
                            <Link to={`/blog/${related.slug}`} key={related.id} className="group block bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all h-full flex flex-col">
                                <div className="h-48 overflow-hidden relative">
                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-deep-black text-white px-2 py-1 text-[10px] font-mono font-bold uppercase">{related.category}</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold font-space mb-3 leading-tight group-hover:text-neon-green transition-colors line-clamp-2">{related.title}</h3>
                                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{related.excerpt}</p>
                                    </div>
                                    <span className="text-xs font-bold font-mono uppercase text-gray-400 flex items-center gap-2 group-hover:text-deep-black transition-colors">
                                        Ler Artigo <ArrowLeft size={12} className="rotate-180" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
};
