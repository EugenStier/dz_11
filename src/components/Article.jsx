import React from "react";
import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Article {id}</h1>
      <p>This is the content of Article {id}.</p>
      <Link to="/articles">Back to Articles List</Link>
    </div>
  );
};

export default Article;
