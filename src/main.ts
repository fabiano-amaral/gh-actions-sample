import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var nome = fabiano;
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
