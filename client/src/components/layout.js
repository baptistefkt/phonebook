import React from 'react';
import Header from './header';
import styled from 'styled-components';

const MyLayout = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = props => (
  <MyLayout>
    <Header />
    {props.children}
  </MyLayout>
);

export default Layout;
