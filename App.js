import '~/config/ReactotronConfig';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const white = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
  </View>
);

export default App;
