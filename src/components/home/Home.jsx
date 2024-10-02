import React from "react";
import { Link } from "react-router-dom";
import styles from "./components/home/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <p>Welcome to the homepage!</p>
      <Link to="/articles">Go to Articles List</Link>
    </div>
  );
};

export default Home;
