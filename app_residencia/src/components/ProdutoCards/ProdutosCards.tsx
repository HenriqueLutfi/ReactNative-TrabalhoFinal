import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {styles} from './styles';
import {ButtonAddCart} from '../ButtonAddCart/ButtonAddCart';

function ProdutosCard({produto}) {
  console.log(produto);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: produto.imagemProduto,
          }}
        />
        <Text style={styles.text}>{produto.nomeProduto}</Text>
        <Text style={styles.text}>R${produto.precoProduto},00</Text>
        {/* <Text style={styles.text}>{produto.descricaoProduto}</Text> */}
        {/* <ButtonAddCart produto={produto}/> */}
      </View>
    </View>
  );
}
export default ProdutosCard;
