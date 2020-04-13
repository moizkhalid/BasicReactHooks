import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DataFetching = () => {
  const [Post, setPost] = useState({});
  const [Id, setId] = useState(1);
  const [IdFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleClick = () => {
    setIdFromButtonClick(Id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IdFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [IdFromButtonClick]);
  return (
    <div>
      <input type='text' value={Id} onChange={(e) => setId(e.target.value)} />
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <div>{Post.title}</div>
    </div>
  );
};

export default DataFetching;
