import React, {useContext} from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {styles} from './styles';
import {CarrinhoContext} from '../../context/CarrinhoContext';
function FavoritosCard({produto}) {
  console.log('aqui' + produto);

  const {removerItemFavoritos} = useContext(CarrinhoContext);

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Image
          style={styles.image}
          source={{
            uri: produto.imagem_produto,
          }}
        />
        <Text style={styles.text}>{produto.nome_produto}</Text>
        <Text style={styles.text}>{produto.preco_produto}</Text>
        <Text style={styles.text}>{produto.descricao_produto}</Text>
        <TouchableOpacity
          onPress={() => removerItemFavoritos(produto.id_produto)}>
          {/* <TouchableOpacity onPress={() => removerProduto(produto)}> */}
          <Icon name="trash" color="#fff700" type="font-awesome" size={36} />
        </TouchableOpacity>
        {/* <ButtonAddCart produto={produto}/> */}
        {/* <ButtonRemoveCart produto={produto}/> */}
      </Card>
    </View>
  );
}
export default FavoritosCard;
