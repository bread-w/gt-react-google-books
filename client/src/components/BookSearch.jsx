import React, { Component } from "react";
import API from "../utils/API";

class BookSearch extends Component {
  state = {
    books: [],
    savedBooks: [],
    search: "",
  };

  handleBookSearch = (e) => {
    console.log(this.state.search);
    API.getSearchedBook(this.state.search).then((res) =>
      this.setState({ books: res.data.items })
    );
  };

  handleSaveBook = (id) => {
    API.saveBook(id).then((res) => {
      this.setState({
        savedBooks: this.state.savedBook.concat([res]),
      });
    });
  };

  setBookSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  generateCard = () => {
    return this.state.books.map((book) => {
      return (
        <div className="card">
          <h5 className="card-header">{book.volumeInfo.title}</h5>
          <img
            src={
              (book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail) ||
              "https://www.placecage.com/200/300"
            }
            alt={book.volumeInfo.title}
          />
          <div className="card-body">
            <h5 className="card-title">by: {book.volumeInfo.authors}</h5>
            <p className="card-text">{book.volumeInfo.description}</p>
            <a
              href={book.volumeInfo.canonicalVolumeLink}
              className="btn btn-primary"
              target="_blank"
            >
              View Book
            </a>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <input type="text" name="search" onChange={this.setBookSearch} />
        <button onClick={this.handleBookSearch}>Search</button>
        {this.state.books.length && this.generateCard()}
      </div>
    );
  }
}

export default BookSearch;
