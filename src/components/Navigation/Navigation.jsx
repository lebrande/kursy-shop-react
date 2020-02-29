import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <NavLink
              exact
              to="/"
              className="navbar-item"
              activeClassName={'has-text-primary'}
            >
              Strona główna
            </NavLink>
            <NavLink
              exact
              to="/produkty"
              className="navbar-item"
              activeClassName={'has-text-primary'}
            >
              Sklep
            </NavLink>
            <NavLink
              exact
              to="/dla-firm"
              className="navbar-item"
              activeClassName={'has-text-primary'}
            >
              Dla Firm
            </NavLink>
            <NavLink
              exact
              to="/kontakt"
              className="navbar-item"
              activeClassName={'has-text-primary'}
            >
              Kontakt
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-dark">Brak produktów w koszyku</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;