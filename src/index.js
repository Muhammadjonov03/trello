import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppContainer from './AppContainer';
import  {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
    <Provider store={store}>
      <Router>
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
      </Router>
    </Provider>,
  document.getElementById('root')
);
