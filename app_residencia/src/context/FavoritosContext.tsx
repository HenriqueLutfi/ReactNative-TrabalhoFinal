import React, {createContext, useState} from 'react';
import Realm from 'realm';

export const FavoritosContext = createContext({});

export const FavoritosProvider = ({ children }) => {
const [favoritos, setFavoritos] = useState();

const addFave = (props: any) => {
  const aux: any = favoritos
  aux.push(props)
  setFavoritos(aux)
  console.log(favoritos);
}

// BANCO EMBARCADO
// class FavoritosSchema extends Realm.Object {}
// FavoritosSchema.schema = {
//   name: 'Favoritos',
//   properties: {
//     id_produto: {type: 'int', default: 0},
//     sku: 'string',
//     nome_produto: 'string',
//     descricao_produto: 'string',
//     preco_produto: 'double',
//     imagem_produto: 'string',
//   },
// };

// let realm_favoritos = new Realm({schema: [FavoritosSchema], schemaVersion: 1});

// export function FavoritosProvider({children}) {
//   const listarProdutos = () => {
//     return realm_favoritos.objects('Favoritos');
//   };

//   const contarQtdProdutos = () => {
//     return realm_favoritos.objects('Favoritos').length;
//   };

//   const adicionarProdutoFav = (
//     _sku: string,
//     _nome: string,
//     _descricao: string,
//     _preco: number,
//     _imagem: string,
//   ) => {
//     console.log(_nome);
//     const ultimoProdutoCadastrado = realm_favoritos
//       .objects('Favoritos')
//       .sorted('id_produto', true)[0];
//     const ultimoIdCadastrado =
//       ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
//     const proximoId = ultimoIdCadastrado == null ? 1 : ultimoIdCadastrado + 1;

//     realm_favoritos.write(() => {
//       const produto = realm_favoritos.create('Favoritos', {
//         id_produto: proximoId,
//         sku: _sku,
//         nome_produto: _nome,
//         descricao_produto: _descricao,
//         preco_produto: _preco,
//         imagem_produto: _imagem,
//       });
//     });
//     // console.log(_nome)
//     console.log(JSON.stringify(listarProdutos()));
//   };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
        addFave,
        //com banco embarcado
        // listarProdutos,
        // contarQtdProdutos,
        // adicionarProdutoFav,
      }}>
      {children}
    </FavoritosContext.Provider>
  );
}
