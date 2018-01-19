import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import {Item} from 'antd/lib/menu';
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import TopNavigation from './components/StyledTopNavigation';
import LanguageSwitcher from './containers/LanguageSwitcher/index';

class App extends Component {
  render() {
    const childProps = {
      isAuthenticated: false
    };

    return (
      <div className="App">
        <TopNavigation>
          <TopNavigation.Logo brandLogoUrl="http://www.brianfajardo.com/static/media/reactjs.0068a577.svg" />
          <TopNavigation.Menu>
            <Item key="home">
              <Link to="/">Home</Link>
            </Item>
            <Item key="about">
              <Link to="/about-us">About</Link>
            </Item>
            <LanguageSwitcher key="LanguageSwitcher" />
          </TopNavigation.Menu>
        </TopNavigation>
        <main>
          <Routes childProps={childProps} />
        </main>
        <Footer brandLogoUrl="http://www.brianfajardo.com/static/media/reactjs.0068a577.svg" />
      </div>
    );
  }
}

export default withRouter(App);
