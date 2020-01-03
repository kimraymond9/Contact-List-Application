import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import InteractiveMap from './InteractiveMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<InteractiveMap />, div);
  unmountComponentAtNode(div);
});