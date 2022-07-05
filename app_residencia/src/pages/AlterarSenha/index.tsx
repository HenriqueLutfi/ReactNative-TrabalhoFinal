import React, {useState, useContext} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {Input, Text, Button, Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { AutenticacaoContext } from '../../context/AutenticacaoContext';

const AlterarSenha = ({navigation}) => {
  const [senha, setSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const {usuario} = useContext(AutenticacaoContext);

  const ValidarSenha = () => {
    if (novaSenha === confirmaSenha) {
      console.log('Nova senha digitada corretamente!');
      Alert.alert(
        "Senha",
        "Senha atualizada com sucesso",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              "This alert was dismissed by tapping outside of the alert dialog."
            ),
        }
      );
    } else {
      console.log('Verifique as senhas digitadas!');
      Alert.alert(
        "Senha",
        "senhas estao diferentes",// rever alerta
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
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
        <ScrollView style={styles.containerScroll}>
          <View style={styles.containerItems}>
            <Text style={styles.texto_entrada}>{'Alterar Senha'}</Text>
            <Input
              placeholder="Digite sua Senha Atual"
              onChangeText={setSenha}
              value={senha}
              style={{color: '#fff700'}}
              secureTextEntry
            />

            <Input
              placeholder="Digite sua Nova Senha"
              onChangeText={setNovaSenha}
              value={novaSenha}
              style={{color: '#fff700'}}
              secureTextEntry
            />
            <Input
              placeholder="Confirme sua Nova Senha"
              onChangeText={setConfirmaSenha}
              value={confirmaSenha}
              style={{color: '#fff700'}}
              secureTextEntry
            />

            <Button
              title="Salvar"
              titleStyle={{
                color: '#fff700',
              }}
              buttonStyle={{
                backgroundColor: '#000000',
                borderWidth: 2,
                borderColor: '#fff700',
                borderRadius: 3,
                margin: 5,
              }}
              onPress={ValidarSenha}
            />
          </View>
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
  containerScroll: {
    padding: 16,
  },
  containerItems: {
    borderWidth: 4,
    borderColor: '#fff700',
    borderRadius: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
    zIndex: 0,
    marginBottom: 20,
  },
  texto_entrada: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 10,
    color: '#fff700',
    borderStyle: 'solid',
  },
  imageBack: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default AlterarSenha;
