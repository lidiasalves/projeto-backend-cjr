import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateAvaliacaoProdutoDto {
  @IsInt()
  @Min(1)
  @Max(5)
  nota: number;

  @IsString()
  @IsOptional()
  comentario?: string;

  @IsInt()
  @IsNotEmpty()
  ProdutoId: number;

  @IsInt()
  @IsNotEmpty()
  UsuarioId: number;
}