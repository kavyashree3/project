import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/Context';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(<ProductProvider><Router><App /></Router></ProductProvider>, document.getElementById('root'));
serviceWorker.unregister();
 
//Context.js and react-router-dom are supposed to be added here.