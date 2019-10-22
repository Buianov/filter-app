import React from 'react';
import { Provider } from 'react-redux';
import MainPage from '../MainPage';

import store from '../../store';

const App = () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);

export default App;
