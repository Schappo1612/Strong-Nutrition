import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import { useSetRecoilState } from 'recoil';
import loginApi from '../../services/login';
import { userState } from '../../recoil/atoms/auth';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  const login = async () => {
    console.log('eeee')
    try {
      const data = await loginApi.login(email, password);
      console.log(data)
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setEmail('');
      setPassword('');
      setErrorMsg(null);
      // await SecureStore.setItemAsync('access', data.access);
      navigation.goBack();
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg('Usuário ou senha inválidos!');
      await SecureStore.deleteItemAsync('access');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        style={{ width: '90%', marginBottom: 10 }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Senha"
        type="password"
        secureTextEntry={true}
        style={{ width: '90%', marginBottom: 10 }}
        value={password}
        onChangeText={setPassword}
      />
      <Button mode="contained" onPress={() => login()}>
        Entrar
      </Button>
      <Text>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});