import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sizes from '../../theme/sizes';
import {selectTheme} from '../../helpers/themeSelector';

const Container = styled.div`
  height: ${Sizes.navigationHeight}px;
  padding: 20px;
`;

const HamburgerButton = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 100;

  em {
    display: block;
    width: 16px;
    height: 2px;
    background: ${selectTheme('navTextColor')};
    margin-top: 4px;
    transition: 0.5s ease-in-out;
  }
  ${({menuOpen}) =>
    menuOpen &&
    `
             em {
              &:nth-child(1) {
                transform: translateY(6px) rotate(45deg);
              }
    
              &:nth-child(2) {
                opacity: 0;
              }
    
              &:nth-child(3) {
                transform: translateY(-6px) rotate(-45deg);
              }
            }
        `};
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 0;
  padding-top: ${Sizes.navigationHeight}px;
  background-color: ${selectTheme('navBgColor')};
  transition: 0.5s;
  ul {
    height: 0;
    opacity: 0;
  }
  ${({menuOpen}) =>
    menuOpen
      ? `
          height: 100%;
          opacity: 1;
          pointer-events: auto;
          & ul {
            opacity: 1;
            display: block;
            li{
                height: 41.6px;
                width: 100%;
                a{
                 margin:0 auto;
                 }
            }
          }`
      : ` 
      opacity: 0;
      pointer-events: none;
      `};
`;

const Hamburger = ({children, menuOpen, openHamburger, className}) => (
  <Container className={className}>
    <HamburgerButton menuOpen={menuOpen} onClick={openHamburger}>
      <em />
      <em />
      <em />
    </HamburgerButton>
    <HamburgerMenu menuOpen={menuOpen}>{children}</HamburgerMenu>
  </Container>
);

Hamburger.propTypes = {
  menuOpen: PropTypes.bool,
  openHamburger: PropTypes.func
};

Hamburger.defaultProps = {
  menuOpen: false
};

export default Hamburger;
