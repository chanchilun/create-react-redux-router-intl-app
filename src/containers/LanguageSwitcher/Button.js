import React from 'react';
import Radio from 'antd/lib/radio';
import styled from 'styled-components';

const Button = styled(({localeName, ...props}) => {
  return <Radio.Button {...props}>{localeName}</Radio.Button>;
})`
  background: transparent;
  border-color: transparent !important;
  ${({isSelected}) =>
    !isSelected
      ? `color: #CECECE;
    cursor: pointer;`
      : `cursor: default;`};
`;

export default Button;
