import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Main from '../Pages/Main';

import s from './styles.scss';

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <Switch>
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
