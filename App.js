/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import HomeSceen from './src/sceen/Home';

const App = () => {
  return (
  <Provider store={store}>
    <HomeSceen/>
  </Provider>
  );
};

export default App;
