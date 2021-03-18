/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect, FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { gsap } from 'gsap';
import {
  MenuLayer,
  MenuWrapper,
  SidebarNavigator,
  SidebarNavigationOverlay,
  SidebarTop,
  LinksWrapper,
  MenuLink,
} from './style';

/*
  SidebaNav component to show menu in mobile version 
*/

interface ISidebarNav extends RouteComponentProps {
  menuState: boolean;
  handleToggleSidebar: () => void;
}

const SidebarNav: FC<ISidebarNav> = ({
  history,
  menuState,
  handleToggleSidebar,
}: ISidebarNav) => {
  let sidebarMenu: any = useRef<any>(); // I know it shoudn't be any :)
  let sidebarMenuOverlay: any = useRef<any>();
  let menuLayer: any = useRef<any>();

  const menuTimeline = useRef<any>();
  useEffect(() => {
    // initial gsap action
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      {
        duration: 0,
        x: '100%',
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      },
    );
  }, []);

  useEffect(() => {
    // functions inside this scope will be invoked on first render and on every changing menuState
    if (menuTimeline !== null && menuTimeline.current !== null) {
      if (menuState) {
        menuTimeline.current.play();
      } else {
        menuTimeline.current.reverse();
      }
    }
  }, [menuState]);

  useEffect(() => {
    // action invoke on every event
    history.listen(() => handleToggleSidebar());
  });

  // render jsx here
  return (
    <>
      <SidebarNavigationOverlay
        ref={(el) => (sidebarMenuOverlay = el)}
        onKeyDown={handleToggleSidebar}
        onClick={handleToggleSidebar}
      />
      <MenuWrapper>
        <MenuLayer ref={(el) => (menuLayer = el)} />
        <SidebarNavigator ref={(el) => (sidebarMenu = el)}>
          <SidebarTop>
            <LinksWrapper>
              <MenuLink to="/">Home</MenuLink>
              <MenuLink to="/about">About</MenuLink>
              <MenuLink to="/services">Services</MenuLink>
              <MenuLink to="/gallery">Gallery</MenuLink>
              <MenuLink to="/contact">Contact</MenuLink>
            </LinksWrapper>
          </SidebarTop>
        </SidebarNavigator>
      </MenuWrapper>
    </>
  );
};
export default withRouter(SidebarNav);
