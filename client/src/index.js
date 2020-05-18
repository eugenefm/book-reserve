import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import Home from './components/Header';
import Results from './components/Results';
import Footer from './components/Footer';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router>
        <Route exact path='/' component={Home} />
        <Route path='/results' component={Results} /> 
      </Router> */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
