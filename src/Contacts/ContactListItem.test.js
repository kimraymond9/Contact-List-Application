import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ContactListItem from './ContactListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ContactListItem />, div);
  unmountComponentAtNode(div);
});