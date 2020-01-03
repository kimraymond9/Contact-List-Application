import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ContactDialog from './ContactDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ContactDialog />, div);
  unmountComponentAtNode(div);
});