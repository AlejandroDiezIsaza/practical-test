import { Item, ResponseItemDetail, ResponseSearchItem } from '../interfaces';
import { Response, AvaibleFilter, AvaibleFilterValue, Result, ResultAttribute, Item as ItemResult, ItemDescription } from '../../infrastructure/interfaces/mercado-libre';

const ID_CATEGORY = 'category';
const ID_ITEM_CONDITION = 'ITEM_CONDITION';

export const itemAndDescriptionToReponseItemDetail = ([itemResult, description]: [ItemResult, ItemDescription]): ResponseItemDetail => {
  return {
    author: {
      name: 'Alejandro',
      lastanme: 'Diez Isaza'
    },
    item: {
      ...resultToItem(itemResult),
      picture: itemResult.pictures.at(0)?.url,
      sold_quantity: 0,
      description: description.plain_text
    }
  } as ResponseItemDetail;
};

export const responseToResponseSearchItem = (response: Response): ResponseSearchItem => {
  return {
    author: {
      name: 'Alejandro',
      lastanme: 'Diez Isaza'
    },
    categories: getCategoriesByAvaibleFilter(response.available_filters),
    items: response.results.map(resultToItem)
  } as ResponseSearchItem;
};

const resultToItem = (result: Result): Item => {
  return {
    id: result.id,
    title: result.title,
    price: {
      currency: result.currency_id,
      amount: result.price
    },
    picture: result.thumbnail,
    condition: getConditionByAttributes(result.attributes),
    free_shipping: result.shipping.free_shipping
  } as Item;
};

const getConditionByAttributes = (attributes: ResultAttribute[]): string => {
  return attributes.find((value: ResultAttribute) =>
    value.id === ID_ITEM_CONDITION
  )?.value_name || '';
};

const getCategoriesByAvaibleFilter = (filters: AvaibleFilter[]): string[] => {
  return (
    filters.find((value: AvaibleFilter) =>
      value.id === ID_CATEGORY
    )?.values || []
  ).
    map((value: AvaibleFilterValue) => value.name);
};
