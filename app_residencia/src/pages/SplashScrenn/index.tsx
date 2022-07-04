import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Lottie from 'lottie-react-native';
import splash from '../../assets/splash.gif'
import { useNavigation } from "@react-navigation/native";
import Login from "../Login";


const Splash = () => {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <Lottie
        autoPlay
        onAnimationFinish={() => navigation.navigate('LoginScreen')}
        source={require('../../assets/splash.json')}
        loop={false} />
    </View>

  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black'


  },

});
export default Splash;