import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Lottie from 'lottie-react-native';

import {LoadingContext} from '../../context/LoadingContext';

function LoadingComponent() {
  const {loading} = useContext(LoadingContext);
  if (loading) {
    return (
      <View style={[styles.centralizar, {position: 'absolute', zIndex: 1}]}>
        <View style={[styles.container]}>
          <View style={styles.containerItems}>
            <Text style={styles.colorText}>
              Paciência você deve ter, meu jovem Padawan
            </Text>
            <View style={styles.containerEspada}>
              <Lottie
                autoPlay
                source={require('../../assets/3010-bb8.json')}
                style={styles.Gif}
              />
            </View>
            {/* <ActivityIndicator
              animating={loading}
              size={'large'}
              color="#f0D906"
            /> */}
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  centralizar: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  containerItems: {
    borderWidth: 4,
    borderColor: '#f0D906',
    borderRadius: 15,
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: '#000000a9',
  },
  colorText: {
    color: '#f0D906',
    fontFamily: 'Starjout',
    textAlign: 'center',
    fontSize:20,
  },
  containerEspada: {
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Gif: {
    flex: 1,
    width: '60%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000000',
  },
});
export default LoadingComponent;
