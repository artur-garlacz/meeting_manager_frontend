import { ConnectedRouter } from 'connected-react-router';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PublicRouter from './components/public/PublicRouter/PublicRouter';
import GlobalThemeProvider from './shared/globalStyles/provider';
import { configureStore, history } from './shared/store';
import './App.css';
import LangProvider from './components/shared/LangProvider/LangProvider';

// initial redux store for react-redux Provider
const store = configureStore();

// Main component of this app
const App: FC = () => {
  return (
    <GlobalThemeProvider>
      <Provider store={store}>
        <LangProvider>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" component={PublicRouter} />
            </Switch>
          </ConnectedRouter>
        </LangProvider>
      </Provider>
    </GlobalThemeProvider>
  );
};

export default App;
