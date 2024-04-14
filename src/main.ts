import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: true }
  });


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );


  await app
    .listen(process.env.GATEWAY_PORT)
    .then(() => console.log(`Running at port ${process.env.GATEWAY_PORT}`));
}
bootstrap();
