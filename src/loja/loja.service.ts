import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  create(createLojaDto: CreateLojaDto) {
    return this.prisma.loja.create({
      data: {
        nome: createLojaDto.nome,
        descricao: createLojaDto.descricao || '',
        logo_url: createLojaDto.logo_url || '',
        banner_url: createLojaDto.banner_url || '',
        sticker_url: createLojaDto.sticker_url || null,
        UsuarioId: createLojaDto.UsuarioId,
        CategoriaId: createLojaDto.CategoriaId,
      },
    });
  }

  findAll() {
    return this.prisma.loja.findMany({
      include: {
        usuario: true,
        categoria: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.loja.findUnique({
      where: { id },
      include: {
        usuario: true,
        categoria: true,
        produtos: true,
        avaliacoes: true,
      },
    });
  }

  update(id: number, updateLojaDto: UpdateLojaDto) {
    return this.prisma.loja.update({
      where: { id },
      data: updateLojaDto,
    });
  }

  remove(id: number) {
    return this.prisma.loja.delete({
      where: { id },
    });
  }
}
