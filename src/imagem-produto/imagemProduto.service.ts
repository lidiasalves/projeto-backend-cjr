import { Injectable } from '@nestjs/common';
import { ImagemProdutoDto } from './dto/imagemProduto.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ImagemProdutoService {
  constructor(private prisma: PrismaService) {}
  //CREATE
  async create(data: ImagemProdutoDto) {
    const imagemProduto = await this.prisma.imagens_Produto.create({
      data,
    });
    return imagemProduto;
  }

  //READ
  async findALL() {
    return await this.prisma.imagens_Produto.findMany();
  }

  //UPTATE
  async update(id: number, data: ImagemProdutoDto) {
    const imagemProdutoExiste = await this.prisma.imagens_Produto.findUnique({
      where: {
        id,
      },
    });
    if (!imagemProdutoExiste) {
      throw new Error('Imagem não existe!');
    }
    return await this.prisma.imagens_Produto.update({
      data,
      where: {
        id,
      },
    });
  }
  // DELETE
  async delete(id: number) {
    const imagemProdutoExiste = await this.prisma.imagens_Produto.findUnique({
      where: {
        id,
      },
    });
    if (!imagemProdutoExiste) {
      throw new Error('Imagem não existe!');
    }
    return await this.prisma.imagens_Produto.delete({
      where: {
        id,
      },
    });
  }
  async getById(id: number) {
    const imagemProdutoExiste = await this.prisma.imagens_Produto.findUnique({
      where: {
        id,
      },
    });
    if (!imagemProdutoExiste) {
      throw new Error('Imagem não existe!');
    }
    return imagemProdutoExiste;
  }
}
