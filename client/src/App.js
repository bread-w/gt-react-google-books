import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import BookSearch from "./pages/BookSearch";
import SavedBooks from "./pages/SavedBooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/BookSearch" component={BookSearch} />
          <Route exact path="/SavedBooks" component={SavedBooks} />
      </Router>
    </div>
  );
}

export default App;
