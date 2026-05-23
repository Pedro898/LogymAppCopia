import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function Favoritos() {

  // NAVEGAÇÃO 

  const router = useRouter();

  //  RECEBE PARÂMETROS 
  const params = useLocalSearchParams();

  //  CONVERTE FAVORITOS 
  // TRANSFORMA TEXTO EM ARRAY

  const favoritos = JSON.parse(
    (params.favoritos as string) || '[]'
  );

  return (

    //TELA

    <View style={{
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 60,
      paddingHorizontal: 15
    }}>

      {/* BOTÃO VOLTAR  */}

      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginBottom: 25
        }}
      >

        <Ionicons
          name="arrow-back-outline"
          size={35}
          color="#f97316"
        />

      </TouchableOpacity>

      {/* TÍTULO */}

      <Text style={{
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 25
      }}>
        Academias Favoritas
      </Text>

      {/* LISTA*/}

      <FlatList

        data={favoritos}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <View style={{
            flexDirection: 'row',
            backgroundColor: '#0a0a0a',
            borderRadius: 20,
            marginBottom: 15,
            overflow: 'hidden'
          }}>

            {/*  IMAGEM  */}

            <Image
              source={item.imagem}
              style={{
                width: 120,
                height: 120
              }}
            />

            {/*  INFORMAÇÕES */}

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

              <Text style={{
                color: '#ccc',
                marginTop: 5
              }}>
                {item.endereco}
              </Text>

              <Text style={{
                color: '#ccc'
              }}>
                {item.cidade}
              </Text>

              <Text style={{
                color: '#f97316',
                marginTop: 5
              }}>
                {item.cep}
              </Text>

            </View>

            {/* ESTRELA */}

            <View style={{
              justifyContent: 'flex-end',
              padding: 10
            }}>

              <Ionicons
                name="star"
                size={26}
                color="#facc15"
              />

            </View>

          </View>
        )}
      />
    </View>
  );
}