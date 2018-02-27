import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {selectTheme} from '../../helpers';

const Wrapper = styled.div`
  img {
    display: block;
    width: 100%;
    border-radius: 2px 2px 0 0;
  }
`;

const Container = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  //white-space: nowrap;
  font-weight: 500;
  border-bottom: 0px solid ${selectTheme('cardColor')};
  padding: 22px;
  border-radius: 2px 2px 0 0;
  min-height: 40px;
  img {
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 400;
  }
`;

const Header = ({title, cover, ...props}) => {
  return (
    <Wrapper {...props}>
      {cover && <img alt={''} src={cover} />}
      {title && <Container>{title}</Container>}
    </Wrapper>
  );
};

Header.defaultProps = {
  title: '',
  cover: null
};

Header.propTypes = {
  title: PropTypes.any,
  cover: PropTypes.string
};

export default Header;
