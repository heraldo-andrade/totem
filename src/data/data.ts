export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  slug: string;
  servicoDigital?: boolean;

}

export interface MenuItem {
  id: string;
  category: string;
  title: string;
  slug: string;
  items: ServiceItem[];
  iconeWhite?:string;
  iconeAzul?: string;

}

export function getServiceBySlug(slug: string | string[], category?: string): ServiceItem | null {
  // Se slug for um array, junta com '/'
  const fullSlug = Array.isArray(slug) ? slug.join('/') : slug;
  
  const allData = category ? categoryData[category as keyof typeof categoryData] : [
    ...juventudeData,
    ...infanciaData,
    ...adultaData,
    ...terceiraidadeData
  ];
  
  if (!allData) return null;
  
  for (const menu of allData) {
    for (const service of menu.items) {
      if (service.slug === fullSlug) {
        return service;
      }
    }
  }
  return null;
}
export const juventudeData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    iconeWhite: '/icone-menu-branco/Icon=cards_stack.svg',
    iconeAzul: '/icone-menu-azul/Icon=cards_stack.svg',
    items: []
  },

{
  id: 'assistencia-social-cidadania',
  category: 'assistencia-social-cidadania',
  title: 'Assistência Social e Cidadania',
  iconeWhite: '/icone-menu-branco/Icon=volunteer_activism.svg',
  iconeAzul: '/icone-menu-azul/Icon=volunteer_activism.svg',
  slug: 'assistencia-social-cidadania',
  items: [
    {
      id: 'assistencia-social-cidadania-1',
      category: 'POLÍCIA CIENTÍFICA',
      title: 'Obter 1ª via da Carteira de Identidade Nacional - CIN',
      slug: 'assistencia-social-cidadania/obter-primeira-via-da-Carteira-identidade-nacional',
      description: 'Emitir gratuitamente a 1ª via da Carteira de Identidade Nacional para pessoas que nunca solicitaram a Carteira de Identidade Nacional.',
      impact: 'Identidade civil como porta de entrada de direitos como escola, saúde, programas sociais e bancarização.\n\n976.000 Carteiras de Identidade Nacional já emitidas no estado até 23 de julho de 2025.',
      servicoDigital: true    
    },
    {
      id: 'assistencia-social-cidadania-2',
      category: 'POLÍCIA CIENTÍFICA',
      title: 'Obter 2ª via da Carteira de Identidade Nacional - CIN',
      slug: 'assistencia-social-cidadania/obter-segunda-via-da-carteira-identidade-nacional',
      description: 'Solicitar a 2ª via da Carteira de Identidade Nacional em caso de perda, roubo ou dano do documento. Serviço destinado a quem já possui a CIN.',
      impact: 'Garante continuidade do acesso a direitos básicos como escola, saúde, programas sociais e bancarização.\n\n976.000 Carteiras de Identidade Nacional já emitidas no estado até 23 de julho de 2025.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-3',
      category: 'SJDH',
      title: 'Solicitar 2ª via da Carteira de Identificação da Pessoa com Transtorno do Espectro Autista',
      slug: 'assistencia-social-cidadania/solicitar-segunda-via-da-carteira-de-identificacao-pessoa-transtorno-espectro-autista',
      description: 'Emitir a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista para garantir prioridade no atendimento e acesso a serviços públicos.',
      impact: 'Evita perda da proteção em filas e transportes e reduz a ansiedade dos responsáveis.\n\nMais de 5 mil carteiras entregues todos os anos.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-4',
      category: 'SJDH',
      title: 'Solicitar 1ª via da Carteira de Identificação da Pessoa com Transtorno do Espectro Autista',
      slug: 'assistencia-social-cidadania/solicitar-primeira-via-da-carteira-de-identificacao-pessoa-transtorno-espectro-autista',
      description: 'Emitir a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista para garantir prioridade no atendimento e acesso a serviços públicos.',
      impact: 'Facilita identificação e acesso a direitos com menos desgaste para famílias.\n\nPernambuco possui aproximadamente 105.852 pessoas diagnosticadas com TEA.',
    servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-5',
      category: 'SJDH',
      title: 'Solicitar intérprete de Libras virtual - Tá na mão',
      slug: 'assistencia-social-cidadania/solicitar-interprete-libras-virtual',
      description: 'Serviço de inclusão para pessoas surdas ou com baixa audição, facilitando o acesso aos serviços públicos essenciais por meio de intérpretes de Libras.',
      impact: 'Serviço de apoio à comunicação que possibilita a mediação, em tempo real, por profissional de Libras, entre o cidadão e os atendimentos presenciais do Governo de Pernambuco, promovendo acessibilidade comunicacional e inclusão nos serviços públicos.Quase 4 mil atendimentos já realizados, garantindo acessibilidade imediata; reduzindo barreiras de comunicação em serviços públicos.',
    servicoDigital: true
    },
   
]
},
{
  id: 'cultura-artes-historia-esportes',
  category: 'cultura-artes-historia-esportes',
  title: 'Cultura, Artes, História e Esportes',
  slug: 'cultura-artes-historia-esportes',
  iconeWhite: '/icone-menu-branco/Icon=theater_comedy.svg',
  iconeAzul: '/icone-menu-azul/Icon=theater_comedy.svg',
  items: [
    {
      id: 'cultura-artes-historia-esportes-1',
      category: 'SEMAS',
      title: 'Solicitar Visita Guiada - Parque de Dois Irmãos',
      slug: 'cultura-artes-historia-esportes/solicitar-visita-guiada-parque-de-dois-irmaos',
      description: 'Visita ao zoológico, com monitoria sobre a fauna, flora e conservação.',
      impact: 'Serviço de visita guiada em uma das maiores áreas de Mata Atlântica urbana preservada do país, com foco em educação ambiental, conscientização ecológica e lazer orientado. O agendamento garante acesso organizado, previsível e adequado à capacidade do parque, especialmente para grupos escolares e projetos educativos.',
    servicoDigital: true
    },
    {
      id: 'cultura-artes-historia-esportes-2',
      category: 'Fundarpe',
      title: 'Visitar Casa da Cultura Luiz Gonzaga',
      slug: 'cultura-artes-historia-esportes/visitar-casa-da-cultura-luiz-gonzaga',
      description: 'Permite visitar a Casa da Cultura Luiz Gonzaga, que oferece lojas de artesanato cultural, sede de grupos culturais e apresentações artísticas.',
      impact: 'Equipamento cultural estratégico que reúne mais de 100 iniciativas de economia criativa e artesanato, promovendo a valorização da cultura popular pernambucana, o turismo cultural e a geração de renda no centro histórico do Recife.',
    servicoDigital: true
    },
    {
      id: 'cultura-artes-historia-esportes-3',
      category: 'Fundarpe',
      title: 'Visitar Cinema São Luiz',
      slug: 'cultura-artes-historia-esportes/visitar-cinema-sao-luiz',
      description: 'Permite assistir a filmes no Cinema São Luiz, que conta com 992 poltronas, incluindo assentos acessíveis para cadeirantes e poltronas especiais.',
      impact: 'Equipamento cultural histórico com capacidade para mais de mil pessoas, dedicado à difusão do cinema brasileiro, à formação de público e ao acesso democrático à cultura, por meio de programação pública contínua e eventos culturais.',
    servicoDigital: true
    },
    {
      id: 'cultura-artes-historia-esportes-4',
      category: 'Fundarpe',
      title: 'Visitar Museu do Estado de Pernambuco',
      slug: 'cultura-artes-historia-esportes/visitar-museu-do-estado-de-pernambuco',
      description: 'Permite conhecer o Museu do Estado de Pernambuco, com acervo histórico e artístico que preserva a memória e a cultura do estado.',
      impact: 'Museu de referência nacional, com acervo histórico e artístico de grande porte, que cumpre papel central na preservação da memória, na educação patrimonial e no fortalecimento do turismo cultural em Pernambuco.',
    servicoDigital: true
    },
    {
      id: 'cultura-artes-historia-esportes-5',
      category: 'Fundarpe',
      title: 'Visitar Museu do Barro de Caruaru - Espaço Zé Caboclo',
      slug: 'cultura-artes-historia-esportes/visitar-museu-do-barro-de-caruaru',
      description: 'Permite conhecer o Museu do Barro, que preserva e promove a cerâmica popular da região com um acervo de 2.300 peças e exposições sobre a cultura de Caruaru.',
      impact: 'Equipamento cultural dedicado à preservação e difusão da arte figurativa em barro, expressão reconhecida da cultura popular pernambucana, com impacto direto na identidade regional, na economia criativa e no turismo cultural do Agreste.',
    servicoDigital: true
    },
    {
      id: 'cultura-artes-historia-esportes-6',
      category: 'Gabinete da Governadora',
      title: 'Visitar o Palácio do Campo das Princesas',
      slug: 'cultura-artes-historia-esportes/visitar-palacio-do-campo-das-princesas',
      description: 'Permite realizar visita guiada ao Palácio do Campo das Princesas, conduzida por estagiários de História, para grupos e instituições.',
      impact: 'Visita institucional à sede histórica do Poder Executivo Estadual, promovendo educação cívica, transparência simbólica e aproximação do cidadão com a história política e administrativa de Pernambuco.',
    servicoDigital: true

    }
  ]
},
{
  id: 'educacao-pesquisa',
  category: 'educacao-pesquisa',
  title: 'Educação e pesquisa',
  slug: 'educacao-pesquisa',
  iconeWhite: '/icone-menu-branco/Icon=book_5.svg',
  iconeAzul: '/icone-menu-azul/Icon=book_5.svg',
  items: [
    {
      id: 'educacao-pesquisa-1',
      category: 'SEE',
      title: 'Prestar contas do Pix Tênis',
      slug: 'educacao-pesquisa/prestar-contas-pix-tenis',
      description: 'Informar como foi usado o valor recebido pelo Programa Meu Tênis. O valor deve ser usado para compra de tênis. É preciso guardar a nota fiscal da compra, em nome da pessoa beneficiária ou do responsável legal.',
      impact: 'Transparência e agilidade na execução do benefício; evita retrabalho, fila e inconsistência cadastral (controle e auditoria do repasse).\n\nJá foi distribuído quase 75 milhões de reais para os mais de 500 mil alunos da rede estadual, os novos alunos da rede de 2026 também serão beneficiados.',
    servicoDigital: true
    },
    {
      id: 'educacao-pesquisa-2',
      category: 'SEE',
      title: 'Emitir Histórico Escolar e Certificado de Conclusão de estudantes da Rede Estadual de Ensino',
      slug: 'educacao-pesquisa/emitir-historico-escolar-e-certificado-de-conclusao',
      description: 'O Histórico Escolar é o documento que sintetiza a trajetória escolar do(a) estudante. Neste documento devem constar a carga horária total de cada ano/série/ciclo/fase/módulo/eixo e a carga horária total vivenciada na etapa de ensino.',
      impact: 'Documento escolar com acesso imediato e redução de burocracia (evita ida à escola/secretaria, acelera matrícula, emprego, universidade).\n\nBenefício direto para os mais de 500 mil alunos e seus familiares todos os anos, e os mais de 2 mil gestores das escolas estaduais. Além de uma economia financeira de quase 4 milhões de reais em custos logísticos e operacionais todos os anos.',
    servicoDigital: true
    },
    {
      id: 'educacao-pesquisa-3',
      category: 'SEE',
      title: 'Consultar Notas e Frequências dos Alunos',
      slug: 'educacao-pesquisa/consultar-notas-e-frequencias-dos-alunos',
      description: 'O SIEPE é um Sistema Informatizado da Secretaria de Educação e Esportes, onde é possível encontrar informações da Rede Estadual de Ensino. A consulta pode ser realizada pelos alunos e pela família, com acesso a dados como notas e frequência escolar, assim como informações da respectiva escola, como o horário de aulas.',
      impact: 'Acompanhamento contínuo do desempenho e frequência; fortalece vínculo família-escola e prevenção de evasão.\n\nAlunos cujos pais acessam o app ao menos 2 vezes por mês apresentam, em média, 12% menos faltas do que alunos sem acompanhamento digital.',
    servicoDigital: true
    },
    {
      id: 'educacao-pesquisa-4',
      category: 'SEE',
      title: 'Realizar matrícula de estudantes novatos na Rede Estadual de Ensino',
      slug: 'educacao-pesquisa/realizar-matricula-de-estudantes-novatos',
      description: 'Permitir que pessoas novatas se cadastrem em escolas da Rede Estadual de Ensino. A matrícula só é confirmada após a entrega da documentação na escola escolhida. O cadastro é feito online. Só é possível escolher uma escola.',
      impact: 'Amplia acesso e organiza fluxo de entrada com previsibilidade para famílias e gestão.\n\n174.675 vagas ofertadas para estudantes novatos; rede com 1.081 escolas e mais de 500 mil estudantes atendidos.',
    servicoDigital: true
    },
    {
      id: 'educacao-pesquisa-5',
      category: 'SEE',
      title: 'Realizar Matrícula no Núcleo de Estudos de Línguas - NEL',
      slug: 'educacao-pesquisa/realizar-matricula-no-nucleo-de-estudos-de-linguas',
      description: 'Realizar matrícula para cursos gratuitos de idiomas em escolas da rede pública, distribuídas nos cursos de Inglês, Espanhol, Francês e Alemão.',
      impact: 'Qualificação e oportunidade para juventude; idiomas como alavanca para estudo e empregabilidade.\n\nMais de 10 mil vagas ofertadas em cursos gratuitos de idiomas, só em 2016, com inscrição online.',
    servicoDigital: true
    },
    {
      id: 'educacao-pesquisa-6',
      category: 'UPE',
      title: 'Consultar acervo físico da biblioteca da Universidade Estadual de Pernambuco',
      slug: 'educacao-pesquisa/consultar-acervo-fisico-da-biblioteca-da-upe',
      description: 'Verificar livros e outros materiais disponíveis nas bibliotecas da Universidade Estadual de Pernambuco.',
      impact: 'Acesso facilitado ao conhecimento; reduz barreiras para estudo e pesquisa.\n\nUm campus da UPE informa acervo físico com aproximadamente 5.892 títulos e 13.870 exemplares cadastrados no Pergamum.',
servicoDigital: true

    }
  ]
},
{
  id: 'infraestrutura-transito-transportes',
  category: 'infraestrutura-transito-transportes',
  title: 'Infraestrutura, Trânsito e Transportes',
  slug: 'infraestrutura-transito-transportes',
  iconeWhite: '/icone-menu-branco/Icon=traffic_jam.svg',
  iconeAzul: '/icone-menu-azul/Icon=traffic_jam.svg',
  items: [
    {
      id: 'infraestrutura-transito-transportes-1',
      category: 'CTM',
      title: 'Grande Recife - Desbloqueios dos Cartões VEM Livre Acesso',
      slug: 'infraestrutura-transito-transportes/desbloqueio-dos-cartoes-vem-livre-acesso',
      description: 'Agendamento de atendimento para solicitação de Desbloqueio dos Cartões VEM Livre Acesso, Idoso e Infantil.',
      impact: '',
    servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-transportes-2',
      category: 'CTM',
      title: 'Obter VEM estudante',
      slug: 'infraestrutura-transito-transportes/obter-vem-estudante',
      description: 'O VEM Estudante garante o benefício da meia passagem aos estudantes de instituições públicas e privadas cadastradas no Grande Recife Consórcio de Transporte. A primeira via do VEM Estudante, assim como a de todos os demais cartões VEM, é gratuita.',
      impact: 'Mobilidade para estudar; reduz deslocamento e burocracia para emissão, solicitação e compra de crédito.\n\nGarante a economia de 50% no valor da tarifa para milhares de alunos da rede estadual.',
    servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-transportes-3',
      category: 'CTM',
      title: 'Recarregar créditos do VEM estudante',
      slug: 'infraestrutura-transito-transportes/recarregar-creditos-do-vem-estudante',
      description: 'Permitir recarregar créditos no Cartão VEM Estudante pela internet.',
      impact: 'Recarga e compra de créditos via serviço digital do Cartão VEM, reduz fricção do dia a dia, sem fila.\n\nElimina o tempo de espera em filas físicas, que pode chegar a 40 minutos em horários de pico nos terminais, além do tempo de deslocamento até estes, através da compensação de créditos via canais digitais.',
    servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-transportes-4',
      category: 'CTM',
      title: 'Solicitar aumento de créditos do VEM Estudante',
      slug: 'infraestrutura-transito-transportes/solicitar-aumento-de-creditos-do-vem-estudante',
      description: 'Permitir que estudantes solicitem mais créditos no VEM Estudante com base nas atividades do curso. A solicitação deve ser feita no site do Grande Recife, preenchendo o formulário e anexando os documentos exigidos. A renovação é feita a cada semestre, de janeiro a junho e de julho a dezembro.',
      impact: 'Garante permanência e acesso à escola, com benefício e limite adequados ao deslocamento do estudante.\n\nGarante a eficácia logística do sistema de transporte ao processar demandas de estudantes que percorrem trajetos integrados, assegurando que o limite de viagens acompanhe a malha viária do estado.',
    servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-transportes-5',
      category: 'CTM',
      title: 'Consultar itinerários, paradas e localidades de Ônibus',
      slug: 'infraestrutura-transito-transportes/consultar-itinerarios-paradas-e-localidades-de-onibus',
      description: 'Permite a consulta de itinerários, paradas e localidades das linhas de ônibus por empresa operadora no Grande Recife.',
      impact: 'Previsibilidade do deslocamento e economia de tempo; reduz faltas por atraso e insegurança no trajeto.\n\nOtimiza a operação do sistema de transporte ao reduzir a ociosidade nas paradas e aumentar a eficiência do uso das mais de 400 linhas gerenciadas pelo CTM através da informação em tempo real.',
      servicoDigital: true

    }
  ]
},
{
  id: 'justica-seguranca',
  category: 'justica-seguranca',
  title: 'Justiça e Segurança',
  slug: 'justica-seguranca',
  iconeWhite: '/icone-menu-branco/Icon=clinical_notes.svg',
  iconeAzul: '/icone-menu-azul/Icon=clinical_notes.svg',
  items: [
    {
      id: 'justica-seguranca-1',
      category: 'POLÍCIA CIVIL',
      title: 'Registrar boletim de ocorrência online',
      slug: 'justica-seguranca/registrar-boletim-de-ocorrencia-online',
      description: 'Permite o registro de boletim de ocorrência pela internet.',
      impact: 'Acesso rápido ao Estado em situação de vulnerabilidade; reduz deslocamento e acelera formalização do registro.\n\nA meta é que os registros via delegacia eletrônica alcancem entre 25% e 40% dos boletins para crimes sem flagrante imediato.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-2',
      category: 'SECMULHER',
      title: 'Relatar Caso de Violência - Protege Mulher',
      slug: 'justica-seguranca/197-relatar-caso-de-violencia-protege-mulher',
      description: 'Relatar anonimamente caso de violência contra a mulher, ajudando no mapeamento de áreas de risco e em ações de proteção para todas as mulheres. Este registro não corresponde a um Boletim de Ocorrência (BO).',
      impact: 'Canal direto de relato e acionamento; reduz subnotificação e melhora resposta do Estado.\n\nPernambuco registrou 34.679 vítimas de violência doméstica segundo dados divulgados pela Secretaria de Defesa Social.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-3',
      category: 'SECMULHER',
      title: 'Localizar rede de apoio mais próxima - Protege Mulher',
      slug: 'justica-seguranca/localizar-rede-de-apoio-mais-proxima-protege-mulher',
      description: 'Localizar unidade de apoio para mulheres que tenham sofrido violência de gênero.',
      impact: 'Orientação imediata e direcionamento para a rede; reduz tempo até ajuda.\n\n31.030 atendimentos em 2025 para pedir serviços de apoio.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-4',
      category: 'SECMULHER',
      title: 'Receber orientação e apoio em situação de Violência - Protege Mulher',
      slug: 'justica-seguranca/receber-orientacao-e-apoio-em-situacao-de-violencia',
      description: 'Orientar e apoiar mulheres em situação de violência, oferecendo informações sobre direitos, tipos de violência e caminhos para buscar ajuda, de forma simples, segura e acessível.',
      impact: 'Ambiente de acolhimento e orientação do Protege Mulher.\n\nAmbiente com potencial de acolher e orientar todas as 882 mil mulheres pernambucanas.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-5',
      category: 'POLÍCIA CIVIL',
      title: 'Solicitar Medida Protetiva de Urgência',
      slug: 'justica-seguranca/solicitar-medida-protetiva-de-urgencia',
      description: 'Solicitar proteção imediata após registrar boletim de ocorrência por violência doméstica. É o pedido feito na delegacia para garantir a segurança de quem sofre violência doméstica. A medida pode afastar o agressor do lar, impedir que ele se aproxime da vítima ou de familiares, entre outras ações previstas no artigo 22 da Lei Maria da Penha. Caso não haja delegacia especializada de atendimento à mulher, a delegacia mais próxima prestará o atendimento.',
      impact: 'Proteção com rapidez; acelera a medida de urgência e reduz exposição ao risco.\n\nEm 2025, nas 15 Delegacias Especializadas de Atendimento à Mulher do estado, 7.609 inquéritos policiais foram enviados, 16.538 pedidos de Medidas Protetivas de Urgência foram formulados e 187 mandados de prisão foram cumpridos.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-6',
      category: 'POLÍCIA CIVIL',
      title: 'Realizar cadastro no Alerta Celular',
      slug: 'justica-seguranca/realizar-cadastro-no-alerta-celular',
      description: 'O sistema Alerta Celular ajuda a prevenir furtos, roubos e receptação de celulares em Pernambuco. Com o cadastro do número de série IMEI no sistema, as Polícias Civil e Militar podem localizar o aparelho em casos de extravio e roubo.',
      impact: 'Aumenta chance de recuperação e desestimula roubo e furto; melhora eficiência da abordagem policial.\n\nMais de 9 mil celulares recuperados em 2025, mais de 87 mil desde o início do programa e 990 mil aparelhos cadastrados na base.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-7',
      category: 'POLÍCIA CIVIL',
      title: 'Registrar Boletim de Ocorrência contra Criança ou Adolescente',
      slug: 'justica-seguranca/registrar-boletim-de-ocorrencia-contra-crianca-ou-adolescente',
      description: 'Permite registrar ocorrências de crimes cometidos contra crianças e adolescentes, iniciando investigação da conduta do acusado.',
      impact: 'Facilita o início da proteção, investigação e acionamento da rede como Conselho Tutelar, Ministério Público, Judiciário e rede de saúde e assistência. Serviço digital com orientações e requisitos, reforçando padronização e acesso.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-8',
      category: 'POLÍCIA CIVIL',
      title: 'Registrar e Divulgar Desaparecimento de Crianças e Adolescentes',
      slug: 'justica-seguranca/registrar-e-divulgar-desaparecimento-de-criancas-e-adolescentes',
      description: 'Permite registrar e divulgar o desaparecimento de crianças e adolescentes para facilitar sua localização.',
      impact: 'Acelera a comunicação do desaparecimento e amplia chances de localização ao mobilizar rede e divulgação.\n\nEm 2025, houve 695 desaparecimentos de pessoas de 0 a 17 anos em Pernambuco, sendo 271 localizadas no ano.',
    servicoDigital: true
    },
    {
      id: 'justica-seguranca-9',
      category: 'SJDH',
      title: 'Solicitar proteção para criança ou adolescente ameaçado de morte',
      slug: 'justica-seguranca/solicitar-protecao-para-crianca-ou-adolescente-ameacado-de-morte',
      description: 'Garantir proteção integral a criança ou adolescente com risco de morte. A inclusão no programa deve ser solicitada por órgãos do Sistema de Garantia de Direitos, como Ministério Público, Poder Judiciário, Conselhos Tutelares ou Defensoria Pública. O caso é analisado pela equipe técnica do PPCAAM.',
      impact: 'Proteção especializada para casos de grave ameaça, com foco em preservar vidas e reinserção social.\n\nO monitoramento do IHA em Pernambuco é base para reverter o recorde de 99 adolescentes mortos no Grande Recife, direcionando o programa Juntos pela Segurança para proteger a população jovem mais vulnerável.',
    servicoDigital: true
    },
    ]
  },
{
  id: 'saude-vigilancia-sanitaria',
  category: 'saude-vigilancia-sanitaria',
  title: 'Saúde e Vigilância Sanitária',
  slug: 'saude-vigilancia-sanitaria',
  iconeWhite: '/icone-menu-branco/Icon=cardiology.svg',
  iconeAzul: '/icone-menu-azul/Icon=cardiology.svg',
  items: [
    {
      id: 'saude-vigilancia-sanitaria-1',
      category: 'UPE',
      title: 'Obter Atendimento em Pré-natal para Adolescentes',
      slug: 'saude-vigilancia-sanitaria/obter-atendimento-em-pre-natal-para-adolescentes',
      description: 'Consulta para diagnóstico de gravidez e acompanhamento pré-natal para adolescentes.',
      impact: 'Cuidado oportuno e prevenção de riscos; atendimento direcionado a um público sensível (impacto direto em saúde materna e neonatal).\n\nCerca de 17% a 20% dos nascidos vivos em Pernambuco são de mães entre 10 e 19 anos.',
servicoDigital: true

    }
  ]
},





];

export const infanciaData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    iconeWhite: '/icone-menu-branco/Icon=book_5.svg',
    iconeAzul: '/icone-menu-azul/Icon=book_5.svg',
    items: []
  },
   {
    id: 'assistencia-social-cidadania',
    category: 'assistencia-social-cidadania',
    title: 'Assistência Social e Cidadania',
    slug: 'assistencia-social-cidadania',
    iconeWhite: '/icone-menu-branco/Icon=volunteer_activism.svg',
    iconeAzul: '/icone-menu-azul/Icon=volunteer_activism.svg',
    items: [
      {
        id: 'assistencia-social-cidadania-1',
        category: 'SJDH',
        title: 'Solicitar 1ª via da Carteira de Identificação da Pessoa com o Transtorno do Espectro Autista',
        slug: 'assistencia-social-cidadania/solicitar-1-via-carteira-identificacao',
        description:'Emitir a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (Ciptea) para garantir prioridade no atendimento e acesso a serviços públicos.',
        impact:'Facilita identificação e acesso a direitos e atendimento prioritário, com menos desgaste para famílias.Pernambuco possui aproximadamente 105.852 pessoas diagnosticadas com TEA.',
        servicoDigital: true
      },
      {
        id: 'assistencia-social-cidadania-2',
        category: 'SJDH',
        title: 'Solicitar 2ª via da Carteira de Identificação da Pessoa com o Transtorno do Espectro Autista',
        slug: 'assistencia-social-cidadania/solicitar-2-via-carteira-identificacao',
        description:'Emitir 2ª via da carteira que garante prioridade a pessoas com Transtorno do Espectro Autista (TEA). A carteira é chamada de CIPTEA (Carteira de Identificação da Pessoa com Transtorno do Espectro Autista). O documento garante prioridade no atendimento e facilita o acesso a serviços.',
        impact:'A perda de um documento de identificação de um autista gera uma ansiedade enorme nos responsáveis, pois a "barreira de proteção" contra o preconceito em filas e transportes desaparece.Mais de 5 mil carteiras entregues todos os anos.',
      servicoDigital: true
      },
      {
        id: 'assistencia-social-cidadania-3',
        category: 'SAS',
        title: 'Obter Benefício do Programa Mães de Pernambuco',
        slug: 'assistencia-social-cidadania/obter-beneficio-programa-maes-Pernambuco',
        description:'Transferência de renda mensal de R$ 300,00 para mulheres em situação de extrema vulnerabilidade social, com filhos de até 6 anos, oferecido pelo Governo de Pernambuco.',
        impact:'Renda que fortalece o cuidado na primeira infância e segurança alimentar das famílias mais vulneráveis.Desde o lançamento (mar/2024) o programa já beneficiou mais de 139 mil mulheres e destinou R$ 597,6 milhões em benefícios',
      servicoDigital: true
      },
      
     
    ]
  },
  {
    id: 'justica-seguranca',
    category: 'Justica-seguranca',
    title: 'Justiça e Segurança',
    slug: 'Justica-seguranca',
      iconeWhite: '/icone-menu-branco/Icon=local_police.svg',
    iconeAzul: '/icone-menu-azul/Icon=local_police.svg',
    items: [
      {
        id: 'justica-seguranca-1',
        category: 'UPE-CISAM',
        title: 'Registrar Boletim de Ocorrência contra Criança ou Adolescente',
        slug: 'justica-seguranca/registrar-boletim-de-ocorrencia-contra-crianca-ou-adolescente',
        description:'Permite registrar ocorrências de crimes cometidos contra crianças e adolescentes, iniciando investigação da conduta do acusado.',
        impact:'Facilita o início da proteção, investigação e acionamento da rede (Conselho Tutelar, MP, Judiciário e rede de saúde/assistência). Serviço DIGITAL com orientações e requisitos — reforça padronização e acesso.',
      servicoDigital: true
      },
      {
        id: 'justica-seguranca-2',
        category: 'UPE-CISAM',
        title: 'Registrar e Divulgar Desaparecimento de Crianças e Adolescentes',
        slug: 'justica-seguranca/registrar-e-divulgar-desaparecimento-de-criancas-e-adolescentes',
        description:'Permite registrar e divulgar o desaparecimento de crianças e adolescentes para facilitar sua localização.',
        impact:'Acelera a comunicação do desaparecimento e amplia chances de localização ao mobilizar rede e divulgação. Em 2025, houve 695 desaparecimentos de pessoas de 0 a 17 anos em Pernambuco; 271 foram localizadas no ano, segundo levantamento divulgado.',
      servicoDigital: true
      },
      {
        id: 'justica-seguranca-3',
        category: 'SJDH',
        title: 'Solicitar proteção para criança ou adolescente ameaçado de morte',
        slug: 'justica-seguranca/solicitar-protecao-para-crianca-ou-adolescente-ameacado-de-morte',
        description:'Garantir proteção integral a criança ou adolescente com risco de morte. A inclusão no programa deve ser solicitada por órgãos que compõem o Sistema de Garantia de Direitos, como o Ministério Público, Poder Judiciário, Conselhos Tutelares ou Defensoria Pública. O caso precisa ser analisado pela equipe técnica do PPCAAM.',
        impact:'Proteção especializada para casos de grave ameaça, com foco em preservar vidas e reinserção social. O serviço não protege apenas o menor; ele se estende aos familiares. Historicamente, para cada criança protegida, o programa acolhe cerca de 1,6 familiares, preservando o vínculo afetivo e a segurança do núcleo em risco.',
      servicoDigital: true
      },
    ]
  },
  {
    id: 'saude-vigilancia-sanitaria',
    category: 'Saúde-Vigilância-Sanitária',
    title: 'Saúde e Vigilância Sanitária',
    slug: 'saude-vigilancia-sanitaria',
    iconeWhite: '/icone-menu-branco/Icon=cardiology.svg',
    iconeAzul: '/icone-menu-azul/Icon=cardiology.svg',
    items: [
      {
        id: 'saude-vigilancia-sanitaria',
        category: 'UPE-CISAM',
        title: 'Solicitar Vacinação Infantil',
        slug: 'saude-vigilancia-sanitaria/solicitar-vacinacao-infantil',
        description:'Oferecer as principais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.',
      servicoDigital: true
      },
        {
        id: 'saude-vigilancia-sanitaria-2',
        category: 'UPE-CISAM',
        title: 'Realizar Teste do Pezinho',
        slug: 'saude-vigilancia-sanitaria/realizar-teste-pezinho',
        description:'Exame de sangue coletado do calcanhar do bebê, utilizado para identificar algumas doenças logo após o nascimento.',
        impact:'Triagem neonatal que identifica precocemente doenças graves e evita sequelas. Em 2024 foram 474.339 testes realizados e 86.446 crianças triadas em Pernambuco (Lacen-PE)',
      servicoDigital: true
      },
       {
        id: 'saude-vigilancia-sanitaria-3',
        category: 'UPE-CISAM',
        title: 'Obter Leite Humano (Banco de Leite)',
        slug: 'saude-vigilancia-sanitaria/obter-leite-humano',
        description:'Coleta, processamento e distribuição de leite humano para bebês prematuros ou de baixo peso que não podem ser amamentados pelas próprias mães. Também oferece apoio ao aleitamento materno.',
        impact:'Garante nutrição e proteção imunológica para recém-nascidos, especialmente prematuros e internados. Em 2024, foram distribuídos 8.503,4 litros de leite humano no estado.',
      servicoDigital: true
      },
      {
        id: 'saude-vigilancia-sanitaria-4',
        category: 'UPE-CISAM',
        title: 'Receber atendimento odontológico infantil',
        slug: 'saude-vigilancia-sanitaria/receber-atendimento-odontologico-infantil',
        description:'Consulta e tratamento odontológico para crianças.',
        impact:'Previne dor, infecções, perdas dentárias precoces e melhora alimentação e aprendizagem. O CISAM/UPE mantém linha de cuidado multidisciplinar e serviços assistenciais integrados.',
      servicoDigital: true
      },
      {
        id: 'saude-vigilancia-sanitaria-5',
        category: 'UPE-CISAM',
        title: 'Obter acompanhamento para gestantes e crianças',
        slug: 'saude-vigilancia-sanitaria/obter-acompanhamento-para-gestantes-criancas',
        description:'Acompanhamento para gestantes, puérperas e crianças até 6 anos incompletos, em parceria com as equipes de saúde dos municípios. O objetivo é melhorar a qualidade da assistência e fortalecer os laços afetivos entre mãe, filho e família.',
        impact:'Reduz riscos na gestação e no início da vida, ampliando segurança no pré-natal e no cuidado infantil. Assistência e acompanhamento integral de 21 mil mulheres e 17 mil crianças, em 2025.',
      servicoDigital: true
      },
      {
        id: 'saude-vigilancia-sanitaria-6',
        category: 'UPE-CISAM',
        title: 'Obter Atendimento em Pediatria Clínica Ambulatorial',
        slug: 'saude-vigilancia-sanitaria/obter-atendimento-pediatria-clinica-ambulatorial',
        description:'Consulta ambulatorial para recém-nascidos, crianças e adolescentes, visando a prevenção, diagnóstico e tratamento de doenças como infecções respiratórias, gastrointestinais, alergias, doenças virais, distúrbios do crescimento e desenvolvimento, entre outras.',
        impact:'Atendimento contínuo que evita agravamentos e reduz procura desnecessária por emergência. Mais de 420 mil atendimentos realizados por ano.',
      servicoDigital: true
      },
      {
        id: 'saude-vigilancia-sanitaria-7',
        category: 'SES',
        title: 'Obter Atendimento em Pediatria Clínica de Emergência',
        slug: 'saude-vigilancia-sanitaria/obter-atendimento-pediatria-clinica-emergencia',
        description:'Atendimento emergencial para pacientes pediátricos com doenças graves, como pneumonia, diabetes, febres malignas, desidratação e infecções.',
        impact:'Atendimento rápido em situações agudas, evitando complicações e internações mais graves. Mais de 1 milhão de atendimentos realizados por ano.',
      servicoDigital: true
      },
    ]
  },
 
 
];


export const terceiraidadeData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    iconeWhite: '/icone-menu-branco/Icon=cards_stack.svg',
    iconeAzul: '/icone-menu-azul/Icon=cards_stack.svg',
    items: []
  },
  {
  id: 'assistencia-social-cidadania',
  category: 'assistencia-social-cidadania',
  title: 'Assistência Social e Cidadania',
  slug: 'assistencia-social-cidadania',
  iconeWhite: '/icone-menu-branco/Icon=volunteer_activism.svg',
  iconeAzul: '/icone-menu-azul/Icon=volunteer_activism.svg',
  items: [
    {
      id: 'assistencia-social-cidadania-1',
      category: 'SJDH',
      title: 'Solicitar formação ou palestra de prevenção contra a violência à pessoa idosa',
      slug: 'assistencia-social-cidadania/solicitar-formacao-ou-palestra-de-prevencao-contra-violencia-a-pessoa-idosa',
      description: 'Oferecer palestras e formações para prevenir a violência contra pessoas idosas. A ação educativa busca conscientizar sobre os direitos da pessoa idosa e formas de prevenir e enfrentar violências, seguindo as políticas públicas de direitos humanos do Estado de Pernambuco.',
      impact: 'Atuação preventiva e educativa, voltada a reduzir violência física, psicológica, patrimonial e negligência contra a pessoa idosa, fortalecendo redes de proteção comunitária e institucional.Segundo dados públicos do IBGE e da Secretaria de Justiça/Direitos Humanos, Pernambuco possui mais de 1,6 milhão de pessoas com 60 anos ou mais, grupo que cresce de forma acelerada e é reconhecido como população de maior risco para violências silenciosas (domésticas e patrimoniais).',
    servicoDigital: true
    },
]
},
  {
  id: 'infraestrutura-transito-transportes',
  category: 'infraestrutura-transito-transportes',
  title: 'Infraestrutura, Trânsito e Transportes',
  slug: 'infraestrutura-transito-transportes',
  iconeWhite: '/icone-menu-branco/Icon=traffic_jam.svg',
  iconeAzul: '/icone-menu-azul/Icon=traffic_jam.svg',
  items: [
    {
      id: 'infraestrutura-transito-transportes-1',
      category: 'CTM',
      title: 'Solicitar cartão VEM Idoso',
      slug: 'infraestrutura-transito-transportes/solicitar-cartao-vem-idoso',
      description: 'Permitir que pessoas com 65 anos ou mais tenham acesso gratuito ao transporte público com o VEM Idoso.',
      impact: 'Acesso imediato à mobilidade na RMR para pessoas idosas (65+), reduzindo barreiras de deslocamento para saúde, assistência, lazer e rede de apoio.Somente na RMR, já foram emitidos 57.461 cartões VEM Idoso, assegurando gratuidade de forma simples e rastreável, com impacto direto na mobilidade e acesso a serviços essenciais.',
    servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-transportes-2',
      category: 'SJDH',
      title: 'Solicitar gratuidade no transporte intermunicipal',
      slug: 'infraestrutura-transito-transportes/solicitar-gratuidade-no-transporte-intermunicipal',
      description: 'Garantir transporte intermunicipal gratuito a pessoas com deficiência no Estado de Pernambuco. A gratuidade é válida para viagens entre cidades dentro do Estado. A carteira só é emitida após análise da documentação médica.',
      impact: 'O serviço viabiliza o exercício do direito de gratuidade intermunicipal, operacionalizado com 2 assentos gratuitos por viagem, reduzindo barreiras de acesso a saúde e assistência para a pessoa idosa.',
    servicoDigital: true
    },
  
  ]
},

{
  id: 'saude-vigilancia-sanitaria',
  category: 'saude-vigilancia-sanitaria',
  title: 'Saúde e Vigilância Sanitária',
  slug: 'saude-vigilancia-sanitaria',
   iconeWhite: '/icone-menu-branco/Icon=cardiology.svg',
  iconeAzul: '/icone-menu-azul/Icon=cardiology.svg',
  items: [
    {
      id: 'saude-vigilancia-sanitaria-1',
      category: 'SJDH',
      title: 'Solicitar monitoramento de instituições para pessoas idosas',
      slug: 'saude-vigilancia-sanitaria/solicitar-monitoramento-de-instituicoes-para-pessoas-idosas',
      description: 'Fiscalizar instituições para pessoas idosas a partir de denúncias ou pedidos formais. O serviço verifica se as instituições estão funcionando de forma adequada e respeitando os direitos das pessoas idosas. Pode gerar visitas, orientações ou encaminhamentos a órgãos competentes.',
      impact: 'Fiscalização reduz risco sanitário, negligência e violação de direitos em instituições.O serviço estrutura a proteção da pessoa idosa com monitoramento ativo de ILPIs, com transparência por registro público de visitas, e atua sobre uma rede que inclui unidades de acolhimento mapeadas pelo CadSUAS',
    servicoDigital: true
    },
    {
      id: 'saude-vigilancia-sanitaria-2',
      category: 'SES',
      title: 'Obter atendimento ambulatorial em geriatria',
      slug: 'saude-vigilancia-sanitaria/obter-atendimento-ambulatorial-em-geriatria',
      description: 'Consulta para diagnóstico e acompanhamento de pessoas idosas, prevenindo e tratando doenças como demência, diabetes, hipertensão e osteoporose.',
      impact: 'Consulta especializada para diagnóstico, acompanhamento e cuidado integral da pessoa idosa, prevenindo agravamentos e garantindo tratamento adequado para doenças crônicas como demência, diabetes, hipertensão e osteoporose.Doenças crônicas não transmissíveis são responsáveis por mais de 70% das causas de internação e óbito nessa faixa etária.',
    servicoDigital: true
    },
   
  ]

},

{
  id: 'trabalho-emprego-previdencia',
  category: 'trabalho-emprego-previdencia',
  title: 'Trabalho, Emprego e Previdência',
  slug: 'trabalho-emprego-previdencia',
  iconeWhite: '/icone-menu-branco/Icon=business_center.svg',
  iconeAzul: '/icone-menu-azul/Icon=business_center.svg',
  items: [
    // {
    //   id: 'trabalho-emprego-previdencia-1',
    //   category: 'FUNAPE',
    //   title: 'Solicitar Readmissão de Pensão por Morte',
    //   slug: 'trabalho-emprego-previdencia/solicitar-readmissao-de-pensao-por-morte',
    //   description: 'Solicitar reintegração de pensionista previdenciário em nova condição de dependência diferente da que possuía quando habilitado no benefício, especialmente filhos maiores de 21 anos por doença incapacitante, universitários até 24 anos ou filhos de militares cujo óbito ocorreu a partir de 1º de janeiro de 2022.',
    //   impact: '',
    // servicoDigital: true
    // },
    // {
    //   id: 'trabalho-emprego-previdencia-2',
    //   category: 'FUNAPE',
    //   title: 'Solicitar Pagamento a Herdeiros',
    //   slug: 'trabalho-emprego-previdencia/solicitar-pagamento-a-herdeiros',
    //   description: 'Solicitar o pagamento de valores não recebidos em vida por ex-segurados ou pensionistas, incluindo o 13º salário proporcional.',
    //   impact: '',
    // servicoDigital: true
    // },
    // {
    //   id: 'trabalho-emprego-previdencia-3',
    //   category: 'FUNAPE',
    //   title: 'Solicitar Pensão por Morte',
    //   slug: 'trabalho-emprego-previdencia/solicitar-pensao-por-morte',
    //   description: 'Solicitar pensão em decorrência do falecimento de pessoa segurada ativa ou aposentada do Regime Próprio de Previdência Social ou do Sistema de Proteção Social dos Militares.',
    //   impact: '',
    // servicoDigital: true
    // },
    {
      id: 'trabalho-emprego-previdencia-4',
      category: 'FUNAPE',
      title: 'Conceder Aposentadoria, Reserva Remunerada ou Reforma Militar',
      slug: 'trabalho-emprego-previdencia/conceder-aposentadoria-reserva-remunerada-ou-reforma-militar',
      description: 'Analisar e conceder benefícios de aposentadoria, transferência para reserva remunerada ou reforma militar.',
      impact: 'É o “marco” da vida funcional: transforma tempo de serviço em benefício de aposentadoria, garantindo segurança de renda ao servidor e previsibilidade para a família/dependentes.A FUNAPE administra 80.439 aposentados — ou seja, esse serviço é a porta de entrada para um contingente expressivo de beneficiários no Estado.',
    servicoDigital: true
    },
    {
      id: 'trabalho-emprego-previdencia-5',
      category: 'FUNAPE',
      title: 'Realizar Prova de Vida',
      slug: 'trabalho-emprego-previdencia/realizar-prova-de-vida',
      description: 'Comprovar anualmente a prova de vida para manter benefícios previdenciários. A prova de vida é obrigatória e deve ser feita no mês do aniversário.',
      impact: 'Serve para comprovar que o beneficiário está vivo, evitar fraudes e garantir que o Governo pague o benefício a quem efetivamente deve recebe em 2026, a Prova de Vida é exigida para 106.181 pessoas',
    servicoDigital: true
    },
    {
      id: 'trabalho-emprego-previdencia-6',
      category: 'FUNAPE',
      title: 'Atualizar Dados Cadastrais',
      slug: 'trabalho-emprego-previdencia/atualizar-dados-cadastrais',
      description: 'Atualizar os dados pessoais e bancários de pessoas aposentadas e pensionistas no sistema da Funape.',
      impact: 'Mantém cadastro correto (dados pessoais, endereço, contato, vínculo), evitando inconsistências que geram pendências, atrasos e bloqueios no benefício.Beneficia diretamente a 80.439 aposentados e 24.225 pensionistas administrados pela FUNAPE.',
    servicoDigital: true
    },
    {
      id: 'trabalho-emprego-previdencia-7',
      category: 'FUNAPE',
      title: 'Solicitar Isenção de Imposto de Renda e Contribuição Previdenciária',
      slug: 'trabalho-emprego-previdencia/solicitar-isencao-de-imposto-de-renda-e-contribuicao-previdenciaria',
      description: 'Solicitar isenção de Imposto de Renda e contribuição previdenciária com base em laudo médico para portadores de doenças graves.',
      impact: 'Pode gerar ganho financeiro direto ao reduzir descontos de IR e contribuição previdenciária quando o beneficiário se enquadra nos critérios legais.\n\nA isenção pode produzir efeitos financeiros retroativos conforme laudo, possibilitando recuperação de valores.',
    servicoDigital: true
    },
    {
      id: 'trabalho-emprego-previdencia-8',
      category: 'FUNAPE',
      title: 'Solicitar Auxílio Invalidez de Bombeiro Militar',
      slug: 'trabalho-emprego-previdencia/solicitar-auxilio-invalidez-de-bombeiro-militar',
      description: 'Solicitar auxílio para bombeiros militares veteranos considerados inválidos pela Junta Superior de Saúde.',
      impact: 'Garante proteção financeira permanente ao Bombeiro Militar que teve a capacidade laboral comprometida em razão do serviço, assegurando renda e dignidade em situação de maior vulnerabilidade.',
    }
  ]
}
];


export const adultaData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    iconeWhite: '/icone-menu-branco/Icon=cards_stack.svg',
    iconeAzul: '/icone-menu-azul/Icon=cards_stack.svg',
    items: []
  },
  {
  id: 'agricultura-pecuaria',
  category: 'agricultura-pecuaria',
  title: 'Agricultura e Pecuária',
  slug: 'agricultura-e-pecuaria',
  iconeWhite: '/icone-menu-branco/Icon=nutrition.svg',
  iconeAzul: '/icone-menu-azul/Icon=nutrition.svg',
  items: [
    {
      id: 'agricultura-pecuaria-1',
      category: 'Agricultura e Pecuária',
      title: 'Cadastrar Produtor Agropecuário com CPF - Pessoa Física',
      slug: 'agricultura-e-pecuaria/cadastrar-produtor-agropecuario-cpf',
      description: 'Permite que produtores agropecuários, pescadores ou criadores de animais solicitem inscrição estadual no regime de pagamento “produtor agropecuário ou mineral – pessoa natural”.',
      impact: 'Permite que o agricultor familiar e o pequeno produtor rural existam formalmente para o Estado, habilitando acesso a políticas públicas, crédito rural, programas de compra institucional, benefícios fiscais e regularidade tributária.\n\nPernambuco possui cerca de 232 mil estabelecimentos agropecuários, dos quais mais de 80% são da agricultura familiar.',
      servicoDigital: true
    },
    {
      id: 'agricultura-pecuaria-2',
      category: 'Agricultura e Pecuária',
      title: 'Solicitar Assistência Técnica e Extensão Rural',
      slug: 'agricultura-e-pecuaria/solicitar-assistencia-tecnica-extensao-rural',
      description: 'Serviço gratuito de assistência técnica e extensão rural para apoiar o desenvolvimento sustentável dos agricultores familiares de Pernambuco.',
      impact: 'Leva conhecimento técnico, orientação produtiva e inovação diretamente ao produtor rural, aumentando produtividade, renda e sustentabilidade da atividade agrícola.\n\nA agricultura familiar responde por cerca de 70% dos alimentos que chegam à mesa dos pernambucanos, tornando a extensão rural um serviço estratégico para segurança alimentar.',
      servicoDigital: false
    },
    {
      id: 'agricultura-pecuaria-3',
      category: 'Agricultura e Pecuária',
      title: 'Solicitar Análise Patológica de Sementes',
      slug: 'agricultura-e-pecuaria/solicitar-analise-patologica-sementes',
      description: 'Análise sanitária de sementes para identificar fungos causadores de doenças em feijão, caupi, milho, sorgo, cebola e tomate.',
      impact: 'Avalia a qualidade sanitária das sementes, prevenindo doenças, falhas de germinação e perdas severas de safra antes mesmo do plantio.\n\nA agricultura é altamente sensível à qualidade da semente: falhas de germinação podem gerar perdas superiores a 20% da produção em algumas culturas.',
      servicoDigital: false
    }
  ]
},
{
  id: 'assistencia-social-cidadania',
  category: 'assistencia-social-cidadania',
  title: 'Assistência Social e Cidadania',
  slug: 'assistencia-social-cidadania',
  iconeWhite: '/icone-menu-branco/Icon=volunteer_activism.svg',
  iconeAzul: '/icone-menu-azul/Icon=volunteer_activism.svg',
  items: [
    {
      id: 'assistencia-social-cidadania-1',
      category: 'Assistência Social e Cidadania',
      title: 'Obter Benefício do Programa Mães de Pernambuco',
      slug: 'assistencia-social-cidadania/obter-beneficio-programa-maes-de-pernambuco',
      description: 'Transferência de renda mensal de R$ 300,00 para mulheres em situação de extrema vulnerabilidade social, com filhos de até 6 anos, oferecido pelo Governo de Pernambuco.',
      impact: 'Renda que fortalece o cuidado na primeira infância e a segurança alimentar das famílias mais vulneráveis.\n\nDesde o lançamento em março de 2024, o programa já beneficiou mais de 139 mil mulheres e destinou R$ 597,6 milhões em benefícios.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-2',
      category: 'Assistência Social e Cidadania',
      title: 'Obter Carteira de Identidade CIN - 1ª Via',
      slug: 'assistencia-social-cidadania/obter-carteira-identidade-cin-primeira-via',
      description: 'Emitir gratuitamente a 1ª via da Carteira de Identidade Nacional para pessoas que nunca solicitaram a Carteira de Identidade Nacional.',
      impact: 'É a porta de entrada da cidadania. A Carteira de Identidade Nacional permite acesso à saúde, educação, trabalho, programas sociais, crédito, serviços bancários e digitais, além de viabilizar o cadastro em praticamente todas as políticas públicas.\n\nSão emitidas em média 130 mil CIN por mês.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-3',
      category: 'Assistência Social e Cidadania',
      title: 'Obter Carteira de Identidade CIN - 2ª Via',
      slug: 'assistencia-social-cidadania/obter-carteira-identidade-cin-segunda-via',
      description: 'Solicitar a 2ª via da Carteira de Identidade Nacional se você perdeu, teve o documento roubado ou ele foi danificado. Esse serviço é para quem já tem a Carteira de Identidade Nacional.',
      impact: 'Garante a continuidade da cidadania em casos de perda, roubo, furto ou desgaste do documento, evitando que o cidadão fique impedido de acessar serviços essenciais.\n\nSão emitidas em média 130 mil CIN por mês.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-4',
      category: 'Assistência Social e Cidadania',
      title: 'Solicitar Transporte Especializado para Pessoas com Deficiência e Mobilidade Reduzida',
      slug: 'assistencia-social-cidadania/solicitar-transporte-especializado-pessoas-deficiencia',
      description: 'Oferece transporte gratuito em vans adaptadas para pessoas com deficiência que fazem tratamento de saúde contínuo. O serviço PE Conduz atende especialmente pessoas usuárias de cadeira de rodas.',
      impact: 'Garante o direito de ir e vir a pessoas idosas com deficiência ou mobilidade reduzida, permitindo acesso à saúde, reabilitação, serviços públicos e convivência social.\n\nMais de 30% das pessoas idosas no Brasil apresentam algum grau de dificuldade de locomoção ou limitação funcional.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-5',
      category: 'Assistência Social e Cidadania',
      title: 'Solicitar Intérprete de Libras Virtual - Tá na Mão',
      slug: 'assistencia-social-cidadania/solicitar-interprete-libras-virtual',
      description: 'Serviço de inclusão para pessoas surdas ou com baixa audição, facilitando o acesso aos serviços públicos essenciais por meio de intérpretes de Libras.',
      impact: 'Serviço de apoio à comunicação que possibilita a mediação, em tempo real, por profissional de Libras, entre o cidadão e os atendimentos presenciais do Governo de Pernambuco, promovendo acessibilidade comunicacional e inclusão nos serviços públicos.\n\nQuase 4 mil atendimentos já realizados, garantindo acessibilidade imediata e reduzindo barreiras de comunicação.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-6',
      category: 'Assistência Social e Cidadania',
      title: 'Solicitar Gratuidade no Transporte Intermunicipal',
      slug: 'assistencia-social-cidadania/solicitar-gratuidade-transporte-intermunicipal',
      description: 'Garante transporte intermunicipal gratuito a pessoas com deficiência no Estado de Pernambuco, mediante análise da documentação médica.',
      impact: 'Viabiliza o exercício do direito de gratuidade intermunicipal, com dois assentos gratuitos por viagem, reduzindo barreiras de acesso à saúde e à assistência para a pessoa idosa.',
      servicoDigital: true
    },
    {
      id: 'assistencia-social-cidadania-7',
      category: 'Assistência Social e Cidadania',
      title: 'Registrar Reclamação no PROCON Presencialmente ',
      slug: 'assistencia-social-cidadania/registrar-reclamacao-no-procon-presencialmente',
      description: 'Registrar reclamação sobre produtos e serviços para buscar solução na relação de consumo.',
      impact: '',
      servicoDigital: true
    },
     {
      id: 'assistencia-social-cidadania-8',
      category: 'SJTH',
      title: 'Solicitar transporte especializado para pessoas com deficiência e mobilidade reduzida',
      slug: 'assistencia-social-cidadania/solicitar-transporte-especializado-para-pessoas-com-deficiencia',
      description: 'Oferecer transporte gratuito em vans adaptadas para pessoas com deficiência que fazem tratamento de saúde contínuo. O serviço PE Conduz leva pessoas com deficiência física ou mobilidade reduzida, especialmente usuárias de cadeira de rodas, para tratamento de saúde e atividades de lazer.',
      impact: 'Garante direito de ir e vir a pessoas idosas com deficiência ou mobilidade reduzida, permitindo acesso a saúde, reabilitação, serviços públicos e convivência social.Mais de 30% das pessoas idosas no Brasil apresentam algum grau de dificuldade de locomoção ou limitação funcional',
    servicoDigital: true
    },
  ]
},
{
  id: 'cultura-artes-historia-esportes',
  category: 'cultura-artes-historia-esportes',
  title: 'Cultura, Artes, História e Esportes',
  slug: 'cultura-artes-historia-esportes',
  iconeWhite: '/icone-menu-branco/Icon=theater_comedy.svg',
  iconeAzul: '/icone-menu-azul/Icon=theater_comedy.svg',
  items: [
    {
      id: 'cultura-artes-historia-esportes-1',
      category: 'SECTI',
      title: 'Visitar museus pernambucanos em ambiente digital',
      slug: 'cultura-artes-historia-esportes/visitar-museus-pernambucanos-ambiente-digital',
      description:
        'Permite visitar museus pernambucanos por meio de tours virtuais, com acesso digital a exposições, espaços culturais e acervos históricos.',
      impact:
        'O tour virtual amplia o acesso à cultura para pessoas que moram longe dos polos culturais ou têm mobilidade reduzida. O serviço é gratuito e transforma qualquer ambiente com internet em um espaço de fruição cultural, sem barreiras geográficas.',
      servicoDigital: true
    }
  ]
},
  {
  id: 'empresa-industria-e-comercio',
  category: 'empresa-industria-e-comercio',
  title: 'Empresa, Indústria e Comércio',
  slug: 'empresa-industria-e-comercio',
  iconeWhite: '/icone-menu-branco/Icon=business_center.svg',
  iconeAzul: '/icone-menu-azul/Icon=business_center.svg',
  items: [
    {
      id: 'empresa-industria-comercio-1',
      category: 'Empresa, Indústria e Comércio',
      title: 'Abrir Empresa',
      slug: 'empresa-industria-e-comercio/abrir-empresa',
      description: 'Formalização de empresas com registro na Junta Comercial de Pernambuco (JUCEPE), conforme o tipo jurídico.',
      impact: 'O registro automático continua sendo uma das principais ferramentas da Junta Comercial de Pernambuco para acelerar a abertura de empresas, permitindo que a formalização ocorra em poucas horas.\n\nSó em 2023, mais de 71,2 mil empresas foram abertas em Pernambuco. Em 2025, a taxa de abertura chegou a 36,9%.',
      servicoDigital: true
    },
    {
      id: 'empresa-industria-comercio-2',
      category: 'Empresa, Indústria e Comércio',
      title: 'Extinguir Empresas',
      slug: 'empresa-industria-e-comercio/extinguir-empresas',
      description: 'Serviço da JUCEPE (Junta Comercial do Estado de Pernambuco) que permite o encerramento formal de empresas, com baixa do registro empresarial.',
      impact: 'Dar baixa formal evita custos contínuos e riscos jurídicos, como taxas recorrentes, obrigações acessórias, multas por atraso e responsabilidades tributárias.\n\nEncerrar corretamente significa zerar passivos invisíveis e liberar o empreendedor para recomeçar.',
      servicoDigital: true
    },
    {
      id: 'empresa-industria-comercio-3',
      category: 'Empresa, Indústria e Comércio',
      title: 'Registrar Livros Digitais',
      slug: 'empresa-industria-e-comercio/registrar-livros-digitais',
      description: 'Serviço da JUCEPE (Junta Comercial do Estado de Pernambuco) para autenticação digital dos Livros Empresariais, conforme a natureza jurídica.',
      impact: 'Garante segurança societária e contábil, reduz papelada, deslocamento e risco de extravio.\n\nPernambuco possui cerca de 543 mil micro e pequenas empresas ativas, que representam aproximadamente 90% das empresas do estado.',
      servicoDigital: true
    },
    {
      id: 'empresa-industria-comercio-4',
      category: 'Empresa, Indústria e Comércio',
      title: 'Consultar Empresas Públicas',
      slug: 'empresa-industria-e-comercio/consultar-empresas-publicas',
      description: 'Consulta pública e gratuita de empresas públicas e sociedades de economia mista.',
      impact: 'Ajuda cidadãos, empresas e governo a verificar existência e regularidade, reduzindo fraudes, golpes e contratações inseguras.\n\nMais confiança para 9,5 milhões de pernambucanos nas relações comerciais.',
      servicoDigital: true
    },
    {
      id: 'empresa-industria-comercio-5',
      category: 'Empresa, Indústria e Comércio',
      title: 'Obter ou Renovar Linha de Crédito para Empreendedores Informais',
      slug: 'empresa-industria-e-comercio/obter-renovar-linha-de-credito',
      description: 'A linha AGE Microcrédito se destaca pela agilidade e segurança na contratação. Para quem é empreendedor informal, o recurso financiado pode chegar a R$ 3 mil. No microcrédito, os contratos podem ser feitos individualmente, com avalista, ou em grupos de aval solidário, em que os participantes se avalizam mutuamente.',
      impact: 'Viabiliza capital de giro e pequenos investimentos para manter o negócio funcionando, aumentar renda e permitir futura formalização.\n\nO programa Bora Empreender Mulher pode alcançar R$ 105 milhões, com até 35 mil operações de crédito.',
      servicoDigital: true
    }
  ]
},

{
  id: 'financas-impostos-e-gestao-publica',
  category: 'financas-impostos-e-gestao-publica',
  title: 'Finanças, Impostos e Gestão Pública',
  slug: 'financas-impostos-e-gestao-publica',
  iconeWhite: '/icone-menu-branco/Icon=paid.svg',
  iconeAzul: '/icone-menu-azul/Icon=paid.svg',
  items: [
    {
      id: 'financas-impostos-1',
      category: 'Finanças, Impostos e Gestão Pública',
      title: 'Registrar Reclamação ao Código de Defesa do Consumidor',
      slug: 'financas-impostos-e-gestao-publica/registrar-reclamacao-codigo-defesa-consumidor',
      description: '',
      impact: 'Coloca o Código de Defesa do Consumidor na prática, permitindo que o cidadão registre reclamações de forma simples, sem deslocamento e com acompanhamento do processo.\n\nO Procon Pernambuco encerrou 2025 com cerca de 40 mil atendimentos, entre reclamações formais, orientações e consultas técnicas.',
      servicoDigital: true
    },
    {
      id: 'financas-impostos-2',
      category: 'Finanças, Impostos e Gestão Pública',
      title: 'Consultar Notas Fiscais de Compras',
      slug: 'financas-impostos-e-gestao-publica/consultar-notas-fiscais-compras',
      description: '',
      impact: 'Permite ao cidadão acompanhar suas compras, exercer controle financeiro, identificar fraudes e participar de programas de cidadania fiscal.\n\nO controle das notas fortalece a arrecadação e contribui para a justiça fiscal, beneficiando toda a população.',
      servicoDigital: true
    }
  ]
},

{
  id: 'infraestrutura-transito-e-transportes',
  category: 'infraestrutura-transito-e-transportes',
  title: 'Infraestrutura, Trânsito e Transportes',
  slug: 'infraestrutura-transito-e-transportes',
  iconeWhite: '/icone-menu-branco/Icon=traffic_jam.svg',
  iconeAzul: '/icone-menu-azul/Icon=traffic_jam.svg',
  items: [
    {
      id: 'infraestrutura-transito-1',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Solicitar Emissão de Escritura do Programa Morar Bem - Regularização Fundiária',
      slug: 'infraestrutura-transito-e-transportes/solicitar-escritura-programa-morar-bem',
      description: 'Emitir escritura definitiva para imóveis regularizados pelo Programa Morar Bem PE.',
      impact: 'Transforma a moradia informal em propriedade legal, garantindo segurança jurídica, valorização do imóvel e acesso a crédito, herança e políticas públicas.\n\nJá foram entregues quase 13 mil títulos de propriedade e estão em análise mais de 30 mil.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-2',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Solicitar Emissão de Escritura para Regularização Imobiliária',
      slug: 'infraestrutura-transito-e-transportes/solicitar-escritura-regularizacao-imobiliaria',
      description: 'Procedimento voltado para mutuários que já quitaram seu financiamento habitacional, garantindo a transferência definitiva da propriedade e o registro em cartório.',
      impact: 'Emitir escritura para pessoas que adquiriram imóveis da antiga COHAB, SSAM ou IPSEP/IRH.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-3',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Obter Carteira Nacional de Habilitação Definitiva',
      slug: 'infraestrutura-transito-e-transportes/obter-cnh-definitiva',
      description: 'Trocar a Permissão Para Dirigir (PPD – Permissão Para Dirigir) pela Carteira Nacional de Habilitação (CNH – Carteira Nacional de Habilitação) Definitiva após 12 meses.',
      impact: 'Consolida o direito de dirigir após o período de permissão, garantindo autonomia, mobilidade e acesso ao trabalho.\n\nA frota estadual ultrapassa 3 milhões de veículos, evidenciando a escala do serviço e sua centralidade na vida adulta.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-4',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Renovar Carteira de Habilitação',
      slug: 'infraestrutura-transito-e-transportes/renovar-carteira-habilitacao',
      description: 'Permite que o condutor com a Carteira Nacional de Habilitaçãosolicite sua renovação.',
      impact: 'Mantém o cidadão regular para dirigir, assegurando atualização médica e legal, além de evitar multas, apreensão do veículo e perda do direito de conduzir.\n\nA digitalização reduz filas históricas e tempo de espera para milhares de pessoas todos os anos.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-5',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Obter Permissão Internacional para Dirigir - PID',
      slug: 'infraestrutura-transito-e-transportes/obter-permissao-internacional-dirigir',
      description: 'Emitir a Permissão Internacional para Dirigir (PID – Permissão Internacional para Dirigir), que permite ao condutor habilitado no Brasil dirigir em países signatários da Convenção de Viena ou que respeitem a reciprocidade.',
      impact: 'Permite que o cidadão pernambucano dirija legalmente em outros países, sem necessidade de novos exames ou burocracia internacional.\n\nO serviço amplia a mobilidade para além das fronteiras.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-6',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Consultar Pontuação da CNH',
      slug: 'infraestrutura-transito-e-transportes/consultar-pontuacao-cnh',
      description: 'Permite consultar online a pontuação da CNH (Carteira Nacional de Habilitação) decorrente de possíveis infrações.',
      impact: 'Permite ao condutor acompanhar sua situação e evitar suspensão ou cassação da CNH, com acesso transparente às infrações.\n\nConsultar a pontuação evita perder o direito de dirigir por falta de informação.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-7',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Consultar Veículo por Placa',
      slug: 'infraestrutura-transito-e-transportes/consultar-veiculo-por-placa',
      description: 'Por meio da Consulta de Veículo (por placa), é possível visualizar a situação do veículo (débitos, multas e possíveis restrições veiculares), além de gerar boletos para pagamento do Licenciamento Anual e débitos em geral.',
      impact: 'Garante transparência e segurança na compra, venda e uso de veículos, permitindo verificar situação legal, restrições e dados básicos.\n\nConsultar o veículo protege o cidadão contra fraudes e prejuízos.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-8',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Solicitar Bloqueio do VEM Livre Acesso',
      slug: 'infraestrutura-transito-e-transportes/solicitar-bloqueio-vem-livre-acesso',
      description: 'Permitir o bloqueio do cartão VEM Livre Acesso em caso de perda, roubo ou extravio. ',
      impact: 'Protege o direito à mobilidade gratuita de pessoas com deficiência, idosos e públicos elegíveis, evitando uso indevido do cartão em casos de perda, roubo ou extravio.\n\nBeneficia cerca de 40 mil pessoas com deficiência na Região Metropolitana do Recife.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-9',
      category: 'Infraestrutura, Trânsito e Transportes',
      title: 'Solicitar Restituição de IPVA',
      slug: 'infraestrutura-transito-e-transportes/solicitar-restituicao-ipva',
      description: 'Permite solicitar a devolução de valores pagos indevidamente de IPVA, como em casos de pagamento em duplicidade, roubo, furto ou sinistro do veículo.',
      impact: 'Garante ao cidadão o direito de reaver valores pagos indevidamente, como em casos de roubo, furto, sinistro, venda ou cobrança duplicada.\n\nA restituição assegura justiça fiscal em um universo de mais de 3 milhões de veículos registrados no Estado.',
      servicoDigital: true
    },
    {
      id: 'infraestrutura-transito-10',
      category: 'Policia',
      title: 'Solicitar Laudo Pericial em veículo automotor para regularização junto ao DETRAN',
      slug: 'infraestrutura-transito-e-transportes/solicitar-laudo-pericialem-veiculo-automotor-para-regularizacao-junto-ao-detran',
      description: 'É a perícia que verifica se os elementos identificadores do veículo atendem aos padrões do fabricante. O laudo é necessário para regularizar veículos com alterações nos elementos identificadores, como chassi e motor.',
      impact: 'É a perícia que verifica se os elementos identificadores do veículo atendem aos padrões do fabricante. O laudo é necessário para regularizar veículos com alterações nos elementos identificadores, como chassi e motor.',
      servicoDigital: true
    },

  ]
},

{
  id: 'justica-seguranca',
  category: 'justica-seguranca',
  title: 'Justiça e Segurança',
  slug: 'justica-seguranca',
  iconeWhite: '/icone-menu-branco/Icon=local_police.svg',
  iconeAzul: '/icone-menu-azul/Icon=local_police.svg',
  items: [
    {
      id: 'justica-seguranca-1',
      category: 'POLÍCIA CIVIL',
      title: 'Registrar boletim de ocorrência online',
      slug: 'justica-seguranca/registrar-boletim-ocorrencia-online',
      description:
        'Permite acesso rápido ao Estado em situação de vulnerabilidade, reduz deslocamento e acelera a formalização do registro.',
      impact:
        'A meta é que os registros via delegacia eletrônica alcancem entre 25% e 40% dos boletins para crimes sem flagrante imediato.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-2',
      category: 'MULHER',
      title: 'Localizar rede de apoio mais próxima - Protege Mulher',
      slug: 'justica-seguranca/localizar-rede-apoio-protege-mulher',
      description:
        'Ambiente de acolhimento e orientação do Protege Mulher, facilitando o acesso à rede de apoio mais próxima.',
      impact:
        'O serviço tem potencial de acolher e orientar cerca de 882 mil mulheres pernambucanas.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-3',
      category: 'MULHER',
      title: 'Receber orientação e apoio em situação de violência - Protege Mulher',
      slug: 'justica-seguranca/orientacao-apoio-violencia-protege-mulher',
      description:
        'Oferece orientação imediata e direcionamento para a rede de apoio, reduzindo o tempo até a ajuda.',
      impact:
        'Foram registrados 31.030 atendimentos em 2025 para solicitação de serviços de apoio.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-4',
      category: 'MULHER',
      title: 'Relatar caso de violência - Protege Mulher',
      slug: 'justica-seguranca/relatar-caso-violencia-protege-mulher',
      description:
        'Canal direto para relato e acionamento da rede de proteção, reduz subnotificação e melhora a resposta do Estado.',
      impact:
        'Pernambuco registrou 34.679 vítimas de violência doméstica segundo dados da Secretaria de Defesa Social.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-5',
      category: 'POLÍCIA CIVIL',
      title: 'Registrar boletim de ocorrência para violência contra a mulher',
      slug: 'justica-seguranca/boletim-ocorrencia-violencia-mulher',
      description:
        'Permite que mulheres registrem violência doméstica ou sexual, física, psicológica, patrimonial ou moral.',
      impact:
        'O registro imediato fortalece a proteção da vítima e a atuação integrada dos órgãos de segurança.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-6',
      category: 'POLÍCIA MILITAR',
      title: 'Realizar cadastro no Alerta Celular',
      slug: 'justica-seguranca/cadastro-alerta-celular',
      description:
        'Permite cadastrar o IMEI do celular para auxiliar na prevenção de furtos, roubos e receptação.',
      impact:
        'Mais de 9 mil celulares foram recuperados em 2025, com mais de 990 mil aparelhos cadastrados no programa.',
      servicoDigital: true
    },
    {
      id: 'justica-seguranca-7',
      category: 'POLÍCIA CIVIL',
      title: 'Obter certidão de antecedentes criminais',
      slug: 'justica-seguranca/obter-certidao-de-antecedentes-criminais',
      description:'A Certidão de Antecedentes é um documento emitido pelo Instituto de Identificação Tavares Buril, que informa a existência ou não de antecedentes criminais dos requerentes. Apenas serão emitidas via internet certidões cujo resultado seja "NADA CONSTA".',
      impact:'',
      servicoDigital: true
    },
     {
      id: 'justica-seguranca-8',
      category: 'POLÍCIA CIVIL',
      title: 'Validar certidão de antecedentes criminais',
      slug: 'justica-seguranca/validar-certidao-de-antecedentes-criminais',
      description:'A Certidão de Antecedentes é um documento emitido pelo Instituto de Identificação Tavares Buril, que informa a existência ou não de antecedentes criminais dos requerentes. Este serviço serve para validar a Certidão.',
      impact:'',
      servicoDigital: true
    }
  ]
},

{
  id: 'saude-e-vigilancia-sanitaria',
  category: 'saude-e-vigilancia-sanitaria',
  title: 'Saúde e Vigilância Sanitária',
  slug: 'saude-e-vigilancia-sanitaria',
  iconeWhite: '/icone-menu-branco/Icon=cardiology.svg',
  iconeAzul: '/icone-menu-azul/Icon=cardiology.svg',
  items: [
    {
      id: 'saude-1',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Solicitar Medicamento de Alto Custo - Farmacia Digital ',
      slug: 'saude-e-vigilancia-sanitaria/solicitar-medicamento-alto-custo',
      description: 'Fornecer medicamentos gratuitos para tratamento de doenças de média e alta complexidade.',
      impact: 'Garante acesso contínuo a medicamentos essenciais para doenças graves e crônicas, que muitas vezes custam milhares de reais por mês e seriam inacessíveis sem a política pública.\n\nA Farmácia Digital do Estado já atende mais de 100 mil pacientes ativos em tratamento contínuo.\n\nO custo mensal de alguns medicamentos de alto custo pode ultrapassar R$ 5 mil por paciente, valor integralmente coberto pelo SUS estadual.',
      servicoDigital: true
    },
    {
      id: 'saude-2',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Solicitar Renovação de Medicamento de Alto Custo',
      slug: 'saude-e-vigilancia-sanitaria/solicitar-renovacao-medicamento-alto-custo',
      description: '',
      impact: 'Assegura a continuidade do tratamento, evitando interrupções causadas por vencimento de receitas ou processos administrativos.\n\nA renovação digital reduz filas e libera equipes de saúde para o cuidado direto.',
      servicoDigital: true
    },
    {
      id: 'saude-3',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Solicitar Adequação de Medicamento de Alto Custo',
      slug: 'saude-e-vigilancia-sanitaria/solicitar-adequacao-medicamento-alto-custo',
      description: '',
      impact: 'Permite ajustar o tratamento quando há mudança clínica, efeitos adversos ou evolução da doença, mantendo a eficácia terapêutica.\n\nDoenças crônicas e raras exigem ajustes frequentes de medicação.\n\nA adequação evita desperdício e melhora os desfechos clínicos dos pacientes atendidos pelo SUS estadual.',
      servicoDigital: true
    },
    {
      id: 'saude-4',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Consultar Medicamentos Disponíveis na Rede Estadual de Saúde',
      slug: 'saude-e-vigilancia-sanitaria/consultar-medicamentos-rede-estadual',
      description: 'A Relação Estadual de Medicamentos do Estado de Pernambuco (REESME-PE), enumera e descreve os medicamentos, eletrólitos e insumos padronizados no âmbito da Secretaria Estadual de Saúde de Pernambuco.',
      impact: 'Oferece transparência e informação em tempo real, permitindo que o cidadão saiba onde e como acessar o medicamento de que precisa.\n\nA consulta digital melhora o acesso e reduz pressão sobre as unidades físicas.',
      servicoDigital: true
    },
    {
      id: 'saude-5',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Solicitar Adesão de Titular ao SASSEPE',
      slug: 'saude-e-vigilancia-sanitaria/solicitar-adesao-titular-sassepe',
      description: '',
      impact: 'Permite que o servidor público estadual ingresse no SASSEPE, garantindo acesso à assistência à saúde própria e de seus dependentes dentro da rede conveniada do Estado.\n\nO SASSEPE atende atualmente mais de 190 mil vidas, entre servidores titulares e dependentes.',
      servicoDigital: true
    },
    {
      id: 'saude-6',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Solicitar Inscrição de Filho ou Enteado Menor de 21 Anos no SASSEPE',
      slug: 'saude-e-vigilancia-sanitaria/solicitar-inscricao-filho-enteado-sassepe',
      description: '',
      impact: 'Estende a cobertura do SASSEPE aos dependentes legais do servidor, assegurando atendimento médico, ambulatorial e hospitalar na fase mais sensível da vida.\n\nA cobertura familiar reduz custos diretos de saúde para servidores e dependentes.',
      servicoDigital: true
    },
    {
      id: 'saude-7',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Solicitar Inscrição de Cônjuge ou Companheiro no SASSEPE',
      slug: 'saude-e-vigilancia-sanitaria/solicitar-inscricao-conjuge-companheiro-sassepe',
      description: '',
      impact: 'Permite a inclusão do cônjuge ou companheiro como dependente no SASSEPE, garantindo proteção à saúde do núcleo familiar adulto.',
      servicoDigital: true
    },
    {
      id: 'saude-8',
      category: 'Saúde e Vigilância Sanitária',
      title: 'Obter Carteira para pessoa com fibromialgia',
      slug: 'saude-e-vigilancia-sanitaria/obter-carteira-para-pessoa-com-fibromialgia',
      description: 'A Carteira de Identificação da Pessoa com Fibromialgia (CIPF) em Pernambuco, instituída pela Lei 17.492/2021, garante atendimento prioritário em órgãos públicos e privados.',
      impact: 'A digitalização do serviço moderniza e humaniza o acesso a esse direito, permitindo que toda a solicitação, o acompanhamento do processo e a emissão da carteira sejam realizados de forma simples, rápida e totalmente online. Em Pernambuco, estima-se que haja cerca de 70 mil pessoas com a doença, já foram realizadas mais de 11.400 solicitações cadastradas e mais de 9.350 carteiras aprovadas',
      servicoDigital: true
    }
  ]
},

{
  id: 'saneamento',
  category: 'saneamento',
  title: 'Saneamento',
  slug: 'saneamento',
  iconeWhite: '/icone-menu-branco/Icon=humidity_high.svg',
  iconeAzul: '/icone-menu-azul/Icon=humidity_high.svg',
items: [
  {
    id: 'saneamento-1',
    category: 'COMPESA',
    title: 'Emitir Extrato de Débito da COMPESA',
    slug: 'saneamento/emitir-extrato-debito-compesa',
    description:
      'Permite ao cidadão obter um demonstrativo detalhado dos valores em aberto, com histórico de consumo e débitos acumulados, sem necessidade de atendimento presencial.',
    impact:
      'A COMPESA atende cerca de 7,5 milhões de habitantes diariamente em Pernambuco com serviços de água e esgoto.',
    servicoDigital: true
  },
  {
    id: 'saneamento-2',
    category: 'COMPESA',
    title: 'Informar Furto de Hidrômetro',
    slug: 'saneamento/informar-furto-hidrometro',
    description:
      'Registra oficialmente o furto do hidrômetro, equipamento responsável por medir o consumo de água do imóvel.',
    impact:
      'Em 2025, a COMPESA realizou mais de 40 operações contra furtos e ligações clandestinas, recuperando cerca de 780 milhões de litros de água por mês.',
    servicoDigital: true
  },
  {
    id: 'saneamento-3',
    category: 'COMPESA',
    title: 'Obter 2ª Via da Conta da COMPESA',
    slug: 'saneamento/obter-segunda-via-conta-compesa',
    description:
      'Disponibiliza a segunda via da fatura de água e esgoto para pagamento em bancos, lotéricas ou canais digitais, em caso de perda ou não recebimento da conta.',
    impact:
      'A COMPESA atende aproximadamente 2,5 milhões de contas residenciais em Pernambuco.',
    servicoDigital: true
  },
  {
    id: 'saneamento-4',
    category: 'COMPESA',
    title: 'Realizar Alteração Cadastral',
    slug: 'saneamento/realizar-alteracao-cadastral-compesa',
    description:
      'Permite atualizar dados do titular ou do imóvel, como endereço de correspondência, telefone ou informações pessoais.',
    impact:
      'A atualização cadastral evita falhas de comunicação e garante a continuidade dos serviços em cerca de 170 municípios do estado.',
    servicoDigital: true
  },
  {
    id: 'saneamento-5',
    category: 'COMPESA',
    title: 'Reportar Vazamento',
    slug: 'saneamento/reportar-vazamento-compesa',
    description:
      'Canal para comunicar vazamentos na rede pública ou em ramais, contribuindo para resposta rápida e redução de perdas.',
    impact:
      'Mais de 1 bilhão de litros de água são desperdiçados por dia em Pernambuco, volume suficiente para atender mais de 2,1 milhões de pessoas.',
    servicoDigital: true
  },
  {
    id: 'saneamento-6',
    category: 'COMPESA',
    title: 'Solicitar Mudança de Titularidade',
    slug: 'saneamento/solicitar-mudanca-titularidade',
    description:
      'Registra a troca do titular da conta de água e esgoto quando há venda do imóvel ou mudança de responsabilidade.',
    impact:
      'Garante segurança jurídica e continuidade do serviço para novos moradores ou responsáveis pelo imóvel.',
    servicoDigital: true
  }
]

},

  {
    id: 'trabalho-emprego-e-previdencia',
    category: 'trabalho-emprego-e-previdencia',
    title: 'Trabalho, Emprego e Previdência',
    slug: 'trabalho-emprego-e-previdencia',
    iconeWhite: '/icone-menu-branco/Icon=business_center.svg',
    iconeAzul: '/icone-menu-azul/Icon=business_center.svg',
    items: [
      {
        id: 'trabalho-emprego-previdencia-1',
        category: 'Trabalho, Emprego e Previdência',
        title: 'Buscar Vaga de Emprego',
        slug: 'trabalho-emprego-e-previdencia/buscar-vaga-de-emprego',
        description: 'Intermediação de mão de obra para conectar trabalhadores com vagas no mercado.',
        impact: 'Facilita o encontro entre trabalhador e oportunidade, reduzindo tempo de procura e aumentando a chance de recolocação, especialmente para quem tem menos rede de contatos.\n\nMais emprego formal desde 2023: +192,6 mil vagas com carteira em Pernambuco. A taxa média anual de desocupação em PE caiu para 10%, menor índice da última década.',
        servicoDigital: true
      },
      {
        id: 'trabalho-emprego-previdencia-2',
        category: 'Trabalho, Emprego e Previdência',
        title: 'Solicitar Seguro Desemprego',
        slug: 'trabalho-emprego-e-previdencia/solicitar-seguro-desemprego',
        description: 'Benefício que oferece assistência financeira temporária ao trabalhador formal demitido sem justa causa.',
        impact: 'Pernambuco assegurou quase R$ 1 bilhão em proteção de renda em 9 meses de 2025, evitando que milhares de famílias fiquem sem renda enquanto buscam recolocação.',
        servicoDigital: true
      }
    ]
  },



















];






export const categoryData = {
  juventude: juventudeData,
  infancia: infanciaData,
  adulta: adultaData,
  'terceira-idade': terceiraidadeData
};