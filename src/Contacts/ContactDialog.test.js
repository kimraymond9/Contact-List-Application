import React from 'react';
import ReactDOM from 'react-dom';
import ContactDialog from './ContactDialog.test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});