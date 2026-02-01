import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container, TechBadge } from '../components/ui';
import { BLOG_POSTS } from '../components/data/blogPosts';
import { ArrowRight, Clock, Calendar, Search, Filter, BookOpen } from 'lucide-react';

// Get unique categories from posts
const getAllCategories = () => {
    const categories = BLOG_POSTS.map(post => post.category);
    return ['Todos', ...Array.from(new Set(categories))];
};

export const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const categories = getAllCategories();

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const matchesSearch = searchQuery === '' ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.keywords?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Separate featured post
    const featuredPost = filteredPosts.find(p => p.featured);
    const regularPosts = filteredPosts.filter(p => !p.featured || p.id !== featuredPost?.id);

    return (
        <main className="pt-[100px] min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 border-b border-gray-100">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-deep-black text-white px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-6">
                            <BookOpen size={14} />
                            Blog & Updates
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 text-balance text-deep-black tracking-normal md:tracking-tight leading-[1.15] md:leading-[1.1]">
                            Conteúdo para Escalar<br />
                            <span className="text-neon-green">
                                Sua Operação
                            </span>
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-balance leading-relaxed tracking-normal">
                            Estratégias de vendas, automação e growth. Sem teoria, só prática.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="mt-12 max-w-2xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Search Input */}
                            <div className="relative flex-grow">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar artigos..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all text-gray-800 placeholder-gray-400"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none w-full sm:w-auto pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all text-gray-800 cursor-pointer"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Results Count */}
                        <p className="text-sm text-gray-500 mt-4 text-center">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'Todos' && searchQuery === '' && (
                <section className="py-12 md:py-16 bg-white">
                    <Container>
                        <div className="flex items-center gap-3 mb-8">
                            <TechBadge className="bg-neon-green text-deep-black border-none">🔥 Mais Lido</TechBadge>
                        </div>

                        <Link
                            to={`/blog/${featuredPost.slug}`}
                            className="group block bg-gradient-to-br from-gray-900 to-deep-black rounded-2xl overflow-hidden relative"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 lg:block hidden" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent lg:hidden" />
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                                    <div className="relative">
                                        <span className="inline-block bg-white/10 text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded mb-4">
                                            {featuredPost.category}
                                        </span>

                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-space text-white mb-4 leading-snug tracking-normal md:tracking-tight group-hover:text-neon-green transition-colors">
                                            {featuredPost.title}
                                        </h2>

                                        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center gap-6 text-gray-500 text-sm font-mono mb-6">
                                            <span className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                {featuredPost.date}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock size={14} />
                                                {featuredPost.readTime}
                                            </span>
                                        </div>

                                        <span className="inline-flex items-center gap-2 text-neon-green font-bold font-space uppercase tracking-wider text-sm group-hover:gap-3 transition-all">
                                            Ler Artigo
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative border */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-emerald-400 to-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </Link>
                    </Container>
                </section>
            )}

            {/* Posts Grid */}
            <section className="py-12 md:py-16 bg-gray-50">
                <Container>
                    {/* Section Header */}
                    {(featuredPost && selectedCategory === 'Todos' && searchQuery === '') && (
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-2xl font-bold font-space text-deep-black">
                                Mais Artigos
                            </h2>
                            <span className="text-sm text-gray-500 font-mono">
                                {regularPosts.length} artigos
                            </span>
                        </div>
                    )}

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold font-space text-deep-black mb-2 tracking-normal">
                                Nenhum resultado encontrado
                            </h3>
                            <p className="text-gray-500 mb-6 max-w-md mx-auto leading-relaxed">
                                Não encontramos artigos com esses filtros.<br />
                                Tente buscar por outros termos ou explore nossos artigos mais recentes.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
                                className="inline-flex items-center gap-2 bg-neon-green text-deep-black px-6 py-3 rounded-lg font-bold font-space uppercase tracking-wider text-sm transition-all hover:shadow-lg"
                            >
                                Limpar Filtros
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {(selectedCategory === 'Todos' && searchQuery === '' ? regularPosts : filteredPosts).map(post => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full relative"
                                >
                                    {/* Image */}
                                    <div className="h-52 bg-gray-100 relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 left-4 bg-deep-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded">
                                            {post.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        {/* Meta */}
                                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-mono uppercase">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {post.date}
                                            </span>
                                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold font-space mb-3 leading-snug tracking-normal group-hover:text-deep-black transition-colors text-deep-black line-clamp-2 underline decoration-transparent group-hover:decoration-neon-green decoration-2 underline-offset-4">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-xs font-bold text-deep-black uppercase pt-4 border-t border-gray-100 group-hover:border-neon-green transition-colors">
                                            Ler Artigo
                                            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform text-neon-green" />
                                        </div>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </Link>
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 md:py-24 bg-white border-t border-gray-100">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider mb-6">
                            <BookOpen size={14} />
                            Newsletter
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-deep-black tracking-normal md:tracking-tight">
                            Não perca nenhum conteúdo
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">
                                <strong className="text-deep-black">+2.500 profissionais</strong> já recebem
                            </p>
                        </div>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
                            Receba estratégias validadas de growth, automação e vendas toda semana.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="flex-grow px-5 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-neon-green focus:ring-2 focus:ring-neon-green/20 transition-all"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3.5 bg-deep-black text-white font-bold font-space uppercase tracking-wider text-sm rounded-xl transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5"
                            >
                                Receber Insights
                            </button>
                        </form>

                        <p className="text-xs text-gray-400 mt-4">
                            Cancele quando quiser. Sem spam.
                        </p>
                    </div>
                </Container>
            </section>
        </main>
    );
};
