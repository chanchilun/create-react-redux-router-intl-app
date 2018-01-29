import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Col from './Col';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({cols, autoColWidth}) =>
    autoColWidth
      ? `repeat(auto-fill, minmax(${autoColWidth}px, 1fr));
        >div{grid-column:unset;}`
      : `repeat(${cols}, 1fr)`};
  @media (min-width: 1281px) {
    grid-column-gap: 24px;
  }
  @media (max-width: 1280px) {
    grid-column-gap: 24px;
  }
  @media (max-width: 1024px) {
    grid-column-gap: 24px;
  }
  @media (max-width: 767px) {
    grid-column-gap: 16px;
  }
  @media (max-width: 480px) {
    grid-column-gap: 16px;
  }
  ${({windowHeight}) => windowHeight && `height:100vh;`};
`;

const Grid = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

Grid.defaultProps = {
  cols: 12,
  autoColWidth: null,
  windowHeight: false
};

Grid.propTypes = {
  cols: PropTypes.number,
  autoColWidth: PropTypes.number,
  windowHeight: PropTypes.bool
};

Grid.Col = Col;

export default Grid;
