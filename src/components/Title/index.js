import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {whiteColor} from '../../../constants/themes';

export const Title = ({children, ...otherProps}) => (
  <Text style={styles.title} {...otherProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: whiteColor,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
  },
});
