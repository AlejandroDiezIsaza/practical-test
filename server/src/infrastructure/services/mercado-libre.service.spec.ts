import axios from 'axios';
import { getSearchItemsByQuery, getItemById, getItemDescriptionById } from '.';

jest.mock('axios');

describe('mercado-libre.service.spec', () => {

  const BASE_URL = 'https://api.mercadolibre.com';
  const RESPONSE_TYPE_JSON = { "responseType": "json" };
  const MESSAGE_ERROR = 'ERROR';
  const ITEM_ID = 'ML123';
  const FAIL_MESSAGE = 'Expected throw an error';

  describe('When service getSearchItemsByQuery is called', () => {
    const QUERY_SEARCH = 'apple';

    it('and everything is successful, the expected response should return', async () => {
      (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: {} }));

      await getSearchItemsByQuery(QUERY_SEARCH);

      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/sites/MLA/search?q=${QUERY_SEARCH}&limit=4`,
        RESPONSE_TYPE_JSON
      );
    });

    it('and error, the expected response should return', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error(MESSAGE_ERROR));

      try {
        await getSearchItemsByQuery(QUERY_SEARCH);

        fail(FAIL_MESSAGE);

      } catch (error: any) {
        expect(error.message).toEqual(MESSAGE_ERROR);
      }
    });
  });

  describe('When service getItemById is called', () => {
    it('and everything is successful, the expected response should return', async () => {
      (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: {} }));

      await getItemById(ITEM_ID);

      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/items/${ITEM_ID}`,
        RESPONSE_TYPE_JSON
      );
    });

    it('and error, the expected response should return', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error(MESSAGE_ERROR));

      try {
        await getItemById(ITEM_ID);

        fail(FAIL_MESSAGE);

      } catch (error: any) {
        expect(error.message).toEqual(MESSAGE_ERROR);
      }
    });
  });

  describe('When service getItemDescriptionById is called', () => {
    it('and everything is successful, the expected response should return', async () => {
      (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: {} }));

      await getItemDescriptionById(ITEM_ID);

      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/items/${ITEM_ID}/description`,
        RESPONSE_TYPE_JSON
      );
    });

    it('and error, the expected response should return', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error(MESSAGE_ERROR));

      try {
        await getItemDescriptionById(ITEM_ID);

        fail(FAIL_MESSAGE);

      } catch (error: any) {
        expect(error.message).toEqual(MESSAGE_ERROR);
      }
    });
  });
});
