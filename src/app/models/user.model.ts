// Interfaz sobre los datos que trae la API
export interface Address {
  city: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}
