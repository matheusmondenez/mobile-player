import React from 'react';
import { Provider } from 'redux';
import { View } from 'react-native';

import 'config/ReactotronConfig';
import store from 'store';

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);

export default App;
