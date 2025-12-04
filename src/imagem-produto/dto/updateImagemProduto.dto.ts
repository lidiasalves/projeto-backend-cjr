/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateImagemProdutoDto } from './createImagemProduto.dto';

export class UpdateImagemProdutoDto extends PartialType(CreateImagemProdutoDto) {}
