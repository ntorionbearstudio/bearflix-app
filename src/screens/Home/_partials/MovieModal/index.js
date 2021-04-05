import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button, Icon} from 'react-native-magnus';
import {grayColor, whiteColor} from '../../../../../constants/themes';
import {Title} from '../../../../components/Title';

export const MovieModal = ({showModal, onHideModal, movie}) => {
  const navigation = useNavigation();

  const handleOpenPlayer = () => {
    onHideModal();
    navigation.navigate('Player');
  };

  return (
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
      {console.log({movie})}
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <FastImage
            style={styles.image}
            source={{
              uri: movie?.urls?.small,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.movieDetails}>
            <Title numberOfLines={1} style={styles.modalTitle}>
              {movie?.description || 'Bears'}
            </Title>
            <Text style={styles.movieDescription}>
              {movie?.alt_description}
            </Text>
          </View>
        </View>

        <View style={styles.modalFooter}>
          <Button
            block
            py="sm"
            px="lg"
            bg="white"
            color="black"
            prefix={<Icon name="caretright" mr="sm" color="black" />}
            onPress={handleOpenPlayer}>
            Lecture
          </Button>
        </View>
      </View>
    </Modal>
  );
};

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
    padding: 12,
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalFooter: {
    marginTop: 10,
    flex: 1,
  },
  modalTitle: {
    marginTop: 0,
  },
  movieDescription: {
    color: whiteColor,
    marginLeft: 25,
  },
  movieDetails: {
    flex: 1,
  },
  image: {
    width: 95,
    height: 130,
    borderRadius: 5,
  },
});
