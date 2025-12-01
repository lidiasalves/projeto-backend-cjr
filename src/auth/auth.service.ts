/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly usuarioService: UsuarioService) {}

  async validateUser(email: string, senha: string) {
    const user = await this.usuarioService.findByEmail(email);
    if (!user) return null;

    const passwordValid = await bcrypt.compare(senha, user.senha_hash);
    if (!passwordValid) return null;

    return user;
  }

  async login(user: any) {
    const token = jwt.sign(
      { id: user.id },
      'postgresql://postgres:cjr25@localhost:5432/postgres', // depois botamos env
      { expiresIn: '7d' }
    );

    return {
      id: user.id,
      username: user.username,
      email: user.email,
      nome: user.nome,
      foto_perfil_url: user.foto_perfil_url,
      token,
    };
  }
}
