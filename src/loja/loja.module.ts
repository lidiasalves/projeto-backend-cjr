/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LojaService } from './loja.service';
import { LojaController } from './loja.controller';
import { DatabaseModule } from 'src/database/database.module'; 

@Module({
  imports: [DatabaseModule],
  controllers: [LojaController],
  providers: [LojaService],
})
export class LojaModule {}
