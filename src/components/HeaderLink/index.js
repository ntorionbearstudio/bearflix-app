import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {whiteColor} from '../../../constants/themes';

export const HeaderLink = ({children, ...otherProps}) => (
  <Text style={styles.headerLink} {...otherProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  headerLink: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: whiteColor,
  },
});
