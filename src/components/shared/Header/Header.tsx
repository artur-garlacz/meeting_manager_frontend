/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SiteHeader } from './style';
// import Logo from '../../../assets/Logo.svg';
/**
 * Header Component should hold the menu trigger button.
 * The Menu Toggle state is maintained in the Layout Component.
 */

interface IHeader {
  menuState: boolean;
  handleToggleSidebar: () => void;
}

const Header: FC<IHeader> = ({ menuState, handleToggleSidebar }: IHeader) => {
  return (
    <SiteHeader>
      <div className="brand-icon">
        <Link to="/">
          <div className="icon" />
          {/* <span>MeetingManager</span> */}
        </Link>
      </div>
      <div>
        <button
          className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
          onClick={handleToggleSidebar}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </SiteHeader>
  );
};
export default Header;
