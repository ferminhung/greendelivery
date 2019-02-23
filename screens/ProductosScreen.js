import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, AsyncStorage, FlatList, Image, ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Divider, Icon, Header, Button, ButtonGroup } from 'react-native-elements'

import Loader from '../components/loader';

export default class Productos extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.state ={ Loading: true,
                  productos: [],
                  name:'', 
                  selectedIndex: 2, 
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  componentDidMount = () => AsyncStorage.getItem('Productos')
  .then((value) => this.setState({ productos: JSON.parse(value), loading: false, }))
    
  render() {

    const dataSource = [
      

      {tit:"Articulos Personales",foto:require("../assets/images/colgate.jpg"),desc:"Cuidado personal, agregalos en tu pedido",promo:"n",precio:"",orden:"1"},
      {tit:"Combo Full Green",foto:require("../assets/images/combofull.jpg"),desc:"Sin pagos por adelantado",promo:"n",precio:"",orden:"2"}, 
      {tit:"Combo Lacteos",foto:require("../assets/images/lacteos.jpg"),desc:"1 Kg de Queso semiduro, 1/2 Carton de Huevos",promo:"s",precio:"",orden:"3"}, 
      {tit:"Combo Maracucho",foto:require("../assets/images/maracucho.jpg"),desc:"Papa, Tomate, Cebolla, Zanahoria, paquete de Ramas, Lechuga, Apio, Aguacate",promo:"n",precio:"",orden:"4"},
      {tit:"Mega Green",foto:require("../assets/images/megagreen.jpg"),desc:"En la puerta de tu casa",promo:"n",precio:"",orden:"5"},
      {tit:"Combo Viveres",foto:require("../assets/images/viveres.jpg"),desc:"Estas fuera del pais y quieres ayudar a tu familia, se acabaron las excusas",promo:"n",precio:"",orden:"6"}, 


    ];
    
    return (
      <View >
        <Loader
          loading={this.state.loading} />
        
        
        <ScrollView>


          <FlatList 
            data={dataSource}
            renderItem={({item}) => this.renderFlatListItem(item)}
            
          />

        </ScrollView>
        <Icon
            containerStyle={{ position: 'absolute', right:10, top: 50, zIndex:10 }}
            reverse
            name='shopping-cart'
            type='font-awesome'
            color='orange'
            onPress={() => this.props.navigation.navigate( 'Pedido' )}
        /> 
        <Icon
            containerStyle={{ position: 'absolute', left:10, top: 50, zIndex:10 }}
            reverse
            name='arrow-left'
            type='font-awesome'
            color='red'
            onPress={() => this.props.navigation.goBack()}
        /> 
        
      </View >
    );
  }


renderFlatListItem(item) {
    return (
      
      <View >
        <Divider style={{ backgroundColor: 'red' }} />
        <View style={{flexDirection: 'row',
          flexWrap: 'wrap',}}>
          <Image style={styles.imagenitem} source={item.foto} />
        </View >
        <View style={{flexDirection: 'row',
          flexWrap: 'wrap', alignItems: 'center'}}>
          <Icon
              containerStyle={{ left:10, justifyContent: 'center'}}
              reverse
              name='cart-arrow-down'
              type='font-awesome'
              color='green'
              size={20}
              onPress={() => this.agregarPedido(item)}
          />
          <Text style={styles.restaurant}>{item.vcNombre}</Text>
        </View>
        <Text style={styles.titulo}>{item.tit}</Text>
        <Text style={styles.subtitulo}>{item.desc}</Text>
        <Text ></Text>
        <Text ></Text>

        <Divider style={{ backgroundColor: 'black' }} />

      </View>
     )
  }

  agregarPedido(item) {
    var producto={nombre:item.tit, foto:item.foto, descripcion: item.desc };
    this.state.productos.push(producto); 
    AsyncStorage.setItem('Productos',JSON.stringify(this.state.productos));
    Alert.alert(producto.nombre, producto.descripcion);
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