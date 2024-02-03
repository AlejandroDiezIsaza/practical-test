import { Result } from '.';

export interface Item extends Result {
  pictures: ItemPicture[];
}

export interface ItemPicture {
  url: string;
}
