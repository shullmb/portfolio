import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const menu = ['projects','skills','resume']

ReactDOM.render(<App menu={menu} />, document.getElementById('root'));
registerServiceWorker();
