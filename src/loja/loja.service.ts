/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return await this.prisma.loja.create({
      data: {
        // Campos simples
        nome: data.nome,
        descricao: data.descricao,

        // CORREÇÃO: Usando as chaves snake_case exatas do banco
        logo_url: data.logo_url,
        banner_url: data.banner_url,
        sticker_url: data.sticker_url,

        // Conexões (Foreign Keys)
        usuario: {
          connect: { id: data.UsuarioId },
        },
        categoria: {
          connect: { id: data.CategoriaId },
        },
      },
      include: {
        categoria: true,
      },
    });
  }

  async findAll() {
    const lojas = await this.prisma.loja.findMany({
      include: {
        categoria: true,
      },
      orderBy: { criado_em: 'desc' },
    });

    // 💡 NOVO: LOG PARA DEBUGAR
    console.log('Lojas encontradas pelo Prisma:', lojas.length);
    console.log('Primeira Loja (para estrutura):', lojas[0]);

    return lojas;
  }
  async findOne(id: number) {
    const loja = await this.prisma.loja.findUnique({
      where: { id },
      include: {
        categoria: true,
        produtos: true,
        avaliacoes: { include: { usuario: true } },
        usuario: {
          select: { nome: true, email: true, foto_perfil_url: true },
        },
      },
    });

    if (!loja) throw new NotFoundException(`Loja com ID ${id} não encontrada`);

    return loja;
  }

  async update(id: number, data: any) {
    await this.findOne(id);

    return await this.prisma.loja.update({
      where: { id },
      data: {
        nome: data.nome,
        descricao: data.descricao,
        // Só atualiza se o campo vier preenchido
        ...(data.logo_url && { logo_url: data.logo_url }),
        ...(data.banner_url && { banner_url: data.banner_url }),
        ...(data.sticker_url && { sticker_url: data.sticker_url }),
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prisma.loja.delete({
      where: { id },
    });
  }
}
