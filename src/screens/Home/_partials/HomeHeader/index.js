import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {HeaderLink} from '../../../../components/HeaderLink';

export const HomeHeader = ({height, opacity, headTop}) => (
  <View>
    <Animated.View style={[styles.header, {height}]} opacity={opacity} />
    <Animated.View style={[styles.headerContent, {height}]}>
      <Animated.View style={{left: 0, top: headTop}}>
        <Image
          source={require('../../../../../assets/logo.png')}
          style={styles.logo}
        />
      </Animated.View>

      <Animated.View style={[styles.headerLinksContent, {height}]}>
        <View style={styles.headerLinks}>
          <HeaderLink>Séries</HeaderLink>
          <HeaderLink>Films</HeaderLink>
          <HeaderLink>Ma liste</HeaderLink>
        </View>
      </Animated.View>
    </Animated.View>
  </View>
);

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
    top: 0,
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
  logo: {
    width: 40,
    height: 40,
    margin: 10,
  },
});
