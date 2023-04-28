import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cw')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello-world')
  getHello(): string {
    return this.appService.getHello123();
  }

  @Post('layout')
  layout(): { code: number; data: string; message: '退出成功' } {
    return this.appService.layout();
  }
}
