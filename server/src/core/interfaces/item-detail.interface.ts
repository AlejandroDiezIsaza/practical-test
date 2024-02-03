import { Item } from '.';

export interface ItemDetail extends Item {
  sold_quantity: number;
  description: string;
}
