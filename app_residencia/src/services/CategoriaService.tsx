import React, {useContext,useState} from 'react';
import AxiosInstance from '../api/AxiosInstance';
import {AutenticacaoContext} from '../context/AutenticacaoContext';
import {CategoriaType} from '../models/CategoriaType';

const {usuario} = useContext(AutenticacaoContext);
const CategoriaService = async () => {
  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  AxiosInstance.get(`/categoria`, {
    headers: {Authorization: `Bearer ${usuario.token}`},
  })
    .then(result => {
      console.log('dados das categorias: ' + JSON.stringify(result.data));
      setCategoria(result.data);
      return categoria;
    })
    .catch(error => {
      console.log(
        'erro ao carregar a lista de categorias - ' + JSON.stringify(error),
      );
      return null;
    });
};

export default CategoriaService;
