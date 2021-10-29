import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Box, Button, Icon} from 'native-base';
import {MainMovieTitle} from '../../../../components/MainMovieTitle';

export const HomeContent = ({scrollPosition, children, backgroundImage}) => {
  const navigation = useNavigation();

  const handleOpenPlayer = () => {
    navigation.navigate('Player');
  };

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
        {useNativeDriver: false},
      )}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <ImageBackground
        source={{uri: backgroundImage}}
        style={styles.imageBackground}>
        <LinearGradient
          colors={['#FFFFFF00', '#000000']}
          style={styles.gradientContent}>
          <MainMovieTitle>B E A R S</MainMovieTitle>
          <View>
            <Button py={2} px={5} bg="primary.400" onPress={handleOpenPlayer}>
              Lecture
            </Button>
          </View>
        </LinearGradient>
      </ImageBackground>
      <Box marginTop={5}>{children}</Box>
    </Animated.ScrollView>
  );
};

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
    height: 300,
  },
});
