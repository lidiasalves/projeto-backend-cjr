import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateLojaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao?: string;

  @IsString()
  @IsOptional()
  logo_url?: string;

  @IsString()
  @IsOptional()
  banner_url?: string;

  @IsString()
  @IsOptional()
  sticker_url?: string;

  @IsInt()
  @IsNotEmpty()
  UsuarioId: number;

  @IsInt()
  @IsNotEmpty()
  CategoriaId: number;
}
