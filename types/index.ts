export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothes' | 'watches' | 'shoes';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  email: string;
  id: string;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';