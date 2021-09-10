/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, PureComponent } from 'react';
//import type {Node} from 'react';
import CustomButton from './componentes/button';
import ActionButtons from  './componentes/ActionButton';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };


    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDiez = this.handleDiez.bind(this);
    this.handlemenosDiez = this.handlemenosDiez.bind(this);
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }

  handleReset(){
    this.setState({counter: 0});
  }

  handleDiez(){
    const { counter : ct} = this.state;
    this.setState({counter: ct + 10})
  }

  handlemenosDiez(){
    const { counter : ct} = this.state;
    this.setState({counter: ct - 10})
  }

  render() {
    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>


          <CustomButton label="-" action={this.handleDown} />
          <View style={styles.counterContainer}>

            <Text style={styles.contador}>{counter}</Text>

          </View>
          <CustomButton label="+" action={this.handleUp} />

        </View>
        <View style={styles.subcontainerReset}>
        <ActionButtons reset= {this.handleReset} plus={this.handleDiez} menos = {this.handlemenosDiez}></ActionButtons>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  subcontainerReset: {
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',

  },

  /*btnText: {
    fontSize: 20,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },*/

  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contador: {
    fontSize: 70,
    color: '#FFF',
    fontWeight: 'bold',
    width: 90,
    height: 90,
  },
  btnText:{
    fontSize: 30,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },
  

});

export default App;




/*

import React, { Component } from 'react';
//import type {Node} from 'react';
import CustomButton from './componentes/button';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log('constructor');


    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }
  /*
  componentWillMount(){ // cambia los valores que se usan de forma global.
    console.log('Component');
  }

  componentDidMount(){ // se ejecuta despues de que se renderizo la pantalla.
   console.log('');
  //this.setState({counter: 9000});
   //sirve para hacer peticiones asincronas.
   // solo se ejecuta una vez, cuando este se inicia
  }

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }

  handleReset() {
    this.setState({ counter: 0 });
  }

  render() { // render lo que hace es ejecutarse cada que hay un cambio
    //const { counter } = this.state;
    //no se debe de poner un this.setState, esto porque manda a llamar al render en cada momento, será como un loop.
    // Render basicamente sirve para mostrar los componenetes que se tienen dentro.
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>


          <CustomButton label="-" action={this.handleDown} />
          <View style={styles.counterContainer}>

            <Text style={styles.contador}>{counter}</Text>

          </View>
          <CustomButton label="+" action={this.handleUp} />

        </View>



      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },
  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',

  },

  btnText: {
    fontSize: 40,
    color: '#7f8c8d',
    fontWeight: 'bold',
  },

  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contador: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
    width: 90,
    height: 90,
  },

});

export default App;
*/