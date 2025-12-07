// src/pesquisa/pesquisa.service.ts
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../database/prisma.service'; 

@Injectable()
export class PesquisaService {
  constructor(private prisma: PrismaService) {}

  async searchAll(query: string) {
    // Código de busca de lojas e produtos
    if (!query || query.length < 2) {
      return { produtos: [], lojas: [] };
    }
    const termoBusca = query;

    const lojasPromise = this.prisma.loja.findMany({
      where: {
        nome: { contains: termoBusca, mode: 'insensitive' },
      },
      select: {
        id: true, nome: true, sticker_url: true,
        categoria: { select: { nome: true } }
      },
      take: 10,
    });

    const produtosPromise = this.prisma.produto.findMany({
      where: {
        nome: { contains: termoBusca, mode: 'insensitive' },
      },
      include: {
        imagens: { select: { url_imagem: true } },
        loja: { select: { sticker_url: true } }
      },
      take: 20,
    });

    const [lojas, produtos] = await Promise.all([lojasPromise, produtosPromise]);
    
    return { produtos, lojas };
  }
}