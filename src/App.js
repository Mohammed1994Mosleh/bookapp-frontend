import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './component/Loginbutton';
import LogoutButton from './component/LogoutButton';
import Profile from './component/Profile';
import BestBooks from './BestBooks';

// const {isAuthenticated, loginWithRedirect,} = useAuth0();
class App extends React.Component {

  render() {
    console.log('app', this.props.auth0.user);
    const {  isAuthenticated  } = this.props.auth0;
    


    
    return(
      <>
        <Router>
          
            <Header />
            <Switch>
              <Route exact path="/">
               
                {! isAuthenticated ?<LoginButton/>:<BestBooks email={this.props.auth0.user} /> }
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                 <Profile/>
              </Route>
              
            </Switch>
            <Footer />
        
        </Router>
      </>
    );
  }
}

export default withAuth0(App) ;
