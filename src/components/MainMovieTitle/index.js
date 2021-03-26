import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {whiteColor} from '../../../constants/themes';

export const MainMovieTitle = ({children, ...otherProps}) => (
  <Text style={styles.title} {...otherProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: whiteColor,
    marginBottom: 20,
  },
});
