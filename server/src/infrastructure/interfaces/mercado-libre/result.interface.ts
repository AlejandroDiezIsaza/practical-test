export interface Result {
  id: string;
  title: string;
  thumbnail: string;
  currency_id: string;
  price: number;
  shipping: ResultShipping;
  attributes: ResultAttribute[];
}

export interface ResultShipping {
  free_shipping: boolean;
}

export interface ResultAttribute {
  id: string;
  value_name: string;
}
