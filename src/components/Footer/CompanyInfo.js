import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sizes from '../../theme/sizes';
import Grid from '../Grid';
import {RouteConstants} from '../../constants';
import {selectTheme} from '../../helpers';

const CompanyCol = styled(Grid.Col)`
  align-items: flex-start;

  @media (max-width: ${Sizes.sm}px) {
    display: none;
  }

  @media (max-width: ${Sizes.xs}px) {
    display: none;
  }
`;

const LogoImage = styled(({brandLogoUrl, ...props}) => (
  <img {...props} src={brandLogoUrl} alt="Brand logo" />
))`
  width: 50% !important;
  margin-bottom: 15px;
  height: ${Sizes.footerHeight}px;
  vertical-align: middle;
  display: inline-block;
  object-fit: contain;
`;

const Slogan = styled.h4`
  text-align: left;
`;

const CompanyInfo = ({slogan, ...props}) => {
  return (
    <CompanyCol lg={4} md={4} sm={0}>
      <LogoImage {...props} />
      <Slogan>{slogan}</Slogan>
    </CompanyCol>
  );
};

CompanyInfo.propTypes = {
  url: PropTypes.string,
  brandLogoUrl: PropTypes.string.isRequired,
  slogan: PropTypes.string
};

CompanyInfo.defaultProps = {
  url: RouteConstants.HOME
};

export default CompanyInfo;
