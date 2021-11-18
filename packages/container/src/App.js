import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ContainerApp-',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MarketingApp} />
            <Route
              path={['/auth/signin', '/auth/signup']}
              component={AuthApp}
            />
          </Switch>
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
