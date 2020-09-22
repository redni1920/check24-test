import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initialState from './services/initialStateProvider';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App initialState={initialState} />
  </React.StrictMode>,
  document.getElementById('root')
);
