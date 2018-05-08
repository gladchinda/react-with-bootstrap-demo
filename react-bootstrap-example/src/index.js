import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeSwitcher from './ThemeSwitcher';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ThemeSwitcher />, document.getElementById('root'));
registerServiceWorker();
