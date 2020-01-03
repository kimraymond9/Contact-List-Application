import React from 'react';
import ReactDOM from 'react-dom';
import CompanyCatchphrases from './CompanyCatchphrases';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyCatchphrases />, div);
  ReactDOM.unmountComponentAtNode(div);
});