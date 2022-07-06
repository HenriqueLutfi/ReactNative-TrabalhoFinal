import React, { createContext, useState } from 'react';
import { UsuarioType } from '../models/UsuarioType';
import { LoginService } from '../services/LoginService';

export const AutenticacaoContext = createContext({});

export const AutenticacaoProvider = ({ children }) => {
  const [usuario, setUsuario] = useState<UsuarioType>();

  const login = async (email, senha) => {
    const respostaServiceLogin = await LoginService(email, senha);

    if (!respostaServiceLogin) {
      return false;
    } else {
      setUsuario({
        id: respostaServiceLogin?.id,
        name: respostaServiceLogin?.name,
        fotoPerfil: respostaServiceLogin?.foto_perfil,
        email: respostaServiceLogin?.email,
        token: respostaServiceLogin?.token,
      });
      return true;
    }
  };
  return (
    <AutenticacaoContext.Provider
      value={{
        login,
        usuario,
        setUsuario
      }}>
      {children}
    </AutenticacaoContext.Provider>
  );
};
