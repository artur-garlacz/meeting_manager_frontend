import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore(); // create redux store
const history = createBrowserHistory(); // create history connectedRouter

// create base for testing
const renderStoreUtils = (children: ReactNode) => {
  const utils = render(
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>,
  );
  return utils;
};

export default renderStoreUtils;
