import { Controller, Get } from '@nestjs/common';
import { NewsService } from './new.service';

@Controller()
export class AppController {
  constructor(private readonly appService: NewsService) {}

  @Get('hello')
  getHello123(): string {
    return this.appService.getHello123();
  }
}
