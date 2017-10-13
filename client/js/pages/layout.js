import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="layout-page" ref="layoutPage">
        <Header />
        {this.props.children}
      </section>
    )
  }
}

export default Layout;