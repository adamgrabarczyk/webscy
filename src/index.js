import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-notifications/lib/notifications.css';
import './home.css'
import './index.css';


ReactDOM.render(
    <App user="John" />,
  document.getElementById('root')
);
