import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {Provider} from 'react-redux';
import {searchRobots,requestRobots} from './reducers';
import {legacy_createStore as createStore, applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {thunk as thunkMiddleware}  from 'redux-thunk';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// const thunkMiddleware =
//   ({ dispatch, getState }) =>
//   next =>
//   action => {
//     // If the "action" is actually a function instead...
//     if (typeof action === 'function') {
//       // then call the function and pass `dispatch` and `getState` as arguments
//       return action(dispatch, getState)
//     }

//     // Otherwise, it's a normal action - send it onwards
//     return next(action)
//   }
const rootReducer=combineReducers({searchRobots,requestRobots})
const Logger = createLogger();
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,Logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();.

