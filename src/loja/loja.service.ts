import { Injectable, NotFoundException } from '@nestjs/common';
import type { Loja } from '@prisma/client';
import { LojaDto } from './dto/loja.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class LojaService {
  constructor(private prisma: PrismaService) {}

  async create(data: LojaDto): Promise<Loja> {
    const loja = await this.prisma.loja.create({ data });
    return loja;
  }

  async findAll(): Promise<Loja[]> {
    const lojas = await this.prisma.loja.findMany();
    return lojas;
  }

  async update(id: number, data: LojaDto): Promise<Loja> {
    const existe = await this.prisma.loja.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Loja não existe!');
    const loja = await this.prisma.loja.update({ where: { id }, data });
    return loja;
  }

  async delete(id: number): Promise<Loja> {
    const existe = await this.prisma.loja.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Loja não existe!');
    const loja = await this.prisma.loja.delete({ where: { id } });
    return loja;
  }

  async getById(id: number): Promise<Loja> {
    const existe = await this.prisma.loja.findUnique({ where: { id } });
    if (!existe) throw new NotFoundException('Loja não existe!');
    return existe;
  }
}
