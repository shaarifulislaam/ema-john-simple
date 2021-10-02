import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <img className='logo' src={logo} alt="" />
      <nav>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/review">Order Review</NavLink>
          <NavLink to="/inventory">Manage Inventroy</NavLink>
      </nav>
    </div>
  );
};

export default Header;
