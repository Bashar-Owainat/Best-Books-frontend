import React from 'react';
import Header from './Header';
//  import IsLoadingAndError from './IsLoadingAndError';
import { withAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import BestBooks from './BestBooks';
import Login from './Login';
import Profile from './components/Pofile';
// import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [], 
      userEmail:''
    }
      
    
  }
 
  
  //localhost:3001/
  // componentDidMount = async () => {
    
  //  let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/getEmail?email=${this.state.userEmail}`)
  //  this.setState({
  //    books: bookData.data
  //  })
  // }
  render() {
    
    const {  isAuthenticated, user} = this.props.auth0;
    console.log(user);
    // this.setState({
    //   userEmail: user.email
    // })
    console.log('app', this.props);
    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isAuthenticated? <BestBooks/> : <Login/>}
                
                    
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
                  <Profile/>
              </Route>
              
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

