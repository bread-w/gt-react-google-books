import React, { Component } from "react";
import API from "../utils/API";
class SavedBooks extends Component {
  state = {
    savedBooks: [],
  };
  componentDidMount() {
    this.generateSavedBooks();
  }
  generateSavedBooks = () => {
    API.getSavedBook().then((res) => {
      this.setState({ savedBooks: res });
    });
  };

  handleDeleteBook = (id) => {
    API.deleteBook(id).then((response) => {
      console.log(response);
      this.setState({
        savedBooks: this.state.savedBooks,
      });
    });
  };
  render() {
    return (
      <div>
        {this.state.savedBooks.map((books) => (
          <div className="card" style={{ margin: "10px", border: "solid" }}>
            <h3
              className="card-header"
              style={{ color: "#c3c9cd", backgroundColor: "#1a1a1b" }}
            >
              {books.title}
            </h3>
            <img
              src={books.image}
              alt={books.title}
              width="150"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">by: {books.authors}</h5>
              <p className="card-text">{books.description}</p>
              <a
                href={books.link}
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
                onClick={() => this.handleDeleteBook(books._id)}
              >Delete Book</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default SavedBooks;
