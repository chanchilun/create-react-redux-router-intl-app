import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledButton = ({children, buttonStyle, type, rounded, ...props}) => {
  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

const Button = styled(unstyledButton)`
  ${({rounded, type, theme}) => `
    background-color:${
      type === 'positive'
        ? theme.buttonPositiveBgColor
        : type === 'negative'
          ? theme.buttonNegativeBgColor
          : type === 'basic' && theme.buttonBasicBgColor
    };
    border:none;
    color:white;
    padding:0.5em 0.5em;
   ${rounded && `border-radius:${'4px'};`} 
    :hover{
    background-color:${
      type === 'positive'
        ? theme.buttonHoverPositiveBgColor
        : type === 'negative'
          ? theme.buttonHoverNegativeBgColor
          : type === 'basic' && theme.buttonHoverBasicBgColor
    };
    }
`};
`;

Button.defaultProps = {
  rounded: false,
  buttonStyle: null,
  type: 'basic'
};

Button.propTypes = {
  rounded: PropTypes.bool,
  buttonStyle: PropTypes.object,
  type: PropTypes.string
};

export default Button;
