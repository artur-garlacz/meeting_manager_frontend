import styled from 'styled-components';

export const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;

  .brand-icon a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #212121;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  .brand-icon .icon {
    display: inline-flex;
    font-size: 2rem;
    height: 48px;
    width: 48px;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
      display: none;
    }
  }
  .menu-trigger {
    display: inline-flex;
    flex-direction: column;
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border: 0;
    outline: 0;
    position: relative;
    padding: 10px;
    cursor: pointer;
    span {
      display: inline-flex;
      width: 30px;
      height: 4px;
      border-radius: 16px;
      background-color: #212121;
      transition: all ease 0.5s;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
  .menu-close {
    @media (min-width: 1024px) {
      display: none;
    }
    span {
      position: absolute;
      background-color: #efefef;
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
      }
      &:nth-child(2) {
        opacity: 0;
        height: 0;
        width: 0;
      }
    }
  }
`;
