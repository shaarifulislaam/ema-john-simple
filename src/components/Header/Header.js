import React from "react";
import logo from "../../images/logo.png";
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <img className='logo' src={logo} alt="" />
      <nav>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventroy</a>
      </nav>
    </div>
  );
};

export default Header;
