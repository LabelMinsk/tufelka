export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: string[];
  category: string;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

