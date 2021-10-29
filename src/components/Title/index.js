import {Text} from 'native-base';
import React from 'react';

export const Title = ({children, ...otherProps}) => (
  <Text
    color="white"
    marginLeft={6}
    marginBottom={2}
    marginTop={2}
    fontSize={22}
    fontFamily="Roboto-Bold"
    {...otherProps}>
    {children}
  </Text>
);
