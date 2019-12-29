import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactListApp from './components/ContactListApp';
import * as serviceWorker from './serviceWorker';
import "./leaflet.css";

const url = "http://jsonplaceholder.typicode.com/users";

ReactDOM.render(<ContactListApp url = {url}/>, document.getElementById('root'));

serviceWorker.unregister();
