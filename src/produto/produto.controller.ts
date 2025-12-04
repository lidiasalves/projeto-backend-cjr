/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import type { Produto } from '@prisma/client';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/createProduto.dto';
import { UpdateProdutoDto } from './dto/updateProduto.dto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() data: CreateProdutoDto): Promise<Produto> {
    return this.produtoService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProdutoDto,
  ): Promise<Produto> {
    return this.produtoService.update(Number(id), data);
  }

  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
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
