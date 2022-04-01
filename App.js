import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      imagem: require('./assets/img/biscoito.png'),
      textoFrase: '',
    }

    this.click = this.click.bind(this)

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.'
    ]

  }

  click(){
    let numero = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: this.frases[numero], 
      imagem:require('./assets/img/biscoitoAberto.png')
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.click}>
          <Image
            source={this.state.imagem}
            style={styles.img}
          />
        </TouchableOpacity>
        <Text style={styles.texto}>{this.state.textoFrase}</Text>
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
    width: 300,
    height: 300,
  },
  texto:{
    fontSize:30,
    color:'#E45826',
    textAlign:'center'    
  }  
})