import React, { Component } from "react";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    savedBook: [],
  };

  componentDidMount() {
    this.viewSavedBooks();
  }

  viewSavedBooks = () => {
    API.getSavedBook().then((res) => {
      this.setState({ savedBook: res });
    });
  };

  handleDeleteBook = (id) => {
    const confirmDelete = window.confirm("Would you like to delete this book?");
    if (confirmDelete) {
      API.deleteBook(id).then((res) => {
        console.log(res);
        this.setState({
          savedBook: this.state.savedBook.filter((remainingBooks) => {
            if (id === remainingBooks._id) {
              return false;
            } else {
              return true;
            }
          }),
        });
      });
    }
  };

  render() {
    return <div>
      {this.state.savedBook.map((savedBooks)=> {
        
      })}
    </div>;
  }
}

export default SavedBooks;
