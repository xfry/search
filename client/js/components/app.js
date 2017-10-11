import React from 'react';
import AppScss from '../../assets/scss/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main_app">
        <h1 className="app__title">
          Welcome to search
        </h1>
      </div>
    );
  }
};

export default App;
