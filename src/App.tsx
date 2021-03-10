import React, { FC } from 'react';
import logo from './logo.svg';
import GlobalThemeProvider from './shared/globalStyles/provider';

const App: FC = () => {
  return (
    <GlobalThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalThemeProvider>
  );
};

export default App;
