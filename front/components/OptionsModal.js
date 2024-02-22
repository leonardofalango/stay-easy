import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import TopBar from './TopBar';

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
            <TopBar btnFunc={() => toggleOptions()} pageName={'Configuration'}/>
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