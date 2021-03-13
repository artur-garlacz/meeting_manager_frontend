import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../../../views/landing';
import RegisterPage from '../../../views/register/RegisterPage';
import Layout from '../../shared/Layout/Layout';

const PublicRouter: FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/signup" component={RegisterPage} />
        <Route path="/login" component={LandingPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Layout>
  );
};

export default PublicRouter;
