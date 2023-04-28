import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World1!';
  }

  getHello123(): string {
    return 'Hello World123dfff';
  }

  layout(): { code: number; data: string; message: '退出成功' } {
    return {
      code: 120,
      data: '客户端发起了退出请求',
      message: '退出成功'
    };
  }
}
