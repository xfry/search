import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="layout-page">
        {this.props.children}
      </div>
    )
  }
}

export default Layout;