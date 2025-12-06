import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoLojaDto } from './create-avaliacaoloja.dto';

export class UpdateAvaliacaoLojaDto extends PartialType(CreateAvaliacaoLojaDto) {}