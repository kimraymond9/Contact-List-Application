import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import ContactListApp from './ContactListApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ContactListApp />, div);
  unmountComponentAtNode(div);
});