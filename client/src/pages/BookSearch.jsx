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

  handleSaveBook = (bookData) => {
    API.saveBook(bookData)
      .then((res) => {
        this.setState({
          savedBooks: this.state.savedBooks.concat([res]),
        });
        console.log((this.state.savedBooks));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setBookSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  generateCard = () => {
    return this.state.books.map((book) => {
      return (
        <div className="card" style={{ margin: "10px", border: "solid" }}>
          <h3
            className="card-header"
            style={{ color: "#c3c9cd", backgroundColor: "#1a1a1b" }}
          >
            {book.volumeInfo.title}
          </h3>
          <img
            src={
              (book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail) ||
              "https://www.placecage.com/150/150"
            }
            alt={book.volumeInfo.title}
            width="150"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">by: {book.volumeInfo.authors}</h5>
            <p className="card-text">{book.volumeInfo.description}</p>
            <a
              href={book.volumeInfo.canonicalVolumeLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Book
            </a>
            <button
              type="button"
              className="btn btn-primary"
              style={{marginLeft: "5px"}}
              onClick={() =>
                this.handleSaveBook({
                  title: book.volumeInfo.title,
                  authors: book.volumeInfo.authors,
                  description: book.volumeInfo.description,
                  image: book.volumeInfo.imageLinks.smallThumbnail,
                  link: book.volumeInfo.canonicalVolumeLink,
                })
              }
            >
              Save Book
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "5px" }}>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <input
              type="text"
              name="search"
              className="form-control"
              onChange={this.setBookSearch}
              placeholder="Enter Book Name Here..."
            />
          </div>
          <button onClick={this.handleBookSearch} className="btn-danger">
            Search
          </button>
        </div>
        {(this.state.books.length && this.generateCard()) ||
          this.state.books.length === 0}
      </div>
    );
  }
}

export default BookSearch;
