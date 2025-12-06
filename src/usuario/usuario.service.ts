/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcryptjs';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/usuario/dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({ where: { email } });
  }

  // Helper: campos básicos que retornamos
  private readonly userSelect = {
    id: true,
    username: true,
    nome: true,
    email: true,
    foto_perfil_url: true,
    criado_em: true,
    atualizado_em: true,
  };

  // CREATE
  async create(data: CreateUsuarioDto) {
    // verificar email
    const emailExist = await this.prisma.usuario.findUnique({
      where: { email: data.email },
    });
    if (emailExist) {
      throw new BadRequestException('Email já está em uso.');
    }

    // verificar username
    const userExist = await this.prisma.usuario.findUnique({
      where: { username: data.username },
    });
    if (userExist) {
      throw new BadRequestException('Username já está em uso.');
    }

    // hash da senha
    const senhaHash = await bcrypt.hash(data.senha, 10);

    const created = await this.prisma.usuario.create({
      data: {
        username: data.username,
        nome: data.nome,
        email: data.email,
        senha_hash: senhaHash,
        foto_perfil_url: data.foto_perfil_url ?? null,
      },
      select: this.userSelect,
    });

    return created;
  }

  // READ ALL
  async findALL() {
    return await this.prisma.usuario.findMany({
      select: this.userSelect,
      orderBy: { criado_em: 'desc' },
    });
  }

  // GET BY ID (Modificado para trazer TUDO para o perfil)
async getById(id: number) {
  const usuario = await this.prisma.usuario.findUnique({
    where: { id },
    // Ao invés de usar só o userSelect básico, expandimos ele:
    select: {
      ...this.userSelect, // Traz id, nome, email...
      
      // Traz as Lojas do usuário
      lojas: {
        include: {
          produtos: true, // E dentro da loja, traz os produtos (para o carrossel de produtos)
        }
      },

      // Traz as Avaliações que ele fez
      avaliacoes_loja: {
        include: {
          // CORREÇÃO CRÍTICA: Precisamos incluir a loja para pegar o ID e o Nome
          loja: {
            select: {
                id: true,
                nome: true,
                logo_url: true // Para a foto da loja aparecer na aba de avaliações
            }
          },
          // Incluir o usuário (quem fez o review) para que a foto do usuário apareça no review (embora nesse contexto, seja o usuário logado)
          usuario: true 
        }
      }
    },
  });

  if (!usuario) {
    throw new NotFoundException('Usuário não existe!');
  }
  return usuario;
}

  // UPDATE
  async update(id: number, data: UpdateUsuarioDto) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuarioExiste) {
      throw new NotFoundException('Usuário não existe!');
    }

    if (data.email && data.email !== usuarioExiste.email) {
      const emailExist = await this.prisma.usuario.findUnique({
        where: { email: data.email },
      });
      if (emailExist) {
        throw new BadRequestException('Email já está em uso.');
      }
    }

    if (data.username && data.username !== usuarioExiste.username) {
      const userExist = await this.prisma.usuario.findUnique({
        where: { username: data.username },
      });
      if (userExist) {
        throw new BadRequestException('Username já está em uso.');
      }
    }

    const payload: any = {};

    if (data.nome !== undefined) payload.nome = data.nome;
    if (data.email !== undefined) payload.email = data.email;
    if (data.username !== undefined) payload.username = data.username;
    if (data.foto_perfil_url !== undefined) {
      payload.foto_perfil_url = data.foto_perfil_url;
    }

    if (data.senha) {
      const senhaHash = await bcrypt.hash(data.senha, 10);
      payload.senha_hash = senhaHash;
    }

    const updated = await this.prisma.usuario.update({
      where: { id },
      data: payload,
      select: this.userSelect,
    });

    return updated;
  }

  // DELETE
  async delete(id: number) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuarioExiste) {
      throw new NotFoundException('Usuário não existe!');
    }
    const deleted = await this.prisma.usuario.delete({
      where: { id },
      select: this.userSelect,
    });
    return deleted;
  }

  async resetFoto(id: number) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuarioExiste) {
      throw new NotFoundException('Usuário não existe!');
    }

    const updated = await this.prisma.usuario.update({
      where: { id },
      data: { foto_perfil_url: null },
      select: this.userSelect,
    });

    return updated;
  }

  async alterarSenha(id: number, senhaAntiga: string, novaSenha: string) {
    const user = await this.prisma.usuario.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const senhaCorreta = await bcrypt.compare(senhaAntiga, user.senha_hash);

    if (!senhaCorreta) {
      throw new BadRequestException('Senha antiga incorreta');
    }

    const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

    await this.prisma.usuario.update({
      where: { id },
      data: { senha_hash: novaSenhaHash },
    });

    return { message: 'Senha alterada com sucesso!' };
  }
}