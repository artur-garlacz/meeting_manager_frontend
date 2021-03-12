import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from '../reducers';

export const history = createBrowserHistory();

export interface IStoreAuth {
  authenticated?: boolean;
  authenticating?: boolean;
  authenticationError?: string;
}

export interface IStore {
  auth: IStoreAuth;
}

export function configureStore() {
  return createStore(
    reducers(),
    undefined,
    compose(applyMiddleware(routerMiddleware(history))),
  );
}
