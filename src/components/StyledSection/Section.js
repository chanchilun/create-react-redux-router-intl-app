import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledSection = ({children, bgColor, bgImage, ...props}) => {
  return <section {...props}>{children}</section>;
};

const Section = styled(unstyledSection)`
  ${({bgColor, bgImage, theme}) => `
    background-color:${bgColor || theme.sectionBgColor};
    background-image:${bgImage ? `url(${bgImage})` : 'none'};
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
    padding-top: 5%;
    padding-bottom: 3%;
    margin
`};
`;

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string
};

Section.defaultProps = {};

export default Section;
