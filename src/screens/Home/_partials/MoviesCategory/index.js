import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Div, Skeleton} from 'react-native-magnus';
import {getMovies} from '../../../../services/picturesService';

const MovieCard = ({image, index}) => (
  <TouchableOpacity>
    <FastImage
      style={{
        width: 85,
        height: 120,
        borderRadius: 5,
        marginLeft: index > 0 ? 10 : 0,
      }}
      source={{
        uri: image,
      }}
      resizeMode={FastImage.resizeMode.cover}
    />
  </TouchableOpacity>
);

const MoviesCategory = ({categoryId}) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMovies = useCallback(async () => {
    setIsLoading(true);

    const [error, moviesData] = await getMovies(categoryId);

    if (!error && moviesData) {
      setMovies(moviesData);
    }

    setIsLoading(false);
  }, [categoryId]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  if (isLoading) {
    return (
      <Div flexDir="row">
        <Skeleton.Box h={120} w={85} />
        <Skeleton.Box h={120} w={85} ml={10} />
        <Skeleton.Box h={120} w={85} ml={10} />
        <Skeleton.Box h={120} w={85} ml={10} />
      </Div>
    );
  }

  return (
    <Div>
      <FlatList
        data={movies}
        renderItem={({item, index}) => (
          <MovieCard image={item.urls.small} index={index} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </Div>
  );
};

export default MoviesCategory;
