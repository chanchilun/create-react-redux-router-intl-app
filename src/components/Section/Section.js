import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Sizes} from '../../theme';
import {selectTheme} from '../../helpers';

const unstyledSection = ({children, hasNavbar, bgColor, bgImage, ...props}) => {
  return (
    <section {...props}>
      <div>{children}</div>
    </section>
  );
};

const Section = styled(unstyledSection)`
  @media (min-width: ${Sizes.xl}px) {
    > div {
      max-width: ${Sizes.xlMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.lg}px) {
    > div {
      max-width: ${Sizes.lgMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.md}px) {
    > div {
      max-width: ${Sizes.mdMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.sm}px) {
    > div {
      max-width: ${Sizes.smMaxWidth}px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Sizes.xs}px) {
    > div {
      max-width: ${Sizes.xsMaxWidth}px;
      margin: 0 auto;
    }
  }

  ${({hasNavbar, bgColor, justify, bgImage}) => `
    padding:50px 0px;
    background-color:${bgColor || selectTheme('sectionBgColor')};
    background-image:${bgImage ? `url(${bgImage})` : 'none'};
    background-repeat:no-repeat;
    background-position:center center;
    background-size:cover;
    ${hasNavbar && `padding-top: ${Sizes.navigationHeight}px;`}
    display:flex;
    flex-direction:column;
    justify-content: ${justify};
    max-height: 100%;
`};
`;

Section.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  justify: PropTypes.string,
  hasNavbar: PropTypes.bool
};

Section.defaultProps = {
  justify: 'start',
  hasNavbar: false
};

export default Section;
