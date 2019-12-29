import React from 'react';
import ReactDOM from 'react-dom';
import TabsComponent from '../components/TabsComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
