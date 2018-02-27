import React from 'react';
import CompanyInfo from './CompanyInfo';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {selectTheme} from '../../helpers';
import Grid from '../Grid';
import {Sizes} from '../../theme';

const StyledFooter = styled.footer`
  margin-bottom: 50px;
  @media (min-width: ${Sizes.xl}px) {
    > div {
      max-width: ${Sizes.xlMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.lg}px) {
    > div {
      max-width: ${Sizes.lgMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.md}px) {
    > div {
      max-width: ${Sizes.mdMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.sm}px) {
    > div {
      max-width: ${Sizes.smMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.xs}px) {
    > div {
      max-width: ${Sizes.xsMaxWidth}px;
      margin: 0 auto;
    }
  }
  ${({bgColor}) => `
       background-color:${bgColor || selectTheme('footerBgColor')};
   `};
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <Grid>
        <Grid.Row justify={'center'}>{props.children}</Grid.Row>
      </Grid>
    </StyledFooter>
  );
};

Footer.propTypes = {
  bgColor: PropTypes.string
};

Footer.CompanyInfo = CompanyInfo;
Footer.MenuItem = MenuItem;

export default Footer;
