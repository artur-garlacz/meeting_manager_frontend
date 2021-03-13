/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout, { ILayoutProps } from './Layout';
import renderStoreUtils from '../../../shared/test-utils';

/*
  renderLayout function to find Layout component and after check if id rendered
*/
const renderLayout = (props?: ILayoutProps) => {
  const utils = renderStoreUtils(<Layout {...props} />);
  const elementLayout = utils.getByTestId('Layout');
  return { ...utils, elementLayout };
};

describe('render Layout component test', () => {
  it('render layout properly', () => {
    const { elementLayout } = renderLayout();

    expect(elementLayout).toBeInTheDocument();
  });
});
