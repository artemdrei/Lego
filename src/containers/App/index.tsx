import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import s from 'styled-components';

import { ROUTE } from '@root/constants/routes';

import Nav from '@root/containers/Helpers/Nav';
import Buttons from '../Pages/Buttons';
import Typography from '../Pages/Typography';
import Checkboxes from '../Pages/Checkboxes';
import RadioButtons from '../Pages/RadioButtons';
import Modals from '../Pages/Modals';
import Select from '../Pages/Select';
import Alerts from '../Pages/Alerts';
import Loaders from '../Pages/Loaders';
import Inputs from '../Pages/Inputs';

const AppStyled = s.div`
  display: flex;
`;

const ContentStyled = s.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <AppStyled>
      <Nav />
      <ContentStyled>
        <Switch>
          <Route path={ROUTE.BUTTONS} component={Buttons} />
          <Route path={ROUTE.TYPOGRAPHY} component={Typography} />
          <Route path={ROUTE.CHECKBOXES} component={Checkboxes} />
          <Route path={ROUTE.RADIO_BUTTONS} component={RadioButtons} />
          <Route path={ROUTE.MODALS} component={Modals} />
          <Route path={ROUTE.SELECTS} component={Select} />
          <Route path={ROUTE.ALERTS} component={Alerts} />
          <Route path={ROUTE.LOADERS} component={Loaders} />
          <Route path={ROUTE.INPUTS} component={Inputs} />
          <Redirect to={ROUTE.BUTTONS} />
        </Switch>
      </ContentStyled>
    </AppStyled>
  );
};

export default App;
