import axios from "axios";
export default {

  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },

  savedBooks: function () {
    return axios.get("/api/books").then((result) => result.data);
  },

  saveBook: function (bookInfo) {
    return axios.post("/api/books", bookInfo).then((result) => result.data);
  },

  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then((result) => result.data);
  },
};