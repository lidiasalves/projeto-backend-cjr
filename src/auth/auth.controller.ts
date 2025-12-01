/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(private prisma: PrismaService) {}

  @Post('login')
  async login(@Body() body: { email: string; senha: string }) {
    const user = await this.prisma.usuario.findUnique({
      where: { email: body.email },
    });

    if (!user) {
      throw new BadRequestException('Email ou senha inválidos.');
    }

    const senhaOk = await bcrypt.compare(body.senha, user.senha_hash);
    if (!senhaOk) {
      throw new BadRequestException('Email ou senha inválidos.');
    }

    // Gerar token JWT simples
    const token = jwt.sign(
      { id: user.id },
      'postgresql://postgres:cjr25@localhost:5432/postgres', // depois colocamos em ENV
      { expiresIn: '7d' }
    );

    return {
      message: 'Login realizado com sucesso!',
      id: user.id,
      username: user.username,
      nome: user.nome,
      email: user.email,
      foto_perfil_url: user.foto_perfil_url,
      token,
    };
  }
}
