import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoProdutoDto } from './create-avaliacaoproduto.dto';

export class UpdateAvaliacaoProdutoDto extends PartialType(CreateAvaliacaoProdutoDto) {}