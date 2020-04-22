import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DataFetchingUseState = () => {
  const [Loading, setLoading] = useState(true);
  const [Post, setPost] = useState({});
  const [Error, setError] = useState('');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        setLoading(false);
        setPost(response.data);

        setError('');
      })
      .catch((Error) => {
        setLoading(false);
        setPost({});
        setError('Something went Wrong');
      });
  }, []);
  return (
    <div>
      {Loading ? <div>Loading..</div> : Post.title}
      {Error ? Error : null}
    </div>
  );
};

export default DataFetchingUseState;
