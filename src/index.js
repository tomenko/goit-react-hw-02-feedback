import React from 'react';
import ReactDOM from 'react-dom';
import css from  './index.module.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App className={css}/>
  </React.StrictMode>,
  document.getElementById('root')
);

