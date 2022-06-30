import React, {useEffect, useState, useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {Text, Card} from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import ProdutosCard from '../../components/ProdutoCards/ProdutosCards';
import CategoriasCard from '../../components/CategoriaCards/categoriaCard';

type CategoriaType = {
  idCategoria: number;
  nomeCategoria: String;
  nomeImagem: String;
};

type ProdutoType = {
  idProduto: number;
  sku: string;
  nomeProduto: string;
  imagemProduto: any;
};

const Home = ({route, navigation}) => {
  const {usuario} = useContext(AutenticacaoContext);

  console.log('Usuario : ' + JSON.stringify(usuario));

  const [categoria, setCategoria] = useState<CategoriaType[]>([]);
  const [produto, setProduto] = useState<ProdutoType[]>([]);

  useEffect(() => {
    getDadosCategoria();
    getProdutos();
  }, []);

  const getDadosCategoria = async () => {
    AxiosInstance.get(`/categoria`, {
      headers: {Authorization: `Bearer ${usuario.token}`},
    })
      .then(result => {
        console.log('dados das categorias: ' + JSON.stringify(result.data));
        setCategoria(result.data);
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
        setProduto(result.data);
      })
      .catch(error => {
        console.log(
          'Erro ao carregar a lista de produtos' + JSON.stringify(error),
        );
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <ScrollView style={styles.containerItems}>
          <Text style={{color: '#fff700'}}>{'Categorias'}</Text>
          <ScrollView style={styles.scrollCategoria} horizontal={true}>
            {categoria.map((k, i) => (
              <TouchableHighlight
                key={i}
                underlayColor="#fff700"
                activeOpacity={100}
                onPress={() =>
                  console.log(
                    `Categoria 1 Clicada ${k.nomeCategoria} foi clicada`,
                  )
                }
                style={styles.botao_categoria}>
                <CategoriasCard categoria={k} />
              </TouchableHighlight>
            ))}
          </ScrollView>
          <Text style={{color: '#fff700'}}>{'Recentes'}</Text>
          <ScrollView horizontal={true}>
            {produto.map((k, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => console.log(`Produto ${k.nomeProduto} Clicado`)}>
                <ProdutosCard produto={k} />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    borderColor: '#00eeff',
    borderRadius: 15,
  },
  colorText: {
    color: '#ff00dd',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
