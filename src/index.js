import React from 'react';
import ReactDOM from 'react-dom';
// import Toodlist from './Toodlist';
// import Toodlist from './Toodlist.jsx';
import Todo from './Todo'
// import App from './App';

import { Provider } from 'react-redux'
import store from './store'

const App = (
  <Provider store={store}>
    <Todo />
  </Provider>
)

//ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Toodlist />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));
