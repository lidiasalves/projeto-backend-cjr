import { Injectable } from '@nestjs/common';
import { CategoriaDto } from './dto/categoria.dto';
import { PrismaService } from 'src/database/prisma.service';
@Injectable()
export class CategoriaService {
  constructor(private prisma: PrismaService) {}
  // Create
  async create(data: CategoriaDto) {
    const categoriaPaiId = data.categoriaPaiId;

    if (categoriaPaiId) {
      if (categoriaPaiId === data.id) {
        throw new Error('Uma categoria não pode ser subcategoria dela mesma');
      }
      const categoriaPai = await this.prisma.categoria.findUnique({
        where: {
          id: categoriaPaiId,
        },
      });
      if (!categoriaPai) {
        throw new Error('Categoria pai não encontrada');
      }
    }

    const categoria = await this.prisma.categoria.create({
      data,
    });
    return categoria;
  }

  // READ

  async findAll() {
    return await this.prisma.categoria.findMany({
      include: {
        categoria_pai: true,
        subcategorias: true,
      },
    });
  }

  // UPdate

  async update(id: number, data: CategoriaDto) {
    const categoriaPaiId = data.categoriaPaiId;
    const categoriaExiste = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExiste) {
      throw new Error('Categoria não encontrada');
    }

    if (categoriaPaiId) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const categoriaPai = await this.prisma.categoria.findUnique({
        where: {
          id: categoriaPaiId,
        },
      });
    }

    if (!categoriaPaiId) {
      throw new Error('Categoria pai não encontrada');
    }

    if (categoriaPaiId == id) {
      throw new Error('Uma categoria não pode ser subcategoria dela mesma');
    }

    return await this.prisma.categoria.update({
      data,
      where: {
        id,
      },
    });
  }

  // Delete

  async delete(id: number) {
    const categoriaExiste = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExiste) {
      throw new Error('Categoria não encontrada');
    }

    return await this.prisma.categoria.delete({
      where: {
        id,
      },
    });
  }

  async getById(id: number) {
    const categoriaExiste = await this.prisma.categoria.findUnique({
      where: {
        id,
      },
    });

    if (!categoriaExiste) {
      throw new Error('Categoria não encontrada');
    }
    return categoriaExiste;
  }
}
