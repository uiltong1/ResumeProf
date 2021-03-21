import React from 'react';
import { View, TouchableOpacity, Alert, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/user.png'
import Card from './components/Card'

const App = () => {

  function handleRedes(rede) {
    switch (rede) {
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/uiltong1')
        break;

      case 'facebook':
        Alert.alert('Meu Github', 'https://github.com/uiltong1')
        break;

      case 'linkedin':
        Alert.alert('Meu Github', 'https://github.com/uiltong1')
        break;
    }
  }



  return (
    <>
      <View style={style.page}>
        <View style={style.head}>
          <Image source={foto} style={style.image} />
          <Text style={style.name}>Uilton Gomes</Text>
          <Text style={style.function}>Desenvolvedor de Sistemas e Aplicativos Móveis</Text>
          <View style={style.social}>
            <TouchableOpacity onPress={() => handleRedes('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedes('github')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedes('github')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Formação Acadêmica">
          <Text style={style.content_text}>Estácio de Sá - Sistemas de Informação</Text>
          <Text style={style.content_text}>SENAI - Técnico em Logística</Text>
          <Text style={style.content_text}>CEEP Severino - Técnico em Administração</Text>
        </Card>
        <Card titulo="Experiência Profissional">
          <Text style={style.content_text}>Tel - Analista de Sistemas JR</Text>
          <Text style={style.content_text}>Ferimport - Assistente de TI</Text>
          <Text style={style.content_text}>SEMA - Estagiário de Desenvolvimento</Text>
        </Card>
      </View>
    </>
  )
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 125
  },

  head: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 10
  },

  function: {
    color: '#939393',
    marginBottom: 10
  },

  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },

  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },

  content_text: {
    color: '#939393'
  }

});

export default App;
