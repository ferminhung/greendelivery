import React from 'react';
import {
  View, Alert, 
  Text, AsyncStorage, 
} from 'react-native';
import { ListItem } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Resumen del Pedido',
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
  	

    return (
    	<View>
		  {
		    this.state.list.map((l, i) => (
		      <ListItem
		        key={i}
		        leftAvatar={{ source: l.foto }}
		        title={l.nombre}
		        subtitle={l.descripcion}
		      />
		    ))
		  }
		</View>
    	);
  }
}
