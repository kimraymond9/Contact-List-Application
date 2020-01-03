import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import TopLevelDomains from './TopLevelDomains';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<TopLevelDomains />, div);
  unmountComponentAtNode(div);
});