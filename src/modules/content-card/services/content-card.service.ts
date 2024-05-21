import { HttpService } from '@nestjs/axios';
import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { builtContentCards } from './content-card-utils';
import {
  ContentCardDto,
  ContentCardRawResponseDto,
} from '../dtos/content-card.dto';

@Injectable()
export class ContentCardService {
  constructor(private readonly httpService: HttpService) {}

  async getAll() {
    const url = new URL(process.env.CONTENT_FEED_URL);
    let contentCards: ContentCardDto[] | null = null;

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<ContentCardRawResponseDto>(url.toString(), {
          headers: {
            Accept: 'application/json',
            Prefer: 'code=200, dynamic=true',
          },
        }),
      );
      contentCards = data.contentCards;
    } catch (err) {
      throw new ServiceUnavailableException(
        'service to get content feeds is not available',
      );
    }

    return builtContentCards(contentCards);
  }
}
