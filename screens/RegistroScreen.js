import React from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, StatusBar, Alert, ScrollView } from 'react-native';
import { Header, Icon, Tile, Divider, Button } from 'react-native-elements';


export default class screenLogin extends React.Component {
  static navigationOptions = {
    title: 'Crear Usuario',
  };
  constructor(props) {
    super(props);
    this.state = {nombres: '',
                  usuario: '',
                  correo: '',
                  clave: '',
                  telefono: '',
  };
  }

  
  render() {
    return (
      <ScrollView style={{ backgroundColor:'white'}}>
          <View >
                  <Text>    </Text>
                  <TextInput placeholder="Nombre y Apellido" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                    onChangeText={(nombres) => this.setState({nombres})}
                  />
                  <TextInput placeholder="Usuario" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                    onChangeText={(usuario) => this.setState({usuario})}
                  />
                  <TextInput placeholder="Clave Secreta" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                    onChangeText={(clave) => this.setState({clave})}
                  />
                  <TextInput placeholder="Confirme la clave" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                    onChangeText={(clave2) => this.setState({clave2})}
                  />
                  <TextInput placeholder="email principal" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                    onChangeText={(correo) => this.setState({correo})}
                  />
                  <TextInput placeholder="Telefono principal (Movil)" placeholderColor="#c4c3cb" style={styles.loginFormTextInput}
                    onChangeText={(telefono) => this.setState({telefono})}
                  />
                
          </View>
          <Text>    </Text>
          <View>

                  <Button   
                    icon={{name: 'user', type:'font-awesome', color: 'white'}}
                     
                    title='Crear Usuario' 
                    onPress={
                      ()=>this.onRegistroPress(this.state.usuario, this.state.clave, this.state.nombres, this.state.correo, this.state.telefono)
                    }
                    buttonStyle={{backgroundColor: 'green', width:'70%', borderRadius:20}}
                    containerStyle={{alignItems:'center'}}
                  />
                  <Text>    </Text>
                  
          </View>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          <Text>    </Text>
          
    </ScrollView>
    );
  }

  onRegistroPress(sUsuario, sClave, sNombre, sCorreo, sTelefono) {
    return fetch('http://condominioagil.com/medicos/appmovil/ajaxMedicos.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Mandato: 'RegistrarCuenta',
          sNombrePhp: sNombre,
          sUsuarioPhp: sUsuario,
          sClavePhp: sClave,
          sCorreoPhp: sCorreo,
          sTelefonoPhp: sTelefono,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.RESULT=='BIEN'){
          this.props.navigation.navigate( 'Login');
        }else{
          if(responseJson.RESULT=='EXISTE'){
            alert('Usuario ya existe');
          }else{
            alert('Acceso No Permitido');
          }
        }
       
      })
      .catch((error) =>{
        console.error(error);
      });
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
    marginBottom: 20,
    borderRadius: 30,
    height: 40,
    fontFamily: 'Lato-regular',
    fontSize: 16,
    padding: 10,

  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
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
