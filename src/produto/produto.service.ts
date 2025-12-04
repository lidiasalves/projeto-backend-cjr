import { Injectable, NotFoundException } from '@nestjs/common';
import type { Produto } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';
import { CreateProdutoDto } from './dto/createProduto.dto';
import { UpdateProdutoDto } from './dto/updateProduto.dto';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProdutoDto): Promise<Produto> {
    const produto = await this.prisma.produto.create({ data });
    return produto;
  }

  async findAll(): Promise<Produto[]> {
    const produtos = await this.prisma.produto.findMany();
    return produtos;
  }

  async update(id: number, data: UpdateProdutoDto): Promise<Produto> {
    const existe = await this.prisma.produto.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Produto não existe!');

    return await this.prisma.produto.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Produto> {
    const existe = await this.prisma.produto.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Produto não existe!');
    const produto = await this.prisma.produto.delete({ where: { id } });
    return produto;
  }

  async getById(id: number): Promise<Produto> {
    const existe = await this.prisma.produto.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Produto não existe!');
    return existe;
  }
}
