export interface ProductModelType {
  id: number;
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  stock: number;
  category: string;
  images: Array<string>;
}

export interface ProductCreateType {
  name: string;
  description: string;
  price: number;
  discounted_price: number;
  stock: number;
  category: string;
  images: Array<string>;
}
