import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
