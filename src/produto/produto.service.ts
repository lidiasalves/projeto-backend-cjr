import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateProdutoDto } from './dto/createProduto.dto';
import { UpdateProdutoDto } from './dto/updateProduto.dto';
import type { Produto } from '@prisma/client';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProdutoDto, fotos: Express.Multer.File[] = []) {
    const produto = await this.prisma.produto.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        estoque: data.estoque,
        LojaId: data.LojaId,
        CategoriaId: data.CategoriaId,
      },
    });

    if (fotos.length > 0) {
      const baseUrl = process.env.API_BASE_URL ?? 'http://localhost:3001';

      await this.prisma.imagens_Produto.createMany({
        data: fotos.map((foto, i) => ({
          url_imagem: `${baseUrl}/uploads/produtos/${foto.filename}`,
          ordem_exibicao: i,
          ProdutoId: produto.id,
        })),
      });
    }

    return this.prisma.produto.findUnique({
      where: { id: produto.id },
      include: { imagens: true },
    });
  }

  async findAll(): Promise<Produto[]> {
    return this.prisma.produto.findMany({
      include: { imagens: true },
      orderBy: { criado_em: 'desc' },
    });
  }

  async update(id: number, data: UpdateProdutoDto): Promise<Produto> {
    const existe = await this.prisma.produto.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Produto não existe!');

    return this.prisma.produto.update({
      where: { id },
      data,
      include: { imagens: true },
    });
  }

  async delete(id: number): Promise<Produto> {
    const existe = await this.prisma.produto.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Produto não existe!');

    await this.prisma.imagens_Produto.deleteMany({
      where: { ProdutoId: id },
    });

    return this.prisma.produto.delete({
      where: { id },
    });
  }

  async getById(id: number): Promise<Produto> {
    const existe = await this.prisma.produto.findUnique({
      where: { id },
      include: { imagens: true },
    });

    if (!existe) throw new NotFoundException('Produto não existe!');

    return existe;
  }
}
