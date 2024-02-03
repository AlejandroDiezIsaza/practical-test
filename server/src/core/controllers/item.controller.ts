import express from 'express';
import { APP_URL_BASE } from '../constants';
import { controlledError } from '../../shared/functions';
import { ResponseItemDetail, ResponseSearchItem } from '../interfaces';
import { responseToResponseSearchItem, itemAndDescriptionToReponseItemDetail } from '../mappers';
import { getSearchItemsByQuery, getItemById, getItemDescriptionById } from '../../infrastructure/services';

export const itemController = (app: express.Application) => {
  const BASE_ITEM = `${APP_URL_BASE}/item`;

  app.get(`${BASE_ITEM}/search`, searchItemsByName);
  app.get(`${BASE_ITEM}/detail`, detailItemById);
};

const searchItemsByName = (req: express.Request, res: express.Response): void => {
  const name = (req.query['name'] || '') as string;
  getSearchItemsByQuery(name)
    .then(responseToResponseSearchItem)
    .then((value: ResponseSearchItem) => res.json(value))
    .catch((error: Error) => controlledError(error, res));
};

const detailItemById = (req: express.Request, res: express.Response): void => {
  const id = (req.query['id'] || '') as string;
  Promise.all([
    getItemById(id),
    getItemDescriptionById(id)
  ])
    .then(itemAndDescriptionToReponseItemDetail)
    .then((value: ResponseItemDetail) => res.json(value))
    .catch((error: Error) => controlledError(error, res));
};
