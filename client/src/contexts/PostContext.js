import React, { createContext, useReducer, useState } from "react";
import { PostReducer } from "../components/reducers/PostReducer";
import axios from "axios";
import { API_URL } from "./constants";
import { POSTS_TYPE } from "../configs/postsCaseReducer";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postsState, dispatch] = useReducer(PostReducer, {
    post: null,
    posts: [],
    postLoading: true,
  });


  const [showMovieModal, setShowMovieModal] = useState(false);
 
  // Get all posts Func
  const getAll = async () => {
    try {
      const response = await axios.get(`${API_URL}/movies`);
      if (response.data.success) {
        dispatch({
          type: POSTS_TYPE.POSTS_LOADED_SUCCESS,
          payload: response.data.movies,
          
        });
      } else {
        dispatch({
          type: POSTS_TYPE.POSTS_LOADED_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: POSTS_TYPE.POSTS_LOADED_FAIL,
      });
    }
  };

  

  // Find post when user cliked update
  const findPost = (postId) => {
    const post = postsState.posts.find((post) => post._id === postId);

    dispatch({
      type: POSTS_TYPE.FIND_POST,
      payload: post,
    });
  };

  

  //CONTEXT_DATA
  const postContextData = {
    getAll,
    postsState,
    findPost,
    showMovieModal,
    setShowMovieModal
  };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
