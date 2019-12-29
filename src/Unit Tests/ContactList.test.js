import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import ContactList from '../components/ContactList';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ContactList />, div);
  unmountComponentAtNode(div);
});