/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ImagemProdutoModule } from './imagem-produto/imagemProduto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { PrismaService } from './database/prisma.service';
@Module({
  imports: [UsuarioModule,ImagemProdutoModule,CategoriaModule],
  controllers: [AppController,AuthController],
  providers: [AppService,AuthService,PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
