export interface ProductType {
  id: string;
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
