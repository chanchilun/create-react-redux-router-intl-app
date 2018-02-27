import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  b,
  p,
  span {
    margin: 5px 0;
  }
  img {
    object-fit: scale-down;
  }
`;

const Body = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Body.defaultProps = {};

Body.propTypes = {};

export default Body;
