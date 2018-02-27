import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import Routes from './Routes';
import Footer from './components/Footer';
import TopNavigation from './components/TopNavigation';
import {ThemeProvider} from 'styled-components';
import {Primary} from './theme/index';
import AppContainer from './components/AppContainer';
import {history} from './store';
import {alertActions} from './actions';
import {connect} from 'react-redux';
import {RouteConstants} from './constants';
import Button from './components/Button';
import logo from './images/Logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlert();
    });
  }

  render() {
    const {loggedIn, pathName} = this.props;
    const childProps = {
      isAuthenticated: loggedIn
    };
    return (
      <ThemeProvider theme={Primary}>
        <AppContainer>
          <TopNavigation>
            <TopNavigation.Logo brandLogoUrl={logo} />
            <TopNavigation.Menu
              isAuthenticated={this.props.loggedIn}
              selectedKey={pathName}
            >
              <TopNavigation.MenuItem itemKey={RouteConstants.HOME}>
                <Link to={RouteConstants.HOME}>Feature</Link>
              </TopNavigation.MenuItem>
              <TopNavigation.MenuItem itemKey={RouteConstants.HOME}>
                <Link to={RouteConstants.HOME}>Plans</Link>
              </TopNavigation.MenuItem>
              <TopNavigation.MenuItem itemKey={RouteConstants.HOME}>
                <Link to={RouteConstants.HOME}>Support</Link>
              </TopNavigation.MenuItem>
              <TopNavigation.UnauthenticatedMenuItem itemKey={null}>
                <Link to={RouteConstants.LOGIN}>Logout</Link>
              </TopNavigation.UnauthenticatedMenuItem>
              <TopNavigation.UnauthenticatedMenuItem
                inVisible
                itemKey={RouteConstants.LOGIN}
              >
                <Link to={RouteConstants.LOGIN}>Sign In</Link>
              </TopNavigation.UnauthenticatedMenuItem>
              <TopNavigation.MenuItem itemKey={RouteConstants.LOGIN}>
                <Button outline rounded>
                  <span>Start Now</span>
                </Button>
              </TopNavigation.MenuItem>
            </TopNavigation.Menu>
          </TopNavigation>
          <main>
            <Routes childProps={childProps} />
          </main>
          <Footer>
            <Footer.CompanyInfo
              brandLogoUrl={logo}
              slogan="The purpose of our existense is to help local brands to reach"
            />
            <Footer.MenuItem title="Online Retail">
              <Link to={RouteConstants.LOGIN}>Start to build</Link>
              <Link to={RouteConstants.LOGIN}>Login</Link>
              <Link to={RouteConstants.LOGIN}>Features</Link>
            </Footer.MenuItem>
            <Footer.MenuItem title="More">
              <Link to={RouteConstants.LOGIN}>Terms and services</Link>
              <Link to={RouteConstants.LOGIN}>Investor</Link>
              <Link to={RouteConstants.LOGIN}>Help center</Link>
            </Footer.MenuItem>
            <Footer.MenuItem contactInfo title="Contact">
              <span>
                Feel free to get in touch with us by sending us a message
              </span>
              <a>Hello@inn-lab.co</a>
            </Footer.MenuItem>
          </Footer>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearAlert: () => dispatch(alertActions.clear())
});

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.authentication.loggedIn,
    pathName: ownProps.location.pathname
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

//export default withRouter(App);
