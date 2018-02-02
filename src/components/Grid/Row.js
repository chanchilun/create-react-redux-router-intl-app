import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  ${({justify}) => `
  padding: 12px 0 0 0;
  display: flex;
  flex-flow: row wrap;
  justify-content:${justify};
`};
`;

const Row = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Row.defaultProps = {
  cols: 12,
  autoColWidth: null,
  justify: 'flex-start'
};

Row.propTypes = {
  cols: PropTypes.number,
  autoColWidth: PropTypes.number,
  justify: PropTypes.string
};

export default Row;
