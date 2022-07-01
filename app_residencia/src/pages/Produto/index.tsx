import React, {useContext} from 'react';
import {
  ViewBase,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import {ButtonAddCart} from '../../components/ButtonAddCart/ButtonAddCart';

const Produto = ({route, navigation}) => {
  const {
    id_produto,
    sku,
    nome_produto,
    descricao_produto,
    preco_produto,
    imagem_produto,
  } = route.params;
  const {adicionarProduto} = useContext(CarrinhoContext);

  //   _sku: string,
  //     _nome: string,
  //     _descricao: string,
  //     _preco: number,
  //     _image: string,
  const handleAddProduto = () => {
    
    adicionarProduto(
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto,
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_imagem}>
        <Text></Text>
      </View>
      <View style={styles.container_produto}>
        <Text style={styles.colorText}>{nome_produto}</Text>
        <Text>{nome_produto}</Text>
        <TouchableOpacity onPress={() => handleAddProduto()}>
          <Text style={styles.colorText}>Comprar</Text>
        </TouchableOpacity>
        {/* <ButtonAddCart produto={route}/> */}
        <TouchableOpacity>
          <Text>Favoritar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container_imagem: {
    width: '50%',
  },
  container_produto: {
    width: '50%',
  },
  colorText: {
    color: '#fff700',
  },
});
export default Produto;
