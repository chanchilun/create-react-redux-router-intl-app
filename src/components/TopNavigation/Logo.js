import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sizes from '../../theme/sizes';
import {RouteConstants} from '../../constants';

const LogoContainer = styled.div`
  z-index: 101;
  display: inline-block;
  position: absolute;
  left: 4%;
  width: 150px;
  img {
    object-fit: contain;
  }
`;

const LogoImage = styled(({brandLogoUrl, ...props}) => (
  <img {...props} src={brandLogoUrl} width="100%" alt="Brand logo" />
))`
  height: ${Sizes.navigationHeight}px;
  vertical-align: middle;
  display: inline-block;
`;

const Logo = (props) => (
  <a href={props.url}>
    <LogoContainer>
      <LogoImage {...props} />
    </LogoContainer>
  </a>
);

Logo.propTypes = {
  url: PropTypes.string,
  brandLogoUrl: PropTypes.string.isRequired
};

Logo.defaultProps = {
  url: RouteConstants.HOME
};

export default Logo;
