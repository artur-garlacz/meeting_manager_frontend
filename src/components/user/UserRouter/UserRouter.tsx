import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../actions';
import Loader from '../../shared/Loader/Loader';
import UserDashboard from '../../../views/user/dashboard/UserDashboard';

const UserRouter: React.FC = () => {
  const dispatch = useDispatch();
  const authData = useSelector(
    actions.auth.authenticate.resultSelector({
      dispatch,
      invokeAtFirstRun: true,
    }),
  );
  if (authData?.data !== undefined) {
    return (
      <Switch>
        <Route path="/user" component={UserDashboard} />
      </Switch>
    );
  }
  if (
    authData !== undefined &&
    authData.data === undefined &&
    !authData?.inProgress
  ) {
    return <Redirect to="/login" />;
  }
  return <Loader />;
};

export default UserRouter;
