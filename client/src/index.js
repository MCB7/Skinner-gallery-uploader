import React from 'react';
import ReactDOM from 'react-dom';


//redux imports
import {Provider} from 'react-redux';
//middleware is incase we need redux thunk but currently isnt used
import { createStore, applyMiddleware} from 'redux'

import './index.css';

import reducers from './Reducers/index';
import App from './App';
import AppGallery from './AppGallery';
import reportWebVitals from './reportWebVitals';
import ContactUs from './Componets/ContactForm'
import Overlay from './Componets/ContactOverlay'
import InstaMsgOverlay from './Componets/InstaMsgIconOverlay'

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

//typically takes in tthe reducers and middleware
const store = createStore(reducers)
//wrap app in the provider tag and pass in the create store.
ReactDOM.render(
  <Provider store={store} >,
  <React.StrictMode>,
    <App />,
    <Overlay />,
  </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
