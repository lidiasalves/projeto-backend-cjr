/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() data: CreateUsuarioDto) {
    return this.usuarioService.create(data);
  }

  @Get()
  async findAll() {
    return this.usuarioService.findALL();
  }

  @Get(':id')
  async getByID(@Param('id') id: number) {
    return this.usuarioService.getById(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UpdateUsuarioDto) {
    return this.usuarioService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.usuarioService.delete(Number(id));
  }
}
