import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { LojaModule } from './loja/loja.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [DatabaseModule, UsuarioModule, ProdutoModule, LojaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
