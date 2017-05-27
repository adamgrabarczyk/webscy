import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import './index.css';
import './home.css'

ReactDOM.render(
    <App user="John" />,
  document.getElementById('root')
);
