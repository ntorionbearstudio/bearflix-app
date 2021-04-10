import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const MovieCard = ({item, onMovieSelected}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleMoviePressed = () => {
    onMovieSelected(item);
  };

  return (
    <TouchableOpacity onPress={handleMoviePressed}>
      <FastImage
        style={[
          styles.image,
          {
            width: windowWidth / 3.5,
            height: windowHeight / 4.5,
          },
        ]}
        source={{
          uri: item?.urls?.small,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
};

const MyList = ({movies, onMovieSelected}) => (
  <View style={styles.container}>
    <FlatList
      data={movies}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({item, index}) => (
        <MovieCard
          item={item}
          index={index}
          onMovieSelected={onMovieSelected}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    borderRadius: 5,
    margin: 5,
  },
  columnWrapper: {justifyContent: 'flex-start'},
});

export default MyList;
