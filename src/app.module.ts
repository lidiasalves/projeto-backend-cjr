import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LojasService } from './lojas/lojas.service';
import { LojaController } from './loja/loja.controller';
import { LojaModule } from './loja/loja.module';

@Module({
  imports: [LojaModule],
  controllers: [AppController, LojaController],
  providers: [AppService, LojasService],
})
export class AppModule {}
