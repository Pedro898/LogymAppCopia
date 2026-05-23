import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import {
  useLocalSearchParams,
  useRouter
} from 'expo-router';

import { useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Detalhes() {

  // ================= RECEBE DADOS =================

  const params = useLocalSearchParams();
  const id = String(params.id);
  const nome = String(params.nome);
  const cidade = String(params.cidade);
  const endereco = String(params.endereco);
  const cep = String(params.cep);

  // ================= NAVEGAÇÃO =================

  const router = useRouter();

  // ================= FAVORITOS =================

  const [favoritos, setFavoritos] = useState<string[]>([]);

  // CARREGA FAVORITOS

  useEffect(() => {

    carregarFavoritos();

  }, []);

  // FUNÇÃO CARREGAR

  async function carregarFavoritos() {

    const favoritosSalvos =
      await AsyncStorage.getItem('favoritos');

    if (favoritosSalvos) {

      setFavoritos(
        JSON.parse(favoritosSalvos)
      );

    }

  }

  // FUNÇÃO FAVORITAR

  async function favoritarAcademia() {
    try {
      let novosFavoritos = [...favoritos];
      
      //REMOVE FAVORITO
      if (novosFavoritos.includes(id)) {
        novosFavoritos =
         novosFavoritos.filter(item => item !==id);
             } else {
              //ADICIONA FAVORITO
              novosFavoritos.push(id);

             }
             // ATUALIZA ESTADO
             setFavoritos(novosFavoritos);
             //SALVA
             await AsyncStorage.setItem(
                'favoritos',
                JSON.stringify(novosFavoritos)
              );
    } catch (error) {
      console.log('Erro ao favoritar');
    }
    
  }

  // ================= DADOS DAS ACADEMIAS =================

  const dadosAcademias: any = {

    'SMART FIT': {

      imagem: require('../assets/images/gym1.jpeg'),

      infos: [
        'Academia de Musculação',
        'Aparelhos de Alta Qualidade',
        'Plano Black - Direito de treinar em qualquer Smart Fit',
        'Banheiros com duchas'
      ]

    },

    'BLUE FIT': {

      imagem: require('../assets/images/gym2.webp'),

      infos: [
        'Academia de Musculação',
        'Aparelhos de Alta Qualidade',
        'Plano Gold - Treine em todas unidades'
      ]

    },

    'BIO RITMO': {

      imagem: require('../assets/images/gym3.jpg'),

      infos: [
        'Academia de musculação, ginástica, burn e race',
        'Aparelhos de última geração',
        'Plano Platinum',
        'Acesso aos estúdios da unidade'
      ]

    },

    'GAVIÕES': {

      imagem: require('../assets/images/gym4.jpg'),

      infos: [
        'Musculação e artes marciais',
        'Sala de bike e rooftop',
        'Pilates e aulas aeróbicas',
        'Planos mensal, trimestral e anual'
      ]

    }

  };

  // ================= PEGA DADOS =================

  const academia = dadosAcademias[nome as string];

  return (

    <ScrollView style={{
      flex: 1,
      backgroundColor: '#000'
    }}>

      {/* ================= BOTÃO VOLTAR ================= */}

      <TouchableOpacity

        onPress={() => router.back()}

        style={{
          marginTop: 20,
          marginLeft: 20
        }}
      >

        <Ionicons
          name="arrow-back"
          size={32}
          color="#f97316"
        />

      </TouchableOpacity>

      {/* ================= IMAGEM ================= */}

      <Image

        source={academia.imagem}

        style={{
          width: 320,
          height: 220,
          alignSelf: 'center',
          borderRadius: 25,
          marginTop: 10
        }}

      />

      {/* ================= CARD ================= */}

      <View style={{
        backgroundColor: '#111',
        marginTop: 25,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 25,
        minHeight: 600,
        borderTopWidth: 3,
        borderColor: '#f97316'
      }}>

        {/* ================= NOME ================= */}

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>

          <Text style={{
            color: '#f97316',
            fontSize: 24,
            fontWeight: 'bold'
          }}>
            {nome}
          </Text>

          {/* ================= FAVORITAR ================= */}

          <TouchableOpacity
            onPress={favoritarAcademia}
          >

            <Ionicons

              name={
                favoritos.includes(id)
                  ? 'star'
                  : 'star-outline'
              }

              size={30}

              color="#facc15"
            />

          </TouchableOpacity>

        </View>

        {/* ================= ENDEREÇO ================= */}

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>

          <Ionicons
            name="location-sharp"
            size={34}
            color="#f97316"
          />

          <View style={{
            marginLeft: 12,
            flex: 1
          }}>

            <Text style={{
              color: '#fff',
              fontSize: 17,
              marginBottom: 5
            }}>
              {endereco}
            </Text>

            <Text style={{
              color: '#fff',
              fontSize: 17,
              marginBottom: 5
            }}>
              {cidade}
            </Text>

            <Text style={{
              color: '#f97316',
              fontSize: 17
            }}>
              {cep}
            </Text>

          </View>

        </View>

        {/* ================= INFORMAÇÕES ================= */}

        <View style={{
          marginTop: 40
        }}>

          <Text style={{
            color: '#f97316',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20
          }}>
            Informações
          </Text>

          {/* LISTA DE INFORMAÇÕES */}

          {academia.infos.map((info: string, index: number) => (

            <View

              key={index}

              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 18
              }}
            >

              <Ionicons
                name="checkmark-circle"
                size={22}
                color="#f97316"
              />

              <Text style={{
                color: '#fff',
                fontSize: 17,
                marginLeft: 10,
                flex: 1
              }}>
                {info}
              </Text>

            </View>

          ))}

        </View>

      </View>

    </ScrollView>
  );
}

