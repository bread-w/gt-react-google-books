const express = require("express");
const router = express.Router();
const bookSearch = require("../models/Book");

router.get("/api/books", function (req, res) {
  bookSearch.find({}).then((getBooks) => {
    res.json(getBooks);
  });
});

router.post("/api/books", function (req, res) {
  bookSearch.create(req.body).then((saveBook) => {
    res.json(saveBook);
  });
});

router.delete("/api/books/:id", function (req, res) {
  bookSearch.deleteOne({ _id: req.params.id }, req.body).then((deleteBook) => {
    res.json(deleteBook);
  });
});

module.exports = router;
