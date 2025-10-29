import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import type { UsuarioDto } from './dto/usuario.dto';
import type { Usuario } from '@prisma/client';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Post()
  async create(@Body() data: UsuarioDto): Promise<Usuario> {
    return this.usuarioService.create(data);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    return this.usuarioService.findALL();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UsuarioDto,
  ): Promise<Usuario> {
    return this.usuarioService.update(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.delete(Number(id));
  }

  @Get(':id')
  async getByID(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.getById(Number(id));
  }
}
