import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import '../style/style.css';
import '../style/social.sass';

render(
  <Routes />,
  document.getElementById('root')
);
