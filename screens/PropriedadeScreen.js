import React from 'react';
import { StyleSheet, 
  ScrollView,
  Text, 
} from 'react-native';

class PropriedadeScreen extends React.Component {

  static navigationOptions = {
    title: 'Propriedade',
  };

  render() {

    const { navigation } = this.props;
    

    return (
      <ScrollView style={styles.container}>
        <Text>Propriedade {this.props.navigation.state.params.item.nome}</Text>
      </ScrollView>
    );
  }
}

export default PropriedadeScreen;

PropriedadeScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
