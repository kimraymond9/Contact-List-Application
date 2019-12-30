import React from 'react';
import ReactDOM from 'react-dom';
import BusinessCardDialog from './BusinessCardDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusinessCardDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});