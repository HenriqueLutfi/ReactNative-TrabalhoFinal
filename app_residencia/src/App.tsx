import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Routes from './routes';
import { AutenticacaoProvider } from './context/AutenticacaoContext';
import { LoadingProvider } from './context/LoadingContext';
import { ChosenCategoryProvider } from './context/ChosenCategory';
import { ProdutosProvider } from './context/ProdutosContext';
import { CategoriasProvider } from './context/CategoriasContext';
import { CartProvider } from './context/CartContext';
import { CarrinhoProvider } from './context/CarrinhoContext';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Splash from './pages/SplashScrenn';
import splash from './assets/splash.gif'
import storewars from './assets/storewars.png';

export default () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {

  //   setTimeout(() => { setIsLoaded(true) }, 2000)
  // }, [])
  return (



    <AutenticacaoProvider>
      <LoadingProvider>
        <ChosenCategoryProvider>
          <CategoriasProvider>
            <ProdutosProvider>
              <CartProvider>
                <CarrinhoProvider>
                  <Routes />
                </CarrinhoProvider>
              </CartProvider>
            </ProdutosProvider>
          </CategoriasProvider>
        </ChosenCategoryProvider>
      </LoadingProvider>
    </AutenticacaoProvider>


  );
};
