import { createStore, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import todoSagas from './sagas'
import reducer from './reducer'

// redux-devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  //redux-thunk
  //applyMiddleware(thunk),
  //redux-saga
  applyMiddleware(sagaMiddleware)
);
const store = createStore(
  reducer,
  enhancer
)
sagaMiddleware.run(todoSagas)

export default store