/* eslint-disable @typescript-eslint/no-unsafe-call */
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
  async findByEmail(email: string) {
  return this.prisma.usuario.findUnique({ where: { email } });
}

  constructor(private prisma: PrismaService) {}

  // Helper: campos que retornamos (sem senha_hash)
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

    // hash da senha (data.senha)
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

  // GET BY ID
  async getById(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: this.userSelect,
    });
    if (!usuario) {
      throw new NotFoundException('Usuário não existe!');
    }
    return usuario;
  }

  // UPDATE (aceita UpdateUsuarioDto)
  async update(id: number, data: UpdateUsuarioDto) {
    const usuarioExiste = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuarioExiste) {
      throw new NotFoundException('Usuário não existe!');
    }

    // se trocar email, verificar duplicado
    if (data.email && data.email !== usuarioExiste.email) {
      const emailExist = await this.prisma.usuario.findUnique({
        where: { email: data.email },
      });
      if (emailExist) {
        throw new BadRequestException('Email já está em uso.');
      }
    }

    // se trocar username, verificar duplicado
    if (data.username && data.username !== usuarioExiste.username) {
      const userExist = await this.prisma.usuario.findUnique({
        where: { username: data.username },
      });
      if (userExist) {
        throw new BadRequestException('Username já está em uso.');
      }
    }

    // montar payload de update
    const payload: any = {};

    if (data.nome !== undefined) payload.nome = data.nome;
    if (data.email !== undefined) payload.email = data.email;
    if (data.username !== undefined) payload.username = data.username;
    // Só atualiza a foto SE vier algo do front
    if (data.foto_perfil_url !== undefined) {
      payload.foto_perfil_url = data.foto_perfil_url;
    }

    // se senha foi fornecida no update (campo 'senha'), re-hash e salva em senha_hash
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

  // Verifica a senha antiga
  const senhaCorreta = await bcrypt.compare(senhaAntiga, user.senha_hash);

  if (!senhaCorreta) {
    throw new BadRequestException('Senha antiga incorreta');
  }

  // Gera hash da nova senha
  const novaSenhaHash = await bcrypt.hash(novaSenha, 10);

  // Atualiza no banco
  await this.prisma.usuario.update({
    where: { id },
    data: { senha_hash: novaSenhaHash },
  });

  return { message: 'Senha alterada com sucesso!' };
}


}
