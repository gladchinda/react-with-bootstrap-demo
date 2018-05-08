import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeSwitcher from './components/ThemeSwitcher';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ThemeSwitcher />, document.getElementById('root'));
registerServiceWorker();
