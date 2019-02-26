import React from 'react';
import {
  View, Alert, 
  Text, AsyncStorage, ScrollView,
} from 'react-native';
import { ListItem, ButtonGroup } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

export default class PedidoScreen extends React.Component {
  static navigationOptions = {
    title: 'Resumen del Pedido',
  };
  constructor(props) {
	  super();
	  this.state = {
	      list: [],
	      productos: [],
		  selectedIndex: 2, 
	    }
	  this.updateIndex = this.updateIndex.bind(this)
	  }

	  updateIndex (selectedIndex) {
	    this.setState({selectedIndex});
	    this.nuevaSeleccion(selectedIndex);
	  }
  componentDidMount = () => AsyncStorage.getItem('Productos')
  .then((value) => this.setState({ list: JSON.parse(value) }))	
    
  
  nuevaSeleccion(tipo) {
    
    if(tipo==0){
    	AsyncStorage.setItem('Productos',JSON.stringify(this.state.productos));
    	this.props.navigation.navigate( 'Home' );
    }else{
	    Alert.alert("Envio","La solicitud se envio a nuestro centro de atención, en segundos confirmamos el pedido");
    	this.props.navigation.navigate( 'Home' );
    }
  }

  render() {
  	const buttons = ['Borrar Pedido', 'Enviar Pedido']
    const { selectedIndex } = this.state


    return (

    	<View>
    		<ButtonGroup
	          onPress={this.updateIndex}
	          selectedIndex={selectedIndex}
	          buttons={buttons}
	          containerStyle={{height: 40}}
	        /> 
    		<ScrollView>
				  {
				    this.state.list.map((l, i) => (
				      <ListItem
				        key={i}
				        leftAvatar={{ source: l.foto }}
				        title={l.nombre}
				        subtitle={l.descripcion}
				        chevron
				      />
				    ))
				  }
			<Text></Text>
			<Text></Text>
			<Text></Text>
			<Text></Text>
			<Text></Text>
			<Text></Text>
			<Text></Text>
			</ScrollView>
			
		</View>
    	);
  }
}
