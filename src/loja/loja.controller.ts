/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { LojaService } from './loja.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('loja')
export class LojaController {
  constructor(private readonly lojaService: LojaService) {}

 @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'logo', maxCount: 1 },
        { name: 'banner', maxCount: 1 },
        { name: 'foto_perfil', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads/lojas',
          filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            const fieldName = file.fieldname;
            callback(null, `loja-${fieldName}-${uniqueSuffix}${ext}`);
          },
        }),
      },
    ),
  )
  async create(
    @Body() body: any,
    @UploadedFiles()
    files: {
      logo?: Express.Multer.File[];
      banner?: Express.Multer.File[];
      foto_perfil?: Express.Multer.File[];
    },
  ) {
    const baseUrl = 'http://localhost:3001/uploads/lojas';

    // --- CORREÇÃO AQUI: Tipagem explícita ---
    let logo_url: string | null = null;
    let banner_url: string | null = null;
    let sticker_url: string | null = null;

    if (files.logo && files.logo[0]) {
      logo_url = `${baseUrl}/${files.logo[0].filename}`;
    }
    if (files.banner && files.banner[0]) {
      banner_url = `${baseUrl}/${files.banner[0].filename}`;
    }
    if (files.foto_perfil && files.foto_perfil[0]) {
      sticker_url = `${baseUrl}/${files.foto_perfil[0].filename}`;
    }

    const dadosParaBanco = {
      nome: body.nome,
      descricao: body.descricao,
      UsuarioId: Number(body.UsuarioId),
      CategoriaId: Number(body.CategoriaId),
      logo_url: logo_url,
      banner_url: banner_url,
      sticker_url: sticker_url,
    };

    return this.lojaService.create(dadosParaBanco);
  }

  @Get()
  findAll() {
    return this.lojaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lojaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLojaDto: any) {
    return this.lojaService.update(+id, updateLojaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lojaService.remove(+id);
  }
}