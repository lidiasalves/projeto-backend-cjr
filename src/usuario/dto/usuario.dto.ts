export type UsuarioDto = {
  id?: number;
  username: string;
  nome: string;
  senha_hash: string;
  email: string;
  foto_perfil_url?: string;
  criado_em: Date;
  atualizado_em: Date;
};
