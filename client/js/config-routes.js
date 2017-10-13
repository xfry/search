import React from 'react';
import Layout from './pages/layout';
import NotFound from './pages/not-found';
import Home from './components/home';
import PetInfo from './components/pet-info';

import { Route, IndexRoute } from 'react-router';


const ConfigRoutes = (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="details/:id" component={PetInfo} />
    </Route>

    <Route path="*" component={NotFound} />
  </Route>
);

export default ConfigRoutes;