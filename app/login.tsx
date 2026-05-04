import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Linking } from 'react-native'; // IMPORTANTE PARA LINKS

export default function Login() {

  const router = useRouter(); // navegação

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000000',
      justifyContent: 'center',
      padding: 25
    }}>

      {/* ================= LOGO ================= */}
      <Image
        source={require('../assets/images/logo.png')} 
        style={{
          width: 290,
          height: 290,
          alignSelf: 'center',
          marginBottom: -30,

          shadowColor: '#f97316',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 20
        }}
      />

      {/* ================= CARD ================= */}
      <View style={{
        backgroundColor: '#000000',
        padding: 20,
        borderRadius: 25,

        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10
      }}>

        {/* ================= EMAIL ================= */}
        <Text style={{ color: '#ffffff', marginBottom: 5 }}>
          Email
        </Text>

        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#ffffff"
          style={{
            backgroundColor: '#8b8a8a',
            color: '#fff',
            padding: 15,
            borderRadius: 12,
            marginBottom: 15
          }}
        />

        {/* ================= SENHA ================= */}
        <Text style={{ color: '#ffffff', marginBottom: 5 }}>
          Senha
        </Text>

        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#ffffff"
          secureTextEntry
          style={{
            backgroundColor: '#8b8a8a',
            color: '#fff',
            padding: 15,
            borderRadius: 12,
            marginBottom: 10
          }}
        />

        {/* ================= ESQUECEU SENHA ================= */}
        <Text
          onPress={() => Linking.openURL('https://meusite.com/esqueci-senha')}
          style={{
            color: '#f97316',
            textAlign: 'right',
            marginBottom: 20
          }}
        >
          Esqueceu a senha?
        </Text>

        {/* ================= BOTÃO ================= */}
        <TouchableOpacity
          onPress={() => router.replace('/academias')}
          style={{
            backgroundColor: '#f97316',
            padding: 18,
            borderRadius: 15,
            alignItems: 'center',

            shadowColor: '#f97316',
            shadowOpacity: 0.6,
            shadowRadius: 10
          }}
        >
          <Text style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
          }}>
            Entrar
          </Text>
        </TouchableOpacity>

        {/* ================= CADASTRAR ================= */}
        <Text style={{
          color: '#fff',
          marginTop: 20,
          textAlign: 'center'
        }}>
          Ainda não possui uma conta?{' '}
          
          <Text
            onPress={() => Linking.openURL('https://meusite.com/cadastro')}
            style={{
              color: '#f97316',
              fontWeight: 'bold',
              textDecorationLine: 'underline'
            }}
          >
            Cadastre-se
          </Text>
        </Text>

      </View>

    </View>
  );
}