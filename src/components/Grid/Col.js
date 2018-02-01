import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledCol = ({center, flexRow, children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const mathArr = [12, 10, 8, 6, 4, 2, 1];

const Col = styled(unstyledCol)`
  ${({gb, xl, lg, md, sm, xs, center, flexRow, justify}) => `
    padding: 1.1em;
    >img{
        width:100%;
    }
    
    display:flex;
    flex-wrap:wrap;
    flex-direction: ${flexRow ? `row;` : `column;`}
    justify-content:${justify};
     ${(xl || gb) &&
       `
    @media (min-width: 1281px) {
      grid-column:${
        center && mathArr.indexOf(xl || gb) > -1
          ? `${mathArr.indexOf(xl || gb) + 1}/`
          : ''
      } span ${xl || gb}}`}
    
    ${(lg || gb) &&
      `@media (max-width: 1280px) {
      grid-column:${
        center && mathArr.indexOf(lg || gb) > -1
          ? `${mathArr.indexOf(lg || gb) + 1}/`
          : ''
      } span ${lg || gb}}`}
    
    
    ${(md || gb) &&
      `@media (max-width: 1024px) {
      grid-column:${
        center && mathArr.indexOf(md || gb) > -1
          ? `${mathArr.indexOf(md || gb) + 1}/`
          : ''
      } span ${md || gb}}`}
    
    
    ${(sm || gb) &&
      `@media (max-width: 767px) {
      grid-column:${
        center && mathArr.indexOf(sm || gb) > -1
          ? `${mathArr.indexOf(sm || gb) + 1}/`
          : ''
      } span ${sm || gb}}`}
    
    ${(xs || gb) &&
      `@media (max-width: 480px) {
      grid-column:${
        center && mathArr.indexOf(xs || gb) > -1
          ? `${mathArr.indexOf(xs || gb) + 1}/`
          : ''
      } span ${xs || gb}}`}`};
`;

Col.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  gb: 12,
  center: false,
  flexRow: false,
  justify: 'flex-start'
};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  gb: PropTypes.number,
  center: PropTypes.bool,
  flexRow: PropTypes.bool,
  justify: PropTypes.string
};

export default Col;
