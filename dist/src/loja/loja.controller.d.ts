import * as lojaDto from 'src/lojas/dto/loja.dto';
import { LojasService } from 'src/lojas/lojas.service';
export declare class LojaController {
    private readonly lojaService;
    constructor(lojaService: LojasService);
    create(data: lojaDto.LojaDto): Promise<{
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
    update(id: string, data: lojaDto.LojaDto): Promise<void>;
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
