import React from 'react';
import styled from 'styled-components';
import {selectTheme} from '../../helpers';
import PropTypes from 'prop-types';

import Grid from '../Grid';

const Title = styled.h4`
  margin: 20px 0;
  text-align: left;
`;

const MenuCol = styled(Grid.Col)`
  a,span{
    text-align: left;
    color:${selectTheme('footerTextColor')};
    margin-bottom:10px;
    transition: color  0.5s ease-out;
    }
  }
  a:hover{
    color: ${selectTheme('footerHoverColor')};
  }
`;

const MenuItem = ({title, contactInfo, children}) => (
  <MenuCol
    lg={contactInfo ? 3 : 2}
    md={contactInfo ? 3 : 2}
    sm={contactInfo ? 10 : 5}
  >
    <Title>{title}</Title>
    {children}
  </MenuCol>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  contactInfo: PropTypes.bool
};

MenuItem.defaultProps = {
  contactInfo: false
};

export default MenuItem;
