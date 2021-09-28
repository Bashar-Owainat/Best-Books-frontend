import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import FavBookCard from './components/FavBookCard';
import DeleteBook from './components/DeleteBook';
import AddBookForm from './components/AddBookForm';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []

    }

  }

  //localhost:3001/
  //title description email status 
  componentDidMount = async () => {
    let email = this.props.auth0.user.email;
    console.log(email)
    let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/getEmail?email=${email}`);

    this.setState({
      books: bookData.data
    })
    console.log(this.state.books[0].email);
  }

  addBook = async (e) => {
    e.preventDefault();
    console.log('add func')
    let bookFromInfo = {
      title1: e.target.title.value,
      description1: e.target.description.value,
      email1: e.target.email.value,
      status1: e.target.status.value
    }

    let newBookData = await axios.post(`${process.env.REACT_APP_SERVER}/addBook`, bookFromInfo);

    this.setState({
      books: newBookData.data
    })

  }

  deleteBook = async (bookID) => {
    console.log('inside delete book');
    console.log(bookID);
    let newBookData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBook?bookID=${bookID}&ownerEmail=${this.state.books[0].email}`)

    this.setState({
      books: newBookData.data
    })
  }

  render() {
    return (
      <div>

        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>

        <AddBookForm
          addBookFunc={this.addBook}
        />

        {this.state.books.map(i => {
          return (
            <FavBookCard info={i} />
          )
        })

        }

        {
          this.state.books.map((book, idx) => {
            return (
              <DeleteBook
                book={book}
                idx={idx}
                deleteBookFunc={this.deleteBook}
              />
            )
          })
        }

      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
