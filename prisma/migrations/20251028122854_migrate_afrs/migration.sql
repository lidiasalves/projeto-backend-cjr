-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "senha_hash" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "foto_perfil_url" VARCHAR(255),
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loja" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "logo_url" VARCHAR(255),
    "banner_url" VARCHAR(255),
    "sticker_url" VARCHAR(255),
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "UsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" TEXT,
    "preco" DECIMAL(10,2) NOT NULL,
    "estoque" INTEGER NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "LojaId" INTEGER NOT NULL,
    "CategoriaId" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagens_Produto" (
    "id" SERIAL NOT NULL,
    "url_imagem" VARCHAR(255) NOT NULL,
    "ordem_exibicao" INTEGER NOT NULL,
    "ProdutoId" INTEGER NOT NULL,

    CONSTRAINT "Imagens_Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "categoria_pai_id" INTEGER,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacoes_Loja" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "LojaId" INTEGER NOT NULL,
    "UsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Avaliacoes_Loja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avalicoes_Produto" (
    "id" SERIAL NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "ProdutoId" INTEGER NOT NULL,

    CONSTRAINT "Avalicoes_Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario_Avaliacao" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "AvaliacaoId" INTEGER,
    "AvaliacaoProdutoId" INTEGER,
    "UsuarioId" INTEGER NOT NULL,

    CONSTRAINT "Comentario_Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Loja" ADD CONSTRAINT "Loja_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_LojaId_fkey" FOREIGN KEY ("LojaId") REFERENCES "Loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_CategoriaId_fkey" FOREIGN KEY ("CategoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagens_Produto" ADD CONSTRAINT "Imagens_Produto_ProdutoId_fkey" FOREIGN KEY ("ProdutoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_categoria_pai_id_fkey" FOREIGN KEY ("categoria_pai_id") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacoes_Loja" ADD CONSTRAINT "Avaliacoes_Loja_LojaId_fkey" FOREIGN KEY ("LojaId") REFERENCES "Loja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacoes_Loja" ADD CONSTRAINT "Avaliacoes_Loja_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avalicoes_Produto" ADD CONSTRAINT "Avalicoes_Produto_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avalicoes_Produto" ADD CONSTRAINT "Avalicoes_Produto_ProdutoId_fkey" FOREIGN KEY ("ProdutoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario_Avaliacao" ADD CONSTRAINT "Comentario_Avaliacao_AvaliacaoId_fkey" FOREIGN KEY ("AvaliacaoId") REFERENCES "Avaliacoes_Loja"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario_Avaliacao" ADD CONSTRAINT "Comentario_Avaliacao_AvaliacaoProdutoId_fkey" FOREIGN KEY ("AvaliacaoProdutoId") REFERENCES "Avalicoes_Produto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario_Avaliacao" ADD CONSTRAINT "Comentario_Avaliacao_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
