
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, TechBadge } from '../components/ui';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export const Blog = () => (
    <main className="pt-[140px] min-h-screen bg-light-gray pb-20">
        <Container>
            <div className="text-center mb-16">
                <TechBadge className="bg-black text-white mb-4 border-none">CONHECIMENTO</TechBadge>
                <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-balance text-deep-black tracking-tight">Blog & Recursos</h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-balance font-light">
                    Estratégias validadas de growth, vendas e automação para escalar sua operação.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-xl hover:border-neon-green transition-all group cursor-pointer flex flex-col h-full relative"
                    >
                        <div className="h-56 bg-gray-100 relative overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                                {post.category}
                            </div>
                        </div>

                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-mono uppercase">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="w-px h-3 bg-gray-300"></span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold font-space mb-3 leading-tight group-hover:text-neon-green transition-colors text-balance text-deep-black">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="flex items-center gap-2 text-xs font-bold text-deep-black uppercase pt-4 border-t border-gray-100 mt-auto">
                                Ler Artigo
                                <ArrowRight size={14} className="text-neon-green transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>
                ))}
            </div>
        </Container>
    </main>
);
