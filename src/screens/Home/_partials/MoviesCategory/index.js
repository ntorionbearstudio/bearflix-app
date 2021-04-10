import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Div, Skeleton} from 'react-native-magnus';

const MovieCard = ({item, index, onMovieSelected}) => {
  const handleMoviePressed = () => {
    onMovieSelected(item);
  };

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

const MoviesCategory = ({movies, loading, onMovieSelected}) => {
  if (loading) {
    return (
      <Div flexDir="row">
        <Skeleton.Box h={130} w={95} ml={25} />
        <Skeleton.Box h={130} w={95} ml={10} />
        <Skeleton.Box h={130} w={95} ml={10} />
        <Skeleton.Box h={130} w={95} ml={10} />
      </Div>
    );
  }

  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({item, index}) => (
          <MovieCard
            item={item}
            index={index}
            onMovieSelected={onMovieSelected}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Div ml={10} />}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 95,
    height: 130,
    borderRadius: 5,
  },
});

export default MoviesCategory;
