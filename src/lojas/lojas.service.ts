import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { LojaDto } from './dto/loja.dto';

@Injectable()
export class LojasService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: LojaDto) {
    return this.prisma.loja.create({ data });
  }

  async findAll() {
    return this.prisma.loja.findMany();
  }

  async update(id: number, data:LojaDto){
    const lojaExists = await this.prisma.loja.findUnique({
        where: {
            id,
        }
    });

    if(!lojaExists){
        throw new NotFoundException('Loja não encontrada.')
    }

    await this.prisma.loja.update({
        data,
        where: {
            id,
        }
    })
  }

  async delete(id: number){
    const lojaExists = await this.prisma.loja.findUnique({
        where: {
            id,
        }
    });

    if(!lojaExists){
        throw new Error('Loja não encontrada.');
    }


    return await this.prisma.loja.delete({
        where: {
            id,
        }
    });

  }

  async getById(id: number){
    const lojaExists = await this.prisma.loja.findUnique({
        where: {
            id,
        }
    });

    if(!lojaExists){
        throw new Error('Loja não encontrada.');
    }

    return lojaExists;
  }
}
