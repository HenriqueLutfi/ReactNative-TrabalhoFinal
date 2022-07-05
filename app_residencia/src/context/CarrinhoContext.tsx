import React, { createContext, useState } from 'react';
import Realm from 'realm';

export const CarrinhoContext = createContext({});

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
  name: 'Produto',
  properties: {
    id_produto: { type: 'int', default: 0 },
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
  },
};

let realm_carrinho = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

export function CarrinhoProvider({ children }) {
  const listarProdutos = () => {
    return realm_carrinho.objects('Produto');
  };

  const contarQtdProdutos = () => {
    return realm_carrinho.objects('Produto').length;
  };

  const [isFetching, setIsFetching] = useState(false);

  const adicionarProduto = (
    // _sku: string,
    _nome: string,
    _descricao: string,
    _preco: number,
    _imagem: string,
  ) => {
    console.log(_nome);
    const ultimoProdutoCadastrado = realm_carrinho
      .objects('Produto')
      .sorted('id_produto', true)[0];
    const ultimoIdCadastrado =
      ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
    const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

    realm_carrinho.write(() => {
      const produto = realm_carrinho.create('Produto', {
        id_produto: proximoId,
        // sku: _sku,
        nome_produto: _nome,
        descricao_produto: _descricao,
        preco_produto: _preco,
        imagem_produto: _imagem,
      });
    });
    // console.log(_nome)
    setIsFetching(true)
    console.log(JSON.stringify(listarProdutos()));
  };

  const removerProduto = produto => {
    realm_carrinho.write(() => {
      realm_carrinho.delete(produto);
    });
    setIsFetching(true)
    console.log(JSON.stringify(listarProdutos()));
  };

  const removerItemCarrinho = _id => {
    realm_carrinho.write(() => {
      realm_carrinho.delete(
        realm_carrinho
          .objects('Produto')
          .filter(produto => produto.id_produto == _id),
      );
    });
  };
  const LimparCarrinho = () => {
    var i = 1;
    while (realm_carrinho.objects('Produto').length > 0) {
      realm_carrinho.write(() => {
        realm_carrinho.delete(
          realm_carrinho
            .objects('Produto')
            .filter(produto => produto.id_produto == i),
        );
      });
      i++
    }
    setIsFetching(true)
  };

  return (
    <CarrinhoContext.Provider
      value={{
        listarProdutos,
        contarQtdProdutos,
        adicionarProduto,
        removerProduto,
        removerItemCarrinho,
        LimparCarrinho,
        isFetching,
        setIsFetching
      }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
