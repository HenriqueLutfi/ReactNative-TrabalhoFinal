import React, {useState} from 'react';
import {
    Alert,
    StyleSheet,
    View,
    ActivityIndicator,
    ImageBackground,
  } from 'react-native';
import {Input, Text, Button, Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const AlterarSenha = () => {
    const [senha, setSenha] = useState ('');
    const [novaSenha, setNovaSenha] = useState ('');
    const [confirmaSenha, setConfirmaSenha] = useState ('');

    const ValidarSenha = () => {
      if (novaSenha !== confirmaSenha) {
        console.log("Verifique as senhas digitadas!")
      } else {
        console.log("Nova senha digitada corretamente!")
      }
    }

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
                onChangeText={senha}
                value={setSenha}
                style={{color: '#fff700'}}
                secureTextEntry
              />
  
              <Input
                placeholder="Digite sua Nova Senha"
                onChangeText={novaSenha}
                value={setNovaSenha}
                style={{color: '#fff700'}}
                secureTextEntry
              />
              <Input
                placeholder="Confirme sua Nova Senha"
                onChangeText={confirmaSenha}
                value={setConfirmaSenha}
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
}
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

