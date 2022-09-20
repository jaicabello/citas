import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Paciente = ({item}) => {
  const {paciente, fecha} = item;
  return (
    <View>
      <Text>{paciente}</Text>
      <Text>{fecha}</Text>
    </View>
  );
};

export default Paciente;
