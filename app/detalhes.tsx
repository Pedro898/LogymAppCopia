import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Detalhes() {

  // pega os dados enviados da tela anterior
  const { nome, cidade } = useLocalSearchParams();

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#020617',
      justifyContent: 'center', // centraliza vertical
      alignItems: 'center' // centraliza horizontal
    }}>

      {/* ================= LOGO ================= */}
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: 120,
          height: 120,
          marginBottom: 20
        }}
      />

      {/* ================= NOME ================= */}
      <Text style={{
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
      }}>
        {nome}
      </Text>

      {/* ================= CIDADE ================= */}
      <Text style={{
        color: '#f97316', // cor da marca
        fontSize: 18,
        marginTop: 10
      }}>
         {cidade}
      </Text>

    </View>
  );
}
