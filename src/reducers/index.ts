import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { history } from '../shared/store';

const reducers = () =>
  combineReducers({
    router: connectRouter(history),
  });

export default reducers;
