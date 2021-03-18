import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header/Header';
import SidebarNav from '../Sidebar/Sidebar';

export interface ILayoutProps {
  children: React.ReactNode;
}
/*
  Main Layout Component related to ...
*/
const Layout = ({ children }: ILayoutProps) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleToggleSidebar = (): void => {
    // toggle sidebar
    setMenuState(!menuState);
  };

  return (
    <Container data-testid="Layout">
      <Header menuState={menuState} handleToggleSidebar={handleToggleSidebar} />
      <SidebarNav
        menuState={menuState}
        handleToggleSidebar={handleToggleSidebar}
      />
      {children}
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: <></>,
};

const Container = styled.div`
  padding-top: 50px;
  font-family: 'Roboto';
`;
