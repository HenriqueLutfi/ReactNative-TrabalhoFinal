import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { styles } from './styles';
import { ButtonAddCart } from '../ButtonAddCart/ButtonAddCart';
import { useNavigation } from '@react-navigation/native';
import Produto from '../../pages/Produto'
import { ProdutoType } from '../../models/ProdutoType';





function ProdutosCard(produto: ProdutoType) {
  console.log(produto);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({
          name: 'ProdutoScreen',
          params: {
            id_produto: produto.idProduto,
            // sku: produto.sku,
            nome_produto: produto.nomeProduto,
            descricao_produto: produto.descricaoProduto,
            preco_produto: produto.precoProduto,
            imagem_produto: produto.imagemProduto,
          },
        });
      }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: produto.imagemProduto,
            }}
          />
          <Text style={styles.text}>{produto.nomeProduto}</Text>
          <Text style={styles.text}>{produto.precoProduto}</Text>
          <Text style={styles.text}>{produto.descricaoProduto}</Text>
          {/* <ButtonAddCart produto={produto}/> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ProdutosCard;
