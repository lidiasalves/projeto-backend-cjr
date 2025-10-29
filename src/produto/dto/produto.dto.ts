export type ProdutoDto = {
  id?: number;
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
  criado_em?: Date;
  atualizado_em?: Date;
  LojaId: number;
  CategoriaId: number;
};
