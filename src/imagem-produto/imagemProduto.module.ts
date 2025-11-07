import { Module } from '@nestjs/common';
import { ImagemProdutoService } from './imagemProduto.service';
import { ImagemProdutoController } from './imagemProduto.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [ImagemProdutoService, PrismaService],
  controllers: [ImagemProdutoController],
})
export class ImagemProdutoModule {}
