import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../components/HomePage';
import store from '../redux/store';

test('Search input should render', () => {
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );
  const searchInput = screen.getByPlaceholderText(/coin name/i);
  expect(searchInput).toBeInTheDocument();
});

test('render homepage correctly', () => {
  const componentTree = renderer
    .create(<Provider store={store} />)
    .toJSON();
  expect(componentTree).toMatchSnapshot();
});
