import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactListApp from './components/ContactListApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div className="application"><ContactListApp /></div>, document.getElementById('root'));

serviceWorker.unregister();
