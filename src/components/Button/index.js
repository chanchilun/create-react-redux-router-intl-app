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
        ? theme.buttonPositiveBGColor
        : type === 'negative'
          ? theme.buttonNegativeBGColor
          : type === 'basic' && theme.buttonBasicBGColor
    };
    border:none;
    color:white;
    padding:0.5em 1em;
   ${rounded && `border-radius:${'4px'};`} 
    :hover{
    background-color:${
      type === 'positive'
        ? theme.buttonHoverPositiveBGColor
        : type === 'negative'
          ? theme.buttonHoverNegativeBGColor
          : type === 'basic' && theme.buttonHoverBasicBGColor
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
