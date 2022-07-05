import React, {useContext} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';

import {LoadingContext} from '../../context/LoadingContext';

function LoadingComponent() {
  const {loading} = useContext(LoadingContext);
  if (loading) {
    return (
      <View style={[styles.container, {position: 'absolute', zIndex: 1}]}>
        <View style={styles.containerItems}>
          <Text style={styles.colorText}>Paciência você deve ter, meu jovem Padawan</Text>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color="#fff700"
          />
        </View>
      </View>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItems: {
    borderWidth: 4,
    borderColor: '#fff700',
    borderRadius: 15,
    padding: 16,
    marginLeft: 25,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    backgroundColor:'#000000'
  },
  colorText: {
    color: '#fff700',
    fontFamily: 'Starjout',
    textAlign: 'center'
  },
});
export default LoadingComponent;
