import React from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Alert, Image } from 'react-native';
import { Header, Icon, Tile, Divider, Button } from 'react-native-elements';

function accesarUsuario(sUsuario, sClave) {
    return fetch('http://condominioagil.com/medicos/appmovil/ajaxMedicos.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Mandato: 'IngresarCuenta',
          sUsuarioPhp: sUsuario,
          sClavePhp: sClave,
        }),
      })
      .then((response) => response.json())
      .then(Alert.alert('Acceso','Concedido'))
      /*.then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.RESULT,
        }, function(){

        });

      })*/
      .catch((error) =>{
        console.error(error);
      });
}

export default class screenLogin extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  constructor(props) {
    super(props);
    this.state = {usuario: '',
                  clave: '',
  };
  }

  logMessage = () => {
    // This works because arrow funcs adopt the this binding of the enclosing scope.
    accesarUsuario(this.state.usuario, this.state.clave);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
          
          <View >

                  <Text>    </Text>
                  <Text>    </Text>
                  <Text style={styles.etiqueta}> Nombre de Usuario   </Text>
                  <TextInput 
                    style={styles.cajaText}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={(usuario) => this.setState({usuario})}
                  />
                  <Text>    </Text>
                    
                  <Text style={styles.etiqueta} > Clave Secreta  </Text>
                  <TextInput 
                    underlineColorAndroid="rgba(0,0,0,0)"
                    style={styles.cajaText}
                    onChangeText={(clave) => this.setState({clave})}
                  />
                
          </View>
          <Text>    </Text>
          <View>

                  <Button   
                    small 
                    icon={{name: 'user', type:'font-awesome', color: 'white'}}
                    borderRadius={30} 
                    title='Iniciar Sesion' 
                    onPress={
                      this.logMessage
                    }
                    buttonStyle={{backgroundColor: 'green', width:'70%', borderRadius:20}}
                    containerStyle={{alignItems:'center'}}
                  />
                  <Text>    </Text>
                  <Button   
                    small 
                    icon={{name: 'user-plus', type:'font-awesome', color: 'white'}}
                    borderRadius={30} 
                    title='Crear Usuario' 
                    style={styles.botonTexto}
                    onPress={() => this.props.navigation.navigate( 'Registro' )}
                    buttonStyle={{backgroundColor: '#11CF61', width:'70%', borderRadius:20}}
                    containerStyle={{alignItems:'center'}}
                  />
                  <Text>    </Text>
          </View>
          
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  cajaText: {
    borderColor: 'gray', 
    borderWidth: 3, 
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    height: 40,
    fontFamily: 'Lato-regular',
    fontSize: 16,
    padding: 10,

  },
  etiqueta: {
    marginLeft: 20,
    fontFamily: 'Lato-black',
    fontSize: 18,
  },
  botonTexto: {
    fontFamily: 'Lato-black',
    fontSize: 18,
  },
});
