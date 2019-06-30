import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            Home
          </Link>
        </li>
        <li>
          <Link to="/saved-listings">
            Saved Listings
          </Link>
        </li>
        <li>
          <Link to="/settings">
            Settings
          </Link>
        </li>
        <li>
          <Link to="/home">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
