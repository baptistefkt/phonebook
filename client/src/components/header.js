import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = styled.div`
  padding: 20px;
  border-bottom: 2px solid #fff;

  a {
    text-decoration: none;
    color: white;
    font-size: 25px;
    font-weight: bold;

    span {
      font-size: 20px;
    }
  }
`;

const Header = props => (
  <header>
    <LogoContainer>
      <Link to="/">
        PhoneBook{' '}
        <span>
          {props.path === '/'
            ? '/Home'
            : props.path === '/update/:id'
            ? '/Edit'
            : '/Add'}
        </span>
      </Link>
    </LogoContainer>
    {/* <nav>
      <ul>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
      </ul>
    </nav> */}
  </header>
);

export default Header;
