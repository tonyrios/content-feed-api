import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ContentCardController } from './controllers';
import { ContentCardService } from './services';

@Module({
  imports: [HttpModule],
  controllers: [ContentCardController],
  providers: [ContentCardService],
})
export class ContentCardModule {}
