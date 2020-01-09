import * as actionTypes from "../actionConstants";
const initialState = {
  posts: [],
  currentPost: [],
  isLoading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_POST: {
      return {
        ...state,
        posts: action.posts
      };
    }
    case actionTypes.GET_POST: {
      return {
        ...state,
        currentPost: action.post,
        isLoading: false
      };
    }
    case actionTypes.UPDATE_POST: {
      let updateState = state.posts.slice();
      for (let post of updateState) {
        if (post.id === action.updatedObject.id) {
          post = action.updatedObject;
        }
      }
      return {
        ...state,
        posts: updateState
      };
    }

    default:
      return state;
  }
};

export default reducer;
