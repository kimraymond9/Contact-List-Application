import React from 'react';
import ReactDOM from 'react-dom';
import ContactsByLetter from './ContactsByLetter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactsByLetter />, div);
  ReactDOM.unmountComponentAtNode(div);
});