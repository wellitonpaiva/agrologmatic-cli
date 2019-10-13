import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Bem vindo ao AgroLog-Matic</Text>
            <Image source={require('../assets/images/robot-plant.png')} style={styles.welcomeImage} />
            <Text style={styles.text}>O que gostaria de fazer?</Text>
          </View>

          <View>
            <Text style={styles.textHeader}>Minhas Propriedades</Text>
            <FlatList
              data={[
                { id: 1, nome: 'Fazenda1', endereco: 'Rua das Flores, 1 - São Raimundo - DR' },
                { id: 2, nome: 'Fazenda2', endereco: 'Rua das Flores, 2 - São Raimundo - DR' },
                { id: 3, nome: 'Fazenda3', endereco: 'Rua das Flores, 3 - São Raimundo - DR' },
                { id: 4, nome: 'Fazenda4', endereco: 'Rua das Flores, 4 - São Raimundo - DR' },
                { id: 5, nome: 'Fazenda5', endereco: 'Rua das Flores, 5 - São Raimundo - DR' },
                { id: 6, nome: 'Fazenda6', endereco: 'Rua das Flores, 6 - São Raimundo - DR' },
                { id: 7, nome: 'Fazenda7', endereco: 'Rua das Flores, 7 - São Raimundo - DR' },
                { id: 8, nome: 'Fazenda8', endereco: 'Rua das Flores, 8 - São Raimundo - DR' },
              ]}
              renderItem={({ item }) => (
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Propriedade', {'item': item})}>
                  <View style={styles.listItem} >
                    <Text>{item.nome}</Text>
                    <Text>{item.endereco}</Text>
                  </View>
                </TouchableHighlight>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function handlePropriedadePress(item) {
  this.props.navigation.push('Propriedade')
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    lineHeight: 25,
    color: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  textHeader: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  myPropertiesContainer: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  listItem: {
    marginBottom: 10,
    marginLeft: 10,
    borderBottomColor: '#000',
    borderStyle: 'solid',
  },
});

export default HomeScreen;