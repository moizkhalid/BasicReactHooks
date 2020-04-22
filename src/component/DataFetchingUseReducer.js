import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
const initialState = {
  loading: true,
  post: {},
  errro: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCESS':
      return {
        loading: false,
        post: action.payload,
        error: null,
      };
    case 'FETCH_FAIL':
      return {
        loading: false,
        post: {},
        error: 'something went Wrong',
      };

    default:
      return state;
  }
};
const DataFetchingUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => dispatch({ type: 'FETCH_SUCESS', payload: response.data }))
      .catch((error) => dispatch({ type: 'FETCH_FAIL' }));
  }, []);
  return (
    <div>
      {state.loading ? <div>Loading..</div> : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFetchingUseReducer;
