/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ImagemProdutoModule } from './imagem-produto/imagemProduto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
// Removemos o PrismaService dos providers diretos e usamos o Modulo
import { DatabaseModule } from './database/database.module'; 
import { LojaModule } from './loja/loja.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { ProdutoModule } from './produto/produto.module';
@Module({
  imports: [
    DatabaseModule, // Importa o banco globalmente
    UsuarioModule,
    ImagemProdutoModule,
    CategoriaModule, 
    LojaModule,
    AvaliacaoModule,
    ProdutoModule
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService], 
  // Não precisa exportar PrismaService aqui se o DatabaseModule já faz isso
})
export class AppModule {}