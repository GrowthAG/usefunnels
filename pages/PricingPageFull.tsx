
import React, { useState } from 'react';
import { Container, Section, Button, TechBadge } from '../components/ui';
import { Pricing, PricingTable } from '../components/Pricing';
import { SavingsCalculator } from '../components/SavingsCalculator';

// FAQ Data
const FAQ_ITEMS = [
    {
        question: "Existe fidelidade ou contrato mínimo?",
        answer: "Não! Você pode cancelar a qualquer momento, sem multas ou taxas de cancelamento. Acreditamos que você fica porque quer, não porque está preso."
    },
    {
        question: "Como funciona o período de teste?",
        answer: "Oferecemos 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas."
    },
    {
        question: "Posso mudar de plano depois?",
        answer: "Sim! Você pode fazer upgrade ou downgrade a qualquer momento. O valor é ajustado proporcionalmente no próximo ciclo de cobrança."
    },
    {
        question: "O que são os 'custos adicionais'?",
        answer: "São custos de uso variável como envio de e-mails, WhatsApp API e recursos de IA. Esses custos são repassados diretamente do provedor, sem markup. A maioria dos clientes gasta menos de R$50/mês adicional."
    },
    {
        question: "Vocês oferecem suporte em português?",
        answer: "Sim! Nossa equipe é 100% brasileira e oferecemos suporte em português via chat, e-mail e telefone (planos Scale e Enterprise)."
    },
    {
        question: "Como funciona a migração dos meus dados?",
        answer: "Oferecemos migração gratuita assistida. Nossa equipe importa seus contatos, pipelines e automações das suas ferramentas atuais."
    },
    {
        question: "Qual a diferença entre cobrança mensal e anual?",
        answer: "Na cobrança anual você economiza aproximadamente 17% (equivalente a 2 meses grátis). O pagamento é feito uma única vez por ano."
    },
    {
        question: "Posso adicionar mais usuários além do limite do plano?",
        answer: "Sim! Usuários adicionais custam R$97/mês por usuário. Ou você pode fazer upgrade para um plano superior com mais usuários inclusos."
    }
];

// Comparison with competitors
const COMPARISON_DATA = [
    { feature: "Custo médio mensal", funnels: "R$ 697", competitor: "R$ 1.500+" },
    { feature: "Ferramentas incluídas", funnels: "Tudo em um", competitor: "3-5 assinaturas" },
    { feature: "Tempo de setup", funnels: "48 horas", competitor: "2-4 semanas" },
    { feature: "Suporte em português", funnels: "✓", competitor: "Limitado" },
    { feature: "WhatsApp nativo", funnels: "✓", competitor: "Integração extra" },
    { feature: "IA incluída", funnels: "✓", competitor: "Addon pago" },
];

interface PricingPageFullProps {
    onBookDemo: () => void;
    onCheckout?: (url: string) => void;
}

export const PricingPageFull: React.FC<PricingPageFullProps> = ({ onBookDemo, onCheckout }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="pt-[80px] bg-gray-50">
            {/* HERO SECTION */}
            <Section className="bg-deep-black text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_rgba(27,252,79,0.15),_transparent_50%)] pointer-events-none"></div>
                <Container className="text-center relative z-10">
                    <TechBadge className="bg-neon-green/20 text-neon-green border-neon-green/30 mb-6 mx-auto">
                        PREÇOS TRANSPARENTES
                    </TechBadge>
                    <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 leading-tight">
                        Planos que cabem no seu
                        <span className="text-neon-green block md:inline"> orçamento</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        Sem surpresas, sem taxas escondidas. Economize até 80% consolidando suas ferramentas de marketing e vendas.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-gray-400 mt-10">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Sem cartão para testar</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>7 dias de garantia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-neon-green" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Cancele quando quiser</span>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* PRICING CARDS */}
            <Section className="bg-gray-50 py-16 md:py-24" id="planos">
                <Container>
                    <Pricing onBookDemo={onBookDemo} onCheckout={onCheckout} />
                </Container>
            </Section>

            {/* SAVINGS CALCULATOR */}
            <Section className="bg-white py-16 md:py-24 border-y border-gray-200">
                <Container>
                    <SavingsCalculator variant="full" />
                </Container>
            </Section>

            {/* COMPARISON TABLE */}
            <Section className="bg-gray-50 py-16 md:py-24">
                <Container>
                    <div className="text-center mb-12">
                        <TechBadge className="bg-deep-black text-white mb-4 mx-auto">COMPARATIVO</TechBadge>
                        <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
                            FUNNELS vs. Múltiplas Ferramentas
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Veja por que consolidar é a escolha inteligente
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                        {/* Header */}
                        <div className="grid grid-cols-3 bg-gray-100 border-b border-gray-200">
                            <div className="p-4 font-bold text-gray-600"></div>
                            <div className="p-4 text-center font-bold font-space text-lg bg-neon-green/10 border-x border-neon-green/20">
                                <span className="text-neon-green">FUNNELS</span>
                            </div>
                            <div className="p-4 text-center font-bold text-gray-500">
                                Ferramentas Separadas
                            </div>
                        </div>

                        {/* Rows */}
                        {COMPARISON_DATA.map((row, idx) => (
                            <div
                                key={idx}
                                className={`grid grid-cols-3 border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                            >
                                <div className="p-4 text-sm font-medium text-gray-700">
                                    {row.feature}
                                </div>
                                <div className="p-4 text-center border-x border-gray-100 bg-neon-green/5">
                                    <span className={`font-bold ${row.funnels === '✓' ? 'text-neon-green text-xl' : 'text-deep-black'}`}>
                                        {row.funnels}
                                    </span>
                                </div>
                                <div className="p-4 text-center text-gray-500">
                                    {row.competitor}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* DETAILED FEATURE TABLE */}
            <Section className="bg-white py-16 md:py-24">
                <Container>
                    <PricingTable />
                </Container>
            </Section>

            {/* FAQ SECTION */}
            <Section className="bg-gray-50 py-16 md:py-24 border-t border-gray-200">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-gray-500">
                            Tudo o que você precisa saber sobre nossos planos
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {FAQ_ITEMS.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-bold text-deep-black pr-4">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FINAL CTA */}
            <Section className="bg-deep-black text-white py-20 md:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(27,252,79,0.2),_transparent_50%)] pointer-events-none"></div>
                <Container className="text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold font-space mb-6">
                        Pronto para economizar?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10">
                        Junte-se a mais de 800 empresas que já consolidaram suas ferramentas com o FUNNELS
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className="min-w-[200px] shadow-[0_0_30px_rgba(27,252,79,0.2)]"
                            onClick={() => window.location.href = '/#precos'}
                        >
                            Começar Agora
                        </Button>
                        <Button
                            variant="outline"
                            className="min-w-[200px]"
                            onClick={onBookDemo}
                        >
                            Agendar Demo
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">800+</span>
                            <span>Empresas ativas</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-gray-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">4.8</span>
                            <span>Avaliação média</span>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-gray-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">48h</span>
                            <span>Setup completo</span>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
};

export default PricingPageFull;
