

import { Feature, Testimonial, ToolReplacement } from './types';

export const ASSETS = {
    logoBlack: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/69139063bf6977831eeff5bb.webp",
    logoWhite: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68caa915f411f36d4ec3d0fa.png",
    screenshots: {
        dashboard2: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ffea09edac701238582a57.png",

        // Mapped from user request
        socialPlanner: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff88f1788aedb9db078766.png",
        websites: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6b6843e05d8690d87f8c.png",
        emailMarketing: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff88f1788aed355307876d.png",
        automationsAI: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff88f1788aed9a1d078758.png",
        agents: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6928ab226de41a0b4ed5.png", // Headline image
        aiBuilder: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff68cb9d3acf04072af2fc.png",
        crmMobile: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6765a6ad638958e67183.png",
        marketplace: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e871be35e86931aef8f921.png",

        // Fallbacks
        workflow: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff88f1788aedb9db078766.png",
        calendar: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12d79c184ebfd25098.png",
        email: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff88f1788aed9a1d078758.png",
        pageBuilder: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6b6843e05d8690d87f8c.png",
        crm: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6765a6ad638958e67183.png",
        forms: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6928ab226de41a0b4ed5.png",
        analytics: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff68cb9d3acf04072af2fc.png",
        mobile: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6765a6ad638958e67183.png",
    }
};

export const FEATURES: (Feature & { id: string, description: string, benefits: string[], detailImage: string })[] = [
    {
        id: "crm",
        title: "CRM & Pipeline",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb1226a5e26670364b0f.png",
        description: "Acompanhe leads, negociações e receita prevista. Tudo em uma única tela.",
        benefits: ["Pipeline Kanban Visual", "Follow-up Automático", "Classificação de Leads", "WhatsApp Integrado"],
        detailImage: ASSETS.screenshots.crmMobile
    },
    {
        id: "automacao",
        title: "Automação de Fluxos",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb1226a5e24571364b67.png",
        description: "Crie fluxos que qualificam leads e agendam reuniões enquanto voê dorme.",
        benefits: ["Construtor de Fluxos Visual", "Gatilhos por Comportamento", "SMS e E-mail", "Distribuição de Leads"],
        detailImage: "/assets/screenshots/feature-automation.png"
    },
    {
        id: "email",
        title: "E-mail Marketing",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb1226a5e248d6364b9b.png",
        description: "Envie campanhas que chegam na caixa de entrada, não no spam.",
        benefits: ["Editor Arrastar-e-Soltar", "Testes A/B Automáticos", "Segmentação por Tags", "Análise de Entregabilidade"],
        detailImage: ASSETS.screenshots.emailMarketing
    },
    {
        id: "paginas",
        title: "Construtor de Páginas",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12af128ed272e697da.png",
        description: "Publique páginas de alta conversão em minutos. Sem programadores.",
        benefits: ["Templates Prontos", "Hospedagem Inclusa", "Carregamento Rápido", "Domínio Próprio"],
        detailImage: ASSETS.screenshots.websites
    },
    // Removed Social Planner to maintain 9-grid layout
    {
        id: "analises",
        title: "Análises Avançadas",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12af128e041ae697db.png",
        description: "Saiba exatamente qual anúncio trouxe cada venda.",
        benefits: ["Dashboards em Tempo Real", "Rastreamento UTM", "Taxas de Conversão", "Gravação de Chamadas"],
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e871bedf76fee673049569.png"
    },
    {
        id: "formularios",
        title: "Formulários Personalizados",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb125fb5bde4cf85b60c.png",
        description: "Crie formulários que convertem visitantes em leads qualificados.",
        benefits: ["Lógica Condicional", "Upload de Arquivos", "Múltiplas Etapas", "Funciona em Qualquer Site"],
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b73eeb3ae83b3dca5fe41.png"
    },
    {
        id: "chatbot",
        title: "Chat Bot + IA",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dd95c0df57373f1b47b75a.png",
        description: "Use IA para responder dúvidas e agendar reuniões 24h por dia.",
        benefits: ["Respostas em Segundos", "Treinado na Sua Empresa", "Transbordo Humano", "Web, Insta e Facebook"],
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b726cf7a877358425c7d1.png"
    },
    {
        id: "whatsapp",
        title: "WhatsApp API Oficial",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfa6f5fb5bd46f08448a8.png",
        highlight: true,
        description: "Envie mensagens em massa sem perder seu número.",
        benefits: ["Disparo em Massa", "Múltiplos Atendentes", "Respostas Automáticas", "Verificação Oficial (Green Tick)"],
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6b5d788aed885703ced4.png"
    },
    {
        id: "calendarios",
        title: "Calendários e Agendamentos",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12d79c184ebfd25098.png",
        description: "Elimine o 'vai e vem' de horários. Deixe o cliente agendar sozinho.",
        benefits: ["Sincroniza Google/Outlook", "Lembretes Automáticos", "Cobrança no Agendamento", "Distribuição para Equipe"],
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b73c2a74ce650758dde75.png"
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Fábio",
        company: "BLDN Digital",
        quote: "Automação inteligente que gera novas oportunidades todos os dias. A implementação foi incrivelmente rápida.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc97c03e1ce865d98b941e.png"
    },
    {
        name: "Daniel Lestinge",
        company: "BlueForecasts",
        quote: "Resultados acelerados com o FUNNELS. Conseguimos triplicar nosso alcance em menos de 3 meses.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc981c8da17338918c617c.png"
    },
    {
        name: "Yves Mariano",
        company: "Wysion",
        quote: "Totalmente integrado e eficiente. Substituímos 5 ferramentas diferentes apenas pelo FUNNELS.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc984a3e1ce8a0628ba669.png"
    },
    {
        name: "Amanda Aguiar",
        company: "Lindoya",
        quote: "O FUNNELS transformou nosso gerenciamento de leads. A equipe de vendas nunca foi tão produtiva.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc986e8da173cd2a8c691b.png"
    }
];

export const CLIENT_LOGOS = [
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68d4a17352038776d98d0b73.png",
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68d4a09bee89a7c04e209d9d.png",
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68d4a24a2c411b69c9cd4c26.svg",
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc4b0c380f7835190650bd.png",
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc4d57a969ba7d9d0e5a7d.png",
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc4d573f9300829bcc9f33.png",
    "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc4dad6027c20749ed1002.png"
];

export const TOOLS_REPLACED: ToolReplacement[] = [
    { name: "Mailchimp", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbceae13a4258b1f172d.png" },
    { name: "ActiveCampaign", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd1c4c00ec79e22f48.png" },
    { name: "HubSpot", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2363ee02357ace3c.png" },
    { name: "Pipedrive", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5bbcd2cc261ae64c108e0.png" },
    { name: "Salesforce", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b976ce37bec6554c8ed1.png" },
    { name: "Calendly", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b8bf06b06d505ec0c4ff.png" },
    { name: "Zapier", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b7fe2cc261ce91c0a6ba.png" },
    { name: "Typeform", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/69274eb86203af23da392a1c.png" },
    { name: "Hotjar", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b6c11c4c00da8fe1b8c6.png" },
    { name: "Unbounce", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b707b0b7213ee2c39d9e.png" },
    { name: "Leadpages", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b51db0b72160fdc359b3.png" },
    { name: "Intercom", logo: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e5b6c106b06d91abc09814.png" }
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "Como escalar sua operação de vendas com IA em 2025",
        category: "Growth",
        image: ASSETS.screenshots.dashboard2,
        excerpt: "Descubra como empresas estão triplicando o faturamento usando automação inteligente."
    },
    {
        id: 2,
        title: "O fim dos CRMs tradicionais: O futuro é integrado",
        category: "Tecnologia",
        image: ASSETS.screenshots.crm,
        excerpt: "Por que manter dados em silos está matando sua taxa de conversão."
    },
    {
        id: 3,
        title: "Automação de WhatsApp: Guia Definitivo",
        category: "Automação",
        image: ASSETS.screenshots.crmMobile,
        excerpt: "Como configurar fluxos que vendem 24/7 sem risco de bloqueio."
    }
];

export const SOCIAL_LINKS = {
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/usefunnels.io/",
    linkedin: "https://www.linkedin.com/company/105143227/",
    youtube: "https://www.youtube.com/@usefunnels"
};

export const LEGAL_LINKS = {
    terms: "/legal/termos",
    privacy: "/legal/privacidade"
};

export const LEGAL_CONTENT = {
    termos: {
        title: "Termos de Serviço",
        content: `
            <p class="mb-4 text-sm text-gray-500"><strong>Última atualização: 01 de outubro de 2025</strong></p>
            <p class="mb-6">Bem-vindo à Funnels, uma plataforma da <strong>RevHackers Solutions Digital LTDA - ME</strong> (CNPJ 16.746.009/0001-86). Estes Termos de Serviço (“Termos”) regem o uso do nosso site, aplicativos e serviços (“Serviços”).</p>
            <p class="mb-6">Ao acessar ou utilizar nossos Serviços, você concorda com estes Termos e com nossa Política de Privacidade. Caso não concorde, recomendamos não utilizar os Serviços.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">1. Definições</h3>
            <ul class="list-disc pl-5 mb-6 space-y-2">
                <li><strong>Conta:</strong> sua conta registrada para uso dos Serviços.</li>
                <li><strong>Conteúdo:</strong> qualquer texto, imagem, vídeo, áudio ou outro material publicado ou exibido.</li>
                <li><strong>Usuário:</strong> qualquer indivíduo que acesse ou utilize os Serviços.</li>
                <li><strong>Assinatura:</strong> plano pago que permite acesso a funcionalidades específicas dos Serviços.</li>
            </ul>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">2. Criação de Conta e Responsabilidades</h3>
            <p class="mb-2"><strong>2.1 Elegibilidade:</strong> o usuário deve ter pelo menos 18 anos e capacidade legal para concordar com estes Termos.</p>
            <p class="mb-2"><strong>2.2 Informações da Conta:</strong> é necessário fornecer informações precisas e mantê-las atualizadas.</p>
            <p class="mb-2"><strong>2.3 Segurança:</strong> o usuário é responsável por manter a confidencialidade das credenciais.</p>
            <p class="mb-6"><strong>2.4 Uso empresarial:</strong> ao registrar uma conta em nome de uma empresa, o usuário declara ter autoridade para representá-la.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">3. Assinaturas e Pagamentos</h3>
            <p class="mb-2"><strong>3.1</strong> A Funnels oferece planos de assinatura com diferentes funcionalidades.</p>
            <p class="mb-2"><strong>3.2</strong> As assinaturas são renovadas automaticamente, salvo cancelamento prévio.</p>
            <p class="mb-2"><strong>3.3</strong> Podemos ajustar preços com aviso prévio mínimo de 30 dias.</p>
            <p class="mb-2"><strong>3.4 Reembolsos:</strong> oferecemos garantia de reembolso em até 7 (sete) dias corridos após a primeira assinatura, conforme o art. 49 do Código de Defesa do Consumidor. Após esse prazo, os pagamentos não são reembolsáveis, salvo se exigido por lei.</p>
            <p class="mb-6"><strong>3.5</strong> Os valores informados não incluem impostos, salvo indicação em contrário.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">4. Uso dos Serviços</h3>
            <p class="mb-2"><strong>4.1 Licença:</strong> concedemos ao usuário uma licença limitada, não exclusiva e intransferível para usar os Serviços conforme estes Termos.</p>
            <p class="mb-6"><strong>4.2 Restrições:</strong> é proibido usar os Serviços para atividades ilegais, violar direitos de terceiros, enviar código malicioso, interferir na segurança da plataforma ou revender o acesso.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">5. Propriedade Intelectual</h3>
            <p class="mb-2"><strong>5.1</strong> Todo o conteúdo, design e código da plataforma pertencem à RevHackers / Funnels e são protegidos por leis de propriedade intelectual.</p>
            <p class="mb-6"><strong>5.2</strong> O usuário não pode copiar, modificar ou distribuir qualquer parte dos Serviços sem autorização prévia.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">6. Dados e Privacidade</h3>
            <p class="mb-6">O tratamento dos dados pessoais segue a Política de Privacidade e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">7. Garantias e Limitação de Responsabilidade</h3>
            <p class="mb-2"><strong>7.1</strong> Os Serviços são fornecidos “no estado em que se encontram”, sem garantias de desempenho ou disponibilidade ininterrupta.</p>
            <p class="mb-6"><strong>7.2</strong> A responsabilidade total da Funnels não excederá o maior valor entre: (a) o total pago pelo usuário nos 12 meses anteriores ao evento; ou (b) R$ 1.000,00.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">8. Cancelamento e Término</h3>
            <p class="mb-2"><strong>8.1</strong> O usuário pode encerrar sua conta a qualquer momento pelo painel da plataforma ou pelo suporte.</p>
            <p class="mb-6"><strong>8.2</strong> A Funnels poderá suspender ou encerrar contas em caso de violação destes Termos ou inadimplência.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">9. Disposições Gerais</h3>
            <p class="mb-2"><strong>9.1 Lei Aplicável:</strong> estes Termos são regidos pelas leis do Brasil.</p>
            <p class="mb-2"><strong>9.2 Foro:</strong> fica eleito o foro da Comarca de Florianópolis – SC para dirimir quaisquer controvérsias.</p>
            <p class="mb-6"><strong>9.3</strong> Caso alguma cláusula destes Termos seja considerada inválida, as demais continuarão em vigor.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">10. Contato</h3>
            <p class="mb-2">Em caso de dúvidas sobre estes Termos, entre em contato com:</p>
            <p class="mt-4">
                <strong>RevHackers Solutions Digital LTDA - ME</strong><br>
                CNPJ: 16.746.009/0001-86<br>
                E-mail: <a href="mailto:privacidade@usefunnels.io" class="text-neon-green hover:underline">privacidade@usefunnels.io</a><br>
                Endereço: Av. Pref. Osmar Cunha, 416 – Sala 1108, Centro, Florianópolis – SC, CEP 88015-100.
            </p>
        `
    },
    privacidade: {
        title: "Política de Privacidade",
        content: `
            <p class="mb-4 text-sm text-gray-500"><strong>Última atualização: 01 de outubro de 2025</strong></p>
            <p class="mb-6">A empresa <strong>RevHackers Solutions Digital LTDA - ME</strong>, inscrita no CNPJ nº 16.746.009/0001-86, com sede na Av. Prefeito Osmar Cunha, 416, Sala 1108 – Centro, Florianópolis - SC, CEP 88015-100, é a controladora dos dados pessoais tratados conforme esta Política de Privacidade.</p>
            <p class="mb-6">O produto Funnels é operado pela RevHackers, e neste documento, a menção a “nós” ou “empresa” refere-se à controladora.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">1. Informações que coletamos</h3>
            <h4 class="text-lg font-bold font-space mt-6 mb-3 text-deep-black">1.1 Informações fornecidas por você</h4>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Nome, e-mail, telefone, cargo e empresa;</li>
                <li>Informações de perfil e preferências;</li>
                <li>Informações de pagamento e faturamento;</li>
                <li>Comunicações e feedback;</li>
                <li>Dados importados de outras plataformas (com sua autorização).</li>
            </ul>
            <h4 class="text-lg font-bold font-space mt-6 mb-3 text-deep-black">1.2 Informações coletadas automaticamente</h4>
            <ul class="list-disc pl-5 mb-6 space-y-2">
                <li>Dados de uso e interação com a plataforma;</li>
                <li>Informações do dispositivo e navegador;</li>
                <li>Endereço IP e localização aproximada;</li>
                <li>Cookies e tecnologias similares;</li>
                <li>Dados de desempenho e logs de erro.</li>
            </ul>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">2. Como usamos suas informações</h3>
            <ul class="list-disc pl-5 mb-6 space-y-2">
                <li>Fornecer, operar e aprimorar nossos serviços;</li>
                <li>Gerenciar contas e processar pagamentos;</li>
                <li>Comunicar-se sobre suporte, segurança e atualizações;</li>
                <li>Personalizar sua experiência e conteúdo exibido;</li>
                <li>Analisar desempenho e prevenir fraudes;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">3. Compartilhamento de informações</h3>
            <ul class="list-disc pl-5 mb-6 space-y-2">
                <li>Com prestadores de serviço que auxiliam na operação da plataforma;</li>
                <li>Com parceiros comerciais, mediante seu consentimento;</li>
                <li>Com autoridades, quando exigido por lei;</li>
                <li>Em casos de fusão, aquisição ou reestruturação societária.</li>
            </ul>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">4. Direitos do titular</h3>
            <ul class="list-disc pl-5 mb-6 space-y-2">
                <li>Acessar e corrigir seus dados pessoais;</li>
                <li>Solicitar exclusão de dados, quando aplicável;</li>
                <li>Revogar consentimentos previamente concedidos;</li>
                <li>Solicitar portabilidade dos dados para outro fornecedor;</li>
                <li>Reclamar perante a Autoridade Nacional de Proteção de Dados (ANPD).</li>
            </ul>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">5. Segurança dos dados</h3>
            <p class="mb-6">Implementamos medidas técnicas e administrativas para proteger seus dados pessoais contra acesso não autorizado, perda, uso indevido ou alteração. No entanto, nenhum método de transmissão ou armazenamento eletrônico é totalmente seguro.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">6. Retenção de dados</h3>
            <p class="mb-6">Mantemos suas informações apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política e nossas obrigações legais. Após esse período, os dados são excluídos ou anonimizados.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">7. Transferências internacionais</h3>
            <p class="mb-6">Seus dados podem ser transferidos para servidores localizados fora do Brasil, observadas as salvaguardas legais e contratuais exigidas pela LGPD.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">8. Menores de idade</h3>
            <p class="mb-6">Nossos serviços não se destinam a menores de 18 anos. Não coletamos intencionalmente dados pessoais de menores. Se identificarmos tal coleta, os dados serão removidos.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">9. Alterações desta Política</h3>
            <p class="mb-6">Podemos atualizar esta Política periodicamente. A versão mais recente estará sempre disponível em nosso site, com a data da última atualização indicada no topo desta página.</p>

            <h3 class="text-2xl font-bold font-space mt-8 mb-4 text-deep-black">10. Contato</h3>
            <p class="mb-2">Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO):</p>
            <p class="mt-4">
                <strong>RevHackers Solutions Digital LTDA - ME</strong><br>
                CNPJ: 16.746.009/0001-86<br>
                E-mail: <a href="mailto:privacidade@usefunnels.io" class="text-neon-green hover:underline">privacidade@usefunnels.io</a><br>
                Endereço: Av. Prefeito Osmar Cunha, 416 – Sala 1108, Centro, Florianópolis – SC, CEP 88015-100.
            </p>
        `
    }
};
