import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PublicRouter from './components/public/PublicRouter/PublicRouter';
import GlobalThemeProvider from './shared/globalStyles/provider';
import { configureStore, history } from './shared/store';
import './App.css';

const store = configureStore();

const App: FC = () => {
  return (
    <GlobalThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            {/* <Route path="/user" component={UserRouter} /> */}
            <Route path="/" component={PublicRouter} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </GlobalThemeProvider>
  );
};

export default App;
