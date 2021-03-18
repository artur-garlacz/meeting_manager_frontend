import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';

export const history = createBrowserHistory(); // router history for app

export interface IStoreAuth {
  authenticated?: boolean;
  authenticating?: boolean;
  authenticationError?: string;
}

export interface IStore {
  auth: IStoreAuth;
}

// function configuring redux store with middlewares
export function configureStore() {
  return createStore(
    reducers(),
    undefined,
    compose(applyMiddleware(routerMiddleware(history))),
  );
}
