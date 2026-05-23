import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import {useRouter} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Perfil () {

 //NAVEGAÇÃO
 
 const router = useRouter();
 const [usuario, setUsuario] = useState({
  nome: 'Usuario',
  username: ''
 });

 useEffect(() => {
  carregarUsuario();
 }, []);

 async function carregarUsuario() {
  const usuarioSalvo = await AsyncStorage.getItem('usuario');

  if (usuarioSalvo) {
    setUsuario(JSON.parse(usuarioSalvo));
  }
 }

 return (

//TELA

  <View style={{
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
    paddingHorizontal: 25
  }}>

{/*Botão Voltar */}

<TouchableOpacity
onPress={() => router.replace('/academias')}
style={{
    marginBottom: 20
}}
>
    <Ionicons
    name="arrow-back-outline"
    size={38}
    color="#f97316"
    />

</TouchableOpacity>

{/*Foto Perfil*/}

<View style={{
    alignItems: 'center',
    marginBottom: 40
}}>

<Ionicons
name="person-circle-outline"
size={150}
color="#fff"
/>

{/*Nome */}

<Text style={{
color: '#fff',
fontSize: 28,
fontWeight: 'bold',
marginTop: 10

}}>
    {usuario.nome}
</Text>
</View>

{/*Título*/}

<Text style={{
    color: '#f97316',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'center'
}}>
  Seus dados pessoais
</Text>

{/*NOME*/}

<Text style={{
    color: '#aaa',
    fontSize: 18,
    marginBottom: 8
}}>
    Nome de usuário
</Text>

<TextInput
value={usuario.nome}
editable={false}
style={{
    backgroundColor: '#1a1a1a',
    color: '#fff' ,
    padding: 18,
    borderRadius: 18,
    fontSize : 18,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#f97316'

}}/>

{/*EMAIL*/}

<Text style={{
    color: '#aaa',
    fontSize: 18,
    marginBottom: 8
}}>
    Email
</Text>

<TextInput
value={usuario.username}
editable={false}
style={{
    backgroundColor: '#1a1a1a',
    color: '#fff' ,
    padding: 18,
    borderRadius: 18,
    fontSize : 18,
    borderWidth: 1,
    borderColor: '#f97316'
}}
/>

  </View>
 );

}
