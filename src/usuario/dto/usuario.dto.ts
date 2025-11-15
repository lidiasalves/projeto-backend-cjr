export class UsuarioDto {
  id: number;
  nome: string;
  username: string;
  email: string;
  foto_perfil_url?: string;
  criado_em: Date;
  atualizado_em: Date;
}
