import React, { Component } from "react";
import API from "../utils/API";

class SavedBooks extends Component {
  componentDidMount() {
    this.viewSavedBooks();
  }

  viewSavedBooks = () => {
    API.getSavedBook().then((res) => {
      this.setState({ savedBooks: res });
    });
  };

  handleDeleteBook = (id) => {
    API.deleteBook(id).then((res) => {
      this.setState({ savedBooks: this.state.savedBooks });
    });
  };

  generateSavedBooks = () => {
    return this.state.savedBooks.map((savedBooksArray) => {
      return (
        <div className="card" style={{ margin: "10px", border: "solid" }}>
          <h3
            className="card-header"
            style={{ color: "#c3c9cd", backgroundColor: "#1a1a1b" }}
          >
            {savedBooksArray.volumeInfo.title}
          </h3>
          <img
            src={
              (savedBooksArray.volumeInfo.imageLinks &&
                savedBooksArray.volumeInfo.imageLinks.smallThumbnail) ||
              "https://www.placecage.com/150/150"
            }
            alt={savedBooksArray.volumeInfo.title}
            width="150"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
          <div className="card-body">
            <h5 className="card-title">
              by: {savedBooksArray.volumeInfo.authors}
            </h5>
            <p className="card-text">
              {savedBooksArray.volumeInfo.description}
            </p>
            <a
              href={savedBooksArray.volumeInfo.canonicalVolumeLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
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
        {this.state.savedBooksArray.length && this.generateSavedBooks()}
      </div>
    );
  }
}

export default SavedBooks;
