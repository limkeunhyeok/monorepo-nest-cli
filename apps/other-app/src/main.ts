import { NestFactory } from '@nestjs/core';
import { OtherAppModule } from './other-app.module';

async function bootstrap() {
  const app = await NestFactory.create(OtherAppModule);
  await app.listen(3000);
}
bootstrap();
