import React from 'react';
import { Link } from 'react-router';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="not-found-page">
        <h1 className="not-found__tile">PAGE NOT FOUND</h1>
        <p className="not-found__description">
          The page you requested was not found, 
          <Link to="/" > please go to back </Link>
        </p>
      </div>
    )
  }
}

export default NotFound;