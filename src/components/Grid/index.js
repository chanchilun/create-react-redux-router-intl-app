import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Col from './Col';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({cols, autoColWidth}) =>
    autoColWidth
      ? `repeat(auto-fill, minmax(${autoColWidth}px, 1fr))`
      : `repeat(${cols}, 1fr)`};
`;

const Grid = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Grid.defaultProps = {
  cols: 12
};

Grid.propTypes = {
  cols: PropTypes.number,
  autoColWidth: PropTypes.number
};

Grid.Col = Col;

export default Grid;
