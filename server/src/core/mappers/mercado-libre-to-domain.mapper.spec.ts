import { itemAndDescriptionToReponseItemDetail, responseToResponseSearchItem } from '.';
import { DESCRIPTION, ITEMS_SEARCH, ITEM_RESULT, RESPONSE_ITEM_DETAIL, RESPONSE_SEARCH_ITEM } from '../mocks';

describe('mercado-libre-to-domain.mapper.spec', () => {

  describe('When mapping itemAndDescriptionToReponseItemDetail is called', () => {
    it('and the parameters are sent then the object must be returned', async () => {
      const result = itemAndDescriptionToReponseItemDetail([ITEM_RESULT, DESCRIPTION]);

      expect(result).toEqual(RESPONSE_ITEM_DETAIL);
    });
  });

  describe('When mapping responseToResponseSearchItem is called', () => {
    it('and the parameters are sent then the object must be returned', async () => {
      const result = responseToResponseSearchItem(ITEMS_SEARCH);

      expect(result).toEqual(RESPONSE_SEARCH_ITEM);
    });
  });
});
