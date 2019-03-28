import React from 'react';
import Header from './header';
import styled from 'styled-components';

const MyLayout = styled.div`
  width: 100%;
  background: #00b4db;
  background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
  background: linear-gradient(to right, #0083b0, #00b4db);
`;

const Layout = ({ path, children }) => (
  <MyLayout>
    <Header path={path} />
    {children}
  </MyLayout>
);

export default Layout;
