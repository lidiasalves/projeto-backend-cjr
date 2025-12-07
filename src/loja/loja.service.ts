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
        nome: data.nome,
        descricao: data.descricao,
        logo_url: data.logo_url,
        banner_url: data.banner_url,
        sticker_url: data.sticker_url,

        usuario: { connect: { id: data.UsuarioId } },
        categoria: { connect: { id: data.CategoriaId } },
      },
      include: { categoria: true },
    });
  }

  async findAll() {
    return this.prisma.loja.findMany({
      include: { categoria: true },
      orderBy: { criado_em: 'desc' },
    });
  }

  async findOne(id: number) {
    const loja = await this.prisma.loja.findUnique({
      where: { id },
      include: {
        categoria: true,
        usuario: { select: { nome: true, email: true, foto_perfil_url: true } },
        produtos: {
          include: {
            imagens: true,
            categoria: true,
          },
        },
        avaliacoes: {
          include: { usuario: true },
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
        ...(data.logo_url && { logo_url: data.logo_url }),
        ...(data.banner_url && { banner_url: data.banner_url }),
        ...(data.sticker_url && { sticker_url: data.sticker_url }),
      },
    });
  }

  // 🔥🔥🔥 REMOVE COMPLETO
  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.$transaction(async (tx) => {
      // 1. Comentários das avaliações da loja
      await tx.comentario_Avaliacao.deleteMany({
        where: { avaliacao_loja: { LojaId: id } },
      });

      // 2. Comentários das avaliações de produtos da loja
      await tx.comentario_Avaliacao.deleteMany({
        where: {
          avaliacao_produto: {
            produto: { LojaId: id },
          },
        },
      });

      // 3. Avaliações da loja
      await tx.avaliacoes_Loja.deleteMany({
        where: { LojaId: id },
      });

      // 4. Avaliações de produtos da loja
      await tx.avalicoes_Produto.deleteMany({
        where: {
          produto: { LojaId: id },
        },
      });

      // 5. Imagens de produtos da loja
      await tx.imagens_Produto.deleteMany({
        where: {
          produto: { LojaId: id },
        },
      });

      // 6. Produtos da loja
      await tx.produto.deleteMany({
        where: { LojaId: id },
      });

      // 7. Por fim, a loja
      await tx.loja.delete({
        where: { id },
      });
    });

    return { message: `Loja ${id} deletada com sucesso.` };
  }
}
