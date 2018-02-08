import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import {Item} from 'antd/lib/menu';
import Routes from './Routes';
import Footer from './components/Footer/Footer';
import TopNavigation from './components/StyledTopNavigation';
import LanguageSwitcher from './containers/LanguageSwitcher/index';
import {ThemeProvider} from 'styled-components';
import {Primary, Secondary} from './theme/index';
import AppContainer from './components/AppContainer';
import {injectGlobal} from 'styled-components';
import {history} from './store';
import {alertActions} from './actions';
import {connect} from 'react-redux';

injectGlobal`
  h1,h2,h3,h4{   
    color:#3c4859;
  }
  
  //screen >=lg
 @media (min-width: 1280px) {
  body {
   font-size: 16px;
   line-height: 1.375em;
   
   h1{
   font-size: 3em;
    line-height: 1.05em;
   }
   
   h2{
   font-size: 2.25em;
   line-height: 1.25em;
   }
   
    h3{font-size: 1.75em;
   line-height: 1.25em;
    }
    
     h4{font-size:1.125em;
   line-height: 1.22222222em;
    }
  }
 }
 
  //screen <=lg
 @media (max-width: 1279px) {
  body {
   font-size: 16px;
   line-height: 1.375em;
   
   h1{
   font-size: 2.5em;
   line-height: 1.125em;
   }
   
   h2{
   font-size: 2em;
   line-height:	1.25em;
    }
   
   h3{font-size: 1.5em;
   line-height: 1.25em;
    }
    
     h4{font-size:1.125em;
   line-height: 1.22222222em;
    }
  }
 }
 
   //screen <=sm
 @media (max-width: 767px) {
   body {
   font-size: 16px;
   line-height: 1.25em;
   
   h1{
   font-size: 2em;
    line-height: 1.25em;
   }
   
   h2{
   font-size: 1.625em;
   line-height: 1.15384615em;
   }
   
   h3{font-size: 1.375em;
   line-height: 1.13636364em;
   }
    h4{font-size:1.125em;
   line-height: 1.11111111em;
    }
  }
 }
    
  //screen <=xs
 @media (max-width: 480px) {
  body {
   font-size: 16px;
   line-height: 1.25em;
   
   h1{
    font-size: 2em;
    line-height: 1.25em;
   }
   
   h2{
   font-size: 1.625em;
   line-height: 1.15384615em;
   }
   
  h3{font-size: 1.375em;
   line-height: 1.13636364em;
   }
  h4{font-size:1.125em;
   line-height: 1.11111111em;
    }
  }
 }
`;

class App extends Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlert();
      console.log('change');
    });
  }

  render() {
    const childProps = {
      isAuthenticated: this.props.loggedIn
    };
    return (
      <ThemeProvider theme={Secondary}>
        <AppContainer>
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
        </AppContainer>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearAlert: () => dispatch(alertActions.clear())
});

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

//export default withRouter(App);
