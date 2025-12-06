/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/createProduto.dto';
import { UpdateProdutoDto } from './dto/updateProduto.dto';
import type { Produto } from '@prisma/client';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @UseInterceptors(
    FilesInterceptor('fotos', 4, {
      storage: diskStorage({
        destination: './uploads/produtos',
        filename: (_req, file, callback) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${unique}${ext}`);
        },
      }),
      fileFilter: (_req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|webp|gif)$/)) {
          return cb(new Error('Apenas imagens são permitidas'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async create(
    @UploadedFiles() fotos: Express.Multer.File[] = [],
    @Body() body: any,
  ): Promise<any> {
    const dto: CreateProdutoDto = {
      nome: body.nome,
      descricao: body.descricao || "",
      preco: Number(body.preco),
      estoque: Number(body.estoque ?? body.quantidade ?? 0),
      LojaId: Number(body.LojaId),
      CategoriaId: Number(body.CategoriaId),
    };

    return this.produtoService.create(dto, fotos);
  }

  @Put(':id')
@UseInterceptors(
  FilesInterceptor('fotos', 4, {
    storage: diskStorage({
      destination: './uploads/produtos',
      filename: (_req, file, callback) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${unique}${ext}`);
      },
    }),
    fileFilter: (_req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png|webp|gif)$/)) {
        return cb(new Error('Apenas imagens são permitidas'), false);
      }
      cb(null, true);
    },
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
)
async update(
  @Param('id') id: string,
  @UploadedFiles() fotos: Express.Multer.File[] = [],
  @Body() data: any,
): Promise<any> {

  return this.produtoService.update(Number(id), data, fotos);
}


  @Get()
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.delete(Number(id));
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.getById(Number(id));
  }
}
