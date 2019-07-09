import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global';

import Routes from './routes';
import Header from './components/Header';

import './config/ReactotronConfig';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
