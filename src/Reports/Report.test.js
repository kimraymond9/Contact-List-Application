import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import Report from './Report';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Report />, div);
  unmountComponentAtNode(div);
});