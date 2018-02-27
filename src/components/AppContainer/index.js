import React from 'react';
import styled from 'styled-components';
import {injectGlobal} from 'styled-components';
import {Sizes} from '../../theme';

injectGlobal`
  h1,h2,h3,h4{   
    color:#3c4859;
  }
  
  //screen >=lg
 @media (min-width: ${Sizes.lg}px) {
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
 @media (max-width: ${Sizes.lg}px) {
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
 @media (max-width: ${Sizes.sm}px) {
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

const unstyledAppContainer = ({children, ...props}) => {
  return <div {...props}>{children}</div>;
};

const AppContainer = styled(unstyledAppContainer)`
  ${({theme}) => `
  text-align: center;
  background: ${theme.appBackgroundColor};
`};
`;

AppContainer.defaultProps = {};

AppContainer.propTypes = {};

export default AppContainer;
