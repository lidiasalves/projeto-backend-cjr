import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoLojaDto } from './dto/create-avaliacaoloja.dto';
import { UpdateAvaliacaoLojaDto } from './dto/update-avaliacaoloja.dto';
import { CreateAvaliacaoProdutoDto } from './dto/create-avaliacaoproduto.dto';
import { UpdateAvaliacaoProdutoDto } from './dto/update-avaliacaoproduto.dto';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly service: AvaliacaoService) {}

  // --- LOJAS ---
  @Post('loja')
  createLoja(@Body() data: CreateAvaliacaoLojaDto) {
    return this.service.createLoja(data);
  }

  @Get('loja') // Lista todas do sistema
  findAllLoja() {
    return this.service.findAllLoja();
  }

  @Get('loja/target/:lojaId') // Lista todas de uma Loja específica
  findByLojaTarget(@Param('lojaId') id: string) {
    return this.service.findByLojaTarget(+id);
  }

  @Get('loja/:id') // Pega uma avaliação específica
  findLojaById(@Param('id') id: string) {
    return this.service.findLojaById(+id);
  }

  @Patch('loja/:id')
  updateLoja(@Param('id') id: string, @Body() data: UpdateAvaliacaoLojaDto) {
    return this.service.updateLoja(+id, data);
  }

  @Delete('loja/:id')
  removeLoja(@Param('id') id: string) {
    return this.service.removeLoja(+id);
  }

  // --- PRODUTOS ---
  @Post('produto')
  createProduto(@Body() data: CreateAvaliacaoProdutoDto) {
    return this.service.createProduto(data);
  }

  @Get('produto')
  findAllProduto() {
    return this.service.findAllProduto();
  }

  @Get('produto/target/:produtoId') // Lista todas de um Produto específico
  findByProdutoTarget(@Param('produtoId') id: string) {
    return this.service.findByProdutoTarget(+id);
  }

  @Get('produto/:id')
  findProdutoById(@Param('id') id: string) {
    return this.service.findProdutoById(+id);
  }

  @Patch('produto/:id')
  updateProduto(@Param('id') id: string, @Body() data: UpdateAvaliacaoProdutoDto) {
    return this.service.updateProduto(+id, data);
  }

  @Delete('produto/:id')
  removeProduto(@Param('id') id: string) {
    return this.service.removeProduto(+id);
  }

  // --- COMENTÁRIOS (RESPOSTAS) ---
  @Post('comentario')
  createComentario(@Body() data: CreateComentarioDto) {
    return this.service.createComentario(data);
  }

  @Patch('comentario/:id')
  updateComentario(@Param('id') id: string, @Body() data: UpdateComentarioDto) {
    return this.service.updateComentario(+id, data);
  }

  @Delete('comentario/:id')
  removeComentario(@Param('id') id: string) {
    return this.service.removeComentario(+id);
  }
}