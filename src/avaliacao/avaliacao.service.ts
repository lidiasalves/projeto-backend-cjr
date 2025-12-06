import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAvaliacaoLojaDto } from './dto/create-avaliacaoloja.dto';
import { UpdateAvaliacaoLojaDto } from './dto/update-avaliacaoloja.dto';
import { CreateAvaliacaoProdutoDto } from './dto/create-avaliacaoproduto.dto';
import { UpdateAvaliacaoProdutoDto } from './dto/update-avaliacaoproduto.dto';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private prisma: PrismaService) {}

  // ==================================================================
  // 1. CRUD AVALIAÇÕES DE LOJA
  // ==================================================================

  async createLoja(data: CreateAvaliacaoLojaDto) {
    return await this.prisma.avaliacoes_Loja.create({
      data: {
        nota: data.nota,
        comentario: data.comentario,
        LojaId: Number(data.LojaId),
        UsuarioId: Number(data.UsuarioId),
      },
    });
  }

  async findAllLoja() {
    return await this.prisma.avaliacoes_Loja.findMany({
      include: { usuario: true, loja: true, comentarios: true },
    });
  }

  async findLojaById(id: number) {
    const avaliacao = await this.prisma.avaliacoes_Loja.findUnique({
      where: { id },
      include: { 
        usuario: true, 
        comentarios: { include: { usuario: true } } // Traz quem respondeu
      },
    });
    if (!avaliacao) throw new NotFoundException('Avaliação de loja não encontrada');
    return avaliacao;
  }

  // Busca todas as avaliações de uma loja específica
  async findByLojaTarget(lojaId: number) {
    return await this.prisma.avaliacoes_Loja.findMany({
      where: { LojaId: lojaId },
      include: {
        usuario: { select: { id: true, nome: true, foto_perfil_url: true } },
        comentarios: true
      },
      orderBy: { criado_em: 'desc' }
    });
  }

  async updateLoja(id: number, data: UpdateAvaliacaoLojaDto) {
    return await this.prisma.avaliacoes_Loja.update({
      where: { id },
      data,
    });
  }

  async removeLoja(id: number) {
    return await this.prisma.avaliacoes_Loja.delete({ where: { id } });
  }

  // ==================================================================
  // 2. CRUD AVALIAÇÕES DE PRODUTO
  // ==================================================================

  async createProduto(data: CreateAvaliacaoProdutoDto) {
    return await this.prisma.avalicoes_Produto.create({
      data: {
        nota: data.nota,
        comentario: data.comentario,
        ProdutoId: Number(data.ProdutoId),
        UsuarioId: Number(data.UsuarioId),
      },
    });
  }

  async findAllProduto() {
    return await this.prisma.avalicoes_Produto.findMany({
      include: { usuario: true, produto: true, comentarios: true },
    });
  }

  async findProdutoById(id: number) {
    const avaliacao = await this.prisma.avalicoes_Produto.findUnique({
      where: { id },
      include: { 
        usuario: true, 
        comentarios: { include: { usuario: true } }
      },
    });
    if (!avaliacao) throw new NotFoundException('Avaliação de produto não encontrada');
    return avaliacao;
  }

  async findByProdutoTarget(produtoId: number) {
    return await this.prisma.avalicoes_Produto.findMany({
      where: { ProdutoId: produtoId },
      include: {
        usuario: { select: { id: true, nome: true, foto_perfil_url: true } },
        comentarios: true
      },
      orderBy: { criado_em: 'desc' }
    });
  }

  async updateProduto(id: number, data: UpdateAvaliacaoProdutoDto) {
    return await this.prisma.avalicoes_Produto.update({
      where: { id },
      data,
    });
  }

  async removeProduto(id: number) {
    return await this.prisma.avalicoes_Produto.delete({ where: { id } });
  }

  // ==================================================================
  // 3. CRUD COMENTÁRIOS (RESPOSTAS)
  // ==================================================================

  async createComentario(data: CreateComentarioDto) {
    return await this.prisma.comentario_Avaliacao.create({
      data: {
        conteudo: data.conteudo,
        UsuarioId: Number(data.UsuarioId),
        // Conecta ou na avaliação da loja ou na do produto (um deles será undefined e o prisma ignora)
        AvaliacaoId: data.AvaliacaoLojaId ? Number(data.AvaliacaoLojaId) : null,
        AvaliacaoProdutoId: data.AvaliacaoProdutoId ? Number(data.AvaliacaoProdutoId) : null,
      },
    });
  }

  async findComentarioById(id: number) {
    return await this.prisma.comentario_Avaliacao.findUnique({
        where: { id },
        include: { usuario: true }
    });
  }

  async updateComentario(id: number, data: UpdateComentarioDto) {
    return await this.prisma.comentario_Avaliacao.update({
      where: { id },
      data: { conteudo: data.conteudo }, // Só permitimos mudar o conteúdo
    });
  }

  async removeComentario(id: number) {
    return await this.prisma.comentario_Avaliacao.delete({ where: { id } });
  }
}