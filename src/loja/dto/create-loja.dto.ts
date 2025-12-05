import { IsString, IsNotEmpty, IsOptional, IsInt, IsUrl } from 'class-validator';

export class CreateLojaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  // Validação de URL é opcional, mas recomendada se forem links
  @IsString() 
  @IsOptional()
  logo_url?: string;

  @IsString()
  @IsOptional()
  banner_url?: string;

  @IsString()
  @IsOptional()
  sticker_url?: string;

  // Campos de relacionamento OBRIGATÓRIOS
  // Uma loja precisa ter um dono (Usuario) e uma categoria
  @IsInt()
  @IsNotEmpty()
  UsuarioId: number;

  @IsInt()
  @IsNotEmpty()
  CategoriaId: number;
}