import React, {useState, useEffect, useContext} from 'react';
import {Text, Card, Icon, SearchBar} from 'react-native-elements';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import AxiosInstance from '../../api/AxiosInstance';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
import CategoriasCard from '../../components/CategoriaCards/categoriaCard';
import CategoriaService from '../../services/CategoriaService';
import {CategoriaType} from '../../models/CategoriaType';
import {ChosenCategoryContext} from '../../context/ChosenCategory';
import {ProdutosContext} from '../../context/ProdutosContext';
import ProdutosCard from '../../components/ProdutoCards/ProdutosCards';
import {ProdutoType} from '../../models/ProdutoType';

const CategoriaProduto = ({navigation}) => {
  const {usuario} = useContext(AutenticacaoContext);
  const {chosenCategory} = useContext(ChosenCategoryContext);
  const {produtos} = useContext(ProdutosContext);
  const [produtosCategoria, setProdutosCategoria] = useState<ProdutoType[]>([]);
  useEffect(() => {
    pesquisarCategoria();
  }, []);

  const onRefresh = () => {
    // pesquisarCategoria();
    // wait(2000).then(() => setIsFetching(false));
    // setIsFetching(false);
  };

  // let filtroProds = produtos.filter(produto => {
  //   return produto.nomeCategoria === chosenCategory.nomeCategoria;
  // });
  // setProdutosCategoria(filtroProds);
  const pesquisarCategoria = () => {
    setProdutosCategoria([]);
    for (var i = 0; i < produtos.length; i++) {
      console.log('produto: ' + produtos[i].nomeCategoria);
      console.log('nome categoria escolhida: ' + chosenCategory.nomeCategoria);
      if (chosenCategory.nomeCategoria === produtos[i].nomeCategoria) {
        console.log('produto: ' + produtos[i]);
        const aux = produtosCategoria;
        aux.push(produtos[i]);
        setProdutosCategoria(aux);
        console.log('lista produtos: ' + produtosCategoria);
      } else {
        // getDadosCategoria();
      }
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
      }}
      resizeMode="cover"
      style={styles.imageBack}>
      <FlatList
        data={produtosCategoria}
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item, index) => index.toString()}
        // onRefresh={() => onRefresh()}
        // refreshing={true}
        // extraData={produtosCategoria}
        renderItem={categoria => {
          return (
            <TouchableHighlight
              // key={i}
              underlayColor="#fff700"
              activeOpacity={100}
              onPress={() => {
                navigation.navigate({
                  name: 'ProdutoScreen',
                  params: {
                    id_produto: categoria.item.idProduto,
                    sku: categoria.item.sku,
                    nome_produto: categoria.item.nomeProduto,
                    descricao_produto: categoria.item.descricaoProduto,
                    preco_produto: categoria.item.precoProduto,
                    imagem_produto: categoria.item.imagemProduto,
                  },
                });
              }}
              style={styles.botao_categoria}>
              <ProdutosCard produto={categoria.item} />
            </TouchableHighlight>
          );
        }}
        numColumns={2}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
  botao_categoria: {
    alignItems: 'center',
    padding: 1,
    borderRadius: 15,
    margin: 5,
  },
});
export default CategoriaProduto;
