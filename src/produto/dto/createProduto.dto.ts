/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao: string;

  @IsNumber()
  preco: number;

  @IsInt()
  @Min(0)
  estoque: number;

  @IsInt()
  LojaId: number;

  @IsInt()
  CategoriaId: number;
}
