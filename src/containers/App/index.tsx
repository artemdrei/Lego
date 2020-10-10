import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import s from 'styled-components';

import Nav from '@root/containers/Helpers/Nav';
import Buttons from '../Pages/Buttons';
import Typography from '../Pages/Typography';

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
          <Route path="/buttons" component={Buttons} />
          <Route path="/typography" component={Typography} />
          <Redirect to="/buttons" />
        </Switch>
      </ContainerStyled>
    </AppStyled>
  );
};

export default App;
