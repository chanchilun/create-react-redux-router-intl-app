import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Sizes} from '../../theme';

const TOTAL_COLS = 12;

const unstyledCol = ({center, flexRow, children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const Col = styled(unstyledCol)`
  ${({gb, xl, lg, md, sm, xs, flexRow, justify}) => `
    >h1,h2,h3,h4,div,img{
        width:100%;
    }
    
    display:flex;
    flex-wrap:wrap;
    flex-direction: ${flexRow ? `row;` : `column;`}
    align-items: flex-start;
    justify-content:${justify};
     ${(xl || gb) &&
       ` @media (min-width: ${Sizes.xl}px) {
        width:${(xl || lg || gb) / TOTAL_COLS * 100}%;
        padding: 0 ${Sizes.xlGutter}px;
     }`}
    
    ${(lg || xl || gb) &&
      `@media (max-width: ${Sizes.lg}px) {
        width:${(lg || gb) / TOTAL_COLS * 100}%;
        padding: 0 ${Sizes.lgGutter}px;
      }`}

    ${(md || gb) &&
      `@media (max-width: ${Sizes.md}px) {
      width:${(md || gb) / TOTAL_COLS * 100}%;
      padding: 0 ${Sizes.mdGutter}px;
      }`}

    ${(sm || gb) &&
      `@media (max-width:${Sizes.sm}px) {
      width:${(sm || gb) / TOTAL_COLS * 100}%;
      padding: 0 ${Sizes.smGutter}px;
      }`}

    ${(xs || sm || gb) &&
      `@media (max-width: ${Sizes.xs}x) {
      width:${(xs || sm || gb) / TOTAL_COLS * 100}%;
      padding: 0 ${Sizes.xsGutter}px;
      }`}
`};
`;

Col.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  gb: TOTAL_COLS,
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
