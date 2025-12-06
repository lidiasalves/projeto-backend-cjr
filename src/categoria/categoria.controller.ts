/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import type { CategoriaDto } from './dto/categoria.dto';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async create(@Body() data: CategoriaDto) {
    return this.categoriaService.create(data);
  }

  @Get()
  async findAll() {
    return this.categoriaService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: number, data: CategoriaDto) {
    return this.categoriaService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number, data: CategoriaDto) {
    return this.categoriaService.delete(Number(id));
  }

  @Get(':id')
  async getById(@Param('id') id: number, data: CategoriaDto) {
    return this.categoriaService.getById(Number(id));
  }
}
