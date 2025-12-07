// src/pesquisa/pesquisa.module.ts
import { Module } from '@nestjs/common';
import { PesquisaService } from './pesquisa.service';
import { PesquisaController } from './pesquisa.controller';

@Module({


  controllers: [PesquisaController],
  providers: [PesquisaService],
})
export class PesquisaModule {}