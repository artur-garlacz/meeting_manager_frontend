import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarNavigationOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  background-color: transparent;
  z-index: 8;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  z-index: 9;
  width: 100vw;
  right: 0;
  overflow: hidden;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  // right: 0;
  margin: auto;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  z-index: -1;
`;

export const SidebarNavigator = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
  padding-top: 50px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const SidebarTop = styled.div`
  overflow: hidden;
  display: flex;
  height: calc(100% - 260px);
`;

export const LinksWrapper = styled.div`
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  flex-basis: 100%;
  flex-shrink: 0;
`;

export const MenuLink = styled(Link)`
  padding: 16px;
  display: flex;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  justify-content: center;
  /* width: 100vw; */
  &:hover {
    background-color: darken(#2e2e2e, 10%);
  }
`;

export const ExtraLinks = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;
