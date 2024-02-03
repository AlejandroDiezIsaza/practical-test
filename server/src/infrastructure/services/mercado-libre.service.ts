import axios, { AxiosResponse } from 'axios';
import { Item, ItemDescription, Response } from '../interfaces/mercado-libre';

const BASE_URL = 'https://api.mercadolibre.com';

export const getSearchItemsByQuery = async (query: string): Promise<Response> => {
  return axios.get(
    `${BASE_URL}/sites/MLA/search?q=${query}&limit=4`,
    { responseType: 'json' }
  )
    .then((response: AxiosResponse<Response>) => response.data);
};

export const getItemById = async (id: string): Promise<Item> => {
  return axios.get(
    `${BASE_URL}/items/${id}`,
    { responseType: 'json' }
  )
    .then((response: AxiosResponse<Item>) => response.data);
};

export const getItemDescriptionById = async (id: string): Promise<ItemDescription> => {
  return axios.get(
    `${BASE_URL}/items/${id}/description`,
    { responseType: 'json' }
  )
    .then((response: AxiosResponse<ItemDescription>) => response.data);
};
