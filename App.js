/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';

const App = () => {
  return <Text style={styles.body}>Hello world</Text>;
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
