import React, { Component } from "react";
import API from "../utils/API";

class BookSearch extends Component {
  state = {
    books: [],
    savedBooks: [],
  };

  handleBookSearch = (e) => {
    const searchedBook = e.target.value;
    API.getSearchedBook(searchedBook).then((res) =>
      this.setState({ books: res.data.items })
    );
  };

  handleSaveBook = (id) => {
    API.saveBook(id).then((res) => {
      this.setState({
        savedBooks: this.getSnapshotBeforeUpdate.savedBook.concat([res]),
      });
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control"
          name="search"
          onChange={this.handleBookSearch}
        />
      </div>
    );
  }
}

export default BookSearch;
