/* eslint-disable react/require-default-props */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SiteHeader } from './style';

/**

 * Header Component should hold the menu trigger button.
 * The Menu Toggle state is maintained in the Layout Component.
 */

export interface IHeader {
  menuState: boolean;
  handleToggleSidebar: () => void;
}

const Header: FC<IHeader> = ({ menuState, handleToggleSidebar }: IHeader) => {
  return (
    <SiteHeader data-testid="PublicHeader">
      <div className="brand-icon">
        <Link to="/">
          <div className="icon" />
          {/* <span>MeetingManager</span> */}
        </Link>
      </div>
      <div>
        <button
          data-testid="PublicHeaderBtn"
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

Header.propTypes = {
  menuState: PropTypes.bool.isRequired,
  handleToggleSidebar: PropTypes.func.isRequired,
};

Header.defaultProps = {
  menuState: false,
};
