import React,{ Component} from 'react';  
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Button } from 'react-native';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator }from 'react-navigation-stack';
  
class HomeScreen extends Component {  
  static navigationOptions =
  {
    title: 'HomeScreen'

  };


constructor(props) {

  super(props)

  this.state = {

    TextInput_Name: '',

    TextInput_Number: ''

  }

}

Send_Data_Function = () => {

  this.props.navigation.navigate('Login', {
    NameOBJ: this.state.TextInput_Name,
    NumberOBJ: this.state.TextInput_Number
  });

}

render() {
  return (

    <View style={styles.MainContainer}>

      <TextInput
        placeholder="Enter Name here"
        onChangeText={data => this.setState({ TextInput_Name: data })}
        style={styles.textInputStyle}
        underlineColorAndroid='transparent'
      />

      <TextInput
        placeholder="Enter Mobile Number here"
        onChangeText={data => this.setState({ TextInput_Number: data })}
        style={styles.textInputStyle}
        keyboardType={'numeric'}
        underlineColorAndroid='transparent'
      />
      
      <TouchableOpacity onPress={this.Send_Data_Function} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.buttonText}> Send TextInput Value To Next Activity </Text>
 
        </TouchableOpacity>
 
    </View>

  );
}
}  

class LoginScreen extends Component{

  static navigationOptions =
    {
      title: 'LoginScreen'

    };

  render() {
   
    return (

      <View style={styles.MainContainer}>

        <Text style={styles.textStyle}>
          Name = {this.props.navigation.state.params.NameOBJ}
        </Text>

        <Text style={styles.textStyle}>
          Number = {this.props.navigation.state.params.NumberOBJ}
        </Text>

      </View>
    );
  }
}  


const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        Login: LoginScreen,
        
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends Component {  

    render() {  
        return <AppContainer />;  
    }  
}  
const styles = StyleSheet.create({

  MainContainer: {
    
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  textInputStyle: {

    height: 40,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#028b53',
    borderRadius: 8,
    marginTop: 15
  },

  button: {

    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 15
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

  textStyle: {

    color: '#000',
    textAlign: 'center',
    fontSize: 20

  }

});