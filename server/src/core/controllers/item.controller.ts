import express from 'express';
import { APP_URL_BASE } from '../constants';
import { controlledError } from '../../shared/functions';
import { ResponseItemDetail, ResponseSearchItem } from '../interfaces';
import { responseToResponseSearchItem, itemAndDescriptionToReponseItemDetail } from '../mappers';
import { getSearchItemsByQuery, getItemById, getItemDescriptionById } from '../../infrastructure/services';

export const itemController = (app: express.Application) => {
  const BASE_ITEM = `${APP_URL_BASE}`;

  app.get(`${BASE_ITEM}/items`, searchItemsByQuery);
  app.get(`${BASE_ITEM}/items/:id`, detailItemById);
};

const searchItemsByQuery = (req: express.Request, res: express.Response): void => {
  const query = (req.query['q'] || '') as string;
  getSearchItemsByQuery(query)
    .then(responseToResponseSearchItem)
    .then((value: ResponseSearchItem) => res.json(value))
    .catch((error: Error) => controlledError(error, res));
};

const detailItemById = (req: express.Request, res: express.Response): void => {
  const id = req.params.id;
  Promise.all([
    getItemById(id),
    getItemDescriptionById(id)
  ])
    .then(itemAndDescriptionToReponseItemDetail)
    .then((value: ResponseItemDetail) => res.json(value))
    .catch((error: Error) => controlledError(error, res));
};
