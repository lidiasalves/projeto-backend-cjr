import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import type { LojaDto } from './dto/loja.dto';
import type { Loja } from '@prisma/client';
import { LojaService } from './loja.service';

@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

  @Post()
  async create(@Body() data: LojaDto): Promise<Loja> {
    return this.lojaService.create(data);
  }

  @Get()
  async findAll(): Promise<Loja[]> {
    return this.lojaService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: LojaDto): Promise<Loja> {
    return this.lojaService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Loja> {
    return this.lojaService.delete(Number(id));
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<Loja> {
    return this.lojaService.getById(Number(id));
  }
}
