import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoContainer = styled.div`
  z-index: 101;
  display: inline-block;
  position: absolute;
  left: 4%;
  width: 150px;
`;

const LogoImage = styled(({brandLogoUrl, ...props}) => (
  <img {...props} src={brandLogoUrl} width="100%" alt="Brand logo" />
))`
  height: 64px;
  vertical-align: middle;
  display: inline-block;
`;

const Logo = (props) => (
  <LogoContainer>
    <LogoImage {...props} />
  </LogoContainer>
);

Logo.propTypes = {
  brandLogoUrl: PropTypes.string.isRequired
};

export default Logo;
