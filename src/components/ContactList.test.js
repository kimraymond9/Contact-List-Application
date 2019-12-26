import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import ContactListItem from './ContactListItem';
import TabsComponent from './TabsComponent';
import BusinessCardDialog from './BusinessCardDialog';
import BusinessCard from './BusinessCard';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabsComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusinessCardDialog />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BusinessCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});