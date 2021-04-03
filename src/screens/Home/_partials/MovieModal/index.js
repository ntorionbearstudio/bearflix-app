import React from 'react';
import {Modal, TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {grayColor} from '../../../../../constants/themes';
import {Title} from '../../../../components/Title';

export const MovieModal = ({showModal, onHideModal, movie}) => (
  <Modal
    transparent
    animationType="slide"
    visible={showModal}
    onRequestClose={onHideModal}>
    <View style={styles.modal}>
      <TouchableWithoutFeedback onPress={onHideModal}>
        <View style={styles.modalCloseArea} />
      </TouchableWithoutFeedback>
    </View>
    <View style={styles.modalContent}>
      <Title>Bears</Title>
      <FastImage
        style={styles.image}
        source={{
          uri: movie?.urls?.small,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalCloseArea: {
    height: '100%',
  },
  modalContent: {
    backgroundColor: grayColor,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 200,
  },
  image: {
    width: 95,
    height: 130,
    borderRadius: 5,
  },
});
