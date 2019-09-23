import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Sjb from './Sjb';

export default class Login extends Component {
  state = {
    login: '',
    password: '',
  };

  handleLogin = text => {
    this.setState({login: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  doLogin = (login, pwd) => {
    if ((login === 'user' 
    || login === 'Lucas'
    || login === 'lucas'
    || login === 'User') && pwd === '123') {
        alert('Informações incorretas');
    //   Actions.sjb();
    } else {
      alert('Informações incorretas');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/login/background.png')}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <Image
          source={require('../../assets/login/border.png')}
          style={{
            position: 'absolute',
            width: '90%',
            height: '60%',
            marginLeft: '5%',
            marginTop: '45%',
            resizeMode: 'stretch',
          }}
        />
        <View style={styles.card}>
          <Image
            source={require('../../assets/login/logo.png')}
            style={styles.image}
          />
        </View>

        <TextInput
          style={styles.input}
          placheholder="Login"
          onChangeText={this.handleLogin}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Senha"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          onPress={() => this.doLogin(this.state.login, this.state.password)}
          style={styles.button}>
          <Image
            style={styles.image}
            source={require('../../assets/login/Button09.png')}
          />

          {/* <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
            Login
          </Text> */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    height: '100%',
    width: '100%',
  },
  input: {
    marginBottom: 15,
    borderRadius: 15,
    height: 40,
    color: '#000',
    display: 'flex',
    marginLeft: '15%',
    width: '70%',
    height: 50,
    borderColor: '#e7e7e7',
    backgroundColor: '#FFF',
    borderWidth: 1,
  },
  button: {
    height: 50,
    marginLeft: '20%',
    width: '60%',
    display: 'flex',
  },
  image: {
    resizeMode: 'stretch',
    height: '100%',
    width: '100%',
  },
  card: {
    marginLeft: '25%',
    marginTop: '20%',
    width: '50%',
    backgroundColor: 'transparent',
    height: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});
