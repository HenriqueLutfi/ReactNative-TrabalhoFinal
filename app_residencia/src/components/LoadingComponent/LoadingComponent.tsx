import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import Lottie from 'lottie-react-native';

import {LoadingContext} from '../../context/LoadingContext';

function LoadingComponent() {
  const {loading} = useContext(LoadingContext);
  if (loading) {
    return (
      <View style={styles.centralizar}>
      <View style={[styles.container, {position: 'absolute', zIndex: 1}]}>
        <View style={styles.containerItems}>
          <View style={styles.containerEspada}>
            <Lottie autoPlay source={require('../../assets/espada.json')} style={styles.Gif}/>
          </View>
          <Text style={styles.colorText}>Paciência você deve ter, meu jovem Padawan</Text>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color="#fff700"
          />
        </View>
      </View>
      </View>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  centralizar:{
    justifyContent:'flex-end',
    alignItems:'center',
    
  },
  container: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center'
    
  },
  containerItems: {
    borderWidth: 4,
    borderColor: '#fff700',
    borderRadius: 15,
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    backgroundColor:'#000000a9'
  },
  colorText: {
    color: '#fff700',
    fontFamily: 'Starjout',
    textAlign: 'center'
  },
  containerEspada: {
    height: '70%',
    alignItems:'center',
    justifyContent: 'center'
  },
  Gif:{
    flex:1,
    width:"60%",
    height:"40%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#0000000',
}
});
export default LoadingComponent;
