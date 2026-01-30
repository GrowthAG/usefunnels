

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
        description: "Crie fluxos que qualificam leads e agendam reuniões enquanto você dorme.",
        benefits: ["Construtor de Fluxos Visual", "Gatilhos por Comportamento", "SMS e E-mail", "Distribuição de Leads"],
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ffec766f3caf41ae5ee191.png"
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
        slug: "funnels-vs-hubspot-comparativo-2026",
        title: "Funnels vs HubSpot: Comparativo Completo para 2026",
        category: "Comparativo",
        image: ASSETS.screenshots.dashboard2,
        excerpt: "Comparamos Funnels e HubSpot em funcionalidades, preço, suporte e facilidade. Descubra qual CRM é melhor para sua empresa brasileira em 2026.",
        date: "30 Jan, 2026",
        readTime: "12 min",
        author: "Time Funnels",
        featured: true,
        keywords: ["alternativa ao hubspot", "hubspot é caro", "hubspot alternativa brasileira", "hubspot vs funnels", "crm mais barato que hubspot"],
        content: `
            <p>Se você está avaliando ferramentas de CRM e automação de marketing, provavelmente já considerou o HubSpot. É uma das plataformas mais conhecidas do mercado — e por boas razões.</p>
            <p>Mas será que é a melhor escolha para <strong>empresas brasileiras</strong> em 2026?</p>
            
            <h2>TL;DR — Resumo Rápido</h2>
            <table>
                <thead>
                    <tr><th>Critério</th><th>Funnels</th><th>HubSpot</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Preço inicial</strong></td><td>R$ 497/mês</td><td>R$ 800+/mês (Starter)</td></tr>
                    <tr><td><strong>Custo para 50k contatos</strong></td><td>R$ 697/mês</td><td>R$ 4.000+/mês</td></tr>
                    <tr><td><strong>WhatsApp nativo</strong></td><td>Sim (API Oficial)</td><td>Não (precisa de integração)</td></tr>
                    <tr><td><strong>Suporte em português</strong></td><td>100% Brasil</td><td>Limitado</td></tr>
                    <tr><td><strong>CRM completo</strong></td><td>Incluso</td><td>Incluso</td></tr>
                    <tr><td><strong>Email marketing</strong></td><td>Incluso</td><td>Incluso</td></tr>
                    <tr><td><strong>Landing pages</strong></td><td>Incluso</td><td>Só no Professional</td></tr>
                    <tr><td><strong>Automação avançada</strong></td><td>Incluso</td><td>Só no Professional</td></tr>
                    <tr><td><strong>IA nativa</strong></td><td>Sim</td><td>Limitado</td></tr>
                    <tr><td><strong>Setup</strong></td><td>Minutos</td><td>Dias/Semanas</td></tr>
                </tbody>
            </table>
            <p><strong>Veredicto:</strong> O HubSpot é uma ferramenta robusta e madura, ideal para empresas que precisam de um ecossistema enterprise com muitas integrações. Já o Funnels entrega funcionalidades equivalentes (e algumas superiores, como WhatsApp e IA) por uma fração do preço, com suporte 100% brasileiro.</p>
            
            <h2>Para Quem é Cada Ferramenta</h2>
            <h3>HubSpot é ideal para:</h3>
            <ul>
                <li>Empresas com budget de marketing acima de R$ 10.000/mês em ferramentas</li>
                <li>Operações que já usam várias ferramentas do ecossistema HubSpot</li>
                <li>Times com profissionais certificados em HubSpot</li>
                <li>Multinacionais com operações em vários países</li>
            </ul>
            
            <h3>Funnels é ideal para:</h3>
            <ul>
                <li>Empresas brasileiras que precisam de WhatsApp integrado</li>
                <li>Operações que querem consolidar várias ferramentas em uma</li>
                <li>Times que precisam de suporte rápido em português</li>
                <li>Agências que querem oferecer CRM white-label para clientes</li>
            </ul>
            
            <h2>Comparativo de Preços: A Realidade</h2>
            <h3>Cenário: Empresa Pequena (10k contatos, 3 usuários)</h3>
            <table>
                <thead>
                    <tr><th>Item</th><th>Funnels</th><th>HubSpot</th></tr>
                </thead>
                <tbody>
                    <tr><td>Plano base</td><td>R$ 497/mês (Starter)</td><td>R$ 800/mês (Starter)</td></tr>
                    <tr><td>Automação</td><td>Incluso</td><td>+R$ 3.200/mês (upgrade Pro)</td></tr>
                    <tr><td>Landing pages</td><td>Incluso</td><td>+R$ 3.200/mês (upgrade Pro)</td></tr>
                    <tr><td>WhatsApp</td><td>Incluso (+uso)</td><td>+R$ 500/mês (terceiro)</td></tr>
                    <tr><td><strong>Total mensal</strong></td><td><strong>~R$ 600</strong></td><td><strong>~R$ 4.500</strong></td></tr>
                    <tr><td><strong>Total anual</strong></td><td><strong>~R$ 7.200</strong></td><td><strong>~R$ 54.000</strong></td></tr>
                </tbody>
            </table>
            <p><strong>Economia com Funnels: R$ 46.800/ano (87%)</strong></p>
            
            <h2>Cases Reais: Empresas que Migraram</h2>
            <h3>RevHackers: +340% em Reuniões Agendadas</h3>
            <blockquote>
                <p>"Usávamos HubSpot há 2 anos, mas o custo estava insustentável e precisávamos de WhatsApp integrado. Com Funnels, implementamos um funil de nutrição agressivo com sequências de email + WhatsApp que triplicou nosso volume de reuniões agendadas."</p>
                <cite>— Time RevHackers</cite>
            </blockquote>
            <p><strong>Resultados:</strong></p>
            <ul>
                <li>+340% em reuniões agendadas via inbound</li>
                <li>Redução de 78% no custo de ferramentas</li>
                <li>Setup completo em 5 dias (vs 3 meses no HubSpot)</li>
                <li>ROI positivo no primeiro mês</li>
            </ul>
            
            <h2>Conclusão</h2>
            <p>O HubSpot é uma ferramenta excelente que dominou o mercado por bons motivos. Porém, em 2026, empresas brasileiras têm necessidades específicas que o HubSpot não atende bem: <strong>WhatsApp nativo, suporte local, preço em real e simplicidade</strong>.</p>
            <p>Se isso descreve sua situação, Funnels provavelmente é a escolha certa.</p>
        `
    },
    {
        id: 2,
        slug: "funnels-vs-rd-station-comparativo-2026",
        title: "Funnels vs RD Station: Qual Escolher em 2026?",
        category: "Comparativo",
        image: ASSETS.screenshots.crm,
        excerpt: "Comparativo completo entre Funnels e RD Station. Analisamos preço, funcionalidades, CRM, automação e WhatsApp para ajudar sua decisão.",
        date: "30 Jan, 2026",
        readTime: "14 min",
        author: "Time Funnels",
        featured: true,
        keywords: ["alternativa ao rd station", "rd station é bom", "rd station preço", "rd station vs funnels", "automação de marketing brasil"],
        content: `
            <p>O RD Station é, sem dúvida, a ferramenta de automação de marketing mais conhecida no Brasil. Com mais de 40.000 clientes, se tornou sinônimo de inbound marketing no país.</p>
            <p>Mas em 2026, o cenário mudou. Empresas precisam de mais do que "só" automação de marketing. Precisam de <strong>CRM robusto, WhatsApp integrado e inteligência artificial</strong> — tudo em um lugar só.</p>
            
            <h2>TL;DR — Resumo Rápido</h2>
            <table>
                <thead>
                    <tr><th>Critério</th><th>Funnels</th><th>RD Light</th><th>RD Basic</th><th>RD Pro</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Preço</strong></td><td>R$ 497/mês</td><td>R$ 50/mês</td><td>R$ 599/mês</td><td>R$ 1.389/mês</td></tr>
                    <tr><td><strong>Contatos inclusos</strong></td><td>20k-75k</td><td>1.000</td><td>5.000</td><td>20.000</td></tr>
                    <tr><td><strong>CRM completo</strong></td><td>Sim (nativo)</td><td>Básico</td><td>Básico</td><td>Básico</td></tr>
                    <tr><td><strong>WhatsApp nativo</strong></td><td>Sim (API Oficial)</td><td>Não</td><td>Não</td><td>Não</td></tr>
                    <tr><td><strong>IA nativa</strong></td><td>Sim</td><td>Não</td><td>Não</td><td>Não</td></tr>
                </tbody>
            </table>
            
            <h2>O Elefante na Sala: O CRM do RD Station</h2>
            <p>Vamos ser diretos: o <strong>RD Station CRM é básico</strong>.</p>
            <p>Ele foi criado como complemento ao RD Marketing, não como solução completa. Funciona para operações de vendas muito simples, times pequenos (1-3 vendedores) e ciclos de venda curtos.</p>
            <p><strong>Não funciona para:</strong></p>
            <ul>
                <li>Múltiplos pipelines</li>
                <li>Vendas consultivas/complexas</li>
                <li>Times maiores</li>
                <li>Integração real marketing-vendas</li>
            </ul>
            <p>É por isso que a maioria das empresas usando RD Station acaba contratando <strong>outro CRM</strong> (Pipedrive, Moskit, HubSpot CRM). No Funnels, CRM e Marketing são a <strong>mesma coisa</strong>.</p>
            
            <h2>WhatsApp: A Maior Lacuna</h2>
            <p>Esta é a <strong>maior lacuna</strong> do RD Station em 2026. WhatsApp é o canal mais importante para vendas no Brasil, e o RD simplesmente não tem.</p>
            <p>No Funnels, WhatsApp é cidadão de primeira classe:</p>
            <ul>
                <li>Automações que enviam WhatsApp automaticamente</li>
                <li>Chatbot com IA atendendo 24/7</li>
                <li>Todo histórico de conversas no CRM</li>
                <li>Disparo em massa para base segmentada</li>
            </ul>
            
            <h2>Comparativo de Preços</h2>
            <h3>Cenário: Empresa média (20.000 contatos)</h3>
            <table>
                <thead>
                    <tr><th>Item</th><th>Funnels</th><th>RD Station</th></tr>
                </thead>
                <tbody>
                    <tr><td>Plano base</td><td>R$ 497 (Starter - 20k inclusos)</td><td>R$ 1.389 (Pro)</td></tr>
                    <tr><td>CRM</td><td>Incluso</td><td>Limitado</td></tr>
                    <tr><td>WhatsApp</td><td>Incluso (+uso)</td><td>+R$ 500 (terceiro)</td></tr>
                    <tr><td><strong>Total</strong></td><td><strong>~R$ 600/mês</strong></td><td><strong>~R$ 1.900/mês</strong></td></tr>
                </tbody>
            </table>
            <p><strong>Economia com Funnels: R$ 15.600/ano (68%)</strong></p>
            
            <h2>Caso Real: RevHackers</h2>
            <p>A RevHackers usava RD Station para marketing e Pipedrive para vendas. O desafio: <strong>informações fragmentadas</strong> e <strong>nenhum WhatsApp integrado</strong>.</p>
            <blockquote>
                <p>"No RD, a gente nutria o lead e passava para vendas sem contexto. No Funnels, o vendedor abre o lead e vê tudo: emails abertos, páginas visitadas, conversas de WhatsApp. A conversão em reunião disparou."</p>
                <cite>— RevHackers</cite>
            </blockquote>
            <p><strong>Resultados:</strong> +340% em reuniões agendadas, economia de R$ 2.100/mês em ferramentas.</p>
            
            <h2>Conclusão</h2>
            <p>O RD Station construiu o mercado de automação de marketing no Brasil. Mas o mercado evoluiu. Em 2026, empresas precisam de plataformas que unifiquem marketing, vendas e comunicação.</p>
            <p>O Funnels representa essa evolução: <strong>tudo que o RD Station faz bem</strong>, mais <strong>CRM completo</strong>, mais <strong>WhatsApp nativo</strong>, mais <strong>IA aplicada</strong>. Por um preço competitivo.</p>
        `
    },
    {
        id: 3,
        slug: "funnels-vs-activecampaign-comparativo-2026",
        title: "Funnels vs ActiveCampaign: Comparativo Completo 2026",
        category: "Comparativo",
        image: ASSETS.screenshots.emailMarketing,
        excerpt: "ActiveCampaign ou Funnels? Comparamos automação, CRM, preço e suporte para ajudar você a escolher a melhor ferramenta para sua empresa brasileira.",
        date: "30 Jan, 2026",
        readTime: "11 min",
        author: "Time Funnels",
        featured: true,
        keywords: ["alternativa ao activecampaign", "activecampaign em português", "activecampaign preço em reais", "ferramenta de email marketing brasileira"],
        content: `
            <p>O ActiveCampaign é reconhecido mundialmente como uma das ferramentas de automação de marketing mais poderosas do mercado. Sua engine de automação é referência na indústria.</p>
            <p>Mas para empresas brasileiras, existem desafios práticos: <strong>preço em dólar, suporte em inglês, e ausência de WhatsApp nativo</strong>.</p>
            
            <h2>TL;DR — Resumo Rápido</h2>
            <table>
                <thead>
                    <tr><th>Critério</th><th>Funnels</th><th>AC Lite</th><th>AC Plus</th><th>AC Pro</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Preço (10k contatos)</strong></td><td>R$ 497/mês</td><td>~R$ 450/mês</td><td>~R$ 900/mês</td><td>~R$ 1.800/mês</td></tr>
                    <tr><td><strong>Moeda</strong></td><td>BRL</td><td>USD</td><td>USD</td><td>USD</td></tr>
                    <tr><td><strong>CRM completo</strong></td><td>Sim</td><td>Não</td><td>Sim</td><td>Sim</td></tr>
                    <tr><td><strong>WhatsApp nativo</strong></td><td>Sim</td><td>Não</td><td>Não</td><td>Não</td></tr>
                    <tr><td><strong>Landing pages</strong></td><td>Incluso</td><td>Não</td><td>Não</td><td>Incluso</td></tr>
                    <tr><td><strong>IA nativa</strong></td><td>Sim</td><td>Não</td><td>Não</td><td>Básica</td></tr>
                    <tr><td><strong>Suporte PT-BR</strong></td><td>100%</td><td>Não</td><td>Não</td><td>Não</td></tr>
                </tbody>
            </table>
            
            <h2>O Problema do Dólar</h2>
            <p>O ActiveCampaign cobra em <strong>dólar americano</strong>. Para empresas brasileiras, isso significa:</p>
            <ul>
                <li><strong>Imprevisibilidade:</strong> Sua conta varia com o câmbio</li>
                <li><strong>Custo real maior:</strong> Taxas de conversão + IOF</li>
                <li><strong>Planejamento difícil:</strong> Budget de marketing oscila</li>
            </ul>
            <p>O Funnels cobra em <strong>reais</strong>, com preço fixo.</p>
            
            <h2>WhatsApp: A Grande Diferença</h2>
            <p>O ActiveCampaign simplesmente <strong>não tem WhatsApp</strong>. Você precisa:</p>
            <ol>
                <li>Contratar uma ferramenta terceira (Twilio, Take, etc.)</li>
                <li>Configurar integrações via Zapier ou API</li>
                <li>Pagar por dois sistemas separados</li>
                <li>Gerenciar dados em lugares diferentes</li>
            </ol>
            <p>No Funnels, WhatsApp é integrado nativamente — crie automações que combinam email + WhatsApp em um único fluxo.</p>
            
            <h2>Comparativo de Preços</h2>
            <h3>Cenário: 50.000 contatos</h3>
            <table>
                <thead>
                    <tr><th>Item</th><th>Funnels</th><th>ActiveCampaign</th></tr>
                </thead>
                <tbody>
                    <tr><td>Plano base</td><td>R$ 697 (Growth)</td><td>$386 (~R$ 1.930)*</td></tr>
                    <tr><td>CRM</td><td>Completo</td><td>Avançado</td></tr>
                    <tr><td>Landing pages</td><td>Incluso</td><td>Incluso</td></tr>
                    <tr><td>WhatsApp</td><td>Incluso (+uso)</td><td>+R$ 800 (terceiro)</td></tr>
                    <tr><td><strong>Total real</strong></td><td><strong>~R$ 900</strong></td><td><strong>~R$ 2.800</strong></td></tr>
                </tbody>
            </table>
            <p><strong>Economia com Funnels: R$ 22.800/ano (68%)</strong></p>
            <p><small>*Considerando dólar a R$ 5,00. Varia.</small></p>
            
            <h2>Suporte e Documentação</h2>
            <table>
                <thead>
                    <tr><th>Aspecto</th><th>Funnels</th><th>ActiveCampaign</th></tr>
                </thead>
                <tbody>
                    <tr><td>Idioma do suporte</td><td><strong>Português (Brasil)</strong></td><td>Inglês</td></tr>
                    <tr><td>Tempo de resposta</td><td>&lt; 4 horas</td><td>24 horas</td></tr>
                    <tr><td>Base de conhecimento</td><td>PT-BR completa</td><td>Inglês (PT parcial)</td></tr>
                    <tr><td>Onboarding</td><td>Incluso em português</td><td>Em inglês</td></tr>
                </tbody>
            </table>
            
            <h2>Conclusão</h2>
            <p>O ActiveCampaign tem uma engine de automação excelente. Para empresas que precisam apenas de automação de email complexa e não se importam com cobrança em dólar ou suporte em inglês, continua sendo uma opção válida.</p>
            <p>Mas para <strong>empresas brasileiras</strong> em 2026:</p>
            <ul>
                <li><strong>WhatsApp é obrigatório</strong> — e o ActiveCampaign não tem</li>
                <li><strong>Preço em reais</strong> dá previsibilidade — e o ActiveCampaign cobra em dólar</li>
                <li><strong>Suporte local</strong> acelera resolução — e o ActiveCampaign é em inglês</li>
            </ul>
            <p>O Funnels oferece automação poderosa (comparável para 95% dos casos), mais CRM completo, mais WhatsApp nativo, mais suporte brasileiro.</p>
        `
    },
    {
        id: 4,
        slug: "case-revhackers-340-reunioes-agendadas",
        title: "Como a RevHackers Aumentou 340% as Reuniões Agendadas com Funnels",
        category: "Case de Sucesso",
        image: ASSETS.screenshots.analytics,
        excerpt: "Descubra como a RevHackers triplicou o número de reuniões agendadas usando Funnels para criar um funil de vendas com nutrição agressiva e agendamento automatizado.",
        date: "30 Jan, 2026",
        readTime: "8 min",
        author: "Time Funnels",
        featured: true,
        keywords: ["case de sucesso crm", "automação de vendas b2b", "como aumentar reuniões agendadas", "funil de vendas inbound"],
        content: `
            <p>A RevHackers é uma empresa especializada em growth e vendas B2B. Eles ajudam startups e scale-ups a estruturar operações comerciais de alta performance.</p>
            <p>Irônico, não? Uma empresa que ensina outras a vender tinha um problema com suas próprias ferramentas de vendas.</p>
            
            <h2>Snapshot</h2>
            <table>
                <tbody>
                    <tr><td><strong>Empresa</strong></td><td>RevHackers</td></tr>
                    <tr><td><strong>Segmento</strong></td><td>Consultoria de Growth e Vendas B2B</td></tr>
                    <tr><td><strong>Desafio</strong></td><td>Converter leads inbound em reuniões agendadas</td></tr>
                    <tr><td><strong>Resultado principal</strong></td><td>+340% em reuniões agendadas</td></tr>
                    <tr><td><strong>Tempo para resultado</strong></td><td>45 dias</td></tr>
                </tbody>
            </table>
            
            <h2>O Desafio: Muito Lead, Pouca Reunião</h2>
            <p>A RevHackers tinha um problema que muitas empresas B2B conhecem bem: <strong>gerava leads, mas não convertia em reuniões</strong>.</p>
            
            <h3>A situação antes do Funnels:</h3>
            <p><strong>Stack de ferramentas:</strong></p>
            <ul>
                <li>RD Station para automação de marketing</li>
                <li>Pipedrive para CRM</li>
                <li>Calendly para agendamento</li>
                <li>WhatsApp Web para comunicação (manual)</li>
                <li>Zapier para conectar tudo</li>
            </ul>
            
            <h3>Os problemas:</h3>
            <table>
                <thead>
                    <tr><th>Problema</th><th>Impacto</th></tr>
                </thead>
                <tbody>
                    <tr><td>Dados fragmentados</td><td>SDR não via histórico de marketing</td></tr>
                    <tr><td>WhatsApp manual</td><td>Demorava para responder, sem automação</td></tr>
                    <tr><td>Tempo de resposta</td><td>4-6 horas em média</td></tr>
                    <tr><td>Custo alto</td><td>R$ 2.800/mês em ferramentas</td></tr>
                </tbody>
            </table>
            
            <blockquote>
                <p>"A gente ensinava nossos clientes a fazer automação de vendas, mas nossa própria operação era manual. Era constrangedor."</p>
                <cite>— Time RevHackers</cite>
            </blockquote>
            
            <h2>A Solução: Funil de Vendas Integrado + Nutrição Agressiva</h2>
            <p>A estratégia foi construir um <strong>funil de vendas totalmente automatizado</strong> com <strong>nutrição multicanal agressiva</strong>.</p>
            
            <h3>Os 4 pilares da estratégia:</h3>
            <ol>
                <li><strong>Qualificação Automática com IA:</strong> Classificação automática em HOT, WARM ou COLD</li>
                <li><strong>Nutrição Multicanal Agressiva:</strong> WhatsApp em 2 min + Email + Follow-ups automáticos</li>
                <li><strong>WhatsApp como Canal Principal:</strong> 95% de abertura vs 28% do email</li>
                <li><strong>Agendamento Sem Fricção:</strong> Lead agenda direto no WhatsApp</li>
            </ol>
            
            <h2>Os Resultados</h2>
            <table>
                <thead>
                    <tr><th>Métrica</th><th>Antes</th><th>Depois</th><th>Variação</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Reuniões agendadas/mês</strong></td><td>35</td><td><strong>154</strong></td><td><strong>+340%</strong></td></tr>
                    <tr><td>Taxa lead → reunião</td><td>7%</td><td>31%</td><td>+343%</td></tr>
                    <tr><td>Tempo para primeiro contato</td><td>4-6h</td><td>2 min</td><td>-98%</td></tr>
                    <tr><td>Taxa de resposta (WhatsApp)</td><td>N/A</td><td>45%</td><td>—</td></tr>
                    <tr><td>No-show em reuniões</td><td>25%</td><td>8%</td><td>-68%</td></tr>
                    <tr><td>Custo de ferramentas</td><td>R$ 2.800</td><td>R$ 697</td><td>-75%</td></tr>
                </tbody>
            </table>
            
            <h3>Economia anual: R$ 25.344</h3>
            
            <h2>O Que Fez a Diferença</h2>
            <blockquote>
                <p>"Email tem 12% de abertura. WhatsApp tem 95%. Quando você automatiza WhatsApp com a mesma inteligência que automatiza email, o resultado multiplica."</p>
            </blockquote>
            <blockquote>
                <p>"Antes, o SDR abria o Pipedrive e via só o deal. Não sabia que emails o lead abriu, que páginas visitou. Agora tudo está numa tela só. Contexto é poder."</p>
            </blockquote>
            <blockquote>
                <p>"Lead que entra às 22h é respondido às 22h pelo chatbot. Às 8h da manhã, quando o SDR chega, já tem reunião agendada."</p>
            </blockquote>
            
            <h2>Quer Resultados Similares?</h2>
            <p>A RevHackers triplicou reuniões agendadas em 45 dias. A estratégia deles pode ser adaptada para sua operação.</p>
        `
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
