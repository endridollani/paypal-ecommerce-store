import { ProductModelType } from './Product';

export interface CardType {
  id: number;
  product: ProductModelType;
  quantity: number;
}
