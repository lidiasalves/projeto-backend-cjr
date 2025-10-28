import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  //CREATE
  async create(data: UsuarioDto) {
    const usuario = await this.prisma.usuario.create({
      data,
    });
    return usuario;
  }

  //READ
  async findALL() {
    return await this.prisma.usuario.findMany();
  }

  //UPTATE
  async update(id: number, data: UsuarioDto) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!usuarioExiste) {
      throw new Error('Usuário não existe!');
    }
    return await this.prisma.usuario.update({
      data,
      where: {
        id,
      },
    });
  }
  // DELETE
  async delete(id: number) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!usuarioExiste) {
      throw new Error('Usuário não existe!');
    }
    return await this.prisma.usuario.delete({
      where: {
        id,
      },
    });
  }
  async getById(id: number) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
    if (!usuarioExiste) {
      throw new Error('Usuário não existe!');
    }
    return usuarioExiste;
  }
}
