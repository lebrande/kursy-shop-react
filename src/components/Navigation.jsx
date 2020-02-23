import React from 'react';

import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'red',
};

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/service/www" activeStyle={activeStyle}>WWW</NavLink>
      </li>
      <li>
        <NavLink exact to="/service/shop" activeStyle={activeStyle}>SHOP</NavLink>
      </li>
      <li>
        <NavLink exact to="/service/seo" activeStyle={activeStyle}>SEO</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;