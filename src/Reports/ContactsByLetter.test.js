import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ContactsByLetter from './ContactsByLetter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ContactsByLetter />, div);
  unmountComponentAtNode(div);
});