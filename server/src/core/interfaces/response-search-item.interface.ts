import { Author, Item } from '.';

export interface ResponseSearchItem {
  author: Author;
  categories: string[];
  items: Item[];
}
