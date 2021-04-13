import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimations = () => {
  // Animated API : https://reactnative.dev/docs/animated

  const scrollPosition = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [100, 60],
    extrapolate: 'clamp',
  });

  const headerHeadTop = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return [scrollPosition, {headerHeight, headerHeadTop, headerOpacity}];
};
