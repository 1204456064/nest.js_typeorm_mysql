import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1')
  // app.enableCors({
  //   "origin": "*",
  // })

  await app.listen(5000);
}
bootstrap();
