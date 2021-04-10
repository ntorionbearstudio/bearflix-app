import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {bodyColor} from '../../../constants/themes';
import {Title} from '../../components/Title';
import {CATEGORIES, useSelectedCategory} from '../../services/categoryService';
import {useMyList} from '../../services/myListService';
import {getMovies} from '../../services/picturesService';
import {HomeContent} from './_partials/HomeContent';
import {HomeHeader} from './_partials/HomeHeader';
import {MovieModal} from './_partials/MovieModal';
import MoviesCategory from './_partials/MoviesCategory';
import MyList from './_partials/MyList';

const mainImage =
  'https://i.pinimg.com/originals/e4/15/70/e41570d63224ed8f0e3872eacbe1fc00.jpg';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(mainImage);
  const [movies, setMovies] = useState([]);
  const [myList, setMyList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useSelectedCategory();
  const [getMyList] = useMyList();

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
    inputRange: [0, 500],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const handleShowMovieModal = (movie) => {
    setShowMovieModal(true);
    setSelectedMovie(movie);
  };

  const handleHideMovieModal = () => {
    setShowMovieModal(false);
    setSelectedMovie(null);
  };

  const handleSelectCategory = (category = null) => {
    setSelectedCategory(category);

    //If the selected category is "My list" we take the list from the async storage.
    if (category !== CATEGORIES.MY_LIST) {
      loadMovies();
    } else {
      loadMyList();
    }

    // If no category is selected, we reset the background image to the first image.
    if (!category) {
      setBackgroundImage(mainImage);
    } else {
      setBackgroundImage(
        movies[Math.floor(Math.random() * movies.length)].urls?.regular,
      );
    }
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

  const loadMyList = useCallback(async () => {
    setMyList(await getMyList());
  }, [getMyList]);

  useEffect(() => {
    loadMyList();
  }, [loadMyList]);

  return (
    <View style={styles.body}>
      <HomeHeader
        height={headerHeight}
        opacity={headerOpacity}
        headTop={headerHeadTop}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {!selectedCategory.myList ? (
        <HomeContent
          scrollPosition={scrollPosition}
          backgroundImage={backgroundImage}>
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
      ) : (
        <View style={styles.myListContainer}>
          <MyList movies={myList} onMovieSelected={handleShowMovieModal} />
        </View>
      )}

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
    flex: 1,
    backgroundColor: bodyColor,
  },
  myListContainer: {
    flex: 1,
    paddingTop: 100,
  },
});

export default Home;
