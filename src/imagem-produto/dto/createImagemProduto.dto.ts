import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateImagemProdutoDto {
  @IsString()
  @IsNotEmpty()
  url_imagem: string;

  @IsInt()
  @Min(0)
  ordem_exibicao: number;

  @IsInt()
  ProdutoId: number;
}
