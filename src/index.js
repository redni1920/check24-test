import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// This will be provided by initialStateProvider
import slide1 from './assets/images/slide_1.jpg';
import slide2 from './assets/images/slide_2.jpg';
import slide3 from './assets/images/slide_3.jpg';

const initialState = {
  slides: [slide1, slide2, slide3]
};

ReactDOM.render(
  <React.StrictMode>
    <App initialState={initialState} />
  </React.StrictMode>,
  document.getElementById('root')
);
