import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ThemeConstants} from '../../constants';
import {Colors} from '../../theme';

const unstyledButton = ({
  children,
  buttonStyle,
  outline,
  type,
  rounded,
  full,
  ...props
}) => {
  return (
    <button type={'button'} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

const Button = styled(unstyledButton)`
  ${({full, rounded, outline, type, theme}) => `
    ${full && `width:100%;`}
    cursor:pointer;
    transition: background-color 0.3s ease;
    font-weight: lighter;
    background-color:${
      outline
        ? Colors.Transparent
        : type === ThemeConstants.BTN_POSITIVE
          ? theme.buttonPositiveColor
          : type === ThemeConstants.BTN_NEGATIVE
            ? theme.buttonNegativeColor
            : type === ThemeConstants.BTN_BASIC && theme.buttonBasicColor
    };
    
    border-width:${outline ? '1px' : '0'};
    border-color:${
      outline
        ? type === ThemeConstants.BTN_POSITIVE
          ? theme.buttonPositiveColor
          : type === ThemeConstants.BTN_NEGATIVE
            ? theme.buttonNegativeColor
            : type === ThemeConstants.BTN_BASIC && theme.buttonBasicColor
        : `none`
    };
    
    color:${
      outline
        ? type === ThemeConstants.BTN_POSITIVE
          ? theme.buttonPositiveColor
          : type === ThemeConstants.BTN_NEGATIVE
            ? theme.buttonNegativeColor
            : type === ThemeConstants.BTN_BASIC && theme.buttonBasicColor
        : Colors.White
    };
    margin:0.5em 0.5em;
    padding:0.5em 0.5em;
   ${rounded && `border-radius:${'4px'};`} 
    :hover{
    background-color:${
      !outline
        ? type === ThemeConstants.BTN_POSITIVE
          ? theme.buttonHoverPositiveColor
          : type === ThemeConstants.BTN_NEGATIVE
            ? theme.buttonHoverNegativeColor
            : type === ThemeConstants.BTN_BASIC && theme.buttonHoverBasicColor
        : type === ThemeConstants.BTN_POSITIVE
          ? theme.buttonPositiveColor
          : type === ThemeConstants.BTN_NEGATIVE
            ? theme.buttonNegativeColor
            : type === ThemeConstants.BTN_BASIC && theme.buttonBasicColor
    };
     color:${Colors.Transparent};
`};
`;

Button.defaultProps = {
  rounded: false,
  buttonStyle: null,
  type: ThemeConstants.BTN_BASIC,
  outline: false,
  full: false
};

Button.propTypes = {
  rounded: PropTypes.bool,
  buttonStyle: PropTypes.object,
  type: PropTypes.string,
  outline: PropTypes.bool,
  full: PropTypes.bool
};

export default Button;
