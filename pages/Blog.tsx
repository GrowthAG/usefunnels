
import React from 'react';
import { Container, TechBadge } from '../components/ui';
import { BLOG_POSTS } from '../constants';

export const Blog = () => (
    <main className="pt-[140px] min-h-screen bg-light-gray">
        <Container>
            <div className="text-center mb-16">
                <TechBadge className="bg-black text-white mb-4">CONHECIMENTO</TechBadge>
                <h1 className="text-5xl font-bold font-space mb-4 text-balance">Blog & Recursos</h1>
                <p className="text-gray-600 text-balance">Estratégias validadas de growth e vendas.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => (
                    <a
                        key={post.id}
                        href="https://usefunnels.io/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-sm overflow-hidden border border-gray-200 hover:shadow-xl hover:border-neon-green transition-all group cursor-pointer flex flex-col h-full"
                    >
                        <div className="h-48 bg-gray-100 relative overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase">{post.category}</div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold font-space mb-3 leading-tight group-hover:text-green-700 transition-colors text-balance">{post.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold text-deep-black uppercase mt-4 pt-4 border-t border-gray-100">
                                Ler Artigo <span className="text-neon-green transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Container>
    </main>
);
