export interface User {
  id: string;
  fullname: string;
  user: string;
  groups: Array<GroupPackage>;
  clients: Array<Client>;
}

export interface Client {
  id: string;
  fullname: string;
  items: Array<Item>;
}

export interface Package {
  id: string;
  code: string;
  status: number;
  currentAmmount: number;
  items: Array<Item>;
}

export interface Item {
  id: string;
  name: string;
  price: number;
  owner: string;
  isSold: boolean;
}

export interface GroupPackage {
  id: string;
  ammount: number;
  currentAmmount: number;
  created: Date;
  delivered: Date;
  packages: Array<Package>;
}
