import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import * as lojaDto from 'src/lojas/dto/loja.dto';
import { LojasService } from 'src/lojas/lojas.service';

@Controller('loja')
export class LojaController {

    constructor(private readonly lojaService: LojasService){}

    @Post()

    async create(@Body() data: lojaDto.LojaDto) {
        return this.lojaService.create(data);
    }

    @Get()
    async findAll() {
        return this.lojaService.findAll();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: lojaDto.LojaDto) {    
        return this.lojaService.update(Number(id), data);
    }

    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.lojaService.delete(Number(id));
    }

    @Get(':id')
    async getById(@Param("id") id: number) {
        return this.lojaService.getById(Number(id));
    }

}

