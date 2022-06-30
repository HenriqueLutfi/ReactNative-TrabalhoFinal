import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import { Card } from 'react-native-elements';
import {styles} from './styles';
import { ButtonAddCart } from '../ButtonAddCart/ButtonAddCart';
import { ButtonRemoveCart } from '../ButtonRemoveCart/ButtonRemoveCart';


function CartCard({produto}) {
  console.log(produto)
  
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Image
          style={styles.image}
          source={{
            uri: produto.imagemProduto,
          }}
        />
        <Text style={styles.text}>{produto.nomeProduto}</Text>
        <ButtonAddCart produto={produto}/>
        <ButtonRemoveCart produto={produto}/>
      </Card>
    </View>
  );
}
export default CartCard;
