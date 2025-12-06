import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateAvaliacaoLojaDto {
  @IsInt()
  @Min(1)
  @Max(5)
  nota: number;

  @IsString()
  @IsOptional()
  comentario?: string;

  @IsInt()
  @IsNotEmpty()
  LojaId: number;

  @IsInt()
  @IsNotEmpty()
  UsuarioId: number;
}