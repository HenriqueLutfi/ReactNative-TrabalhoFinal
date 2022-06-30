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
import {color} from 'react-native-reanimated';
import {AutenticacaoContext} from '../../context/AutenticacaoContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {login} = useContext(AutenticacaoContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, senha: string) => {
    console.log(`handleLogin - Email: ${email} - Senha: ${senha}`);
    setLoading(true);

    const respostaLogin = await login(email, senha);

    if (!respostaLogin) {
      Alert.alert('erro', '', [
        {text: 'OK'},
        {text: 'nao foi possivel realizar login'},
      ]);
      setLoading(false);
    } else {
      setLoading(false);
      navigation.navigate('HomeScreen');
    }
  };

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
            style={{color: '#fff700'}}
            leftIcon={
              <Icon name="user" color="#fff700" type="font-awesome" size={24} />
            }
          />
          <Input
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            style={{color: '#00ff0d'}}
            leftIcon={
              <Icon name="key" color="#ff00dd" type="font-awesome" size={24} />
            }
            secureTextEntry
          />
          <Button
            title="Entrar"
            titleStyle={{
              color: '#ff5e00',
            }}
            buttonStyle={{
              backgroundColor: '#e0cccc',
              borderWidth: 2,
              borderColor: '#0051ff',
              borderRadius: 3,
            }}
            onPress={() => handleLogin(email, senha)}
          />
        </View>
        <View>
          <ActivityIndicator
            animating={loading}
            size={'large'}
            color="#1eff00"
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
    borderWidth: 4,
    borderColor: '#ff6d18c7',
    borderRadius: 15,
    padding: 16,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  texto_entrada: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
    color: '#0099ff',
    borderStyle: 'solid',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
