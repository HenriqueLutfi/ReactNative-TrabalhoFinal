import React, {useState, useContext} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {Input, Text, Button, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';
// import {LoginService} from '../../services/LoginService';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {login} = useContext(AutenticacaoContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, senha: string) => {
    console.log(`handleLogin - Email: ${email} - Senha: ${senha}`);
    setLoading(true);

    // const respostaLogin = await LoginService(email, senha);
    const respostaLogin = await login(email, senha); //este pega do contexto

    if (!respostaLogin) {
      Alert.alert('erro', '', [
        {text: 'OK'},
        {text: 'nao foi possivel realizar login'},
      ]);
      setLoading(false);
    } else {
      // navigation.navigate('HomeScreen', {
      //   screen: 'StackNavigationScreen',
      //   params: {
      //     screen: 'HomeTabScreen',
      //     params: {
      //       token: respostaLogin.token,
      //     },
      //   },
      // });
      setLoading(false);
      navigation.navigate('HomeScreen');
    }
  };

  //entrar sem API
  // const handleLogin = ({email, senha}) => {
  // console.log(`Email: ${email} - Senha: ${senha}`);
  // const respostaLogin = LoginService(email,senha);
  // navigation.navigate('Home');
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/d7/a6/11/d7a61190a836bdcfc62bf97af4f4c74b.png',
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.containerItems}>
          <Text style={styles.texto_entrada}>{'Bem-vindo'}</Text>
          <Input
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
            style={{color:'#fff700'}}
            leftIcon={
              <Icon name="user" color="#fff700" type="font-awesome" size={24} />
            }
          />
          <Input
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            style={{color:'#fff700'}}
            leftIcon={
              <Icon name="key" color="#fff700" type="font-awesome" size={24} />
            }
            secureTextEntry
          />
          <Button
            title="Entrar"
            titleStyle={{
              color: '#fff700',
            }}
            buttonStyle={{
              backgroundColor: '#000000',
              borderWidth: 2,
              borderColor:'#fff700',
              borderRadius: 3,
              
            }}
            onPress={() => handleLogin(email, senha)}

            // onPress={() => handleLogin({email, senha})}
            // onPress={() => Vibration.vibrate(1000)}
            // onPress={() => console.log('Botao pressionado')}
          />
        </View>
        <View>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color="#fff700"
          />
        </View>
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
    // flex: 1,
    // backgroundColor: '#1f1e25',
    borderWidth: 4,
    borderColor: '#fff700',
    borderRadius: 15,
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
    // opacity: 0.5,
  },
  texto_entrada: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
    color: '#fff700',
    borderStyle: 'solid',
    // textShadowColor:'#fff700',
    // textShadowOffset:{width: 50, height: 50},
    // textShadowRadius:10,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
