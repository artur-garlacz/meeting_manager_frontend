import React from 'react';
import { fireEvent } from '@testing-library/react';
import Header from './Header';
import renderStoreUtils from '../../../shared/test-utils';
/*
  renderHeader function to find Header component and after check if id rendered
*/
const handleToggleSidebar = jest.fn();

const renderHeader = () => {
  const utils = renderStoreUtils(
    <Header handleToggleSidebar={handleToggleSidebar} menuState={false} />,
  );
  const elementHeader = utils.getByTestId('PublicHeader');
  const elementHeaderBtn = utils.getByTestId('PublicHeaderBtn');
  return { ...utils, elementHeader, elementHeaderBtn };
};

describe('render Header component test', () => {
  it('render header properly', () => {
    const { elementHeader } = renderHeader();
    expect(elementHeader).toBeInTheDocument();
  });

  it('render header button', () => {
    const { elementHeaderBtn } = renderHeader();
    expect(elementHeaderBtn).toBeInTheDocument();
  });

  it('click header button', () => {
    const { elementHeaderBtn } = renderHeader();
    fireEvent.click(elementHeaderBtn);
    expect(handleToggleSidebar).toHaveBeenCalled();
  });
});
