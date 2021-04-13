import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Div, Skeleton} from 'react-native-magnus';
import MovieCard from '../MovieCard';

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

  // FlatList Docs : https://reactnative.dev/docs/flatlist

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
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginLeft: 10,
  },
});

export default MoviesCategory;
