import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

const remote = require('../assets/images/green1.png');

export default class BackgroundImage extends Component {
  static navigationOptions = {
    headerTitle: 'Green Delivery',
     
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
      tipo: '1'
    }
  }
  render() {
    const resizeMode = 'cover';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <View style={{ position: 'absolute', right:30, top: 80, zIndex:10, alignItems:'center', backgroundColor:'white', borderRadius: 5 }}>
          <Icon
            reverse
            name='cart-arrow-down'
            type='font-awesome'
            color='green'
            size={35}
            onPress={() => this.props.navigation.navigate( 'Productos' ,{paramTipo: this.state.tipo})}
            />
            <Text style={{ fontSize:20}}>Combos</Text>  
           </View> 
           <View style={{ position: 'absolute', left:30, top: 80, zIndex:10, alignItems:'center', backgroundColor:'white', borderRadius: 5 }}> 
            <Icon
            reverse
            name='truck'
            type='font-awesome'
            color='green'
            size={35}
            onPress={() => this.props.navigation.navigate( 'Productos' ,{paramTipo: this.state.tipo})}
            />  
            <Text style={{ fontSize:20}}>Al Mayor</Text>  
           </View> 
            
          
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={remote}
          />
        </View>
            
          <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          
        </View>
      </View>
    );
  }
}
