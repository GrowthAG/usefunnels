

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
        subtitle: "Gestão Visual de Vendas",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb1226a5e26670364b0f.png",
        description: "Acompanhe leads, negociações e receita prevista. Tudo em uma única tela.",
        detailImage: ASSETS.screenshots.crmMobile,
        longDescription: "Abandone as planilhas e CRMs complexos. O Funnels oferece um CRM nativo e totalmente integrado às suas ferramentas de marketing e automação. Visualize seu funil de vendas, mova cards com arrastar-e-soltar e nunca mais perca um lead por falta de follow-up.",
        benefits: [
            "Pipeline Kanban Visual e Intuitivo",
            "Automação de Follow-up (Email/SMS/Zap)",
            "Classificação Automática de Leads (Scoring)",
            "Gravação de Chamadas e Histórico Completo"
        ],
        howItWorks: [
            { step: "01", title: "Captura", description: "Leads entram automaticamente no pipeline vindos de formulários, chat ou importações." },
            { step: "02", title: "Organização", description: "Visualize oportunidades em colunas personalizáveis (Ex: Novo Lead, Em Negociação, Fechado)." },
            { step: "03", title: "Ação", description: "Mova o card para disparar automações: enviar proposta, agendar reunião ou cobrar retorno." },
            { step: "04", title: "Análise", description: "Acompanhe taxas de conversão por etapa e valor total do pipeline em tempo real." }
        ],
        useCases: [
            { title: "Times de Vendas B2B", description: "Gerencie ciclos de vendas longos com múltiplos decisores e etapas complexas." },
            { title: "Agências de Marketing", description: "Controle leads de clientes e prove ROI com relatórios detalhados de fechamento." },
            { title: "Imobiliárias", description: "Acompanhe interessados em imóveis desde a visita até a assinatura do contrato." }
        ],
        whoIsItFor: ["Gerentes de Vendas", "Equipes Comerciais", "Empreendedores", "Consultores"],
        faq: [
            { question: "Posso importar meus dados de outro CRM?", answer: "Sim, oferecemos importação fácil via CSV de plataformas como Pipedrive, HubSpot e RD Station." },
            { question: "Quantos pipelines posso criar?", answer: "Ilimitados. Crie pipelines específicos para diferentes produtos, serviços ou processos (Ex: Vendas, Onboarding, RH)." }
        ]
    },
    {
        id: "automacao",
        title: "Automação de Fluxos",
        subtitle: "Seu Negócio no Piloto Automático",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb1226a5e24571364b67.png",
        description: "Crie fluxos que qualificam leads e agendam reuniões enquanto você dorme.",
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ffec766f3caf41ae5ee191.png",
        longDescription: "Construa máquinas de vendas que trabalham 24/7. Nosso construtor visual de automações permite criar jornadas de cliente complexas conectando E-mail, SMS, WhatsApp, Voz e muito mais, sem escrever uma linha de código.",
        benefits: [
            "Construtor Visual Arrastar-e-Soltar",
            "Gatilhos Baseados em Comportamento",
            "Automação Multicanal (Zap/SMS/Email)",
            "Distribuição Inteligente de Leads (Round Robin)"
        ],
        howItWorks: [
            { step: "01", title: "Gatilho", description: "Defina o que inicia a automação: preenchimento de form, visita em página, tag adicionada, etc." },
            { step: "02", title: "Condições", description: "Crie regras lógicas: 'Se abriu o email, faça X. Se não, faça Y'." },
            { step: "03", title: "Ação", description: "Envie mensagens, crie tarefas, mova no CRM ou notifique a equipe." },
            { step: "04", title: "Otimização", description: "Analise onde os leads estão engajando e ajuste o fluxo para máxima conversão." }
        ],
        useCases: [
            { title: "Recuperação de Carrinho/Boleto", description: "Envie alertas automáticos para recuperar vendas perdidas imediatamente." },
            { title: "Onboarding de Clientes", description: "Entregue conteúdo educacional sequenciado automaticamente após a compra." },
            { title: "Nutrição de Leads", description: "Eduque leads frios até que estejam prontos para comprar." }
        ],
        whoIsItFor: ["Agências de Lançamento", "E-commerces", "Infoprodutores", "SaaS"],
        faq: [
            { question: "Preciso saber programar?", answer: "Não. Fomos feitos para o 'No-Code'. Tudo é visual e intuitivo." },
            { question: "Funciona com WhatsApp?", answer: "Sim! Você pode incluir mensagens de WhatsApp oficiais diretamente nos seus fluxos." }
        ]
    },
    {
        id: "email",
        title: "E-mail Marketing",
        subtitle: "Entregabilidade e Conversão",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb1226a5e248d6364b9b.png",
        description: "Envie campanhas que chegam na caixa de entrada, não no spam.",
        detailImage: ASSETS.screenshots.emailMarketing,
        longDescription: "Email marketing ainda é o canal com maior ROI. Com o Funnels, você cria emails lindos em minutos, segmenta sua audiência com precisão cirúrgica e garante que sua mensagem chegue na caixa de entrada principal, não na aba de promoções.",
        benefits: [
            "Editor Visual Arrastar-e-Soltar",
            "Testes A/B Automáticos",
            "Segmentação Inteligente por Tags",
            "Relatórios Detalhados de Entregabilidade"
        ],
        howItWorks: [
            { step: "01", title: "Design", description: "Escolha um template profissional ou crie do zero com nosso editor visual." },
            { step: "02", title: "Segmentação", description: "Selecione exatamente quem deve receber baseado em comportamento e tags." },
            { step: "03", title: "Envio", description: "Dispare imediatamente, agende ou configure envio inteligente por fuso horário." },
            { step: "04", title: "Métricas", description: "Acompanhe aberturas, cliques e, o mais importante, vendas geradas pelo email." }
        ],
        useCases: [
            { title: "Newsletters", description: "Mantenha sua base engajada com conteúdo relevante recorrente." },
            { title: "Ofertas Relâmpago", description: "Dispare promoções segmentadas para listas VIP de compradores." },
            { title: "Reengajamento", description: "Identifique e recupere leads que pararam de interagir." }
        ],
        whoIsItFor: ["Copywriters", "Gestores de Tráfego", "E-commerces", "Criadores de Conteúdo"],
        faq: [
            { question: "O servidor de envio (SMTP) é incluso?", answer: "Sim, usamos infraestrutura premium (Mailgun/Leadconnector) para garantir alta entregabilidade sem custo extra de configuração." },
            { question: "Posso usar meu domínio próprio?", answer: "Com certeza. A configuração de autenticação (DKIM/SPF/DMARC) é simples e guiada." }
        ]
    },
    {
        id: "paginas",
        title: "Construtor de Páginas",
        subtitle: "Funnels & Landing Pages",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12af128ed272e697da.png",
        description: "Publique páginas de alta conversão em minutos. Sem programadores.",
        detailImage: ASSETS.screenshots.websites,
        longDescription: "Crie landing pages, funis de vendas completos, sites institucionais e áreas de membros em um único lugar. Nosso construtor é focado em velocidade de carregamento e conversão, com templates validados por milhões de acessos.",
        benefits: [
            "Centenas de Templates Prontos",
            "Hospedagem Inclusa (SSL Grátis)",
            "Carregamento Ultra-Rápido (Google Cloud)",
            "Testes A/B de Páginas Nativos"
        ],
        howItWorks: [
            { step: "01", title: "Escolha", description: "Comece com um layout em branco ou um template de alta conversão." },
            { step: "02", title: "Edite", description: "Personalize textos, imagens e cores com editor visual em tempo real." },
            { step: "03", title: "Otimize", description: "Ajuste a versão mobile separadamente para experiência perfeita no celular." },
            { step: "04", title: "Publique", description: "Conecte seu domínio e coloque no ar em segundos com SSL automático." }
        ],
        useCases: [
            { title: "Páginas de Vendas (VSL)", description: "Layouts otimizados para vídeos de vendas e alta conversão." },
            { title: "Páginas de Captura", description: "Foque na coleta de leads com formulários integrados e clean design." },
            { title: "Webinários", description: "Páginas de inscrição, sala de espera, transmissão e replay integrados." }
        ],
        whoIsItFor: ["Designers", "Agências", "Infoprodutores", "Negócios Locais"],
        faq: [
            { question: "As páginas são responsivas?", answer: "Sim, e você tem controle total para editar a visualização mobile separadamente da desktop." },
            { question: "Preciso pagar hospedagem à parte?", answer: "Não. Hospedagem premium segura e veloz no Google Cloud já está inclusa em todos os planos." }
        ]
    },
    // Removed Social Planner to maintain 9-grid layout
    {
        id: "analises",
        title: "Análises Avançadas",
        subtitle: "Dados para Decisão",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12af128e041ae697db.png",
        description: "Saiba exatamente qual anúncio trouxe cada venda.",
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68e871bedf76fee673049569.png",
        longDescription: "Pare de voar no escuro. Nossos dashboards integram dados do Facebook Ads, Google Ads e suas vendas reais para mostrar o verdadeiro ROI de cada campanha. Saiba qual palavra-chave gerou lucro e qual campanha apenas gastou orçamento.",
        benefits: [
            "Dashboards Unificados em Tempo Real",
            "Atribuição de Vendas Precisa",
            "Monitoramento de Taxas de Conversão do Funil",
            "Gravação de Chamadas para Auditoria"
        ],
        howItWorks: [
            { step: "01", title: "Conexão", description: "Conecte suas contas de anúncio (Meta/Google) e Analytics." },
            { step: "02", title: "Rastreamento", description: "Nosso script rastreia o lead desde o clique até a venda final." },
            { step: "03", title: "Visualização", description: "Veja dashboards prontos de Call Tracking, Agendamentos e Vendas." },
            { step: "04", title: "Decisão", description: "Corte o que dá prejuízo e escale o que dá lucro com base em dados reais." }
        ],
        useCases: [
            { title: "Gestão de Tráfego", description: "Prove o valor do seu serviço mostrando o ROI real para o cliente." },
            { title: "Otimização de Funil", description: "Identifique exatamente em qual etapa do funil você está perdendo leads." },
            { title: "Auditoria de Vendas", description: "Ouça as ligações da equipe para melhorar scripts e abordagens." }
        ],
        whoIsItFor: ["Gestores de Tráfego", "Donos de Agência", "Head de Marketing"],
        faq: [
            { question: "Funciona com iOS14+?", answer: "Sim, utilizamos CAPI (Conversions API) para minimizar perdas de rastreamento." },
            { question: "Os relatórios são personalizáveis?", answer: "Sim, você pode criar visualizações personalizadas para métricas específicas do seu negócio." }
        ]
    },
    {
        id: "formularios",
        title: "Formulários & Surveys",
        subtitle: "Captura de Alta Conversão",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb125fb5bde4cf85b60c.png",
        description: "Crie formulários que convertem visitantes em leads qualificados.",
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b73eeb3ae83b3dca5fe41.png",
        longDescription: "O ponto de entrada do seu funil merece atenção. Crie formulários inteligentes, pesquisas (surveys) com lógica condicional e popups de saída que capturam leads com eficiência máxima. Totalmente integrados às automações.",
        benefits: [
            "Lógica Condicional Avançada",
            "Múltiplas Etapas para Maior Conversão",
            "Upload de Arquivos e Assinatura Digital",
            "Embed em Qualquer Site (Wordpress/Wix/etc)"
        ],
        howItWorks: [
            { step: "01", title: "Criação", description: "Arraste campos para montar seu formulário ou pesquisa." },
            { step: "02", title: "Lógica", description: "Defina regras: 'Se respondeu X, pule para a pergunta Z'." },
            { step: "03", title: "Personalização", description: "Ajuste cores, fontes e estilos para combinar com sua marca." },
            { step: "04", title: "Integração", description: "Os dados entram direto no CRM e disparam a automação correta." }
        ],
        useCases: [
            { title: "Aplicação para Mentoria", description: "Qualifique leads com formulários longos antes de agendar uma reunião." },
            { title: "Quiz de Recomendação", description: "Recomende o produto ideal baseado nas respostas do lead." },
            { title: "Pesquisa de Satisfação (NPS)", description: "Colete feedback automático pós-venda." }
        ],
        whoIsItFor: ["Mentores", "Consultores", "Pesquisadores", "Marketing"],
        faq: [
            { question: "Posso colocar o formulário no meu site atual?", answer: "Sim, geramos um código simples para você colar em qualquer construtor de sites." },
            { question: "Tem proteção contra SPAM?", answer: "Sim, integração nativa com Google Recaptcha v3 invisível." }
        ]
    },
    {
        id: "chatbot",
        title: "Chat Bot + IA",
        subtitle: "Atendimento 24/7",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dd95c0df57373f1b47b75a.png",
        description: "Use IA para responder dúvidas e agendar reuniões 24h por dia.",
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b726cf7a877358425c7d1.png",
        longDescription: "Escale seu atendimento sem aumentar a equipe. Nossa IA treina com seus dados (site, PDFs, docs) e atende clientes no Chat do Site, Facebook, Instagram e SMS. Ela tira dúvidas, qualifica leads e agenda reuniões diretamente na agenda do vendedor.",
        benefits: [
            "Respostas em Segundos (0 Fila)",
            "Treinado na Sua Base de Conhecimento",
            "Transbordo Humano Inteligente",
            "Omnichannel (Web/Insta/Face/SMS)"
        ],
        howItWorks: [
            { step: "01", title: "Treino", description: "Faça upload de URLs do seu site e documentos internos." },
            { step: "02", title: "Configuração", description: "Defina o tom de voz e o objetivo (ex: agendar demo)." },
            { step: "03", title: "Teste", description: "Simule conversas para garantir que as respostas estão precisas." },
            { step: "04", title: "Ativação", description: "Ligue nos canais desejados e veja a mágica acontecer." }
        ],
        useCases: [
            { title: "SAC Automático", description: "Responda perguntas frequentes instantaneamente liberando o suporte." },
            { title: "Pré-Vendas (SDR)", description: "Qualifique o lead antes de passar para um humano." },
            { title: "Agendamento de Consultas", description: "Deixe a IA negociar o melhor horário com o paciente/cliente." }
        ],
        whoIsItFor: ["Clínicas", "Escritórios", "SaaS", "E-commerces"],
        faq: [
            { question: "A IA inventa respostas?", answer: "Não. Você pode configurar o modo 'temperatura' para que ela responda restritamente baseada no seu conteúdo." },
            { question: "Posso ver as conversas?", answer: "Sim, todas as interações ficam salvas no histórico do contato no CRM com monitoramento em tempo real." }
        ]
    },
    {
        id: "whatsapp",
        title: "WhatsApp API Oficial",
        subtitle: "Marketing e Suporte no Zap",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfa6f5fb5bd46f08448a8.png",
        highlight: true,
        description: "Envie mensagens em massa sem perder seu número.",
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ff6b5d788aed885703ced4.png",
        longDescription: "Utilize o poder da API Oficial do WhatsApp (WABA) para escalar sua comunicação sem risco de bloqueio. Envie mensagens em massa, crie chatbots avançados e centralize o atendimento de múltiplos números e atendentes em uma única caixa de entrada.",
        benefits: [
            "Disparo em Massa Oficial (Broadcast)",
            "Caixa de Entrada Unificada para Equipes",
            "Respostas Automáticas de Ausência",
            "Verificação Oficial (Green Tick) Possível"
        ],
        howItWorks: [
            { step: "01", title: "Conexão", description: "Conecte seu número à API do Meta através da nossa integração nativa." },
            { step: "02", title: "Templates", description: "Aprove seus modelos de mensagem para início de conversa." },
            { step: "03", title: "Campanhas", description: "Envie promoções ou avisos para milhares de contatos de uma vez." },
            { step: "04", title: "Atendimento", description: "Responda as interações manualmente ou com bots na aba Conversas." }
        ],
        useCases: [
            { title: "Lançamentos no WhatsApp", description: "Gerencie centenas de grupos e leads individuais sem 'chips' piratas." },
            { title: "Confirmação de Agendamento", description: "Reduza no-show enviando lembretes automáticos no Zap." },
            { title: "Suporte ao Cliente", description: "Vários atendentes usando o mesmo número oficial da empresa." }
        ],
        whoIsItFor: ["Varejo", "Clínicas", "Infoprodutores", "Serviços"],
        faq: [
            { question: "É seguro contra bloqueios?", answer: "Sim, por utilizar a API Oficial do Meta, o risco de bloqueio por spam é drasticamente reduzido se seguir as políticas." },
            { question: "Pago por mensagem?", answer: "Sim, o Meta cobra uma pequena taxa por conversa iniciada (janela de 24h). Nós repassamos o custo oficial sem markup abusivo." }
        ]
    },
    {
        id: "calendarios",
        title: "Calendários e Agendamentos",
        subtitle: "Adeus, 'Vai e Vem' de Horários",
        icon: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68ddfb12d79c184ebfd25098.png",
        description: "Elimine o 'vai e vem' de horários. Deixe o cliente agendar sozinho.",
        detailImage: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697b73c2a74ce650758dde75.png",
        longDescription: "Substitua o Calendly e outras ferramentas pagas. Nosso sistema de agendamento é integrado ao CRM e Automações. Envie seu link, o cliente escolhe o horário e automaticamente recebe confirmação, link do Zoom/Meet e lembretes para não faltar.",
        benefits: [
            "Sincronização Bidirecional (Google/Outlook)",
            "Lembretes Automáticos (Email/SMS/Zap)",
            "Cobrança no Agendamento (Stripe)",
            "Distribuição de Leads para Equipe (Round Robin)"
        ],
        howItWorks: [
            { step: "01", title: "Disponibilidade", description: "Defina seus horários de atendimento e duração das reuniões." },
            { step: "02", title: "Configuração", description: "Personalize o formulário de perguntas pré-reunião e link de videoconferência." },
            { step: "03", title: "Compartilhamento", description: "Envie o link ou incorpore o calendário no seu site." },
            { step: "04", title: "Automação", description: "O sistema cuida dos lembretes e follow-up pós-reunião." }
        ],
        useCases: [
            { title: "Consultorias e Mentorias", description: "Venda horas de consultoria e receba o pagamento no ato do agendamento." },
            { title: "Clínicas e Estética", description: "Gerencie a agenda de múltiplos profissionais e salas." },
            { title: "Demos de Vendas", description: "Distribua leads automaticamente entre os vendedores disponíveis." }
        ],
        whoIsItFor: ["Consultores", "Profissionais Liberais", "Times de Vendas", "Médicos"],
        faq: [
            { question: "Integra com Zoom/Google Meet?", answer: "Sim, gera o link da sala dinamicamente para cada reunião agendada." },
            { question: "Posso cobrar pela reunião?", answer: "Sim, integração nativa com Stripe permite exigir pagamento para confirmar o agendamento." }
        ]
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Felipe Sori",
        role: "Cofundador",
        company: "Atomic",
        quote: "Testei ActiveCampaign, RD Station, HubSpot e InfusionSoft. Muitas prometem fazer tudo, mas não funcionam bem em nada. Com o Funnels, encontrei uma solução completa que realmente entrega resultado.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e5ff166e7ca20d26c4249.png",
        video: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/697e5f151f68d1baf18aa772.mp4",
        result: "Consolidou 4 ferramentas"
    },
    {
        name: "Daniel Lestinge",
        company: "BlueForecasts",
        quote: "Cancelei HubSpot (R$ 1.200/mês), Mailchimp (R$ 400/mês) e RD Station (R$ 800/mês). Economizo R$ 2.400/mês com resultado melhor.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc981c8da17338918c617c.png",
        result: "Economizou R$ 28.800/ano"
    },
    {
        name: "Yves Mariano",
        company: "Wysion",
        quote: "Substituímos 5 ferramentas por uma. O melhor: a equipe aprendeu a usar em menos de 1 semana sem treinamento complexo.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc984a3e1ce8a0628ba669.png",
        result: "Setup em 1 semana"
    },
    {
        name: "Amanda Aguiar",
        company: "Lindoya",
        quote: "Nossa taxa de conversão aumentou 43% em 60 dias. O chatbot IA qualifica leads 24/7 e minha equipe foca só em fechar.",
        image: "https://storage.googleapis.com/msgsndr/S7HEFAz97UKuC8NLHMmI/media/68dc986e8da173cd2a8c691b.png",
        result: "+43% conversão em 60 dias"
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
