import axios from "axios";
export const LOAD_POST = "LOAD_POST";
export const GET_POST = "GET_POST";
export const UPDATE_POST = "UPDATE_POST";

const tempLoadPost = posts => {
  return {
    type: LOAD_POST,
    posts: posts
  };
};

export const loadPost = _ => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`).then(res => {
      const posts = res.data;
      dispatch(tempLoadPost(posts));
    });
  };
};

const tempGetPost = post => {
  return {
    type: GET_POST,
    post: post
  };
};

export const getPost = id => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      const post = res.data;
      //   console.log(post);
      dispatch(tempGetPost(post));
    });
  };
};
