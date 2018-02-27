import React from 'react';
import styled from 'styled-components';
import {Sizes} from '../../theme';
import {selectTheme} from '../../helpers';

const Item = styled.li`
  height: ${Sizes.navigationHeight}px;
  float: left;
  margin: 0;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
  :hover {
    border-bottom: 3px solid ${selectTheme('navSelectedBorderColor')};
    color: ${selectTheme('navTextColor')};
  }
  > a {
    color: ${({isSelected}) =>
      isSelected
        ? selectTheme('selectedNavTextColor')
        : selectTheme('navTextColor')};
    display: flex;
    align-items: center;
    height: 100%;
  }
  a:hover {
    color: white;
  }
  a:focus {
    text-decoration: none;
    text-decoration-skip: ink;
  }
`;

const MenuItem = ({isSelected, children, redirect}) => (
  <Item isSelected={isSelected} onClick={redirect}>
    {children}
  </Item>
);

const UnauthenticatedMenuItem = ({
  isAuthenticated,
  inVisible,
  isSelected,
  children,
  redirect
}) =>
  inVisible ? (
    isAuthenticated ? null : (
      <Item isSelected={isSelected} onClick={redirect}>
        {children}
      </Item>
    )
  ) : isAuthenticated ? (
    <Item isSelected={isSelected} onClick={redirect}>
      {children}
    </Item>
  ) : null;

MenuItem.propTypes = {};

MenuItem.defaultProps = {};

UnauthenticatedMenuItem.propTypes = {};
UnauthenticatedMenuItem.defaultProps = {};
export {MenuItem, UnauthenticatedMenuItem};
