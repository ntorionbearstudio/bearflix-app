import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {MainMovieTitle} from '../../../../components/MainMovieTitle';

const mainImage =
  'https://images.unsplash.com/photo-1588167056840-13caf6e4562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY3NDh8MHwxfHNlYXJjaHwxfHxiZWFyfGVufDB8fHx8MTYxNjQ0ODE0MA&ixlib=rb-1.2.1&q=80&w=1080';

export const HomeContent = ({scrollPosition, children}) => (
  <Animated.ScrollView
    onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
      {useNativeDriver: false},
    )}
    contentInsetAdjustmentBehavior="automatic"
    style={styles.scrollView}>
    <ImageBackground source={{uri: mainImage}} style={styles.imageBackground}>
      <LinearGradient
        colors={['#FFFFFF00', '#000000']}
        style={styles.gradientContent}>
        <MainMovieTitle>B E A R S</MainMovieTitle>
      </LinearGradient>
    </ImageBackground>
    <View>{children}</View>
  </Animated.ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
    top: 0,
  },
  imageBackground: {
    flex: 1,
    height: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gradientContent: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
