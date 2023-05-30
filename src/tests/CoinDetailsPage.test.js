import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('render DetailsPage correctly', () => {
  const componentTree = renderer
    .create(<Provider store={store} />)
    .toJSON();
  expect(componentTree).toMatchSnapshot();
});
