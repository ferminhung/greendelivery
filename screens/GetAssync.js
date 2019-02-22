import React from 'react';
import { AsyncStorage } from 'react-native';

export const fetchProductos = async () => {
  try {
    let highScores = await AsyncStorage.getItem("Productos");


    return highScores;
  } catch (error) {
    console.log('Error fetching', error);
  }
}
