import React, {useRef} from 'react';
import {StyleSheet, View, Animated, Easing} from 'react-native';
import {ArrowBackIcon, Image} from 'native-base';
import {HeaderLink} from '../../../../components/HeaderLink';
import {Title} from '../../../../components/Title';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CATEGORIES} from '../../../../services/categoryService';

export const HomeHeader = ({
  height,
  opacity,
  headTop,
  selectedCategory,
  onSelectCategory,
}) => {
  let animSeries = useRef(new Animated.Value(-25)).current;
  let animMovies = useRef(new Animated.Value(75)).current;
  let animList = useRef(new Animated.Value(175)).current;

  const handlePressLink = (animObj, toValue) => {
    Animated.timing(animObj, {
      toValue,
      duration: 500,
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  };

  const handlePressSeries = () => {
    handlePressLink(animSeries, -90);
    onSelectCategory(CATEGORIES.SERIES);
  };

  const handlePressMovies = () => {
    handlePressLink(animMovies, -90);
    onSelectCategory(CATEGORIES.MOVIES);
  };

  const handlePressList = () => {
    handlePressLink(animList, -90);
    onSelectCategory(CATEGORIES.MY_LIST);
  };

  const handleRemoveFilter = () => {
    handlePressLink(animSeries, -25);
    handlePressLink(animMovies, 75);
    handlePressLink(animList, 175);
    onSelectCategory();
  };

  return (
    <View>
      <Animated.View style={[styles.header, {height}]} opacity={opacity} />
      <Animated.View style={[styles.headerContent, {height}]}>
        <Animated.View style={{left: 0, top: headTop}}>
          {(selectedCategory.series ||
            selectedCategory.movies ||
            selectedCategory.myList) && (
            <View style={styles.headerCategory}>
              <TouchableOpacity onPress={handleRemoveFilter}>
                <ArrowBackIcon color="white" fontSize="3xl" />
              </TouchableOpacity>
              {selectedCategory.series && <Title>Séries</Title>}
              {selectedCategory.movies && <Title>Films</Title>}
              {selectedCategory.myList && <Title>Ma liste</Title>}
            </View>
          )}

          {!selectedCategory.series &&
            !selectedCategory.movies &&
            !selectedCategory.myList && (
              <Image
                source={require('../../../../../assets/logo.png')}
                alt="logo"
                w={10}
                h={10}
                m={2}
              />
            )}
        </Animated.View>

        <Animated.View style={[styles.headerLinksContent, {height}]}>
          <View style={styles.headerLinks}>
            <HeaderLink
              onPress={handlePressSeries}
              leftPosition={animSeries}
              hidden={selectedCategory.movies || selectedCategory.myList}>
              Séries
            </HeaderLink>
            <HeaderLink
              onPress={handlePressMovies}
              leftPosition={animMovies}
              hidden={selectedCategory.series || selectedCategory.myList}>
              Films
            </HeaderLink>
            <HeaderLink
              onPress={handlePressList}
              leftPosition={animList}
              hidden={selectedCategory.movies || selectedCategory.series}>
              Ma liste
            </HeaderLink>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'black',
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  headerLinksContent: {
    position: 'absolute',
    top: -30,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 100,
    marginRight: 100,
  },
  headerLinks: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerCategory: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
});
