/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ImagemProdutoService } from './imagemProduto.service';
import { CreateImagemProdutoDto } from './dto/createImagemProduto.dto';
import { UpdateImagemProdutoDto } from './dto/updateImagemProduto.dto';

@Controller('imagem-produto')
export class ImagemProdutoController {
  constructor(private readonly imagemProdutoService: ImagemProdutoService) {}

  @Post()
  async create(@Body() data: CreateImagemProdutoDto) {
    return this.imagemProdutoService.create(data);
  }

  @Get()
  async findAll() {
    return this.imagemProdutoService.findALL();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: UpdateImagemProdutoDto,
  ) {
    return this.imagemProdutoService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.imagemProdutoService.delete(Number(id));
  }

  @Get(':id')
  async getByID(@Param('id') id: number) {
    return this.imagemProdutoService.getById(Number(id));
  }
}
