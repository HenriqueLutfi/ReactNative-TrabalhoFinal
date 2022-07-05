import React, {useEffect, useState, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  BackHandler,
  FlatList,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Text, Card, Input, Icon} from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import ProdutosCard from '../../components/ProdutoCards/ProdutosCards';
import CategoriasCard from '../../components/CategoriaCards/categoriaCard';
import {LoadingContext} from '../../context/LoadingContext';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import {CategoriasContext} from '../../context/CategoriasContext';
import {ProdutosContext} from '../../context/ProdutosContext';
import {ChosenCategoryContext} from '../../context/ChosenCategory';

const Home = ({route, navigation}) => {
  const {usuario} = useContext(AutenticacaoContext);
  const {loading, setLoading} = useContext(LoadingContext);
  const {categorias, setcategorias} = useContext(CategoriasContext);
  const {setChosenCategory} = useContext(ChosenCategoryContext);
  const {produtos, setProdutos} = useContext(ProdutosContext);
  const [busca, setBusca] = useState('');
  console.log('Usuario : ' + JSON.stringify(usuario));

  useEffect(() => {
    getDadosCategoria();
    getProdutos();
  }, []);

  useEffect(() => {
    pesquisarCategoria(busca);
  }, [busca]);

  useEffect(() => {
    pesquisarProdutos(busca);
  }, [busca]);

  useEffect(() => {
    // BackHandler.addEventListener('hardwareBackPress', () => {
    //   return true
    // })
  }, []);

  const getDadosCategoria = async () => {
    AxiosInstance.get(`/categoria`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        console.log('dados das categorias: ' + JSON.stringify(result.data));
        setcategorias(result.data);
      })
      .catch(error => {
        console.log(
          'erro ao carregar a lista de categorias - ' + JSON.stringify(error),
        );
      });
  };

  const getProdutos = async () => {
    AxiosInstance.get(`/produto`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        console.log('Dados dos produtos' + JSON.stringify(result.data));
        setProdutos(result.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de produtos' + JSON.stringify(error),
        );
      });
  };

  const pesquisarCategoria = (busca: string) => {
    if (busca !== '') {
      setcategorias(
        categorias.filter(res =>
          res.nomeCategoria.toLowerCase().includes(busca.toLowerCase()),
        ),
      );
    } else {
      getDadosCategoria();
    }
  };

  const pesquisarProdutos = (busca: string) => {
    if (busca !== '') {
      setProdutos(
        produtos.filter(res =>
          res.nomeProduto.toLowerCase().includes(busca.toLowerCase()),
        ),
      );
    } else {
      getProdutos();
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <LoadingComponent />
        <ScrollView style={styles.containerItems}>
          <View>
            <Input
              style={{color: '#fff700'}}
              placeholder="buscar produto"
              placeholderTextColor={'#fff700'}
              onChangeText={setBusca}
              value={busca}
              leftIcon={
                <Icon
                  name="search"
                  color="#fff700"
                  type="font-awesome"
                  size={24}
                />
              }
            />
          </View>
          <Text style={{color: '#fff700'}}>{'Categorias'}</Text>
          <FlatList
            data={categorias}
            horizontal={true}
            contentContainerStyle={{alignItems: 'center'}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={categoria => {
              return (
                <TouchableHighlight
                  // key={i}
                  underlayColor="#fff700"
                  activeOpacity={10}
                  onPress={() => {
                    console.log(
                      `Categoria 1 Clicada ${categoria.item.nomeCategoria} foi clicada`,
                    );
                    setChosenCategory(categoria.item);
                    navigation.navigate('CategoriaProdutoScreen');
                  }}
                  style={styles.botao_categoria}>
                  <CategoriasCard categoria={categoria.item} />
                </TouchableHighlight>
              );
            }}
          />
          <Text style={{color: '#fff700'}}>{'Recentes'}</Text>
          <FlatList
            data={produtos}
            horizontal={true}
            contentContainerStyle={{alignItems: 'center'}}
            keyExtractor={(item, index) => index.toString()}
            renderItem={produto => {
              return (
                <TouchableHighlight
                  // key={i}
                  underlayColor="#fff700"
                  activeOpacity={10}
                  onPress={() => {
                    navigation.navigate({
                      name: 'ProdutoScreen',
                      params: {
                        id_produto: produto.item.idProduto,
                        sku: produto.item.sku,
                        nome_produto: produto.item.nomeProduto,
                        descricao_produto: produto.item.descricaoProduto,
                        preco_produto: produto.item.precoProduto,
                        imagem_produto: produto.item.imagemProduto,
                      },
                    });
                  }}
                  style={styles.botao_categoria}>
                  <ProdutosCard produto={produto.item} />
                </TouchableHighlight>
              );
            }}
          />
          <Text style={{color: '#fff700'}}> {'Destaque'}</Text>
          <ScrollView style={styles.bottomCardScrollView}>
            <TouchableOpacity>
              <Card containerStyle={styles.BottomCardStyle}>
                <Card.Image
                  source={{
                    uri: 'https://cinesiageek.com.br/wp-content/uploads/2019/10/star_wars__a_ascensao_skywalker.jpg',
                  }}
                />
                <Card.Divider />
                <View style={styles.bottomCard}>
                  <View style={styles.bottomCardText}>
                    <Text style={styles.colorText}>teste</Text>
                  </View>
                  <View>
                    <AirbnbRating showRating={false} size={10} />
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  containerItems: {
    padding: 16,
  },
  scrollCategoria: {
    flexGrow: 0,
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 1,
    borderRadius: 15,
  },
  bottomCardScrollView: {
    marginBottom: 30,
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomCardText: {
    width: '70%',
  },
  bottomCardRating: {
    width: '20%',
  },
  BottomCardStyle: {
    backgroundColor: '#000000',
    borderColor: '#fff700',
    borderRadius: 15,
  },
  colorText: {
    color: '#fff700',
    fontFamily: 'Starjout',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
