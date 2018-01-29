import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledCol = ({center, flexRow, children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const mathArr = [12, 10, 8, 6, 4, 2, 1];

const Col = styled(unstyledCol)`
  ${({gb, lg, md, sm, xs, center, flexRow}) => `
    padding: 1.1em;
    display:flex;
    flex-wrap:wrap;
    flex-direction:${flexRow ? `row` : `column`};
    img{
        height:100%;
    }
    
    @media (min-width: 1281px) {
      grid-column:${
        center && mathArr.indexOf(gb) > -1 ? `${mathArr.indexOf(gb) + 1}/` : ''
      } span ${gb ? gb : `12`}
        }
    
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
  flexRow: false
};

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  gb: PropTypes.number,
  center: PropTypes.bool,
  flexRow: PropTypes.bool
};

export default Col;
