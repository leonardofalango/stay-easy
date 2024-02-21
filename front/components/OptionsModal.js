import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';

export default function OptionsModal({ modalOptionsVisible }) {
  return (
    <Modal
      isVisible={modalOptionsVisible}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropOpacity={0}
    //   onBackdropPress = {?????????????}
    //   style={{ }}
    >

        <View>
            <Text>
                content
            </Text>
        </View>

    </Modal>
  );
}

const styles = StyleSheet.create({
    modalView: {
        width: '80vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
      },
});