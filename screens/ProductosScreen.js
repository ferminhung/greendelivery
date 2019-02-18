import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, FlatList, Image, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Divider, Icon, Header, Button } from 'react-native-elements'

import Loader from '../components/loader';

export default class Productos extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.state ={ Loading: false}
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    const ciudad = this.props.navigation.getParam( 'paramCiudad', '261' );
    fetch(global.direccionPHP, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Mandato: 'Green' , sPedidoPhp: '100'
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          loading: false,
          dataSource: responseJson.RESULT,
        }, function(){

        });
      })  
      .catch((error) =>{
        console.error(error);
      });
  }
  render() {

    return (
      <View >
        <Loader
          loading={this.state.loading} />
        <ScrollView>
          <FlatList 
            data={this.state.dataSource}
            renderItem={({item}) => this.renderFlatListItem(item)}
            
          />
        </ScrollView>
        <Icon
            containerStyle={{ position: 'absolute', right:10, top: 30, zIndex:10 }}
            reverse
            name='arrow-left'
            type='font-awesome'
            color='red'
            onPress={() => this.props.navigation.goBack()}
        /> 
        <Text ></Text>
        <Text ></Text>
        <Text ></Text>
      </View >
    );
  }

renderTipo(tipo) {
    if(tipo==1){
      return (
          <Text style={styles.premium}>Premium</Text>
        )  
      }else{
        if(tipo==2){
          return (
            <Text style={styles.clase}>Casual</Text>
          )
        }else{
          return (
            <Text style={styles.clase}>Cafe</Text>
          )
        }
      }
    
  }

renderFlatListItem(item) {
    return (
      
      <View >
        <Divider style={{ backgroundColor: 'red' }} />
        <View style={{flexDirection: 'row',
          flexWrap: 'wrap',}}>
          <Image style={styles.imagenitem} source={{uri: item.vcFoto}} />
        </View >
        <View style={{flexDirection: 'row',
          flexWrap: 'wrap', alignItems: 'center'}}>
          <Icon
              containerStyle={{ left:10, justifyContent: 'center'}}
              reverse
              name='map'
              type='font-awesome'
              color='green'
              size={12}
              onPress={() => this.props.navigation.navigate( 'Ficha' ,{paramRestaurant: item.idRestaurant})}
          />
          <Text style={styles.restaurant}>{item.vcNombre}</Text>
        </View>
        {this.renderTipo(item.Tipo)}
        <Text style={styles.titulo}>{item.vcTitulo}</Text>
        <Text style={styles.subtitulo}>{item.vcDescripcion}</Text>
        <Text ></Text>
        <Text ></Text>

        <Divider style={{ backgroundColor: 'black' }} />

      </View>
     )
}


}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  clase: {
    marginLeft:20,
    textAlign: 'left',
    fontFamily: 'Lato-black',
    fontSize: 12,
    color:'green',
  },
  nombre: {
    marginLeft:20,
    textAlign: 'left',
    fontFamily: 'Lato-bold',
    fontSize: 16,
  },
  restaurant: {
    marginLeft:10,
    textAlign: 'left',
    fontFamily: 'Lato-black',
    fontSize: 20,
    justifyContent: 'center',
  },
  titulo: {
    marginLeft:20,
    textAlign: 'left',
    fontFamily: 'Lato-bold',
    fontSize: 30,
  },
  imagenitem: {
    flex: 1,
    resizeMode:'cover',
    width:'100%',
    height:340, 
    alignContent: 'center',
  },
  subtitulo: {
    marginLeft:20,
    marginRight:10,
    textAlign: 'left',
    fontFamily: 'Lato-regular',
    fontSize: 15,
  },
  premium: {
    marginLeft:20,
    marginRight:20,
    textAlign: 'left',
    fontFamily: 'Lato-black',
    fontSize: 12,
    color:'black',
    backgroundColor:'gold',
  },
  precio: {
    marginLeft:10,
    marginRight:10,
    textAlign: 'right',
    fontFamily: 'Lato-black',
    fontSize: 16,
    color:'red',
  },
});