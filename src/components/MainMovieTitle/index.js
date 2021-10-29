import {Text} from 'native-base';
import React from 'react';

export const MainMovieTitle = ({children, ...otherProps}) => (
  <Text color="white" fontSize={40} marginBottom={10} {...otherProps}>
    {children}
  </Text>
);
