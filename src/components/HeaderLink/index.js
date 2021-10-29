import {Text} from 'native-base';
import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

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
        <Text color="white" {...otherProps}>
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
});
