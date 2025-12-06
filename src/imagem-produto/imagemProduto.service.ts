/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateImagemProdutoDto } from './dto/createImagemProduto.dto';
import { UpdateImagemProdutoDto } from './dto/updateImagemProduto.dto';

@Injectable()
export class ImagemProdutoService {
  constructor(private prisma: PrismaService) {}

  // CREATE
  async create(data: CreateImagemProdutoDto) {
    return await this.prisma.imagens_Produto.create({
      data,
    });
  }

  // READ
  async findALL() {
    return await this.prisma.imagens_Produto.findMany();
  }

  // UPDATE
  async update(id: number, data: UpdateImagemProdutoDto) {
    const imagemProdutoExiste = await this.prisma.imagens_Produto.findUnique({
      where: { id },
    });

    if (!imagemProdutoExiste) {
      throw new Error('Imagem não existe!');
    }

    return await this.prisma.imagens_Produto.update({
      where: { id },
      data,
    });
  }

  // DELETE
  async delete(id: number) {
    const imagemProdutoExiste = await this.prisma.imagens_Produto.findUnique({
      where: { id },
    });

    if (!imagemProdutoExiste) {
      throw new Error('Imagem não existe!');
    }

    return await this.prisma.imagens_Produto.delete({
      where: { id },
    });
  }

  // GET BY ID
  async getById(id: number) {
    const imagemProdutoExiste = await this.prisma.imagens_Produto.findUnique({
      where: { id },
    });

    if (!imagemProdutoExiste) {
      throw new Error('Imagem não existe!');
    }

    return imagemProdutoExiste;
  }
}
