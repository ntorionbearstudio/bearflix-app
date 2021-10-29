import React from 'react';
import {FlatList, View} from 'react-native';
import {Skeleton} from 'react-native-magnus';
import {Box} from 'native-base';
import MovieCard from '../MovieCard';

const MoviesCategory = ({movies, loading, onMovieSelected}) => {
  if (loading) {
    return (
      <Box flexDir="row">
        <Skeleton.Box h={130} w={95} ml={25} />
        <Skeleton.Box h={130} w={95} ml={10} />
        <Skeleton.Box h={130} w={95} ml={10} />
        <Skeleton.Box h={130} w={95} ml={10} />
      </Box>
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
        ItemSeparatorComponent={() => <Box marginLeft={2} />}
        horizontal
      />
    </View>
  );
};

export default MoviesCategory;
