/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore(); // create redux store
const history = createBrowserHistory(); // create history connectedRouter

// interface IStoreRouterUtils {
//   children: ReactNode;
// }

const renderStoreUtils = (children: ReactNode) => {
  const utils = render(
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>,
  );
  return utils;
};

export default renderStoreUtils;
