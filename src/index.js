import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FetchJSON from './components/FetchJSON';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div className="application"><FetchJSON /></div>, document.getElementById('root'));

serviceWorker.unregister();
