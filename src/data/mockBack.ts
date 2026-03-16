const mockUsers = [
  {
    _id: "u1",
    login: "renato",
    email: "renato@email.com",
    password: "123456",
    role: "user",
    name: "Renato Silva",
    cpf: "123.456.789-00",
    description: "Usuário da plataforma jurídica",
    address: {
      street: "Rua das Flores",
      number: "120",
      district: "Centro",
      city: "São Paulo",
      state: "SP",
      zipCode: "01000-000",
    },
    createdAt: "2025-01-10",
    active: true,
  },

  {
    _id: "l1",
    login: "adv.joao",
    email: "joao@adv.com",
    password: "123456",
    role: "lawyer",
    name: "João Pereira",
    cpf: "987.654.321-00",
    description: "Advogado especialista em direito civil",
    address: {
      street: "Av Paulista",
      number: "500",
      district: "Bela Vista",
      city: "São Paulo",
      state: "SP",
      zipCode: "01310-000",
    },
    oabNumber: "123456",
    oabState: "SP",
    professionalDescription: "Atuação em direito civil e empresarial",
    createdAt: "2024-11-20",
    active: true,
  },

  {
    _id: "a1",
    login: "admin",
    email: "admin@platform.com",
    password: "admin123",
    role: "admin",
    createdAt: "2024-01-01",
    active: true,
  },
];

export default mockUsers