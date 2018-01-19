import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import {Item} from 'antd/lib/menu';
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import TopNavigation from './components/StyledTopNavigation';
import LanguageSwitcher from './containers/LanguageSwitcher/index';
import Grid from './components/Grid';
import {ThemeProvider} from 'styled-components';
import {Primary, Secondary} from './components/theme/index';

class App extends Component {
  render() {
    const childProps = {
      isAuthenticated: false
    };

    return (
      <ThemeProvider theme={Secondary}>
        <div className="App">
          <TopNavigation bgColor={'orange'}>
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
          <Grid>
            <Grid.Col xs={12} sm={4} md={6}>
              <h1>abc</h1>
              <h2>123</h2>
            </Grid.Col>
            <Grid.Col xs={12} sm={4} md={6}>
              <h1>123</h1>
              <h2>456</h2>
            </Grid.Col>
            <Grid.Col xs={12} sm={4} md={6}>
              <h1>123</h1>
              <h2>456</h2>
            </Grid.Col>
            <Grid.Col xs={12} sm={4} md={6}>
              <h1>123</h1>
              <h2>456</h2>
            </Grid.Col>
          </Grid>
          <main>
            <Routes childProps={childProps} />
          </main>
          <Footer brandLogoUrl="http://www.brianfajardo.com/static/media/reactjs.0068a577.svg" />
        </div>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
