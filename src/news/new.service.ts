import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  getHello123(): string {
    return 'Hello World1232312!';
  }
}
