import {View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// IMPORTA useState
import { useState } from 'react';
// IMPORTA NAVEGAÇÃO
import { useRouter } from 'expo-router';

export default function Academias() {

  // MENU LATERAL 

  const [menuAberto, setMenuAberto] = useState(false);

  // NAVEGAÇÃO 

  const router = useRouter();

  // DADOS DAS ACADEMIAS 

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

// TELA PRINCIPAL 

    <View style={{
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 20,
      paddingHorizontal: 15
    }}>

{/*  MENU LATERAL */}

      {menuAberto && (

        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 260,
          height: '100%',
          backgroundColor: '#111111',
          borderRightWidth: 2,
          borderRightColor: '#f97316',
          zIndex: 999,
          paddingTop: 80,
          paddingHorizontal: 15
        }}>

{/*Botão fechar navbar*/}

          <TouchableOpacity
          onPress={()=> setMenuAberto(false)}
          style={{
            position: 'absolute',
            top: 40,
            right: 20,
            zIndex: 1000
          }}
          >
         <Ionicons
        name="close-outline"
        size={35}
       color="white"
       />
      </TouchableOpacity>

{/* PERFIL */}

     <View style={{
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 30
   }}>

   <Ionicons
   name="person-circle-outline"
   size={55}
   color="#fff"
   />
   <View style={{ marginLeft: 10 }}>
   <Text style={{
   color: '#fff',
   fontWeight: 'bold',
   fontSize: 20
   }}>
   Olá, Yuri
</Text>

<Text style={{
   color: '#ccc'
  }}>
 yuri@gmail.com
 </Text>
 </View>
 </View>

{/* BOTÃO PERFIL */}

          <TouchableOpacity style={{
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 18,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center'
          }}>

            <Ionicons
              name="person-outline"
              size={24}
              color="#000"
            />

            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginLeft: 10
            }}>
              MEU PERFIL
            </Text>

          </TouchableOpacity>

{/* BOTÃO FAVORITOS */}

          <TouchableOpacity style={{
            backgroundColor: '#fff',
            padding: 10,
            borderRadius: 18,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center'
          }}>

            <Ionicons
              name="star"
              size={20}
              color="#facc15"
            />

            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginLeft: 10
            }}>
              FAVORITOS
            </Text>

          </TouchableOpacity>

{/* BOTÃO SAIR */}

          <TouchableOpacity

            // VOLTA PARA LOGIN

            onPress={() => router.replace('/login')}
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 18,
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >

            <Ionicons
              name="log-out-outline"
              size={20}
              color="#000"
            />

            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginLeft: 10
            }}>
              SAIR
            </Text>

          </TouchableOpacity>

        </View>

      )}

{/* TOPO */}

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -40
      }}>

{/* USUÁRIO */}

       <TouchableOpacity
       onPress={()=> setMenuAberto(!menuAberto)}
       style={{
        flexDirection: 'row',
        alignItems: 'center'
       }}
       >

{/* ÍCONE PERFIL */}

         <Ionicons
         name="person-circle-outline"
         size={40}
         color="#fff"
         />
         {/*Nome*/}
         <Text style={{
          color: '#fff',
          marginLeft: 5
         }}>
          
           Yuri
         </Text>
       </TouchableOpacity>

 {/* LOGO */}

        <Image
          source={require('../assets/images/logo.png')}
          style={{
            width: 550,
            height: 150,
            marginLeft: 'auto',
            marginRight: -10
          }}
          resizeMode="contain"
        />

      </View>

 {/* BUSCA */}

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#111',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 15
      }}>

        <Ionicons
          name="search"
          size={20}
          color="#888"
        />

        <TextInput
          placeholder="Localizar academias"
          placeholderTextColor="#888"
          style={{
            flex: 1,
            color: '#fff',
            marginLeft: 10
          }}
        />

        <Ionicons
          name="ellipsis-vertical"
          size={20}
          color="#888"
        />

      </View>

 {/* LISTA */}

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

 {/* IMAGEM */}

            <Image
              source={item.imagem}
              style={{
                width: 120,
                height: 120
              }}
            />

{/* TEXTO */}

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

 {/* FAVORITAR */}
 
            <View style={{
              justifyContent: 'flex-end',
              padding: 10
            }}>

              <Ionicons
                name="star-outline"
                size={24}
                color="#f97316"
              />

            </View>

          </View>

        )}
      />

    </View>
  );
}