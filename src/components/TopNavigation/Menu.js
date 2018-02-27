import React, {Component} from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import PropTypes from 'prop-types';
import Sizes from '../../theme/sizes';

const MenuContainer = styled.div`
  float: right;
  position: relative;
  margin-left: 200px;
  margin-right: 4%;
  display: flex;
`;

const MenuList = styled.ul`
  @media (max-width: ${Sizes.sm}px) {
    display: none;
  }
  height: ${Sizes.navigationHeight}px;
  background: transparent;
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  z-index: 1050;
  color: rgba(0, 0, 0, 0.65);
  line-height: 46px;
  transition: background 0.3s, height 0.2s;
`;

const HamburgerMenu = styled(Hamburger)`
  @media (min-width: ${Sizes.sm + 1}px) {
    display: none;
  }
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      selectedKey: props.selectedKey
    };
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect = () => {
    this.toggleHamburger();
  };

  toggleHamburger = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({selectedKey: nextProps.selectedKey});
  }

  render() {
    const enhancedChildren = React.Children.map(
      this.props.children,
      (child) => {
        return React.cloneElement(child, {
          redirect: this.redirect,
          isSelected: child.props.itemKey === this.state.selectedKey,
          isAuthenticated: this.props.isAuthenticated
        });
      }
    );
    return (
      <MenuContainer className={this.props.className}>
        <MenuList>{enhancedChildren}</MenuList>
        <HamburgerMenu
          openHamburger={this.toggleHamburger}
          menuOpen={this.state.menuOpen}
        >
          <MenuList>{enhancedChildren}</MenuList>
        </HamburgerMenu>
      </MenuContainer>
    );
  }
}

Menu.propTypes = {
  hamburger: PropTypes.bool,
  menuOpen: PropTypes.bool,
  selectedKey: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

Menu.defaultProps = {
  hamburger: false,
  menuOpen: false,
  isAuthenticated: false
};

export default Menu;
