import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import CardProfile from './CardProfile';
import TopBar from './TopBar';
import Hotel from 'react-native-vector-icons/FontAwesome5';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';

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
                <CardProfile toggleOptions={toggleOptions} />
            </View>
            <View style={styles.moreInfo}>
                <View style={styles.moreInfoLeft}>
                  <Hotel name="hotel" style={{ color: '#FF881A', fontSize: 16 }} />
                  <Text style={{ fontFamily: 'poppins', fontSize: 20, color: '#EEEEEE'}}>My Trips</Text>
                </View>
                <ArrowRight name="arrow-forward-ios" style={{ color: '#EEEEEE', fontSize: 15 }} />
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
    flexDirection: 'column',
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
  },
  cardProfile: {
    width: '100%',
    height: '20%',
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px'
  },
  moreInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginTop: 20
  },
  moreInfoLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  }
});