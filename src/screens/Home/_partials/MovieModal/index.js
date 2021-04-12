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
import {Button, Icon, Text} from 'react-native-magnus';
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
          <Button
            py="sm"
            px="lg"
            bg="white"
            color="black"
            prefix={<Icon name="caretright" mr="sm" color="black" />}
            onPress={handleOpenPlayer}>
            Lecture
          </Button>

          <TouchableOpacity
            onPress={handlePressItemInMyList}
            style={styles.plusButton}>
            {isItemInMyListValue ? (
              <Icon fontSize="2xl" name="check" mr="sm" color="white" />
            ) : (
              <Icon fontSize="2xl" name="plus" mr="sm" color="white" />
            )}
            <Text color="white">Ma liste</Text>
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
