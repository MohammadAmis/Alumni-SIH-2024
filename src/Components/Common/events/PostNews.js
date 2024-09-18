// src/components/PostNews.js
import React from 'react';
import styles from './PostNews.module.css';

const PostNews = () => {
  return (
    <div className={styles.container}>
      <h2>Post News</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" rows="10" />
        <button type="submit">Post News</button>
      </form>
    </div>
  );
};

export default PostNews;
