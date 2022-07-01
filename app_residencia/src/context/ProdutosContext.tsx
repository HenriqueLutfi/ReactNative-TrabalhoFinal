import React, {createContext, useState} from 'react';
import {ProdutoType} from '../models/ProdutoType';

export const ProdutosContext = createContext({});

export const ProdutosProvider = ({children}) => {
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);
  return (
    <ProdutosContext.Provider
      value={{
        produtos,
        setProdutos,
      }}>
      {children}
    </ProdutosContext.Provider>
  );
};
