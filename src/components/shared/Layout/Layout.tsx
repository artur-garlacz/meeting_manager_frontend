import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import SidebarNav from '../Sidebar/Sidebar';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleToggleSidebar = (): void => {
    // toggle sidebar
    setMenuState(!menuState);
  };

  return (
    <Container>
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

const Container = styled.div`
  padding-top: 50px;
  font-family: 'Roboto';
`;
