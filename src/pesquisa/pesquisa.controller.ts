
import { Controller, Get, Query } from '@nestjs/common';
import { PesquisaService } from './pesquisa.service';

@Controller('pesquisa') 
export class PesquisaController {
  constructor(private readonly pesquisaService: PesquisaService) {}

  @Get()
  async search(@Query('q') query: string) {
    return this.pesquisaService.searchAll(query);
  }
}