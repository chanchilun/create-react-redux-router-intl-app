import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledCol = (props) => {
  const wrappedComponents = React.Children.map(props.children, (child) =>
    React.cloneElement(child)
  );
  return <div {...props}>{wrappedComponents}</div>;
};

const Col = styled(unstyledCol)`

@media (min-width: 1281px) {
  
}

${({lg}) => `
@media (max-width: 1280px) {
    grid-column: span ${lg};`}

${({md}) => `
@media (max-width: 1024px) {
    grid-column: span ${md};`}

${({sm}) => `
@media (max-width: 767px) {
    grid-column: span ${sm};`}

${({xs}) => `
@media (max-width: 480px) {
    grid-column: span ${xs};`}

`;

Col.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null
};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};

export default Col;
