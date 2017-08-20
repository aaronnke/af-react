import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBarLink = ({ name, url }) => (
  <NavLink exact activeClassName="NavBar__link--active" className="NavBar__link" to={url}>
    {name}
  </NavLink>
);

const NavBar = () => (
  <div className="NavBarContainer">
    <div className="NavBar">
      <NavBarLink name="All" url="/" />
      <NavBarLink name="Wealth Management" url="/wealth-management" />
      <NavBarLink name="Private Equity" url="/private-equity" />
      <NavBarLink name="Entrepreneur" url="/entrepreneur" />
      <NavBarLink name="Personal Finance" url="/personal-finance" />
    </div>
  </div>
);

export default NavBar;
