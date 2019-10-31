import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#003366" />
      <Routes />
    </>
  );
};

export default App;
