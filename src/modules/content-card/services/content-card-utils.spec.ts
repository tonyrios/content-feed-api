import { builtContentCards } from './content-card-utils';
import { contentCardsMock, expectedResponse } from './content-card-utils.mock';

describe('builtContentCards', () => {
  describe('builtContentCards', () => {
    it('should return an array of contentCard', async () => {
      const contentCardResponse = builtContentCards(contentCardsMock);
      expect(contentCardResponse).toStrictEqual(expectedResponse);
    });
  });
});
