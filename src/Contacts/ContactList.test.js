import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ContactList from './ContactList';


test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ContactList />, div);
  unmountComponentAtNode(div);
});