import { HttpService } from '@nestjs/axios';
import { ContentCardService } from '../../services';
import { ContentCardController } from './content-card.controller';
import { ContentCardBuiltResponseDto } from '../../dtos/content-card.dto';

describe('ContentCardController', () => {
  let contentCardController: ContentCardController;
  let contentCardService: ContentCardService;

  beforeEach(() => {
    const httpService = new HttpService();
    contentCardService = new ContentCardService(httpService);
    contentCardController = new ContentCardController(contentCardService);
  });

  describe('findAll', () => {
    it('should return an array of contentCard', async () => {
      const contentCardBuiltResponseDto = new ContentCardBuiltResponseDto();
      contentCardBuiltResponseDto.id = '4';
      const result: ContentCardBuiltResponseDto[] = [
        contentCardBuiltResponseDto,
      ];
      jest
        .spyOn(contentCardService, 'getAll')
        .mockImplementation(() => Promise.resolve(result));

      expect(await contentCardController.findAll()).toBe(result);
    });
  });
});
