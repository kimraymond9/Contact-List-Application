import React from 'react';
import ReactDOM from 'react-dom';
import TopLevelDomains from './TopLevelDomains';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopLevelDomains />, div);
  ReactDOM.unmountComponentAtNode(div);
});