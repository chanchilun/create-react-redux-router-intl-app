import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Col from './Col';
import Row from './Row';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({justify}) => justify};
  ${({viewHeight}) => viewHeight && `min-height:100vh;`};
  max-height: 100%;
`;

const Grid = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Grid.defaultProps = {
  viewHeight: false,
  justify: 'start'
};

Grid.propTypes = {
  viewHeight: PropTypes.bool,
  justify: PropTypes.string
};

Grid.Col = Col;
Grid.Row = Row;

export default Grid;
