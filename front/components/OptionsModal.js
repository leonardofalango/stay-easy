import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default function OptionsModal({ modalOptionsVisible, toggleOptions }) {
    
  return (
    <Modal
      isVisible={modalOptionsVisible}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropOpacity={0}
      style={{
        margin: 0,
      }}
    >

        <View style={styles.modalView}>
            <TouchableOpacity style={styles.buttonClose} onPress={() => toggleOptions()}>mim fechar</TouchableOpacity>
            <View style={styles.browsers}>

            </View>
            <View style={styles.cardProfile}>

            </View>
            <View style={styles.moreInfos}>

            </View>
        </View>

    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#222222',
    marginLeft: 0,
    left: 0,
  },
  buttonClose: {
    backgroundColor: 'blue',
    width: '50px',
    height: '50px',
    color: '#EEEEEE'
  },
  browsers: {
    width: '100%',
    height: '8%',
    backgroundColor: 'blue'
  }
});