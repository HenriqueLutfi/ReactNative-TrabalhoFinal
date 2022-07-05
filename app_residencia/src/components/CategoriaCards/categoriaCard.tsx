import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { TouchableOpacity, Image, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { ChosenCategoryContext } from '../../context/ChosenCategory';
import { styles } from './styles';

// interface CategoriasCardProps {
//   nomeCategoria: string;
//   imagemCategoria: string;
// }

function CategoriasCard({ categoria }) {
  const { setChosenCategory } = useContext(ChosenCategoryContext);

  const navigation = useNavigation();

  function duasCoisas() {

    if (categoria) {
      setChosenCategory(categoria)

      navigation.navigate('CategoriaProdutoScreen');
    }


  }


  return (

    <TouchableHighlight
      underlayColor="#fff700"
      activeOpacity={0}
      onPress={() => { duasCoisas() }}
      style={styles.botao_categoria}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: categoria.nomeImagem
            }}
          />
          <Text style={styles.text}>{categoria.nomeCategoria}</Text>
        </View>
      </View>
    </TouchableHighlight>

  );
}

export default CategoriasCard;


