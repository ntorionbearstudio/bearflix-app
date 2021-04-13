import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const MovieCard = ({item, index, onMovieSelected}) => {
  const handleMoviePressed = () => {
    onMovieSelected(item);
  };

  // TouchableOpacity : https://reactnative.dev/docs/touchableopacity

  return (
    <TouchableOpacity onPress={handleMoviePressed}>
      <FastImage
        // eslint-disable-next-line react-native/no-inline-styles
        style={[styles.image, {marginLeft: index === 0 ? 25 : 0}]}
        source={{
          uri: item?.urls?.small,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 95,
    height: 130,
    borderRadius: 5,
  },
});

export default MovieCard;
