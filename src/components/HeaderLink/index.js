import React from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {whiteColor} from '../../../constants/themes';

export const HeaderLink = ({
  children,
  onPress,
  leftPosition,
  hidden,
  ...otherProps
}) => {
  if (hidden) {
    return <View />;
  }

  return (
    <Animated.View style={{position: 'absolute', left: leftPosition}}>
      <TouchableNativeFeedback
        onPress={onPress}
        style={styles.headerLinkContainer}>
        <Text style={styles.headerLink} {...otherProps}>
          {children}
        </Text>
      </TouchableNativeFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerLinkContainer: {
    padding: 10,
  },
  headerLink: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: whiteColor,
  },
});
