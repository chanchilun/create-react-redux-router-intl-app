import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledButton = ({children, buttonStyle, rounded, ...props}) => {
  return;
  <div>
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  </div>;
};

const Button = styled(unstyledButton)`
  ${({rounded}) => `
    background-color:rgb(52, 190, 183);
    border:none;
    color:white;
    padding:0.5em 3em;
   ${rounded && `border-radius:${'4px'}`} 

`};
`;

Button.defaultProps = {
  rounded: false
};

Button.propTypes = {
  rounded: PropTypes.bool,
  buttonStyle: PropTypes.object
};

export default Button;
