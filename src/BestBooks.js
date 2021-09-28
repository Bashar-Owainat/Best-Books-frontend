import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
 import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import FavBookCard from './components/FavBookCard';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []
      
    }
  
  }

  //localhost:3001/
  //description  email status title
  componentDidMount = async () => {
    let email = this.props.auth0.user.email;
    console.log(email)
   let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/getEmail?email=${email}`);
   
   this.setState({
     books: bookData.data
   })
   console.log(this.state.books[0].email);
  }

// remember to render the data

  render() {
    return(
      <div>

      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>

      {this.state.books.map(i => {
          return(
            <FavBookCard info = {i} />
          );
      })
       
      }
     
      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
