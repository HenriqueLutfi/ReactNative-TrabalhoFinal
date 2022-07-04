import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {AutenticacaoProvider} from './context/AutenticacaoContext';
import {LoadingProvider} from './context/LoadingContext';
import {ChosenCategoryProvider} from './context/ChosenCategory';
import {ProdutosProvider} from './context/ProdutosContext';
import {CategoriasProvider} from './context/CategoriasContext';
import {CartProvider} from './context/CartContext';
import {CarrinhoProvider} from './context/CarrinhoContext';
import {FavoritosProvider} from './context/FavoritosContext';

export default () => {
  return (
    <AutenticacaoProvider>
      <LoadingProvider>
        <ChosenCategoryProvider>
          <CategoriasProvider>
            <ProdutosProvider>
              <CartProvider>
                <CarrinhoProvider>
                  {/* <FavoritosProvider> */}
                    <Routes />
                  {/* </FavoritosProvider> */}
                </CarrinhoProvider>
              </CartProvider>
            </ProdutosProvider>
          </CategoriasProvider>
        </ChosenCategoryProvider>
      </LoadingProvider>
    </AutenticacaoProvider>
  );
};
