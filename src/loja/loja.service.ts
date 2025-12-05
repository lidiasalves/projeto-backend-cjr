import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateLojaDto } from './dto/create-loja.dto';
import { UpdateLojaDto } from './dto/update-loja.dto';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  create(createLojaDto: CreateLojaDto) {
    return this.prisma.loja.create({
      data: createLojaDto,
    });
  }

  findAll() {
    return this.prisma.loja.findMany({
      include: {
        usuario: true,   // Traz os dados do dono da loja
        categoria: true, // Traz os dados da categoria
        // produtos: true, // Descomente se quiser trazer todos os produtos junto (pode ficar pesado)
      },
    });
  }

  findOne(id: number) {
    return this.prisma.loja.findUnique({
      where: { id },
      include: {
        usuario: true,
        categoria: true,
        produtos: true, // Ao ver uma loja específica, é legal ver os produtos dela
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