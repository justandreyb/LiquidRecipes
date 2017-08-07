import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import jquery from 'jquery';
import Tether from 'tether';

import store from './store';
import routes from './router';

window.jQuery = jquery;
window.Tether = Tether;

require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

render(
  <Provider store = { store } >
    <div className = 'app' > { routes } </div>
  </Provider>,
    document.getElementById('react')
);
