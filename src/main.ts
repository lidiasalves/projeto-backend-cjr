/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Habilitar CORS para o Next.js
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // Servir imagens da pasta /uploads
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads', // URL base para acessar imagens
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log('API rodando em http://localhost:3001');
}

bootstrap();
