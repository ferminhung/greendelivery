import React from 'react';
import {
  View, Alert, StyleSheet, 
  Text, AsyncStorage, ScrollView, FlatList, Image,
} from 'react-native';
import { ListItem, Divider, Icon, } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Green Delivery',
  };
  constructor(props) {
	  super();
	  this.state = {
	      list: [],
	  }
	}

  componentDidMount = () => AsyncStorage.getItem('Productos')
  .then((value) => this.setState({ list: JSON.parse(value) }))	
	
  render() {
  	const dataSource = [
      

      {tit:"Atendemos en estas Zonas del Zulia",foto:require("../assets/images/green4.jpg"),desc:"Zona Norte, Delicias, Av. el Milagro, La Limpia, San Francisco y Santa Rita",promo:"n",precio:"",orden:"1"},


    ];

    return (

    	<View >
        
        
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