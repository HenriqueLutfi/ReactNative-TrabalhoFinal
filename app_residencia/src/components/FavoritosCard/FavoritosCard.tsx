import React, {useContext} from 'react';
import {TouchableOpacity, Image, Text, View, Alert} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {styles} from './styles';
import {CarrinhoContext} from '../../context/CarrinhoContext';
function FavoritosCard({produto}) {
  console.log('aqui' + produto);

  const {removerItemFavoritos} = useContext(CarrinhoContext);
  function showAlert() {
    Alert.alert('Favoritos', 'Item removido dos Favoritos', [
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
            onPress={() => {removerItemFavoritos(produto.id_produto)
              showAlert()}}>
            <Icon name="trash" color="#fff700" type="font-awesome" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default FavoritosCard;
