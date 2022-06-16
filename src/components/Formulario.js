import React from 'react';
import {Modal, Text, Button, SafeAreaView} from 'react-native';

const Formulario = ({showModal}) => {
  return (
    <Modal animationType="slide" visible={showModal}>
      <SafeAreaView></SafeAreaView>
    </Modal>
  );
};

export default Formulario;
