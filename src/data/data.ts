export interface ServiceItem {
  id: string;
  category: string;
  title: string;
}

export interface MenuItem {
  id: string;
  category: string;
  title: string;
  items: ServiceItem[];
}

export const juventudeData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    items: []
  },
  {
    id: 'aposentadoria',
    category: 'aposentadoria',
    title: 'Aposentadoria',
    items: [
      {
        id: 'aposentadoria-1',
        category: 'SEDEPE',
        title: 'Solicitar aposentadoria'
      },
      {
        id: 'aposentadoria-2',
        category: 'SEDEPE',
        title: 'Consultar benefício'
      }
    ]
  },
  {
    id: 'cultura-turismo',
    category: 'cultura-turismo',
    title: 'Cultura e Turismo',
    items: [
      {
        id: 'cultura-1',
        category: 'SEDEPE',
        title: 'Agenda cultural'
      },
      {
        id: 'turismo-1',
        category: 'SEDEPE',
        title: 'Pontos turísticos'
      }
    ]
  },
  {
    id: 'deveres-tributarios',
    category: 'deveres-tributarios',
    title: 'Deveres Tributários',
    items: [
      {
        id: 'tributario-1',
        category: 'SEDEPE',
        title: 'Emitir guia de pagamento'
      }
    ]
  },
  {
    id: 'empreendedorismo',
    category: 'empreendedorismo',
    title: 'Empreendedorismo',
    items: [
      {
        id: 'empreendedor-1',
        category: 'SEDEPE',
        title: 'Abrir empresa'
      }
    ]
  },
  {
    id: 'emprego-assistencia',
    category: 'emprego-assistencia',
    title: 'Emprego e Assistência',
    items: [
      {
        id: 'emprego-1',
        category: 'SEDEPE',
        title: 'Consultar vagas de emprego'
      }
    ]
  },
  {
    id: 'ensino-superior',
    category: 'ensino-superior',
    title: 'Ensino Superior',
    items: [
      {
        id: 'ensino-1',
        category: 'SEDEPE',
        title: 'Inscrição em universidade'
      }
    ]
  },
  {
    id: 'mobilidade',
    category: 'mobilidade',
    title: 'Mobilidade',
    items: [
      {
        id: 'mobilidade-1',
        category: 'SEDEPE',
        title: 'Consultar multas de trânsito'
      }
    ]
  }
];

export const pessoaIdosaData: MenuItem[] = [
  {
    id: 'todos',
    category: 'todos',
    title: 'Todos os serviços',
    items: []
  },
  {
    id: 'Infraestrutura-trânsito-transporte',
    category: 'Infraestrutura-transito-transporte',
    title: 'Infraestrutura, Trânsito e Transportes',
    items: [
      {
        id: 'aposentadoria-1',
        category: 'infra',
        title: 'Solicitar aposentadoria'
      },
      {
        id: 'aposentadoria-2',
        category: 'infra',
        title: 'Consultar benefício'
      }
    ]
  },
  {
    id: 'cultura-turismo',
    category: 'cultura-turismo',
    title: 'Cultura e Turismo',
    items: [
      {
        id: 'cultura-1',
        category: 'SEDEPE',
        title: 'Agenda cultural'
      },
      {
        id: 'turismo-1',
        category: 'SEDEPE',
        title: 'Pontos turísticos'
      }
    ]
  },
  {
    id: 'deveres-tributarios',
    category: 'deveres-tributarios',
    title: 'Deveres Tributários',
    items: [
      {
        id: 'tributario-1',
        category: 'SEDEPE',
        title: 'Emitir guia de pagamento'
      }
    ]
  }
];
