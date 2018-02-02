import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledCol = ({center, flexRow, children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const mathArr = [12, 10, 8, 6, 4, 2, 1];
const totalCol = 12;
const Col = styled(unstyledCol)`
  ${({gb, xl, lg, md, sm, xs, center, flexRow, justify}) => `
    >img{
        width:100%;
    }
    
    display:flex;
    flex-wrap:wrap;
    flex-direction: ${flexRow ? `row;` : `column;`}
    align-items: center;
    justify-content:${justify};
     ${(xl || gb) &&
       ` @media (min-width: 1281px) {
        width:${(xl || gb) / totalCol * 100}%;
        padding: 0 12px;
     }`}
    
    ${(lg || gb) &&
      `@media (max-width: 1280px) {
        width:${(lg || gb) / totalCol * 100}%;
        padding: 0 12px;
      }`}

    ${(md || gb) &&
      `@media (max-width: 1024px) {
      width:${(md || gb) / totalCol * 100}%;
      padding: 0 12px;
      }`}

    ${(sm || gb) &&
      `@media (max-width: 767px) {
      width:${(sm || gb) / totalCol * 100}%;
      padding: 0 12px;
      }`}

    ${(xs || gb) &&
      `@media (max-width: 480px) {
      width:${(xs || gb) / totalCol * 100}%;
      padding: 0 12px;
      }`}
`};
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
