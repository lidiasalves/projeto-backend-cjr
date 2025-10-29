import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { PrismaService } from '../database/prisma.service';
import type { Usuario } from '@prisma/client';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  //CREATE
  async create(data: UsuarioDto): Promise<Usuario> {
    const usuario = await this.prisma.usuario.create({ data });
    return usuario;
  }

  //READ
  async findALL(): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany();
  }

  //UPTATE
  async update(id: number, data: UsuarioDto): Promise<Usuario> {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuarioExiste) throw new NotFoundException('Usuário não existe!');
    return await this.prisma.usuario.update({
      data,
      where: { id },
    });
  }
  // DELETE
  async delete(id: number): Promise<Usuario> {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuarioExiste) throw new NotFoundException('Usuário não existe!');
    return await this.prisma.usuario.delete({
      where: { id },
    });
  }
  async getById(id: number): Promise<Usuario> {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuarioExiste) throw new NotFoundException('Usuário não existe!');
    return usuarioExiste;
  }
}
