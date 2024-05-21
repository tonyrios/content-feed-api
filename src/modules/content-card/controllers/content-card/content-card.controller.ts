import { Controller, Get } from '@nestjs/common';
import { ContentCardService } from '../../services';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContentCardBuiltResponseDto } from '../../dtos/content-card.dto';

@Controller('content-feed')
@ApiTags('content-feed')
export class ContentCardController {
  constructor(private readonly contentFeedService: ContentCardService) {}

  @ApiOperation({ summary: 'get list of content cards' })
  @Get()
  findAll(): Promise<ContentCardBuiltResponseDto[]> {
    return this.contentFeedService.getAll();
  }
}
