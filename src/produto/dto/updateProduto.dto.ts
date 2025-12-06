import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './createProduto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {}
