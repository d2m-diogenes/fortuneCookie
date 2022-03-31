import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={require('./assets/img/biscoito.png')}
            style={styles.img}
          />
        </TouchableOpacity>
        <Text style={styles.texto}>Teste</Text>
      </View>
    );
  }
};

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,  
    alignItems:'center',
    justifyContent:'center'
  },
  img:{

  },
  texto:{
    fontSize:30,
    color:'blue',
    textAlign:'center'
  }  
})