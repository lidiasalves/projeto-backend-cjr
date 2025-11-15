/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, BadRequestException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        // gera apenas as mensagens de validação do class-validator
        const mensagens = errors.flatMap((err) =>
          Object.values(err.constraints ?? {}),
        );

        return new BadRequestException(mensagens);
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
