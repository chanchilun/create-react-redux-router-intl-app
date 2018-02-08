import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  white-space: nowrap;
  font-weight: 500;
  border-bottom: 1px solid ${({theme}) => theme.cardColor};
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
    font-weight: bold;
  }
`;

const Header = ({title, cover, ...props}) => {
  return (
    <Wrapper {...props}>
      {cover && <img alt={''} src={cover} />}
      <Container>{title}</Container>
    </Wrapper>
  );
};

Header.defaultProps = {
  title: '',
  cover: null
};

Header.propTypes = {
  title: PropTypes.object,
  cover: PropTypes.string
};

export default Header;
