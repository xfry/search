import React  from 'react';
import logo   from '../../assets/images/logo.png';

const Header = (props) => {
  return (
    <div className="layout__header appear">
      <header>
        <img className="layout__image" src={logo} />
      </header>
    </div>
  );
}

export default Header;