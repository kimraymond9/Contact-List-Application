import React from 'react';
import ReactDOM from 'react-dom';
import SortBy from './SortBy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SortBy />, div);
  ReactDOM.unmountComponentAtNode(div);
});