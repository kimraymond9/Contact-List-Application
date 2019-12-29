import React from 'react';
import ReactDOM from 'react-dom';
import ContactListItem from '../components/ContactListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});