import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button, CheckIcon, AddIcon, Text, Center} from 'native-base';
import Icon from 'react-native-ionicons';
import {grayColor, whiteColor} from '../../../../../constants/themes';
import {Title} from '../../../../components/Title';
import {useMyList} from '../../../../services/myListService';

export const MovieModal = ({showModal, onHideModal, movie}) => {
  const navigation = useNavigation();
  const [isItemInMyListValue, setIsItemInMyListValue] = useState(false);
  const [, addItemToMyList, removeItemFromMyList, isItemInMyList] = useMyList();

  const loadMyList = useCallback(async () => {
    const isItemInList = await isItemInMyList(movie);
    setIsItemInMyListValue(isItemInList);
  }, [movie, isItemInMyList]);

  useEffect(() => {
    loadMyList();
  }, [loadMyList]);

  const handleOpenPlayer = () => {
    onHideModal();
    navigation.navigate('Player');
  };

  const handlePressItemInMyList = async () => {
    if (await isItemInMyList(movie)) {
      await removeItemFromMyList(movie);
    } else {
      await addItemToMyList(movie);
    }

    loadMyList();
  };

  // Modal Docs : https://reactnative.dev/docs/modal
  // TouchableWithoutFeedback : https://reactnative.dev/docs/touchablewithoutfeedback

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
          <Button py={4} px={6} bg="primary.400" onPress={handleOpenPlayer}>
            Lecture
          </Button>

          <TouchableOpacity
            onPress={handlePressItemInMyList}
            style={styles.plusButton}>
            <Center>
              {isItemInMyListValue ? (
                <CheckIcon size="sm" name="check" color="white" />
              ) : (
                <AddIcon size="sm" name="plus" color="white" />
              )}
              <Text fontSize="xs" color="white">
                Ma liste
              </Text>
            </Center>
          </TouchableOpacity>
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
    flexDirection: 'row',
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
  plusButton: {
    marginLeft: 20,
  },
});
