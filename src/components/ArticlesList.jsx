import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const articles = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
  ];

  return (
    <div>
      <h1>Articles List</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ArticlesList;
