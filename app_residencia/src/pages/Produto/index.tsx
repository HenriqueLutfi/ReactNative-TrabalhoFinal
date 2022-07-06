import React, {useContext} from 'react';
import {
  ViewBase,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {CartContext} from '../../context/CartContext';
import {CarrinhoContext} from '../../context/CarrinhoContext';
import {ButtonAddCart} from '../../components/ButtonAddCart/ButtonAddCart';
import {Button} from 'react-native-elements';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {FavoritosContext} from '../../context/FavoritosContext';
import {ProdutosContext} from '../../context/ProdutosContext';

const Produto = ({route, navigation}) => {
  const {
    id_produto,
    sku,
    nome_produto,
    descricao_produto,
    preco_produto,
    imagem_produto,
  } = route.params;

  const {adicionarProduto, adicionarFavorito} = useContext(CarrinhoContext);
  // const { adicionarProdutoFav } = useContext(FavoritosContext);
  const {produtos, setProdutos} = useContext(ProdutosContext);

  const handleAddProduto = () => {
    adicionarProduto(
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto,
    );
    Alert.alert('Carrinho', 'Produto adicionado ao carrinho', [
      {text: 'OK', onPress: () => console.log()},
    ]);
  };

  const handleFav = () => {
    adicionarFavorito(
      sku,
      nome_produto,
      descricao_produto,
      preco_produto,
      imagem_produto,
    );
    Alert.alert('Favoritos', 'Produto adicionado aos Favoritos', [
      {text: 'OK', onPress: () => console.log()},
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <View style={styles.headerBackContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerBackButton}>
            <View style={styles.headerBackIcon}>
              <Icon
                name="arrow-left"
                color="#fff700"
                type="font-awesome"
                size={24}
              />
            </View>
            <Text style={styles.colorText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.containerItems}>
          {/* <View style={styles.container_imagem}> */}

          {/* </View> */}
          <View style={styles.container_produto}>
            <Image
              style={styles.image}
              source={{
                uri: imagem_produto,
              }}
            />
            <Text style={styles.colorText}>{nome_produto}</Text>
            <Text style={styles.colorText}>R${preco_produto},00</Text>
            <TouchableOpacity>
              <Button
                onPress={() => handleAddProduto()}
                title="Comprar"
                titleStyle={{
                  color: '#fff700',
                }}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 2,
                  borderColor: '#fff700',
                  borderRadius: 3,
                  marginTop: 8,
                  width: '70%',
                  marginLeft: 50,
                }}
              />
            </TouchableOpacity>
            {/* <ButtonAddCart produto={route}/> */}

            <TouchableOpacity>
              <Button
                onPress={() => handleFav()}
                title="Favoritar"
                titleStyle={{
                  color: '#fff700',
                }}
                buttonStyle={{
                  backgroundColor: '#000000',
                  borderWidth: 2,
                  borderColor: '#fff700',
                  borderRadius: 3,
                  marginTop: 8,
                  width: '70%',
                  marginLeft: 50,
                }}
              />
            </TouchableOpacity>
            <View style={styles.container_starts}>
              <Text style={styles.colorText}>Avalie:</Text>
              <View style={styles.viewStar}>
                <AirbnbRating showRating={false} size={20} />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container_imagem: {
    width: 70,
  },
  container_produto: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#fff700',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },

  colorText: {
    color: '#fff700',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Starjout',
  },
  backText: {
    color: '#fff700',
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Starjout',
  },
  image: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    borderRadius: 10,
  },
  containerItems: {
    padding: 16,
  },
  container_starts: {
    width: '100%',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  viewStar: {
    alignItems: 'center',
    // width: '50%',
  },
  headerBackContainer: {
    width: '100%',
  },
  headerBackIcon: {
    width: '20%',
    justifyContent: 'center',

  },
  headerBackButton: {

    width: '60%',
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
export default Produto;
