type BaseUser = {
  _id: string;
  login: string;
  email: string;
  password: string;
  role: "user" | "lawyer" | "admin";
  createdAt: string;
  active: boolean;
};
type Address = {
  street: string;
  number: string;
  district: string;
  city: string;
  state: string;
  zipCode: string;
};
type User = BaseUser & {
  name: string;
  cpf: string;
  description: string;
  address: Address;
};

type Lawyer = BaseUser & {
  name: string;
  cpf: string;
  address: Address;
  description: string;
  oabNumber: string;
  oabState: string;
  professionalDescription: string;
};
type Admin = BaseUser & {
  login: string;
};
