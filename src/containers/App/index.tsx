import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import s from 'styled-components';

import { ROUTE } from '@root/constants/routes';

import Nav from '@root/containers/Helpers/Nav';
import Buttons from '../Pages/Buttons';
import Typography from '../Pages/Typography';
import Checkboxes from '../Pages/Checkboxes';

const AppStyled = s.div`
  display: flex;
`;

const ContainerStyled = s.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <AppStyled>
      <Nav />
      <ContainerStyled>
        <Switch>
          <Route path={ROUTE.BUTTONS} component={Buttons} />
          <Route path={ROUTE.TYPOGRAPHY} component={Typography} />
          <Route path={ROUTE.CHECKBOXES} component={Checkboxes} />
          <Redirect to={ROUTE.BUTTONS} />
        </Switch>
      </ContainerStyled>
    </AppStyled>
  );
};

export default App;
