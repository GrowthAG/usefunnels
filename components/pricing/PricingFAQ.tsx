import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

export const PricingFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "Qual plano é o ideal para o meu negócio?",
            answer: "Starter é perfeito para startups e freelancers com até 3 usuários. Growth é o mais escolhido por pequenas empresas e e-commerces que precisam de WhatsApp e automação avançada. Scale é ideal para agências e empresas em rápido crescimento. Enterprise oferece soluções customizadas para grandes organizações."
        },
        {
            question: "Posso mudar de plano a qualquer momento?",
            answer: "Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. O upgrade é imediato e você paga apenas a diferença proporcional. No downgrade, as mudanças entram em vigor no próximo ciclo de cobrança."
        },
        {
            question: "Como funcionam os custos adicionais?",
            answer: "Nosso modelo é transparente: você paga apenas pelo que usa além do plano base. Por exemplo, automações avançadas custam R$ 0,0525 cada, e-mails enviados custam R$ 0,003375 cada. Todos os custos são mostrados em tempo real no seu dashboard antes de qualquer cobrança."
        },
        {
            question: "O que acontece se eu exceder o limite de contatos?",
            answer: "Se você atingir 90% do limite de contatos, enviaremos um alerta. Você pode fazer upgrade para um plano maior ou adquirir pacotes adicionais de contatos. Não bloqueamos seu acesso - você tem tempo para decidir a melhor opção."
        },
        {
            question: "Existe garantia de reembolso?",
            answer: "Sim! Oferecemos garantia de reembolso total em até 7 dias após a primeira assinatura, conforme o Código de Defesa do Consumidor. Sem perguntas, sem complicações."
        },
        {
            question: "Quais formas de pagamento vocês aceitam?",
            answer: "Aceitamos cartões de crédito (Visa, Mastercard, Amex, Elo), PIX e boleto bancário. Para planos anuais e Enterprise, também oferecemos faturamento por nota fiscal."
        },
        {
            question: "Preciso de conhecimento técnico para usar o FUNNELS?",
            answer: "Não! O FUNNELS foi projetado para ser intuitivo e fácil de usar. Oferecemos onboarding completo, tutoriais em vídeo, base de conhecimento e suporte via chat. Para planos Scale e Enterprise, oferecemos treinamento ao vivo personalizado."
        },
        {
            question: "Quanto custa o WhatsApp Business API?",
            answer: "O acesso ao WhatsApp Business está incluído nos planos Growth, Scale e Enterprise. Você paga apenas a tarifa da Meta por mensagem enviada (aproximadamente R$ 0,04 por mensagem). Não cobramos nenhuma taxa adicional além da tarifa oficial."
        },
        {
            question: "Posso cancelar minha assinatura a qualquer momento?",
            answer: "Sim, você pode cancelar a qualquer momento, sem taxas ou multas. Seus dados permanecem acessíveis até o final do período pago, e você pode exportar todas as suas informações antes do término."
        },
        {
            question: "Vocês oferecem desconto para ONGs ou instituições educacionais?",
            answer: "Sim! Oferecemos descontos especiais de até 40% para organizações sem fins lucrativos e instituições de ensino. Entre em contato com nossa equipe de vendas para solicitar o desconto."
        }
    ];

    return (
        <div className="mt-24 mb-16 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">Perguntas Frequentes</h2>
                <p className="text-gray-600 text-lg">Tudo que você precisa saber sobre nossos planos e preços</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-sm overflow-hidden bg-white hover:border-neon-green/30 transition-all duration-300"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                        >
                            <span className="font-semibold text-gray-900 group-hover:text-neon-green transition-colors text-base md:text-lg">
                                {faq.question}
                            </span>
                            <svg
                                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-neon-green' : ''
                                    }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center p-8 bg-gray-50 rounded-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-2">Ainda tem dúvidas?</h3>
                <p className="text-gray-600 mb-4">Nossa equipe está pronta para ajudar você a escolher o melhor plano</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://wa.me/5548998397676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neon-green text-deep-black font-bold rounded-sm hover:bg-opacity-90 transition-all"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Falar no WhatsApp
                    </a>
                    <a
                        href="mailto:contato@usefunnels.io"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-deep-black text-deep-black font-bold rounded-sm hover:bg-deep-black hover:text-white transition-all"
                    >
                        Enviar E-mail
                    </a>
                </div>
            </div>
        </div>
    );
};
