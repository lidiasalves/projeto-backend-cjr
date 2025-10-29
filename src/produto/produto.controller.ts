import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import type { ProdutoDto } from './dto/produto.dto';
import type { Produto } from '@prisma/client';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() data: ProdutoDto): Promise<Produto> {
    return this.produtoService.create(data);
  }

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: ProdutoDto,
  ): Promise<Produto> {
    return this.produtoService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.delete(Number(id));
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.getById(Number(id));
  }
}
