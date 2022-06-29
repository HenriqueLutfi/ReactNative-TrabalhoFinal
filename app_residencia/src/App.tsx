import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import {AutenticacaoProvider} from './context/AutenticacaoContext';

export default () => {
  // return(
  //   <Home/>
  // )
  return (
    //posso ter mais de um contexto englobando o routes
    <AutenticacaoProvider>
      <Routes />
    </AutenticacaoProvider>
  );
};
