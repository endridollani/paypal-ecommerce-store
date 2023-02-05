export interface ProductModelType {
  product_id: number;
  product_category: string;
  product_description: string;
  product_discounted_price: number;
  product_name: string;
  product_price: string;
  product_stock: number;
  images: Array<string>;
}

export interface ProductCreateType {
  product_name: string;
  product_description: string;
  product_price: number;
  product_discounted_price: number;
  product_stock: number;
  product_category: string;
  images: Array<string>;
}

export interface ProductUpdateType {
  product_name?: string;
  product_description?: string;
  product_price?: number;
  product_discounted_price?: number;
  product_stock?: number;
  product_category?: string;
  images?: Array<string>;
}
