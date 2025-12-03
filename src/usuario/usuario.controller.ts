/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Patch } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: CreateUsuarioDto) {
    return this.usuarioService.create(data);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findALL();
  }

  @Get(':id')
  async getByID(@Param('id') id: number) {
    return this.usuarioService.getById(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UpdateUsuarioDto) {
    return this.usuarioService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.usuarioService.delete(Number(id));
  }

  @Patch(':id/reset-foto')
  async resetFoto(@Param('id') id: number) {
    return this.usuarioService.resetFoto(Number(id));
  }

  @Patch(':id/foto')
  @UseInterceptors(
    FileInterceptor('foto', {
      storage: diskStorage({
        destination: './uploads/perfis',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);

          callback(null, `user-${req.params.id}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async uploadFoto(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado.');
    }

    const fotoUrl = `http://localhost:3001/uploads/perfis/${file.filename}`;

    return this.usuarioService.update(Number(id), {
      foto_perfil_url: fotoUrl,
    });
  }
  @Patch('alterar-senha')
async alterarSenha(@Body() body: any) {
  const { id, senhaAntiga, novaSenha } = body;
  return this.usuarioService.alterarSenha(id, senhaAntiga, novaSenha);
}

}
