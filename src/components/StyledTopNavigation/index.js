import React, {Component} from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 64px;
  background: ${({isTop, bgColor}) =>
    isTop ? `transparent` : bgColor ? bgColor : `rgba(51, 51, 51, .95);`};
  width: 100%;
  z-index: 970;
  position: fixed;
  transition: background 1s linear;
  top: 0;
`;

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      isTop: window.scrollY <= window.innerHeight * 0.8
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({isTop: window.scrollY <= window.innerHeight * 0.8});
    });
  }

  render() {
    return (
      <Container {...this.props} isTop={this.state.isTop}>
        {this.props.children}
      </Container>
    );
  }
}

TopNavigation.propTypes = {
  bgColor: PropTypes.string
};

TopNavigation.Logo = Logo;
TopNavigation.Menu = Menu;

export default TopNavigation;
