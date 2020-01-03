import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import TabsComponent from './TabsComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TabsComponent />, div);
  unmountComponentAtNode(div);
});