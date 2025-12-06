import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateComentarioDto {
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsInt()
  @IsNotEmpty()
  UsuarioId: number; // Quem está comentando

  // O comentário pode ser numa avaliação de loja OU de produto
  @IsInt()
  @IsOptional()
  AvaliacaoLojaId?: number;

  @IsInt()
  @IsOptional()
  AvaliacaoProdutoId?: number;
}