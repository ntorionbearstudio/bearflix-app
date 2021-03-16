/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-magnus';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClientProvider, QueryClient} from 'react-query';
import THEMES from './constants/themes';
import {ToastProvider} from './src/contexts/ToastContext';
import Home from './src/screens/Home';
import Account from './src/screens/Account';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={THEMES.default}>
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" backgroundColor="#000000" />

          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </ToastProvider>
  </ThemeProvider>
);

export default App;
