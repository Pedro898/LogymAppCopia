import { View, Text, Image, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Academias() {

  const academias = [
    {
      id: '1',
      nome: 'SMART FIT',
      endereco: 'Av. Vinte e Seis de Março, 701 Centro',
      cidade: 'Barueri, SP',
      cep: '06401-050',
      imagem: require('../assets/images/gym1.jpeg')
    },
    {
      id: '2',
      nome: 'BLUE FIT',
      endereco: 'Av. Trindade, 344 Bethaville I',
      cidade: 'Barueri, SP',
      cep: '06404-326',
      imagem: require('../assets/images/gym2.webp')
    },
    {
      id: '3',
      nome: 'BIO RITMO',
      endereco: 'Av. Piracema, 669 - Tamboré',
      cidade: 'Barueri, SP',
      cep: '06460-030',
      imagem: require('../assets/images/gym3.jpg')
    }
  ];

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 20,
      paddingHorizontal: 15
    }}>

      {/* === TOPO === */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
      }}>

        {/* USUÁRIO */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="person-circle-outline" size={40} color="#fff" />
          <Text style={{ color: '#fff', marginLeft: 5 }}>
            Yuri
          </Text>
        </View>

        {/* === LOGO === */}
        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 70,
            height: 70,
            marginLeft: 'auto' // 🔥 empurra pro canto direito
          }}
          resizeMode="contain"
        />

      </View>

      {/* === BUSCA === */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 15
      }}>
        <Ionicons name="search" size={20} color="#888" />

        <TextInput
          placeholder="Localizar academias"
          placeholderTextColor="#888"
          style={{
            flex: 1,
            color: '#fff',
            marginLeft: 10
          }}
        />

        <Ionicons name="ellipsis-vertical" size={20} color="#888" />
      </View>

      {/* === LISTA === */}
      <FlatList
        data={academias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={{
            flexDirection: 'row',
            backgroundColor: '#0a0a0a',
            borderRadius: 20,
            marginBottom: 15,
            overflow: 'hidden'
          }}>

            <Image
              source={item.imagem}
              style={{
                width: 120,
                height: 120
              }}
            />

            <View style={{
              flex: 1,
              padding: 10
            }}>

              <Text style={{
                color: '#f97316',
                fontSize: 18,
                fontWeight: 'bold'
              }}>
                {item.nome}
              </Text>

              <Text style={{ color: '#ccc', marginTop: 5 }}>
                {item.endereco}
              </Text>

              <Text style={{ color: '#ccc' }}>
                {item.cidade}
              </Text>

              <Text style={{
                color: '#f97316',
                marginTop: 5
              }}>
                {item.cep}
              </Text>

            </View>

            <View style={{
              justifyContent: 'flex-end',
              padding: 10
            }}>
              <Ionicons name="star-outline" size={24} color="#f97316" />
            </View>

          </View>

        )}
      />

    </View>
  );
}