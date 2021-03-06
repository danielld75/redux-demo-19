import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import {addComment} from './actions';
import './index.css';
import App from './App';
import DevTools from './DevTools'
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));