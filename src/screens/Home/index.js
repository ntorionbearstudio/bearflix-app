import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {bodyColor} from '../../../constants/themes';
import {Title} from '../../components/Title';
import {getMovies} from '../../services/picturesService';
import {HomeContent} from './_partials/HomeContent';
import {HomeHeader} from './_partials/HomeHeader';
import {MovieModal} from './_partials/MovieModal';
import MoviesCategory from './_partials/MoviesCategory';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [movies, setMovies] = useState([]);

  const scrollPosition = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [100, 60],
    extrapolate: 'clamp',
  });

  const headerHeadTop = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollPosition.interpolate({
    inputRange: [0, 250, 500],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp',
  });

  const handleShowMovieModal = (movie) => {
    setShowMovieModal(true);
    setSelectedMovie(movie);
  };

  const handleHideMovieModal = (movie) => {
    setShowMovieModal(false);
    setSelectedMovie(null);
  };

  const loadMovies = useCallback(async () => {
    setIsLoading(true);

    const [error, moviesData] = await getMovies();

    if (!error && moviesData) {
      setMovies(moviesData);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <View style={styles.body}>
      <HomeHeader
        height={headerHeight}
        opacity={headerOpacity}
        headTop={headerHeadTop}
      />

      <HomeContent scrollPosition={scrollPosition}>
        <Title>Les plus gros succès de Bearflix</Title>
        <MoviesCategory
          movies={movies.slice(1, 10)}
          loading={isLoading}
          onMovieSelected={handleShowMovieModal}
        />

        <Title>Programmes originaux Bearflix</Title>
        <MoviesCategory
          movies={movies.slice(11, 20)}
          loading={isLoading}
          onMovieSelected={handleShowMovieModal}
        />

        <Title>Top 10</Title>
        <MoviesCategory
          movies={movies.slice(21, 30)}
          loading={isLoading}
          onMovieSelected={handleShowMovieModal}
        />

        <Title>Revoir</Title>
        <MoviesCategory
          movies={movies.slice(5, 14)}
          loading={isLoading}
          onMovieSelected={handleShowMovieModal}
        />

        <Title>Nouveautés</Title>
        <MoviesCategory
          movies={movies.slice(15, 25)}
          loading={isLoading}
          onMovieSelected={handleShowMovieModal}
        />
      </HomeContent>

      <MovieModal
        showModal={showMovieModal}
        onHideModal={handleHideMovieModal}
        movie={selectedMovie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: bodyColor,
  },
});

export default Home;
