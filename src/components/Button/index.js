import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledButton = ({
  children,
  buttonStyle,
  outline,
  type,
  rounded,
  ...props
}) => {
  return (
    <button type={'button'} style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

const Button = styled(unstyledButton)`
  ${({rounded, outline, type, theme}) => `
    transition: background-color 0.3s ease;
    background-color:${
      outline
        ? `white`
        : type === 'positive'
          ? theme.buttonPositiveColor
          : type === 'negative'
            ? theme.buttonNegativeColor
            : type === 'basic' && theme.buttonBasicColor
    };
    
    border-width:${outline ? '1px' : '0'};
    border-color:${
      outline
        ? type === 'positive'
          ? theme.buttonPositiveColor
          : type === 'negative'
            ? theme.buttonNegativeColor
            : type === 'basic' && theme.buttonBasicColor
        : `none`
    };
    
    color:${
      outline
        ? type === 'positive'
          ? theme.buttonPositiveColor
          : type === 'negative'
            ? theme.buttonNegativeColor
            : type === 'basic' && theme.buttonBasicColor
        : `white`
    };
        
    padding:0.5em 0.5em;
   ${rounded && `border-radius:${'4px'};`} 
    :hover{
    background-color:${
      !outline
        ? type === 'positive'
          ? theme.buttonHoverPositiveColor
          : type === 'negative'
            ? theme.buttonHoverNegativeColor
            : type === 'basic' && theme.buttonHoverBasicColor
        : type === 'positive'
          ? theme.buttonPositiveColor
          : type === 'negative'
            ? theme.buttonNegativeColor
            : type === 'basic' && theme.buttonBasicColor
    };
     color:${`white`};
`};
`;

Button.defaultProps = {
  rounded: false,
  buttonStyle: null,
  type: 'basic',
  outline: false
};

Button.propTypes = {
  rounded: PropTypes.bool,
  buttonStyle: PropTypes.object,
  type: PropTypes.string,
  outline: PropTypes.bool
};

export default Button;
