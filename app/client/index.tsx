import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as io from 'socket.io-client';

import App from './components/App';

const socket = io.connect();

render(
  <BrowserRouter>
    <App color="red" />
  </BrowserRouter>,
  document.querySelector('#root')
);
