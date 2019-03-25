import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">PhoneBook</Link>
    <nav>
      <ul>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
