import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const unstyledContent = ({children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const Content = styled(unstyledContent)`
  ${({theme}) => `
  text-align: center;
  background-color:${theme.contentBackgroundColor};
`};
`;

Content.defaultProps = {};

Content.propTypes = {};

export default Content;
