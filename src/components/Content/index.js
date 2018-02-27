import React from 'react';
import styled from 'styled-components';
import {selectTheme} from '../../helpers';

const unstyledContent = ({children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const Content = styled(unstyledContent)`
  text-align: center;
  background-color: ${selectTheme('contentBackgroundColor')};
`;

Content.defaultProps = {};

Content.propTypes = {};

export default Content;
