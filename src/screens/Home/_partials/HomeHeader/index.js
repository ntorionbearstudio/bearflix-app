import React, {useRef, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {Icon} from 'react-native-magnus';
import {HeaderLink} from '../../../../components/HeaderLink';
import {Title} from '../../../../components/Title';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const HomeHeader = ({height, opacity, headTop}) => {
  let animSeries = useRef(new Animated.Value(-25)).current;
  let animMovies = useRef(new Animated.Value(75)).current;
  let animList = useRef(new Animated.Value(175)).current;

  const [seriesSelected, setSeriesSelected] = useState(false);
  const [moviesSelected, setMoviessSelected] = useState(false);
  const [listSelected, setListSelected] = useState(false);

  const handlePressLink = (animObj, toValue) => {
    Animated.timing(animObj, {
      toValue,
      duration: 500,
      easing: Easing.cubic,
    }).start();
  };

  const handlePressSeries = () => {
    setSeriesSelected(true);
    setListSelected(false);
    setMoviessSelected(false);
    handlePressLink(animSeries, -90);
  };

  const handlePressMovies = () => {
    setSeriesSelected(false);
    setListSelected(false);
    setMoviessSelected(true);
    handlePressLink(animMovies, -90);
  };

  const handlePressList = () => {
    setSeriesSelected(false);
    setListSelected(true);
    setMoviessSelected(false);
    handlePressLink(animList, -90);
  };

  const handleRemoveFilter = () => {
    setSeriesSelected(false);
    setListSelected(false);
    setMoviessSelected(false);

    handlePressLink(animSeries, -25);
    handlePressLink(animMovies, 75);
    handlePressLink(animList, 175);
  };

  return (
    <View>
      <Animated.View style={[styles.header, {height}]} opacity={opacity} />
      <Animated.View style={[styles.headerContent, {height}]}>
        {(seriesSelected || moviesSelected || listSelected) && (
          <View style={styles.headerCategory}>
            <TouchableOpacity onPress={handleRemoveFilter}>
              <Icon name="arrowleft" color="white" fontSize="3xl" />
            </TouchableOpacity>
            {seriesSelected && <Title>Séries</Title>}
            {moviesSelected && <Title>Films</Title>}
            {listSelected && <Title>Ma liste</Title>}
          </View>
        )}

        {!seriesSelected && !moviesSelected && !listSelected && (
          <Animated.View style={{left: 0, top: headTop}}>
            <Image
              source={require('../../../../../assets/logo.png')}
              style={styles.logo}
            />
          </Animated.View>
        )}

        <Animated.View style={[styles.headerLinksContent, {height}]}>
          <View style={styles.headerLinks}>
            <HeaderLink
              onPress={handlePressSeries}
              leftPosition={animSeries}
              hidden={moviesSelected || listSelected}>
              Séries
            </HeaderLink>
            <HeaderLink
              onPress={handlePressMovies}
              leftPosition={animMovies}
              hidden={seriesSelected || listSelected}>
              Films
            </HeaderLink>
            <HeaderLink
              onPress={handlePressList}
              leftPosition={animList}
              hidden={moviesSelected || seriesSelected}>
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
  logo: {
    width: 40,
    height: 40,
    margin: 10,
  },
});
