const express = require("express");
const router = express.Router();
const db = "../models";

router.get("/api/books", function (req, res) {
  db.Book.find({}).then((bookSearch) => {
    res.json(bookSearch);
  });
});

router.post("/api/books", function (req, res) {
  db.Book.create(req.body).then((saveBook) => {
    res.json(saveBook);
  });
});

router.delete("/api/books/:id", function (req, res) {
  db.Book.deleteOne({ _id: req.params.id }, req.body).then((deleteBook) => {
    res.json(deleteBook);
  });
});

module.exports = router;
