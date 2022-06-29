import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {styles} from './styles';


function ProdutosCard({produto}) {
  console.log( produto)
  
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
      </View>
    </View>
  );
}
export default ProdutosCard;
