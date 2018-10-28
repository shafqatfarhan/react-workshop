import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './views/App/App';
import './index.css';


const store = configureStore();

const rootDiv = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
  <Router>
  <App />
  </Router>
  </Provider>,
rootDiv
);

