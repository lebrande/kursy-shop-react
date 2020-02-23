import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Strona główna</Link>
      </li>
      <li>
        <Link to="/about/us">O nas</Link>
      </li>
      <li>
        <Link to="/about/company">O firmie</Link>
      </li>
    </ul>
  );
};

export default Navigation;