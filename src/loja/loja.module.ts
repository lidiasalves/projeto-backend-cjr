import { Module } from '@nestjs/common';
import { LojasService } from 'src/lojas/lojas.service';
import { LojaController } from './loja.controller';
import { PrismaService } from '../database/prisma.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    providers: [LojasService, PrismaService],
    controllers: [LojaController],
    imports: [PrismaModule],

})
export class LojaModule {}




