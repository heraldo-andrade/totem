export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  impact: string;
  slug: string;
}

export interface MenuItem {
  id: string;
  category: string;
  title: string;
  slug: string;
  items: ServiceItem[];
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
    items: []
  },
  {
    id: 'educacao-pesquisa',
    category: 'educacao-pesquisa',
    title: 'Educação e pesquisa',
    slug: 'educacao-pesquisa',
    items: [
      {
        id: 'educacao-pesquisa-1',
        category: 'SEE',
        title: 'Prestar contas do Pix Tênis',
        slug: 'educacao-pesquisa/prestar-contas-pix-tenis',
        description:'Informar como foi usado o valor recebido pelo Programa Meu Tênis. O valor deve ser usado para compra de tênis. É preciso guardar a nota fiscal da compra, em nome da pessoa beneficiária ou do responsável legal',
        impact:'Transparência e agilidade na execução do benefício; evita retrabalho, fila e inconsistência cadastral (controle e auditoria do repasse).Já foi distribuído quase 75 milhões de reais para os mais de 500 mil alunos da rede estadual, os novos alunos da rede de 2026 também serão beneficiados.'
      },
      {
        id: 'educacao-pesquisa-2',
        category: 'SEE',
        title: 'Emitir Histórico Escolar e Certificado de Conclusão de estudantes da Rede Estadual de Ensino',
        slug: 'educacao-pesquisa/emitir-historico-escolar-certificado-conclusao-estudantes-rede-estadual-ensino',
        description:'O Histórico Escolar é o documento que sintetiza a trajetória escolar do(a) estudante. Neste documento devem constar a carga horária total de cada ano/série/ciclo/fase/módulo/eixo e a carga horária total vivenciada na etapa de ensino.',
        impact:'Documento escolar com acesso imediato e redução de burocracia (evita ida à escola/secretaria, acelera matrícula, emprego, universidade).Benefício direto para os mais de 500 mil alunos e seus familiares todos os anos, e os mais de 2mil gestores das escolas estaduais. Além de uma economia financeira de quase 4 milhões de reais em custos logísticos e operacionais todos os anos.'
      },
      {
        id: 'educacao-pesquisa-3',
        category: 'SEE',
        title: 'Consultar Notas e Frequências dos Alunos',
        slug: 'educacao-pesquisa/consultar-notas-frequencias-alunos',
        description:'O SIEPE é um Sistema Informatizado da Secretaria de Educação e Esportes,  onde é possível encontrar informações da Rede Estadual de Ensino. A consulta pode ser realizada pelos Alunos e pela Família, onde terão acesso aos dados, como notas e  frequência escolar;  assim como informações da sua respectiva escola, como o horário de aulas.',
        impact:'Acompanhamento contínuo do desempenho e frequência; fortalece vínculo família-escola e prevenção de evasão.Alunos cujos pais acessam o app ao menos 2x por mês apresentam, em média, 12% menos faltas do que alunos sem acompanhamento digital.'
      },
      
    ]
  },
  {
    id: 'cultura-turismo',
    category: 'cultura-turismo',
    title: 'Cultura e Turismo',
    slug: 'cultura-e-turismo',
    items: [
      {
        id: 'cultura-1',
        category: 'SEDEPE',
        title: 'Agenda cultural',
        slug: 'cultura-e-turismo/agenda-cultural',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      },
      {
        id: 'turismo-1',
        category: 'SEDEPE',
        title: 'Pontos turísticos',
        slug: 'cultura-e-turismo/pontos-turisticos',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'deveres-tributarios',
    category: 'deveres-tributarios',
    title: 'Deveres Tributários',
    slug: 'deveres-tributarios',
    items: [
      {
        id: 'tributario-1',
        category: 'SEDEPE',
        title: 'Emitir guia de pagamento',
        slug: 'deveres-tributarios/emitir-guia-de-pagamento',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'empreendedorismo',
    category: 'empreendedorismo',
    title: 'Empreendedorismo',
    slug: 'empreendedorismo',
    items: [
      {
        id: 'empreendedor-1',
        category: 'SEDEPE',
        title: 'Abrir empresa',
        slug: 'empreendedorismo/abrir-empresa',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'emprego-assistencia',
    category: 'emprego-assistencia',
    title: 'Emprego e Assistência',
    slug: 'emprego-e-assistencia',
    items: [
      {
        id: 'emprego-1',
        category: 'SEDEPE',
        title: 'Consultar vagas de emprego',
        slug: 'emprego-e-assistencia/consultar-vagas-de-emprego',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'ensino-superior',
    category: 'ensino-superior',
    title: 'Ensino Superior',
    slug: 'ensino-superior',
    items: [
      {
        id: 'ensino-1',
        category: 'SEDEPE',
        title: 'Inscrição em universidade',
        slug: 'ensino-superior/inscricao-em-universidade',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'mobilidade',
    category: 'mobilidade',
    title: 'Mobilidade',
    slug: 'mobilidade',
    items: [
      {
        id: 'mobilidade-1',
        category: 'SEDEPE',
        title: 'Consultar multas de trânsito',
        slug: 'mobilidade/consultar-multas-de-transito',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  }
];

export const infanciaData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    items: []
  },
  {
    id: 'saude-vigilancia-sanitaria',
    category: 'Saúde-Vigilância-Sanitária',
    title: 'Saúde e Vigilância Sanitária',
    slug: 'saude-vigilancia-sanitaria',
    items: [
      {
        id: 'saude-vigilancia-sanitaria',
        category: 'UPE-CISAM',
        title: 'Solicitar Vacinação Infantil',
        slug: 'saude-vigilancia-sanitaria/solicitar-vacinacao-infantil',
        description:'Oferecer as principais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      },
        {
        id: 'saude-vigilancia-sanitaria-2',
        category: 'UPE-CISAM',
        title: 'Realizar Teste do Pezinho',
        slug: 'saude-vigilancia-sanitaria/realizar-teste-pezinho',
        description:'Exame de sangue coletado do calcanhar do bebê, utilizado para identificar algumas doenças logo após o nascimento.',
        impact:'Triagem neonatal que identifica precocemente doenças graves e evita sequelas. Em 2024 foram 474.339 testes realizados e 86.446 crianças triadas em Pernambuco (Lacen-PE)'
      },
       {
        id: 'saude-vigilancia-sanitaria-3',
        category: 'UPE-CISAM',
        title: 'Obter Leite Humano (Banco de Leite)',
        slug: 'saude-vigilancia-sanitaria/obter-leite-humano',
        description:'Coleta, processamento e distribuição de leite humano para bebês prematuros ou de baixo peso que não podem ser amamentados pelas próprias mães. Também oferece apoio ao aleitamento materno.',
        impact:'Garante nutrição e proteção imunológica para recém-nascidos, especialmente prematuros e internados. Em 2024, foram distribuídos 8.503,4 litros de leite humano no estado.'
      },
      {
        id: 'saude-vigilancia-sanitaria-4',
        category: 'UPE-CISAM',
        title: 'Receber atendimento odontológico infantil',
        slug: 'saude-vigilancia-sanitaria/receber-atendimento-odontologico-infantil',
        description:'Consulta e tratamento odontológico para crianças.',
        impact:'Previne dor, infecções, perdas dentárias precoces e melhora alimentação e aprendizagem. O CISAM/UPE mantém linha de cuidado multidisciplinar e serviços assistenciais integrados.'
      },
      {
        id: 'saude-vigilancia-sanitaria-5',
        category: 'UPE-CISAM',
        title: 'Obter acompanhamento para gestantes e crianças',
        slug: 'saude-vigilancia-sanitaria/obter-acompanhamento-para-gestantes-criancas',
        description:'Acompanhamento para gestantes, puérperas e crianças até 6 anos incompletos, em parceria com as equipes de saúde dos municípios. O objetivo é melhorar a qualidade da assistência e fortalecer os laços afetivos entre mãe, filho e família.',
        impact:'Reduz riscos na gestação e no início da vida, ampliando segurança no pré-natal e no cuidado infantil. Assistência e acompanhamento integral de 21 mil mulheres e 17 mil crianças, em 2025.'
      },
      {
        id: 'saude-vigilancia-sanitaria-6',
        category: 'UPE-CISAM',
        title: 'Obter Atendimento em Pediatria Clínica Ambulatorial',
        slug: 'saude-vigilancia-sanitaria/obter-atendimento-pediatria-clinica-ambulatorial',
        description:'Consulta ambulatorial para recém-nascidos, crianças e adolescentes, visando a prevenção, diagnóstico e tratamento de doenças como infecções respiratórias, gastrointestinais, alergias, doenças virais, distúrbios do crescimento e desenvolvimento, entre outras.',
        impact:'Atendimento contínuo que evita agravamentos e reduz procura desnecessária por emergência. Mais de 420 mil atendimentos realizados por ano.'
      },
      {
        id: 'saude-vigilancia-sanitaria-7',
        category: 'SES',
        title: 'Obter Atendimento em Pediatria Clínica de Emergência',
        slug: 'saude-vigilancia-sanitaria/obter-atendimento-pediatria-clinica-emergencia',
        description:'Atendimento emergencial para pacientes pediátricos com doenças graves, como pneumonia, diabetes, febres malignas, desidratação e infecções.',
        impact:'Atendimento rápido em situações agudas, evitando complicações e internações mais graves. Mais de 1 milhão de atendimentos realizados por ano.'
      },
    ]
  },
  {
    id: 'justica-seguranca',
    category: 'Justica-seguranca',
    title: 'Justiça e Segurança',
    slug: 'Justica-seguranca',
    items: [
      {
        id: 'justica-seguranca-1',
        category: 'UPE-CISAM',
        title: 'Registrar Boletim de Ocorrência contra Criança ou Adolescente',
        slug: 'justica-seguranca/registrar-boletim-de-ocorrencia-contra-crianca-ou-adolescente',
        description:'Permite registrar ocorrências de crimes cometidos contra crianças e adolescentes, iniciando investigação da conduta do acusado.',
        impact:'Facilita o início da proteção, investigação e acionamento da rede (Conselho Tutelar, MP, Judiciário e rede de saúde/assistência). Serviço DIGITAL com orientações e requisitos — reforça padronização e acesso.'
      },
      {
        id: 'justica-seguranca-2',
        category: 'UPE-CISAM',
        title: 'Registrar e Divulgar Desaparecimento de Crianças e Adolescentes',
        slug: 'justica-seguranca/registrar-e-divulgar-desaparecimento-de-criancas-e-adolescentes',
        description:'Permite registrar e divulgar o desaparecimento de crianças e adolescentes para facilitar sua localização.',
        impact:'Acelera a comunicação do desaparecimento e amplia chances de localização ao mobilizar rede e divulgação. Em 2025, houve 695 desaparecimentos de pessoas de 0 a 17 anos em Pernambuco; 271 foram localizadas no ano, segundo levantamento divulgado.'
      },
      {
        id: 'justica-seguranca-3',
        category: 'SJDH',
        title: 'Solicitar proteção para criança ou adolescente ameaçado de morte',
        slug: 'justica-seguranca/solicitar-protecao-para-crianca-ou-adolescente-ameacado-de-morte',
        description:'Garantir proteção integral a criança ou adolescente com risco de morte. A inclusão no programa deve ser solicitada por órgãos que compõem o Sistema de Garantia de Direitos, como o Ministério Público, Poder Judiciário, Conselhos Tutelares ou Defensoria Pública. O caso precisa ser analisado pela equipe técnica do PPCAAM.',
        impact:'Proteção especializada para casos de grave ameaça, com foco em preservar vidas e reinserção social. O serviço não protege apenas o menor; ele se estende aos familiares. Historicamente, para cada criança protegida, o programa acolhe cerca de 1,6 familiares, preservando o vínculo afetivo e a segurança do núcleo em risco.'
      },
    ]
  },
  {
    id: 'assistencia-social-cidadania',
    category: 'assistencia-social-cidadania',
    title: 'Assistência Social e Cidadania',
    slug: 'assistencia-social-cidadania',
    items: [
      {
        id: 'assistencia-social-cidadania-1',
        category: 'SJDH',
        title: 'Solicitar 1ª via da Carteira de Identificação da Pessoa com o Transtorno do Espectro Autista (SJDH) - Digital',
        slug: 'assistencia-social-cidadania/solicitar-1-via-carteira-identificacao',
        description:'Emitir a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (Ciptea) para garantir prioridade no atendimento e acesso a serviços públicos.',
        impact:'Facilita identificação e acesso a direitos e atendimento prioritário, com menos desgaste para famílias.Pernambuco possui aproximadamente 105.852 pessoas diagnosticadas com TEA.'
      },
      {
        id: 'assistencia-social-cidadania-2',
        category: 'SJDH',
        title: 'Solicitar 2ª via da Carteira de Identificação da Pessoa com o Transtorno do Espectro Autista (SJDH)',
        slug: 'assistencia-social-cidadania/solicitar-2-via-carteira-identificacao',
        description:'Emitir 2ª via da carteira que garante prioridade a pessoas com Transtorno do Espectro Autista (TEA). A carteira é chamada de CIPTEA (Carteira de Identificação da Pessoa com Transtorno do Espectro Autista). O documento garante prioridade no atendimento e facilita o acesso a serviços.',
        impact:'A perda de um documento de identificação de um autista gera uma ansiedade enorme nos responsáveis, pois a "barreira de proteção" contra o preconceito em filas e transportes desaparece.Mais de 5 mil carteiras entregues todos os anos.'
      },
      {
        id: 'assistencia-social-cidadania-3',
        category: 'SAS',
        title: 'Obter Benefício do Programa Mães de Pernambuco (SAS)',
        slug: 'assistencia-social-cidadania/obter-beneficio-programa-maes-Pernambuco',
        description:'Transferência de renda mensal de R$ 300,00 para mulheres em situação de extrema vulnerabilidade social, com filhos de até 6 anos, oferecido pelo Governo de Pernambuco.',
        impact:'Renda que fortalece o cuidado na primeira infância e segurança alimentar das famílias mais vulneráveis.Desde o lançamento (mar/2024) o programa já beneficiou mais de 139 mil mulheres e destinou R$ 597,6 milhões em benefícios'
      },
      
     
    ]
  }
];

export const adultaData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    items: []
  },
  {
    id: 'trabalho-renda',
    category: 'trabalho-renda',
    title: 'Trabalho e Renda',
    slug: 'trabalho-e-renda',
    items: [
      {
        id: 'trabalho-1',
        category: 'SEDEPE',
        title: 'Consultar vagas de emprego',
        slug: 'trabalho-renda/consultar-vagas-de-emprego',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      },
      {
        id: 'trabalho-2',
        category: 'SEDEPE',
        title: 'Solicitar seguro desemprego',
        slug: 'trabalho-renda/solicitar-seguro-desemprego',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'saude-adulta',
    category: 'saude-adulta',
    title: 'Saúde',
    slug: 'saude',
    items: [
      {
        id: 'saude-adulta-1',
        category: 'SEDEPE',
        title: 'Agendar consulta',
        slug: 'saude-adulta/agendar-consulta',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      },
      {
        id: 'saude-adulta-2',
        category: 'SEDEPE',
        title: 'Solicitar exames',
        slug: 'saude-adulta/solicitar-exames',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'habitacao',
    category: 'habitacao',
    title: 'Habitação',
    slug: 'habitacao',
    items: [
      {
        id: 'habitacao-1',
        category: 'SEDEPE',
        title: 'Solicitar moradia',
        slug: 'habitacao/solicitar-moradia',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  }
];

export const terceiraidadeData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    slug: 'todos-os-servicos',
    items: []
  },
  {
    id: 'previdencia',
    category: 'previdencia',
    title: 'Previdência',
    slug: 'previdencia',
    items: [
      {
        id: 'previdencia-1',
        category: 'SEDEPE',
        title: 'Consultar aposentadoria',
        slug: 'previdencia/consultar-aposentadoria',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      },
      {
        id: 'previdencia-2',
        category: 'SEDEPE',
        title: 'Solicitar pensão',
        slug: 'previdencia/solicitar-pensao',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'saude-idosa',
    category: 'saude-idosa',
    title: 'Saúde',
    slug: 'saude',
    items: [
      {
        id: 'saude-idosa-1',
        category: 'SEDEPE',
        title: 'Agendar consulta geriátrica',
        slug: 'saude-idosa/agendar-consulta-geriatrica',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      },
      {
        id: 'saude-idosa-2',
        category: 'SEDEPE',
        title: 'Medicamentos contínuos',
        slug: 'saude-idosa/medicamentos-continuos',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  },
  {
    id: 'lazer-cultura',
    category: 'lazer-cultura',
    title: 'Lazer e Cultura',
    slug: 'lazer-e-cultura',
    items: [
      {
        id: 'lazer-1',
        category: 'SEDEPE',
        title: 'Atividades para idosos',
        slug: 'lazer-cultura/atividades-para-idosos',
        description:'Oferecer as pricipais vacinas do Programa Nacional de Imunização - PNI, conforme o Calendário do Ministério da Saúde.',
        impact:'A vacinação é a principal barreira contra surtos e internações evitáveis na infância. Em ações de vacinação em escolas em PE, foram aplicadas mais de 33 mil doses.'
      }
    ]
  }
];

export const categoryData = {
  juventude: juventudeData,
  infancia: infanciaData,
  adulta: adultaData,
  'terceira-idade': terceiraidadeData
};