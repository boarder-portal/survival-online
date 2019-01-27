import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

render(
  <BrowserRouter>
    <App color="red" />
  </BrowserRouter>,
  document.querySelector('#root')
);
