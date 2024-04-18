import { POSTS_TYPE } from "../../configs/postsCaseReducer";

export const PostReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case POSTS_TYPE.POSTS_LOADED_SUCCESS:
      return {
        ...state,
        posts: payload,
        postLoading: false,
      };

    case POSTS_TYPE.POSTS_LOADED_FAIL:
      return {
        ...state,
        posts: [],
        postLoading: false,
      };

    case POSTS_TYPE.FIND_POST:
      return {
        ...state,
        post: payload,
      };
    default:
      return state;
  }
};
