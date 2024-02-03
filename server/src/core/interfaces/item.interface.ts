export interface Item {
  id: string;
  title: string;
  price: ItemPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ItemPrice {
  currency: string;
  amount: number;
  decimals: number;
}
