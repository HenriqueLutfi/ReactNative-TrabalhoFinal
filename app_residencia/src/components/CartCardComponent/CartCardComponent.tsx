import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {styles} from './styles';
import {ButtonAddCart} from '../ButtonAddCart/ButtonAddCart';
import {ButtonRemoveCart} from '../ButtonRemoveCart/ButtonRemoveCart';
import {CarrinhoContext} from '../../context/CarrinhoContext';
function CartCard({produto}) {
  console.log('aqui' + produto);
  const [valor, setValor] = useState();
  const {removerItemProduto} = useContext(CarrinhoContext);

  // useEffect(() => {
  //   FormatValor();
  // }, []);

  

  // function FormatValor() {
  //   var formatter = new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD',
  //   });
  //   setValor(formatter.format(produto.preco_produto));
  // }

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
            onPress={() => removerItemProduto(produto.id_produto)}>
            <Icon name="trash" color="#fff700" type="font-awesome" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default CartCard;
