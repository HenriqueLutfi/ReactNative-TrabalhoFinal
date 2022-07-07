import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Image, Text, View, Alert} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {styles} from './styles';
import {ButtonAddCart} from '../ButtonAddCart/ButtonAddCart';
import {ButtonRemoveCart} from '../ButtonRemoveCart/ButtonRemoveCart';
import {CarrinhoContext} from '../../context/CarrinhoContext';
function CartCard({produto}) {
  console.log('aqui' + produto);
  const [valor, setValor] = useState();
  const {removerItemProduto} = useContext(CarrinhoContext);

  function showAlert() {
    Alert.alert('Carrinho', 'produto foi excluido do carrinho', [
      {text: 'OK', onPress: () => console.log('')},
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <View style={styles.viewImage}>
          <Image
            style={styles.image}
            source={{
              uri: produto.imagem_produto,
            }}
          />
        </View>
        <View style={styles.textos}>
          <Text style={styles.text}>{produto.nome_produto}</Text>
          <Text style={styles.textDescricao}>{produto.descricao_produto}</Text>
        </View>
        <View style={styles.remover}>
          <Text style={styles.text}>R${produto.preco_produto},00</Text>
          <TouchableOpacity
            onPress={() => {
              removerItemProduto(produto.id_produto);
              showAlert();
            }}>
            <Icon name="trash" color="#f0D906" type="font-awesome" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default CartCard;
