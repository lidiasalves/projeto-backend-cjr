/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer/types/decorators';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsOptional()
  descricao: string;

  @IsNumber()
  @Type(() => Number)
  preco: number;

  @IsInt()
  @Min(0)
  estoque: number;

  @IsInt()
  LojaId: number;
  

  @IsInt()
  @Type(() => Number)
  CategoriaId: number;
}
