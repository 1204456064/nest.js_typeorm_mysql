import { NewsService } from './new.service';
import { Module } from '@nestjs/common';
import { AppController } from './news.controller';
@Module({
  providers: [NewsService],
  controllers: [AppController],
})
export class NewsModule {}
