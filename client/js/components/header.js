import React  from 'react';
import logo   from '../../assets/images/logo.png';

const Header = (props) => {
  return (
    <div className="home__header">
      <header>
        <img src={logo} />
        <h1 className="home__title">Find an ideal pet for the ideal person</h1>
      </header>
    </div>
  );
}

export default Header;