import React from 'react';
import styled from 'styled-components';
import {default as unstyledAntMenu} from 'antd/lib/menu';

const MenuContainer = styled.div`
  float: right;
  line-height: 64px;
  position: relative;
  margin-right: 4%;
`;

const AntMenu = styled(unstyledAntMenu)`
  border-bottom-color: transparent;
  background: transparent;
  line-height: 64px;
  .ant-menu-item > a,
  .ant-menu-item > a:hover {
    color: white;
  }
`;
const Menu = ({children}) => (
  <MenuContainer>
    <AntMenu mode="horizontal" defaultSelectedKeys={['0']}>
      {children}
    </AntMenu>
  </MenuContainer>
);

export default Menu;
