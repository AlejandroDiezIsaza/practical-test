import app from '../../app';
import request from 'supertest';
import * as services from '../../infrastructure/services';
import { DESCRIPTION, ITEMS_SEARCH, ITEM_RESULT } from '../mocks';

jest.mock('../../infrastructure/services');

describe('item.controller.spec', () => {

  const STATUS_200 = 200;
  const STATUS_500 = 500;
  const MESSAGE_ERROR = 'ERROR';

  describe('GET /items', () => {
    it('return status 200 if the query is sent', async () => {
      (services.getSearchItemsByQuery as jest.Mock).mockImplementation(() =>
        Promise.resolve(structuredClone(ITEMS_SEARCH))
      );

      const res = await request(app).get('/api/items?q=app');

      expect(res.statusCode).toEqual(STATUS_200);
    });

    it('return status 500 if the service fail', async () => {
      (services.getSearchItemsByQuery as jest.Mock).mockRejectedValueOnce(new Error(MESSAGE_ERROR));

      const res = await request(app).get('/api/items?q=app');

      expect(res.statusCode).toEqual(STATUS_500);
    });
  });

  describe('GET /items/:id', () => {
    it('return status 200 if the query is sent', async () => {
      (services.getItemById as jest.Mock).mockImplementation(() =>
        Promise.resolve(structuredClone(ITEM_RESULT))
      );
      (services.getItemDescriptionById as jest.Mock).mockImplementation(() =>
        Promise.resolve(structuredClone(DESCRIPTION))
      );

      const res = await request(app).get('/api/items/ML123');

      expect(res.statusCode).toEqual(STATUS_200);
    });

    it('return status 500 if the service fail', async () => {
      (services.getItemById as jest.Mock).mockRejectedValueOnce(new Error(MESSAGE_ERROR));

      const res = await request(app).get('/api/items/ML123');

      expect(res.statusCode).toEqual(STATUS_500);
    });
  });
});
