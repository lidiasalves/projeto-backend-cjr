import { PrismaService } from 'src/database/prisma.service';
import { LojaDto } from './dto/loja.dto';
export declare class LojasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: LojaDto): Promise<{
        nome: string;
        descricao: string;
        logo_url: string;
        banner_url: string;
        sticker_url: string;
        criado_em: Date;
        atualizado_em: Date;
        UsuarioId: number;
        id: number;
    }>;
    findAll(): Promise<{
        nome: string;
        descricao: string;
        logo_url: string;
        banner_url: string;
        sticker_url: string;
        criado_em: Date;
        atualizado_em: Date;
        UsuarioId: number;
        id: number;
    }[]>;
    update(id: number, data: LojaDto): Promise<void>;
    delete(id: number): Promise<{
        nome: string;
        descricao: string;
        logo_url: string;
        banner_url: string;
        sticker_url: string;
        criado_em: Date;
        atualizado_em: Date;
        UsuarioId: number;
        id: number;
    }>;
    getById(id: number): Promise<{
        nome: string;
        descricao: string;
        logo_url: string;
        banner_url: string;
        sticker_url: string;
        criado_em: Date;
        atualizado_em: Date;
        UsuarioId: number;
        id: number;
    }>;
}
