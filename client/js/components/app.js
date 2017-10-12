import React from 'react';
import configRoutes from '../config-routes';
import {Router, hashHistory} from 'react-router';

import AppScss from '../../assets/scss/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router routes={configRoutes} history={hashHistory} />
    );
  }
};

export default App;
