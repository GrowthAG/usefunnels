
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Container } from '../components/ui';
import { LEGAL_CONTENT } from '../constants';

export const Legal = () => {
    const { type } = useParams();
    const doc = type === 'termos' ? LEGAL_CONTENT.termos : type === 'privacidade' ? LEGAL_CONTENT.privacidade : null;

    if (!doc) return <Navigate to="/" replace />;

    return (
        <main className="pt-[140px] min-h-screen bg-white text-deep-black">
            <Container className="max-w-4xl">
                <h1 className="text-4xl font-bold font-space mb-8 text-balance">{doc.title}</h1>
                <div className="prose prose-lg text-gray-600 font-inter max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: doc.content }} />
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 mb-20">
                    <Link to="/" className="text-neon-green font-bold font-mono hover:underline">← Voltar para Home</Link>
                </div>
            </Container>
        </main>
    );
};
