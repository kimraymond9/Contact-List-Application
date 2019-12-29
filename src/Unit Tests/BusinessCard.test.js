import React from 'react';
import ReactDOM from 'react-dom';
import BusinessCard from '../components/BusinessCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusinessCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});