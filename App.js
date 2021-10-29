/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClientProvider, QueryClient} from 'react-query';
import {NativeBaseProvider} from 'native-base';
import Home from './src/screens/Home';
import Player from './src/screens/Player';
import {theme} from './src/theme';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />

        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Player" component={Player} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  </QueryClientProvider>
);

export default App;
