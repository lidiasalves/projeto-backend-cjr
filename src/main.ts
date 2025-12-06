// main.ts
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import 'dotenv/config'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import express from "express";
import path from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 💡 CORREÇÃO APLICADA: Permitir tanto localhost quanto 127.0.0.1
  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        const msgs = errors.flatMap((e) => Object.values(e.constraints ?? {}));
        return new BadRequestException(msgs);
      },
    }),
  );

  // SERVE ARQUIVOS ESTÁTICOS
  const uploadPath = path.join(process.cwd(), 'uploads');
  console.log("Servindo uploads em:", uploadPath);

  app.use('/uploads', express.static(uploadPath));

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();