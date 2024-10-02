import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
