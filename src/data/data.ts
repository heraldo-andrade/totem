export interface ServiceItem {
  id: string;
  category: string;
  title: string;
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
    id: 'aposentadoria',
    category: 'aposentadoria',
    title: 'Aposentadoria',
    slug: 'aposentadoria',
    items: [
      {
        id: 'aposentadoria-1',
        category: 'SEDEPE',
        title: 'Solicitar aposentadoria',
        slug: 'aposentadoria/solicitar-aposentadoria'
      },
      {
        id: 'aposentadoria-2',
        category: 'SEDEPE',
        title: 'Consultar benefício',
        slug: 'aposentadoria/consultar-beneficio'
      }
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
        slug: 'cultura-e-turismo/agenda-cultural'
      },
      {
        id: 'turismo-1',
        category: 'SEDEPE',
        title: 'Pontos turísticos',
        slug: 'cultura-e-turismo/pontos-turisticos'
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
        slug: 'deveres-tributarios/emitir-guia-de-pagamento'
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
        slug: 'empreendedorismo/abrir-empresa'
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
        slug: 'emprego-e-assistencia/consultar-vagas-de-emprego'
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
        slug: 'ensino-superior/inscricao-em-universidade'
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
        slug: 'mobilidade/consultar-multas-de-transito'
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
    id: 'educacao',
    category: 'educacao',
    title: 'Educação',
    slug: 'educacao',
    items: [
      {
        id: 'educacao-1',
        category: 'SEDEPE',
        title: 'Matrícula escolar',
        slug: 'educacao/matricula-escolar'
      },
      {
        id: 'educacao-2',
        category: 'SEDEPE',
        title: 'Consultar desempenho',
        slug: 'educacao/consultar-desempenho'
      }
    ]
  },
  {
    id: 'saude-infantil',
    category: 'saude-infantil',
    title: 'Saúde Infantil',
    slug: 'saude-infantil',
    items: [
      {
        id: 'saude-1',
        category: 'SEDEPE',
        title: 'Agendar vacinação',
        slug: 'saude-infantil/agendar-vacinacao'
      },
      {
        id: 'saude-2',
        category: 'SEDEPE',
        title: 'Consulta pediátrica',
        slug: 'saude-infantil/consulta-pediatrica'
      }
    ]
  },
  {
    id: 'assistencia-familia',
    category: 'assistencia-familia',
    title: 'Assistência à Família',
    slug: 'assistencia-familia',
    items: [
      {
        id: 'assistencia-1',
        category: 'SEDEPE',
        title: 'Benefícios sociais',
        slug: 'assistencia-familia/beneficios-sociais'
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
        slug: 'trabalho-renda/consultar-vagas-de-emprego'
      },
      {
        id: 'trabalho-2',
        category: 'SEDEPE',
        title: 'Solicitar seguro desemprego',
        slug: 'trabalho-renda/solicitar-seguro-desemprego'
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
        slug: 'saude-adulta/agendar-consulta'
      },
      {
        id: 'saude-adulta-2',
        category: 'SEDEPE',
        title: 'Solicitar exames',
        slug: 'saude-adulta/solicitar-exames'
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
        slug: 'habitacao/solicitar-moradia'
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
        slug: 'previdencia/consultar-aposentadoria'
      },
      {
        id: 'previdencia-2',
        category: 'SEDEPE',
        title: 'Solicitar pensão',
        slug: 'previdencia/solicitar-pensao'
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
        slug: 'saude-idosa/agendar-consulta-geriatrica'
      },
      {
        id: 'saude-idosa-2',
        category: 'SEDEPE',
        title: 'Medicamentos contínuos',
        slug: 'saude-idosa/medicamentos-continuos'
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
        slug: 'lazer-cultura/atividades-para-idosos'
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
