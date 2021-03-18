import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import actions from '../actions';
import { history } from '../shared/store';

const reducers = () =>
  combineReducers({
    ...actions.auth.reducers,
    ...actions.user.userAccounts.reducers,
    ...actions.pub.signup.reducers,
    ...actions.pub.offers.reducers,
    router: connectRouter(history),
  });

export default reducers;
